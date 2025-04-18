import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    // Add bundle analyzer in production builds
    process.env.NODE_ENV === "production" && visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: path.resolve(import.meta.dirname, "dist/stats.html"),
    }),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // Optimize chunk size and improve caching
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Group major vendor dependencies
          'vendor-react': ['react', 'react-dom'],
          'vendor-ui': ['framer-motion', 'lucide-react', 'class-variance-authority'],
          
          // Group UI components
          'ui-components': [
            '@/components/ui/apple-button',
            '@/components/ui/apple-card',
            '@/components/ui/apple-input',
            '@/components/ui/apple-textarea',
          ],
          
          // Group sections by logical areas
          'sections-top': [
            '@/components/sections/imagine-section',
            '@/components/sections/why-section',
          ],
          'sections-middle': [
            '@/components/sections/how-section',
            '@/components/sections/create-section',
          ],
          'sections-bottom': [
            '@/components/sections/who-section',
            '@/components/sections/connect-section',
          ],
          
          // Group utilities
          'utils': [
            '@/lib/utils',
            '@/hooks/use-intersection-observer',
            '@/hooks/use-scroll-spy',
            '@/hooks/use-mobile',
            '@/hooks/use-error-boundary',
          ],
        },
      },
    },
  },
});
