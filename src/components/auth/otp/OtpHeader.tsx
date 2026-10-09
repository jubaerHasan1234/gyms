import React from "react";
import { ShieldCheck } from "lucide-react";

interface OtpHeaderProps {
  email: string;
  title?: string;
  subtitle?: string;
}

export const OtpHeader: React.FC<OtpHeaderProps> = ({ email, title, subtitle }) => {
  return (
    <div className="text-center mb-6">
      <div className="w-12 h-12 rounded-full bg-[#71AC16]/15 text-[#71AC16] flex items-center justify-center mx-auto mb-3">
        <ShieldCheck className="w-6 h-6" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 uppercase tracking-tight">
        {title ? (
          <span>{title}</span>
        ) : (
          <>
            Verify <span className="text-[#71AC16]">Your Account</span>
          </>
        )}
      </h2>
      <p className="text-neutral-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
        {subtitle || (
          <>
            We&apos;ve sent a verification code to{" "}
            <span className="text-neutral-900 font-semibold">{email}</span>
          </>
        )}
      </p>
    </div>
  );
};
