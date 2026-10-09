"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/authApi";
import { useAuth } from "@/context/AuthContext";
import { OtpVerificationCardProps } from "./types";

export function useOtpVerification({
  email,
  onSuccessRedirect = "/login?registered=true",
  isForgotPasswordFlow = false,
  onForgotVerified,
  onBackToLogin,
}: Pick<
  OtpVerificationCardProps,
  | "email"
  | "onSuccessRedirect"
  | "isForgotPasswordFlow"
  | "onForgotVerified"
  | "onBackToLogin"
>) {
  const router = useRouter();
  const { saveAuthSession } = useAuth();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);

  // Cooldown countdown timer
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const handleVerify = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage(null);

    const cleanOtp = otp.trim();
    if (!cleanOtp) {
      setErrorMessage("Please enter the verification code.");
      return;
    }

    try {
      setLoading(true);

      if (isForgotPasswordFlow) {
        const res = await authApi.forgotVerifyOtp(email, cleanOtp);
        if (res.status && res.reset_authorized) {
          setSuccessMessage("OTP verified successfully! Proceeding to set new password...");
          if (onForgotVerified) {
            onForgotVerified();
          }
        } else {
          setErrorMessage(res.message || "Invalid or expired OTP. Please try again.");
        }
      } else {
        // Registration/Email verification
        const res = await authApi.verifyOtp(email, cleanOtp);
        if (
          res.status === true ||
          (res as any).status === 201 ||
          (res as any).status === 200 ||
          res.message?.toLowerCase().includes("verified")
        ) {
          // The proxy has placed the session token in an HttpOnly cookie.
          if (res.session_established && res.data) {
            setSuccessMessage("Email verified successfully! Logging you in...");
            saveAuthSession(res.data);
            setTimeout(() => {
              router.push("/");
            }, 800);
            return;
          }

          setSuccessMessage("Account successfully verified! Redirecting to Login page...");
          setTimeout(() => {
            if (onBackToLogin) {
              onBackToLogin();
            }
            const redirectUrl = `${onSuccessRedirect}${
              onSuccessRedirect.includes("?") ? "&" : "?"
            }email=${encodeURIComponent(email)}`;
            router.push(redirectUrl);
          }, 1000);
        } else {
          setErrorMessage(res.message || "Verification failed. Please check the OTP code.");
        }
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "Failed to verify OTP code.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (cooldown > 0 || resending) return;
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      setResending(true);
      const res = isForgotPasswordFlow
        ? await authApi.forgotPassword(email)
        : await authApi.resendOtp(email);

      if (res.status) {
        setOtp("");
        setSuccessMessage("A new verification code has been sent to your email.");
        setCooldown(30);
      } else {
        setErrorMessage(res.message || "Could not resend OTP. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "Error resending OTP.");
    } finally {
      setResending(false);
    }
  };

  return {
    otp,
    setOtp,
    loading,
    resending,
    errorMessage,
    successMessage,
    cooldown,
    handleVerify,
    handleResend,
  };
}
