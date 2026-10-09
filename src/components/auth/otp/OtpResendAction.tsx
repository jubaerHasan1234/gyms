"use client";

import React from "react";
import Link from "next/link";
import { RotateCw } from "lucide-react";

interface OtpResendActionProps {
  email: string;
  onResend: () => void;
  resending: boolean;
  cooldown: number;
  onBackToLogin?: () => void;
}

export const OtpResendAction: React.FC<OtpResendActionProps> = ({
  email,
  onResend,
  resending,
  cooldown,
  onBackToLogin,
}) => {
  return (
    <div className="flex items-center justify-between text-xs pt-2">
      <button
        type="button"
        onClick={onResend}
        disabled={resending || cooldown > 0}
        className="text-neutral-600 hover:text-[#71AC16] disabled:opacity-50 flex items-center gap-1.5 font-medium cursor-pointer"
      >
        <RotateCw className={`w-3.5 h-3.5 ${resending ? "animate-spin" : ""}`} />
        <span>
          {resending
            ? "Sending..."
            : cooldown > 0
            ? `Resend OTP in ${cooldown}s`
            : "Resend Code"}
        </span>
      </button>

      {onBackToLogin ? (
        <button
          type="button"
          onClick={onBackToLogin}
          className="text-neutral-600 hover:text-[#71AC16] font-medium transition-colors cursor-pointer"
        >
          ← Return to Login
        </button>
      ) : (
        <Link
          href={`/login?email=${encodeURIComponent(email)}`}
          className="text-neutral-600 hover:text-neutral-900 font-medium transition-colors"
        >
          Skip to Login →
        </Link>
      )}
    </div>
  );
};
