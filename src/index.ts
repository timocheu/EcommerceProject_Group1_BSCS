import { serve } from "bun";
import { POST as signupPOST } from "./routes/signup";
import { POST as loginPOST } from "./routes/login";

serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);

    // handle CORS preflight
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (req.method === "POST" && url.pathname === "/api/signup") {
      const res = await signupPOST(req);
      return new Response(res.body, {
        status: res.status,
        headers: { ...Object.fromEntries(res.headers), "Access-Control-Allow-Origin": "*" },
      });
    }

    if (req.method === "POST" && url.pathname === "/api/login") {
      const res = await loginPOST(req);
      return new Response(res.body, {
        status: res.status,
        headers: { ...Object.fromEntries(res.headers), "Access-Control-Allow-Origin": "*" },
      });
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log("🟢 Server running at http://localhost:3000");
