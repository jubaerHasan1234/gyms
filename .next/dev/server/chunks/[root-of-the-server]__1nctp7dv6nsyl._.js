module.exports = [
(()=>{"use strict";return[
"[project]/src/app/api/proxy/[...path]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2f$sendOtpEmail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/email/sendOtpEmail.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/authCookies.ts [app-route] (ecmascript)");
;
;
;
const runtime = "nodejs";
function isRecord(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function getOtp(data) {
    if (!isRecord(data)) return null;
    const candidates = [
        data.otp,
        isRecord(data.data) ? data.data.otp : undefined
    ];
    const otp = candidates.find((value)=>typeof value === "string" || typeof value === "number");
    return otp === undefined ? null : String(otp);
}
function getEmail(data, requestEmail) {
    if (requestEmail?.trim()) return requestEmail.trim();
    if (!isRecord(data)) return null;
    const candidates = [
        data.email,
        isRecord(data.data) ? data.data.email : undefined
    ];
    const email = candidates.find((value)=>typeof value === "string");
    return email?.trim() || null;
}
function removeOtp(data) {
    if (!isRecord(data)) return data;
    const { otp: _rootOtp, data: nestedData, ...rest } = data;
    if (!isRecord(nestedData)) return rest;
    const { otp: _nestedOtp, ...safeNestedData } = nestedData;
    return {
        ...rest,
        data: safeNestedData
    };
}
function getToken(data) {
    if (!isRecord(data)) return null;
    const candidates = [
        data.token,
        isRecord(data.data) ? data.data.token : undefined
    ];
    const token = candidates.find((value)=>typeof value === "string");
    return token?.trim() || null;
}
function removeToken(data) {
    if (!isRecord(data)) return data;
    const { token: _rootToken, token_type: _tokenType, data: nestedData, ...rest } = data;
    if (!isRecord(nestedData)) return rest;
    const { token: _nestedToken, ...safeNestedData } = nestedData;
    return {
        ...rest,
        data: safeNestedData
    };
}
function withFlag(data, flag) {
    return isRecord(data) ? {
        ...data,
        [flag]: true
    } : {
        status: true,
        [flag]: true
    };
}
function getSessionUser(data) {
    if (!isRecord(data) || !isRecord(data.data)) return null;
    const user = data.data;
    if (typeof user.id !== "number" || typeof user.email !== "string") return null;
    return {
        id: user.id,
        first_name: typeof user.first_name === "string" ? user.first_name : null,
        last_name: typeof user.last_name === "string" ? user.last_name : null,
        email: user.email,
        ...typeof user.role === "string" ? {
            role: user.role
        } : {},
        ...typeof user.terms === "boolean" ? {
            terms: user.terms
        } : {},
        ...typeof user.email_verified_status === "boolean" ? {
            email_verified_status: user.email_verified_status
        } : {}
    };
}
function getOtpPurpose(endpoint) {
    if (endpoint === "forgot-password") return "password-reset";
    if (endpoint === "register" || endpoint === "resend_otp" || endpoint === "login") {
        return "email-verification";
    }
    return "security-code";
}
async function POST(request, context) {
    try {
        const { path } = await context.params;
        const endpoint = (path || []).join("/");
        const targetUrl = `https://apitest.thewarriors.team/api/${endpoint}`;
        const contentType = request.headers.get("content-type") || "";
        const sessionToken = request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_COOKIE"])?.value;
        const resetToken = request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESET_COOKIE"])?.value;
        const requiredToken = endpoint === "logout" ? sessionToken : endpoint === "reset-password" ? resetToken : null;
        if ((endpoint === "logout" || endpoint === "reset-password") && !requiredToken) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                status: false,
                message: "Your secure session has expired. Please start again."
            }, {
                status: 401
            });
        }
        const forwardHeaders = {
            Accept: "application/json"
        };
        if (requiredToken) {
            forwardHeaders["Authorization"] = `Bearer ${requiredToken}`;
        }
        let bodyData;
        let requestEmail = null;
        if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
            try {
                bodyData = await request.formData();
                const email = bodyData.get("email");
                requestEmail = typeof email === "string" ? email : null;
            } catch  {
                bodyData = new FormData();
            }
        } else if (contentType.includes("application/json")) {
            try {
                bodyData = await request.text();
                forwardHeaders["Content-Type"] = "application/json";
                const jsonBody = JSON.parse(bodyData);
                requestEmail = isRecord(jsonBody) && typeof jsonBody.email === "string" ? jsonBody.email : null;
            } catch  {
                bodyData = undefined;
            }
        } else {
            // Empty or generic POST (e.g. logout)
            // Provide an empty FormData as fallback
            bodyData = new FormData();
        }
        const response = await fetch(targetUrl, {
            method: "POST",
            headers: forwardHeaders,
            body: bodyData,
            cache: "no-store"
        });
        const responseText = await response.text();
        let data;
        try {
            data = JSON.parse(responseText);
        } catch  {
            data = {
                message: responseText
            };
        }
        const otp = getOtp(data);
        if (otp) {
            const recipient = getEmail(data, requestEmail);
            const safeData = removeOtp(data);
            if (!recipient) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    status: false,
                    message: "We could not determine where to send the verification code. Please try again."
                }, {
                    status: 502
                });
            }
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2f$sendOtpEmail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendOtpEmail"])({
                    to: recipient,
                    otp,
                    purpose: getOtpPurpose(endpoint)
                });
            } catch (error) {
                console.error(`OTP email delivery failed for ${endpoint}.`, {
                    error: error instanceof Error ? error.message : "Unknown SMTP error"
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    status: false,
                    message: "We could not deliver the verification code. Please try again."
                }, {
                    status: 502
                });
            }
            data = safeData;
        }
        const token = getToken(data);
        const shouldStartSession = token && (endpoint === "login" || endpoint === "verify_otp");
        const shouldStartReset = token && endpoint === "forgot-verify-otp";
        const sessionUser = shouldStartSession ? getSessionUser(data) : null;
        if (token) {
            data = removeToken(data);
        }
        if (shouldStartSession) {
            data = withFlag(data, "session_established");
        }
        if (shouldStartReset) {
            data = withFlag(data, "reset_authorized");
        }
        // Prevent browser fetch redirect errors if upstream returns 300 without Location header
        const returnStatus = response.status === 300 ? 200 : response.status;
        const proxyResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
            status: returnStatus
        });
        if (shouldStartSession) {
            proxyResponse.cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_COOKIE"], token, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_COOKIE_OPTIONS"]);
            if (sessionUser) {
                proxyResponse.cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_USER_COOKIE"], encodeURIComponent(JSON.stringify(sessionUser)), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_COOKIE_OPTIONS"]);
            }
        }
        if (shouldStartReset) {
            proxyResponse.cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESET_COOKIE"], token, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESET_COOKIE_OPTIONS"]);
        }
        if (endpoint === "logout") {
            proxyResponse.cookies.delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_COOKIE"]);
            proxyResponse.cookies.delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_USER_COOKIE"]);
        }
        if (endpoint === "reset-password" && response.ok) {
            proxyResponse.cookies.delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESET_COOKIE"]);
        }
        return proxyResponse;
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: false,
            message: error?.message || "An unexpected error occurred while contacting the server."
        }, {
            status: 500
        });
    }
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
"[project]/src/lib/email/sendOtpEmail.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendOtpEmail",
    ()=>sendOtpEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$dist$2f$esm$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/dist/esm/nodemailer.js [app-route] (ecmascript)");
