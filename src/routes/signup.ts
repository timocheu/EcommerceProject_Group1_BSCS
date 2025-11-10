// src/routes/signup.ts
import { db } from "../server/db";
import { userLogin } from "../server/db/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    // check if user exists
    const existing = db.select().from(userLogin).where(eq(userLogin.email, email)).get();
    if (existing) {
      return new Response(JSON.stringify({ error: "Email already exists" }), { status: 400 });
    }

    // hash password (hash + salt)
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    db.insert(userLogin).values({
      name,
      email,
      passwordHash: new TextEncoder().encode(hash),
      passwordSalt: new TextEncoder().encode(salt),
    }).run();

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error("Signup error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

