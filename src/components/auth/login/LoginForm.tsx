"use client";

import React from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { AuthInputField } from "../common/AuthInputField";
import { LoginAlerts } from "./LoginAlerts";
import { LoginUnverifiedBanner } from "./LoginUnverifiedBanner";
import { LoginDemoButton } from "./LoginDemoButton";
import { useLoginForm } from "./useLoginForm";

interface LoginFormProps {
  onUnverifiedEmail?: (data: { email: string }) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onUnverifiedEmail }) => {
  const {
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
  } = useLoginForm(onUnverifiedEmail);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Success and Error Notification Banners */}
      <LoginAlerts successMessage={successMessage} errorMessage={errorMessage} />

      {/* Unverified Email Warning Banner */}
      {unverifiedPrompt && (
        <LoginUnverifiedBanner
          unverifiedPrompt={unverifiedPrompt}
          onVerifyNow={onUnverifiedEmail}
        />
      )}

      {/* Email Input */}
      <AuthInputField
        label="Email Address"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="warrior@example.com"
        icon={<Mail className="w-4 h-4" />}
        required
        autoComplete="email"
      />

      {/* Password Input */}
      <AuthInputField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••••••"
        icon={<Lock className="w-4 h-4" />}
        required
        autoComplete="current-password"
      />

      {/* Remember Me and Forgot Password */}
      <div className="flex items-center justify-between text-xs pt-1 select-none">
        <label className="flex items-center gap-2 cursor-pointer text-neutral-600 hover:text-neutral-900">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 rounded border-neutral-300 text-[#71AC16] focus:ring-[#71AC16] accent-[#71AC16]"
          />
          <span className="font-medium">Remember me</span>
        </label>

        <Link
          href="/forgot-password"
          className="font-semibold text-neutral-600 hover:text-[#71AC16] transition-colors"
        >
          Forgot password?
        </Link>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 py-3 px-6 rounded-full bg-[#71AC16] hover:bg-[#639912] active:scale-[0.98] text-white font-black uppercase tracking-wider text-sm transition-all shadow-md shadow-[#71AC16]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Signing in...</span>
          </>
        ) : (
          <>
            <span>Log In</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </>
        )}
      </button>

      {/* Quick Demo Pre-fill */}
      <LoginDemoButton onPreFill={handlePreFillSample} />
    </form>
  );
};
