"use client";

import React, { useState } from "react";
import Link from "next/link";
import { KeyRound, Mail, ArrowRight, Loader2, AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react";
import { AuthInputField } from "../common/AuthInputField";
import { OtpVerificationCard } from "../otp/OtpVerificationCard";
import { ResetPasswordForm } from "./ResetPasswordForm";
import { authApi } from "@/lib/authApi";

type Step = "request" | "verify" | "reset";

export const ForgotPasswordCard: React.FC = () => {
  const [step, setStep] = useState<Step>("request");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email.trim()) {
      setErrorMessage("Please enter your account email address.");
      return;
    }

    try {
      setLoading(true);
      const res = await authApi.forgotPassword(email);

      if (res.status) {
        setSuccessMessage("We sent a verification code to your email address.");
        setStep("verify");
      } else {
        setErrorMessage(res.message || "Failed to send reset code. Please verify your email.");
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "Error requesting password reset.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {step === "verify" && (
        <OtpVerificationCard
          email={email}
          isForgotPasswordFlow={true}
          onForgotVerified={() => {
            setStep("reset");
          }}
        />
      )}

      {step === "reset" && (
        <div className="w-full">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#71AC16]/15 text-[#71AC16] flex items-center justify-center mx-auto mb-3">
              <KeyRound className="w-6 h-6" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 uppercase tracking-tight">
              Create New <span className="text-[#71AC16]">Password</span>
            </h1>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Your identity has been verified. Enter a secure new password for your account.
            </p>
          </div>

          <ResetPasswordForm email={email} />
        </div>
      )}

      {step === "request" && (
        <div className="w-full">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#71AC16]/15 text-[#71AC16] flex items-center justify-center mx-auto mb-3">
              <KeyRound className="w-6 h-6" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 uppercase tracking-tight">
              Reset Your <span className="text-[#71AC16]">Password</span>
            </h1>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Enter your registered email to receive a verification code
            </p>
          </div>

          {successMessage && (
            <div className="mb-4 p-3.5 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs font-semibold flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#71AC16]" />
              <span>{successMessage}</span>
            </div>
          )}

          {errorMessage && (
            <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-start gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
              <div className="flex-1 leading-relaxed">{errorMessage}</div>
            </div>
          )}

          <form onSubmit={handleRequestOtp} className="space-y-4">
            <AuthInputField
              label="Account Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="warrior@example.com"
              icon={<Mail className="w-4 h-4" />}
              required
              autoFocus
            />

            <button
              type="submit"
              disabled={loading || !email}
              className="w-full mt-2 py-3 px-6 rounded-full bg-[#71AC16] hover:bg-[#639912] active:scale-[0.98] text-white font-black uppercase tracking-wider text-sm transition-all shadow-md shadow-[#71AC16]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Requesting Code...</span>
                </>
              ) : (
                <>
                  <span>Send Verification Code</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </>
              )}
            </button>
          </form>

          <div className="mt-7 pt-5 border-t border-neutral-200 text-center">
            <Link
              href="/login"
              className="text-xs text-neutral-600 hover:text-neutral-900 transition-colors inline-flex items-center gap-1.5 font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Login</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
