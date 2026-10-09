module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/app/api/auth/session/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/authCookies.ts [app-route] (ecmascript)");
;
;
const runtime = "nodejs";
function parseSessionUser(value) {
    if (!value) return null;
    try {
        const user = JSON.parse(decodeURIComponent(value));
        return typeof user === "object" && user !== null ? user : null;
    } catch  {
        return null;
    }
}
async function GET(request) {
    const authenticated = Boolean(request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_COOKIE"])?.value);
    const user = authenticated ? parseSessionUser(request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_USER_COOKIE"])?.value) : null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        authenticated,
        user
    }, {
        headers: {
            "Cache-Control": "no-store"
        }
    });
}
}),
"[project]/src/lib/authCookies.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1ioxb6s7tfghv._.js.map