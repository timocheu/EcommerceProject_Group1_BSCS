import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "sqlite", // NOT "better-sqlite"
  dbCredentials: {
    url: "./src/local.db",
  },
});

