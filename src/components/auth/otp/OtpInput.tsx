"use client";

import React from "react";

interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const OtpInput: React.FC<OtpInputProps> = ({ value, onChange, disabled }) => {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 text-center mb-2">
        Enter 6-Digit OTP Code
      </label>
      <div className="relative">
        <input
          type="text"
          maxLength={8}
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
          placeholder="••••••"
          disabled={disabled}
          className="w-full bg-neutral-50 text-neutral-900 tracking-[0.35em] text-center font-mono text-2xl font-bold rounded-xl border border-neutral-300 hover:border-neutral-400 focus:bg-white focus:border-[#71AC16] focus:ring-2 focus:ring-[#71AC16]/20 py-3 outline-none transition-all disabled:opacity-50"
          autoFocus
        />
      </div>
    </div>
  );
};
