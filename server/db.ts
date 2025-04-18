import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { contactMessages as _contactMessages } from '@shared/schema';
import { migrate as _migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { join as _join } from 'path';
import { log } from './vite';

// Initialize SQLite database
const sqlite = new Database('sqlite.db');
export const db = drizzle(sqlite);

// Initialize database with migrations
export async function initDatabase() {
  try {
    log('Initializing database...');
    
    // Create tables if they don't exist
    sqlite.exec(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
      );
    `);
    
    log('Database initialized successfully');
  } catch (error) {
    log(`Database initialization error: ${error instanceof Error ? error.message : String(error)}`);
    throw error;
  }
}
