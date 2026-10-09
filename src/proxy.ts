import { SESSION_COOKIE } from "@/lib/authCookies";
import { NextRequest, NextResponse } from "next/server";

function createContentSecurityPolicy(nonce: string) {
  const isDevelopment = process.env.NODE_ENV !== "production";

  const scriptSrc = isDevelopment
    ? `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'`
    : `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`;

  const styleSrc = isDevelopment
    ? "style-src 'self' 'unsafe-inline' https://api.fontshare.com https://fonts.googleapis.com"
    : `style-src 'self' 'nonce-${nonce}' https://api.fontshare.com https://fonts.googleapis.com`;

  return [
    "default-src 'self'",
    scriptSrc,
    styleSrc,
    "style-src-attr 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data: https://api.fontshare.com https://cdn.fontshare.com https://fonts.gstatic.com",
    `connect-src 'self'${isDevelopment ? " ws:" : ""}`,
    "media-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join("; ");
}

const GUEST_ONLY_PAGES = [
  "/login",
  "/register",
  "/registration",
  "/forgot-password",
  "/forget-password",
  "/verify-otp",
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = Boolean(request.cookies.get(SESSION_COOKIE)?.value);
  const isGuestOnlyPage = GUEST_ONLY_PAGES.some(
    (page) => pathname === page || pathname.startsWith(`${page}/`)
  );

  // Redirect logged-in users away from guest-only pages
  if (hasSession && isGuestOnlyPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const nonce = crypto.randomUUID();
  const contentSecurityPolicy = createContentSecurityPolicy(nonce);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", contentSecurityPolicy);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", contentSecurityPolicy);
  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};