"use client";

import React from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { OtpInput } from "./OtpInput";
import { OtpResendAction } from "./OtpResendAction";

interface OtpFormProps {
  email: string;
  otp: string;
  onOtpChange: (val: string) => void;
  onSubmit: (e?: React.FormEvent) => void;
  loading: boolean;
  resending: boolean;
  cooldown: number;
  onResend: () => void;
  onBackToLogin?: () => void;
}

export const OtpForm: React.FC<OtpFormProps> = ({
  email,
  otp,
  onOtpChange,
  onSubmit,
  loading,
  resending,
  cooldown,
  onResend,
  onBackToLogin,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <OtpInput value={otp} onChange={onOtpChange} disabled={loading} />

      <button
        type="submit"
        disabled={loading || !otp}
        className="w-full py-3 px-6 rounded-full bg-[#71AC16] hover:bg-[#639912] active:scale-[0.98] text-white font-black uppercase tracking-wider text-sm transition-all shadow-md shadow-[#71AC16]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Verifying code...</span>
          </>
        ) : (
          <>
            <span>Verify & Continue</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </>
        )}
      </button>

      <OtpResendAction
        email={email}
        onResend={onResend}
        resending={resending}
        cooldown={cooldown}
        onBackToLogin={onBackToLogin}
      />
    </form>
  );
};
