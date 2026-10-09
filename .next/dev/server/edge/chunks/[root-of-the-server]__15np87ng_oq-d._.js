(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__15np87ng_oq-d._.js",
(()=>{"use strict";return[
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["config"],
    "middleware",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$proxy$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["proxy"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/middleware.ts [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$proxy$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/proxy.ts [middleware-edge] (ecmascript)");
}),
"[project]/middleware.ts [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$proxy$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/proxy.ts [middleware-edge] (ecmascript)");
;
const config = {
    matcher: [
        {
            source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
            missing: [
                {
                    type: "header",
                    key: "next-router-prefetch"
                },
                {
                    type: "header",
                    key: "purpose",
                    value: "prefetch"
                }
            ]
        }
    ]
};
}),
"[project]/src/lib/authCookies.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RESET_COOKIE",
    ()=>RESET_COOKIE,
    "RESET_COOKIE_OPTIONS",
    ()=>RESET_COOKIE_OPTIONS,
    "SESSION_COOKIE",
    ()=>SESSION_COOKIE,
    "SESSION_COOKIE_OPTIONS",
    ()=>SESSION_COOKIE_OPTIONS,
    "SESSION_USER_COOKIE",
    ()=>SESSION_USER_COOKIE
]);
const SESSION_COOKIE = "lg_tk";
const RESET_COOKIE = "kratos_reset_tk";
const SESSION_USER_COOKIE = "kratos_session_user";
const COMMON_COOKIE_OPTIONS = {
    httpOnly: true,
    secure: ("TURBOPACK compile-time value", "development") === "production",
    sameSite: "strict",
    path: "/"
};
const SESSION_COOKIE_OPTIONS = {
    ...COMMON_COOKIE_OPTIONS,
    maxAge: 60 * 60 * 24 * 7
};
const RESET_COOKIE_OPTIONS = {
    ...COMMON_COOKIE_OPTIONS,
    maxAge: 15 * 60
};
}),
"[project]/src/proxy.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/authCookies.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
;
function createContentSecurityPolicy(nonce) {
    const isDevelopment = ("TURBOPACK compile-time value", "development") !== "production";
    const scriptSrc = ("TURBOPACK compile-time truthy", 1) ? `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'` : "TURBOPACK unreachable";
    const styleSrc = ("TURBOPACK compile-time truthy", 1) ? "style-src 'self' 'unsafe-inline' https://api.fontshare.com https://fonts.googleapis.com" : "TURBOPACK unreachable";
    return [
        "default-src 'self'",
        scriptSrc,
        styleSrc,
        "style-src-attr 'unsafe-inline'",
        "img-src 'self' data: blob: https:",
        "font-src 'self' data: https://api.fontshare.com https://cdn.fontshare.com https://fonts.gstatic.com",
        `connect-src 'self'${("TURBOPACK compile-time truthy", 1) ? " ws:" : "TURBOPACK unreachable"}`,
        "media-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'"
    ].join("; ");
}
const GUEST_ONLY_PAGES = [
    "/login",
    "/register",
    "/registration",
    "/forgot-password",
    "/forget-password",
    "/verify-otp"
];
function proxy(request) {
    const { pathname } = request.nextUrl;
    const hasSession = Boolean(request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SESSION_COOKIE"])?.value);
    const isGuestOnlyPage = GUEST_ONLY_PAGES.some((page)=>pathname === page || pathname.startsWith(`${page}/`));
    // Redirect logged-in users away from guest-only pages
    if (hasSession && isGuestOnlyPage) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/", request.url));
    }
    const nonce = crypto.randomUUID();
    const contentSecurityPolicy = createContentSecurityPolicy(nonce);
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-nonce", nonce);
    requestHeaders.set("Content-Security-Policy", contentSecurityPolicy);
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request: {
            headers: requestHeaders
        }
    });
    response.headers.set("Content-Security-Policy", contentSecurityPolicy);
    return response;
}
const config = {
    matcher: [
        {
            source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
            missing: [
                {
                    type: "header",
                    key: "next-router-prefetch"
                },
                {
                    type: "header",
                    key: "purpose",
                    value: "prefetch"
                }
            ]
        }
    ]
};
}),
]})(),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__15np87ng_oq-d._.js.map