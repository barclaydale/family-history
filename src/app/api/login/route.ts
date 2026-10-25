import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, COOKIE_MAX_AGE, tokenForCode } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  if (!process.env.FAMILY_CODE) {
    return NextResponse.json(
      { error: "not_configured", message: "Set the FAMILY_CODE environment variable in Vercel." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_body" }, { status: 400 });
  }
  const code = (body as { code?: unknown } | null)?.code;
  const token = typeof code === "string" ? await tokenForCode(code) : null;
  if (!token) return NextResponse.json({ error: "bad_code" }, { status: 401 });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
  return res;
}