;
const EMAIL_COPY = {
    "email-verification": {
        heading: "Verify your email address",
        intro: "Use this code to verify your Kratos Fitness account.",
        subject: "Your Kratos Fitness verification code"
    },
    "password-reset": {
        heading: "Reset your password",
        intro: "Use this code to continue resetting your Kratos Fitness password.",
        subject: "Your Kratos Fitness password reset code"
    },
    "security-code": {
        heading: "Your security code",
        intro: "Use this code to continue securely with Kratos Fitness.",
        subject: "Your Kratos Fitness security code"
    }
};
function escapeHtml(value) {
    return value.replace(/[&<>'"]/g, (character)=>{
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
        };
        return entities[character];
    });
}
function getSmtpConfig() {
    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASSWORD;
    const isGmailAccount = Boolean(user && /@gmail\.com$/i.test(user));
    const host = process.env.SMTP_HOST?.trim() || (isGmailAccount ? "smtp.gmail.com" : undefined);
    const from = process.env.SMTP_FROM?.trim() || user;
    const port = Number.parseInt(process.env.SMTP_PORT || (isGmailAccount ? "465" : "587"), 10);
    if (!host || !user || !pass || !from || Number.isNaN(port)) {
        throw new Error("SMTP email delivery is not configured.");
    }
    return {
        host,
        port,
        secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE.toLowerCase() === "true" : isGmailAccount || port === 465,
        auth: {
            user,
            pass
        },
        from
    };
}
async function sendOtpEmail({ to, otp, purpose }) {
    const config = getSmtpConfig();
    const copy = EMAIL_COPY[purpose];
    const recipient = to.trim();
    const safeOtp = escapeHtml(otp);
    if (!recipient || !otp) {
        throw new Error("An email recipient and OTP are required.");
    }
    const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$dist$2f$esm$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
        host: config.host,
        port: config.port,
        secure: config.secure,
        auth: config.auth
    });
    await transporter.sendMail({
        from: config.from,
        to: recipient,
        subject: copy.subject,
        text: `${copy.intro}\n\nYour code: ${otp}\n\nIf you did not request this code, you can safely ignore this email.`,
        html: `
      <div style="font-family:Arial,sans-serif;color:#171717;line-height:1.5">
        <h1 style="font-size:24px">${copy.heading}</h1>
        <p>${copy.intro}</p>
        <p style="font-size:28px;font-weight:700;letter-spacing:6px">${safeOtp}</p>
        <p style="color:#525252;font-size:14px">If you did not request this code, you can safely ignore this email.</p>
      </div>
    `
    });
}
}),
]})(),
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
"[externals]/node:child_process [external] (node:child_process, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:child_process", () => require("node:child_process"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:dns [external] (node:dns, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:dns", () => require("node:dns"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:http [external] (node:http, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:http", () => require("node:http"));

module.exports = mod;
}),
"[externals]/node:https [external] (node:https, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:https", () => require("node:https"));

module.exports = mod;
}),
"[externals]/node:net [external] (node:net, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:net", () => require("node:net"));

module.exports = mod;
}),
"[externals]/node:os [external] (node:os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:os", () => require("node:os"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:tls [external] (node:tls, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:tls", () => require("node:tls"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/node:zlib [external] (node:zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:zlib", () => require("node:zlib"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1nctp7dv6nsyl._.js.map