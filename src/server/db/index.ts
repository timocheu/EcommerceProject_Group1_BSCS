// src/db/index.ts
import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schema from "./schema";

// Bun has a built-in SQLite engine
const sqlite = new Database("local.db", { create: true });
export const db = drizzle(sqlite, { schema });

