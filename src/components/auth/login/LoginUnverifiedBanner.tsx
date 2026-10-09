"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, ArrowRight } from "lucide-react";

interface LoginUnverifiedBannerProps {
  unverifiedPrompt: {
    email: string;
  };
  onVerifyNow?: (data: { email: string }) => void;
}

export const LoginUnverifiedBanner: React.FC<LoginUnverifiedBannerProps> = ({
  unverifiedPrompt,
  onVerifyNow,
}) => {
  const router = useRouter();

  return (
    <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-medium space-y-2.5">
      <div className="flex items-start gap-2.5">
        <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-600 mt-0.5" />
        <div>
          <p className="font-bold text-amber-950">Email Not Verified</p>
          <p className="text-amber-800 mt-0.5">
            Your email ({unverifiedPrompt.email}) has not been verified yet.
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          if (onVerifyNow) {
            onVerifyNow(unverifiedPrompt);
          } else {
            router.push(
              `/verify-otp?email=${encodeURIComponent(unverifiedPrompt.email)}`
            );
          }
        }}
        className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider text-[11px]"
      >
        <span>Verify Email Now</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
