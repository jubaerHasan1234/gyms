"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ShieldCheck, ArrowRight, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { AuthInputField } from "../common/AuthInputField";
import { authApi } from "@/lib/authApi";

interface ResetPasswordFormProps {
  email: string;
}

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ email }) => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }
    if (password !== passwordConfirmation) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const res = await authApi.resetPassword({
        password,
        password_confirmation: passwordConfirmation,
      });

      if (res.status === 200 || res.status === 201 || (res.message && res.message.toLowerCase().includes("reset"))) {
        setSuccessMessage("Password reset successfully! Redirecting to login...");
        setTimeout(() => {
          router.push(`/login?reset=true&email=${encodeURIComponent(email)}`);
        }, 1200);
      } else {
        setErrorMessage(res.message || "Failed to reset password. Please request a new code.");
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "An error occurred while resetting your password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {successMessage && (
        <div className="p-3.5 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs font-semibold flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#71AC16]" />
          <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
          <div className="flex-1 leading-relaxed">{errorMessage}</div>
        </div>
      )}

      <AuthInputField
        label="New Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••••••"
        icon={<Lock className="w-4 h-4" />}
        required
        helperText="Minimum 6 characters"
      />

      <AuthInputField
        label="Confirm New Password"
        type="password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        placeholder="••••••••••••"
        icon={<ShieldCheck className="w-4 h-4" />}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 py-3 px-6 rounded-full bg-[#71AC16] hover:bg-[#639912] active:scale-[0.98] text-white font-black uppercase tracking-wider text-sm transition-all shadow-md shadow-[#71AC16]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Updating password...</span>
          </>
        ) : (
          <>
            <span>Set New Password</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </>
        )}
      </button>
    </form>
  );
};
