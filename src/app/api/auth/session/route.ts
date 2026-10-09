import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, SESSION_USER_COOKIE } from "@/lib/authCookies";

export const runtime = "nodejs";

function parseSessionUser(value: string | undefined) {
  if (!value) return null;

  try {
    const user = JSON.parse(decodeURIComponent(value));
    return typeof user === "object" && user !== null ? user : null;
  } catch {
    return null;
  }
}

/** Exposes display-safe user data only; the HttpOnly bearer token is never returned. */
export async function GET(request: NextRequest) {
  const authenticated = Boolean(request.cookies.get(SESSION_COOKIE)?.value);
  const user = authenticated
    ? parseSessionUser(request.cookies.get(SESSION_USER_COOKIE)?.value)
    : null;

  return NextResponse.json(
    { authenticated, user },
    { headers: { "Cache-Control": "no-store" } }
  );
}
