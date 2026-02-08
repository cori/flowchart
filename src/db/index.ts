import Database from 'better-sqlite3';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const DB_PATH = process.env.DB_PATH || join(__dirname, '..', '..', 'data', 'fpv-tracker.db');

let db: Database.Database;

export function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    db.pragma('foreign_keys = ON');
    initDb(db);
  }
  return db;
}

function initDb(db: Database.Database) {
  const schema = readFileSync(join(__dirname, 'schema.sql'), 'utf-8');
  db.exec(schema);

  // Only seed if tricks table is empty
  const count = db.prepare('SELECT COUNT(*) as c FROM tricks').get() as { c: number };
  if (count.c === 0) {
    const seed = readFileSync(join(__dirname, 'seed.sql'), 'utf-8');
    db.exec(seed);
  }
}
