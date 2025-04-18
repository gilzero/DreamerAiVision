import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';

// Define log levels
export enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  DEBUG = 'DEBUG',
}

// Create logs directory if it doesn't exist
const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Log file paths
const errorLogPath = path.join(logsDir, 'error.log');
const accessLogPath = path.join(logsDir, 'access.log');

/**
 * Format a log message with timestamp and level
 */
function formatLogMessage(level: LogLevel, message: string): string {
  const timestamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  return `[${timestamp}] [${level}] ${message}\n`;
}

/**
 * Write a message to the specified log file
 */
function writeToLog(filePath: string, message: string): void {
  fs.appendFileSync(filePath, message);
}

/**
 * Log an error message
 */
export function logError(message: string, error?: unknown): void {
  let errorMessage: string;
  
  if (error instanceof Error) {
    errorMessage = `${message}: ${error.message}\n${error.stack || ''}`;
  } else if (typeof error === 'object' && error !== null) {
    try {
      errorMessage = `${message}: ${JSON.stringify(error)}`;
    } catch (e) {
      errorMessage = `${message}: [Object cannot be stringified]`;
    }
  } else {
    errorMessage = `${message}: ${String(error)}`;
  }
  
  const formattedMessage = formatLogMessage(LogLevel.ERROR, errorMessage);
  
  // Write to error log file
  writeToLog(errorLogPath, formattedMessage);
  
  // Also output to console
  console.error(formattedMessage);
}

/**
 * Log an info message
 */
export function logInfo(message: string): void {
  const formattedMessage = formatLogMessage(LogLevel.INFO, message);
  
  // Write to access log file
  writeToLog(accessLogPath, formattedMessage);
  
  // Also output to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(formattedMessage);
  }
}

/**
 * Log a warning message
 */
export function logWarn(message: string): void {
  const formattedMessage = formatLogMessage(LogLevel.WARN, message);
  
  // Write to access log file
  writeToLog(accessLogPath, formattedMessage);
  
  // Also output to console
  console.warn(formattedMessage);
}

/**
 * Log a debug message (only in development)
 */
export function logDebug(message: string): void {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  
  const formattedMessage = formatLogMessage(LogLevel.DEBUG, message);
  console.debug(formattedMessage);
}

/**
 * Log HTTP request details
 */
export function logRequest(req: any, res: any, duration: number): void {
  const { method, path, ip } = req;
  const statusCode = res.statusCode;
  
  const message = `${method} ${path} ${statusCode} from ${ip} - ${duration}ms`;
  logInfo(message);
}

export default {
  error: logError,
  info: logInfo,
  warn: logWarn,
  debug: logDebug,
  request: logRequest,
};
