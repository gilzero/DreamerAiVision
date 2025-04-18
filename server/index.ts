import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { initDatabase } from "./db";
import cookieParser from "cookie-parser";
import csrf from "csurf";
import logger from "./logger";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Setup CSRF protection
const csrfProtection = csrf({ cookie: true });

// Apply CSRF protection to API routes that need it
app.use("/api/contact", csrfProtection);

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      // Log request details to our structured logger
      logger.request(req, res, duration);
      
      // Log response body in development mode
      if (process.env.NODE_ENV === 'development' && capturedJsonResponse) {
        const responseStr = JSON.stringify(capturedJsonResponse);
        const truncatedResponse = responseStr.length > 80 ? responseStr.slice(0, 79) + "…" : responseStr;
        logger.debug(`Response body: ${truncatedResponse}`);
      }
    }
  });

  next();
});

(async () => {
  // Initialize database
  await initDatabase();
  
  const server = await registerRoutes(app);

  app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    // Log detailed error information
    logger.error(`Error in ${req.method} ${req.path}`, {
      status,
      message,
      stack: err.stack,
      body: req.body,
      params: req.params,
      query: req.query,
      ip: req.ip,
      headers: req.headers,
    });

    // Send error response to client
    res.status(status).json({ message });
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "127.0.0.1",
    // reusePort option may not be supported on all platforms
    // reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
