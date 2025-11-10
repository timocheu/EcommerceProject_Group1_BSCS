// src/index.ts
import { serve } from "bun";
import { POST as signupPOST } from "./routes/signup";

serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);

    if (req.method === "POST" && url.pathname === "/api/signup") {
      return await signupPOST(req);
    }

    // fallback (frontend or not found)
    return new Response("Not found", { status: 404 });
  },
});

console.log("🟢 Server running at http://localhost:3000");

