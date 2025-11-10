import { db } from "../server/db";
import { userLogin } from "../server/db/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    // fetch user by email
    const user = db.select().from(userLogin).where(eq(userLogin.email, email)).get();

    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
    }

    // verify password
    const storedHash = new TextDecoder().decode(user.passwordHash);
    const isValid = await bcrypt.compare(password, storedHash);

    if (!isValid) {
      return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
    }

    // login successful
    return new Response(JSON.stringify({ success: true, userId: user.id }), { status: 200 });
  } catch (err: any) {
    console.error("Login error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
