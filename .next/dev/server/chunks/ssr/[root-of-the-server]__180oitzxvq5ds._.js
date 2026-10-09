module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

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
"[project]/src/context/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/authApi.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Restore only server-managed session data. No token or user data is persisted in browser storage.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/api/auth/session", {
            cache: "no-store"
        }).then((response)=>response.json()).then((session)=>{
            setIsAuthenticated(Boolean(session.authenticated));
            setUser(session.user || null);
        }).catch(()=>{
            setIsAuthenticated(false);
            setUser(null);
        }).finally(()=>setIsLoading(false));
    }, []);
    const saveAuthSession = (newUser)=>{
        setUser(newUser);
        setIsAuthenticated(true);
    };
    const logout = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].logout();
        } catch (err) {
            console.warn("Backend logout notification warning:", err);
        }
        setUser(null);
        setIsAuthenticated(false);
    };
    const updateUser = (updated)=>{
        if (!user) return;
        const nextUser = {
            ...user,
            ...updated
        };
        setUser(nextUser);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isAuthenticated,
            isLoading,
            saveAuthSession,
            logout,
            updateUser
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/AuthContext.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
}),
"[project]/src/lib/authApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authApi",
    ()=>authApi
]);
const BASE_URL = "/api/proxy";
/**
 * Helper to make FormData POST requests via proxy
 */ async function postFormData(endpoint, formData) {
    const headers = {
        Accept: "application/json"
    };
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: "POST",
        headers,
        body: formData
    });
    const data = await response.json().catch(()=>({}));
    if (!response.ok && !data.message) {
        throw new Error(`Request failed with status ${response.status}`);
    }
    return data;
}
const authApi = {
    /**
   * Log in user
   * Accepted form-data: email, password, remember_me
   */ async login (email, password, rememberMe = true) {
        const fd = new FormData();
        fd.append("email", email.trim());
        fd.append("password", password);
        fd.append("remember_me", rememberMe ? "1" : "0");
        return postFormData("login", fd);
    },
    /**
   * Register user
   * Accepted form-data: first_name, last_name, email, password, password_confirmation, terms
   */ async register (params) {
        const fd = new FormData();
        fd.append("first_name", params.first_name.trim());
        fd.append("last_name", params.last_name.trim());
        fd.append("email", params.email.trim());
        fd.append("password", params.password);
        fd.append("password_confirmation", params.password_confirmation);
        fd.append("terms", params.terms ? "true" : "false");
        return postFormData("register", fd);
    },
    /**
   * Verify email OTP
   * Accepted form-data: email, otp
   */ async verifyOtp (email, otp) {
        const fd = new FormData();
        fd.append("email", email.trim());
        fd.append("otp", otp.trim());
        return postFormData("verify_otp", fd);
    },
    /**
   * Resend OTP for email verification
   * Accepted form-data: email
   */ async resendOtp (email) {
        const fd = new FormData();
        fd.append("email", email.trim());
        return postFormData("resend_otp", fd);
    },
    /**
   * Request password reset OTP
   * Accepted form-data: email
   */ async forgotPassword (email) {
        const fd = new FormData();
        fd.append("email", email.trim());
        return postFormData("forgot-password", fd);
    },
    /**
   * Verify OTP for forgot password
   * Accepted form-data: email, otp
   */ async forgotVerifyOtp (email, otp) {
        const fd = new FormData();
        fd.append("email", email.trim());
        fd.append("otp", otp.trim());
        return postFormData("forgot-verify-otp", fd);
    },
    /**
   * Reset password using the server-side, HttpOnly reset-token cookie.
   * Accepted form-data: password, password_confirmation
   */ async resetPassword (params) {
        const fd = new FormData();
        fd.append("password", params.password);
        fd.append("password_confirmation", params.password_confirmation);
        return postFormData("reset-password", fd);
    },
    /**
   * Logout user using the server-side, HttpOnly session cookie.
   */ async logout () {
        const fd = new FormData();
        return postFormData("logout", fd);
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__180oitzxvq5ds._.js.map