// Shared helpers for the family-passphrase gate: src/middleware.ts (checks it on every
// request) and src/app/api/login/route.ts (sets it after a correct passphrase). The cookie
// never holds the passphrase itself — just a hash of it, so a leaked cookie doesn't hand
// anyone the passphrase, and the hash only validates against the current FAMILY_CODE.
//
// Web Crypto rather than node:crypto, because middleware runs on the Edge runtime where the
// Node built-ins aren't available.

export const COOKIE_NAME = "fh_auth";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

async function sha256Hex(input: string): Promise<string> {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function expectedToken(): Promise<string | null> {
  const code = process.env.FAMILY_CODE;
  if (!code) return null;
  return sha256Hex(`fh:${code}`);
}

// Constant-time compare so a wrong guess can't be narrowed down by timing.
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function tokenForCode(code: string): Promise<string | null> {
  const want = await expectedToken();
  if (!want) return null;
  const given = await sha256Hex(`fh:${code}`);
  return safeEqual(given, want) ? given : null;
}

export async function cookieIsValid(cookieValue: string | null): Promise<boolean> {
  const want = await expectedToken();
  if (!want || !cookieValue) return false;
  return safeEqual(cookieValue, want);
}
