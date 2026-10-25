// Gates the whole site behind one shared family passphrase (FAMILY_CODE, set in Vercel).
// No accounts, no database — just a cookie that proves the visitor typed the right code.
// See src/lib/auth.ts for how the cookie value is derived and checked.
import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, cookieIsValid } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const cookie = req.cookies.get(COOKIE_NAME)?.value ?? null;
  if (await cookieIsValid(cookie)) return NextResponse.next();

  const url = req.nextUrl.clone();
  const next = url.pathname + url.search;
  url.pathname = "/login.html";
  url.search = next === "/" ? "" : `?next=${encodeURIComponent(next)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|login\\.html|api/login).*)"],
};
