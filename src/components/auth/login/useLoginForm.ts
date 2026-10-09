"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authApi } from "@/lib/authApi";
import { useAuth } from "@/context/AuthContext";

export function useLoginForm(onUnverifiedEmail?: (data: { email: string }) => void) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { saveAuthSession } = useAuth();

  const initialEmail = searchParams.get("email") || "";
  const registeredSuccess = searchParams.get("registered") === "true";
  const resetSuccess = searchParams.get("reset") === "true";

  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [unverifiedPrompt, setUnverifiedPrompt] = useState<{
    email: string;
  } | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(
    registeredSuccess
      ? "Account registered and verified successfully! Please log in."
      : resetSuccess
      ? "Password reset successfully! Please log in with your new password."
      : null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setUnverifiedPrompt(null);

    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }

    try {
      setLoading(true);
      const res = await authApi.login(email, password, rememberMe);

      // Check if user email is unverified (code 300 or message indicating email not verified)
      const isUnverified =
        (res as any).code === 300 ||
        res.message?.toLowerCase().includes("email not verified") ||
        res.message?.toLowerCase().includes("not verified") ||
        Boolean(
          res.data &&
            ("otp" in (res.data as any) ||
              (res.data as any).email_verified_status === false)
        );

      if (isUnverified) {
        const unverifiedEmail =
          (res.data as any)?.email?.trim() || email.trim();
        if (onUnverifiedEmail) {
          onUnverifiedEmail({
            email: unverifiedEmail,
          });
        } else {
          setUnverifiedPrompt({
            email: unverifiedEmail,
          });
        }
      } else if (res.status && res.session_established && res.data) {
        setSuccessMessage("Login Successful! Navigating to Landing page...");
        saveAuthSession(res.data as any);
        setTimeout(() => {
          router.push("/");
        }, 800);
      } else {
        const errorText =
          res.message ||
          (res.errors
            ? Object.values(res.errors).flat().join(". ")
            : "Invalid email or password. Please try again.");
        setErrorMessage(errorText);
      }
    } catch (err: any) {
      setErrorMessage(
        err?.message || "Connection failed. Please check your network and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePreFillSample = () => {
    setEmail("user@gmail.com");
    setPassword("password");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    loading,
    errorMessage,
    successMessage,
    unverifiedPrompt,
    handleSubmit,
    handlePreFillSample,
  };
}
