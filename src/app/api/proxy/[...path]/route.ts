import { NextRequest, NextResponse } from "next/server";
import { OtpEmailPurpose, sendOtpEmail } from "@/lib/email/sendOtpEmail";
import {
  RESET_COOKIE,
  RESET_COOKIE_OPTIONS,
  SESSION_COOKIE,
  SESSION_COOKIE_OPTIONS,
  SESSION_USER_COOKIE,
} from "@/lib/authCookies";

export const runtime = "nodejs";

type JsonRecord = Record<string, unknown>;

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getOtp(data: unknown): string | null {
  if (!isRecord(data)) return null;

  const candidates = [data.otp, isRecord(data.data) ? data.data.otp : undefined];
  const otp = candidates.find(
    (value): value is string | number =>
      typeof value === "string" || typeof value === "number"
  );

  return otp === undefined ? null : String(otp);
}

function getEmail(data: unknown, requestEmail: string | null): string | null {
  if (requestEmail?.trim()) return requestEmail.trim();
  if (!isRecord(data)) return null;

  const candidates = [data.email, isRecord(data.data) ? data.data.email : undefined];
  const email = candidates.find((value): value is string => typeof value === "string");

  return email?.trim() || null;
}

function removeOtp(data: unknown): unknown {
  if (!isRecord(data)) return data;

  const { otp: _rootOtp, data: nestedData, ...rest } = data;
  if (!isRecord(nestedData)) return rest;

  const { otp: _nestedOtp, ...safeNestedData } = nestedData;
  return { ...rest, data: safeNestedData };
}

function getToken(data: unknown): string | null {
  if (!isRecord(data)) return null;

  const candidates = [data.token, isRecord(data.data) ? data.data.token : undefined];
  const token = candidates.find((value): value is string => typeof value === "string");

  return token?.trim() || null;
}

function removeToken(data: unknown): unknown {
  if (!isRecord(data)) return data;

  const { token: _rootToken, token_type: _tokenType, data: nestedData, ...rest } = data;
  if (!isRecord(nestedData)) return rest;

  const { token: _nestedToken, ...safeNestedData } = nestedData;
  return { ...rest, data: safeNestedData };
}

function withFlag(data: unknown, flag: string): unknown {
  return isRecord(data) ? { ...data, [flag]: true } : { status: true, [flag]: true };
}

function getSessionUser(data: unknown): JsonRecord | null {
  if (!isRecord(data) || !isRecord(data.data)) return null;

  const user = data.data;
  if (typeof user.id !== "number" || typeof user.email !== "string") return null;

  return {
    id: user.id,
    first_name: typeof user.first_name === "string" ? user.first_name : null,
    last_name: typeof user.last_name === "string" ? user.last_name : null,
    email: user.email,
    ...(typeof user.role === "string" ? { role: user.role } : {}),
    ...(typeof user.terms === "boolean" ? { terms: user.terms } : {}),
    ...(typeof user.email_verified_status === "boolean"
      ? { email_verified_status: user.email_verified_status }
      : {}),
  };
}

function getOtpPurpose(endpoint: string): OtpEmailPurpose {
  if (endpoint === "forgot-password") return "password-reset";
  if (endpoint === "register" || endpoint === "resend_otp" || endpoint === "login") {
    return "email-verification";
  }
  return "security-code";
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await context.params;
    const endpoint = (path || []).join("/");
    const targetUrl = `https://apitest.thewarriors.team/api/${endpoint}`;

    const contentType = request.headers.get("content-type") || "";
    const sessionToken = request.cookies.get(SESSION_COOKIE)?.value;
    const resetToken = request.cookies.get(RESET_COOKIE)?.value;
    const requiredToken = endpoint === "logout" ? sessionToken : endpoint === "reset-password" ? resetToken : null;

    if ((endpoint === "logout" || endpoint === "reset-password") && !requiredToken) {
      return NextResponse.json(
        { status: false, message: "Your secure session has expired. Please start again." },
        { status: 401 }
      );
    }

    const forwardHeaders: Record<string, string> = {
      Accept: "application/json",
    };
    if (requiredToken) {
      forwardHeaders["Authorization"] = `Bearer ${requiredToken}`;
    }

    let bodyData: BodyInit | undefined;
    let requestEmail: string | null = null;

    if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      try {
        bodyData = await request.formData();
        const email = bodyData.get("email");
        requestEmail = typeof email === "string" ? email : null;
      } catch {
        bodyData = new FormData();
      }
    } else if (contentType.includes("application/json")) {
      try {
        bodyData = await request.text();
        forwardHeaders["Content-Type"] = "application/json";
        const jsonBody = JSON.parse(bodyData);
        requestEmail = isRecord(jsonBody) && typeof jsonBody.email === "string"
          ? jsonBody.email
          : null;
      } catch {
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
      cache: "no-store",
    });

    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { message: responseText };
    }

    const otp = getOtp(data);
    if (otp) {
      const recipient = getEmail(data, requestEmail);
      const safeData = removeOtp(data);

      if (!recipient) {
        return NextResponse.json(
          {
            status: false,
            message: "We could not determine where to send the verification code. Please try again.",
          },
          { status: 502 }
        );
      }

      try {
        await sendOtpEmail({
          to: recipient,
          otp,
          purpose: getOtpPurpose(endpoint),
        });
      } catch (error) {
        console.error(`OTP email delivery failed for ${endpoint}.`, {
          error: error instanceof Error ? error.message : "Unknown SMTP error",
        });
        return NextResponse.json(
          {
            status: false,
            message: "We could not deliver the verification code. Please try again.",
          },
          { status: 502 }
        );
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
    const proxyResponse = NextResponse.json(data, { status: returnStatus });

    if (shouldStartSession) {
      proxyResponse.cookies.set(SESSION_COOKIE, token, SESSION_COOKIE_OPTIONS);
      if (sessionUser) {
        proxyResponse.cookies.set(
          SESSION_USER_COOKIE,
          encodeURIComponent(JSON.stringify(sessionUser)),
          SESSION_COOKIE_OPTIONS
        );
      }
    }
    if (shouldStartReset) {
      proxyResponse.cookies.set(RESET_COOKIE, token, RESET_COOKIE_OPTIONS);
    }
    if (endpoint === "logout") {
      proxyResponse.cookies.delete(SESSION_COOKIE);
      proxyResponse.cookies.delete(SESSION_USER_COOKIE);
    }
    if (endpoint === "reset-password" && response.ok) {
      proxyResponse.cookies.delete(RESET_COOKIE);
    }

    return proxyResponse;
  } catch (error: any) {
    return NextResponse.json(
      {
        status: false,
        message: error?.message || "An unexpected error occurred while contacting the server.",
      },
      { status: 500 }
    );
  }
}
