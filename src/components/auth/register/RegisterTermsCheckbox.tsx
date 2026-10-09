"use client";

import React from "react";

interface RegisterTermsCheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RegisterTermsCheckbox: React.FC<RegisterTermsCheckboxProps> = ({
  checked,
  onChange,
}) => {
  return (
    <div className="pt-1 select-none">
      <label className="flex items-start gap-2.5 cursor-pointer text-xs text-neutral-600 hover:text-neutral-900">
        <input
          type="checkbox"
          name="terms"
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 mt-0.5 rounded border-neutral-300 text-[#71AC16] focus:ring-[#71AC16] accent-[#71AC16] flex-shrink-0"
        />
        <span className="leading-snug">
          I agree to the{" "}
          <span className="text-[#71AC16] font-semibold underline underline-offset-2">
            Kratos Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-[#71AC16] font-semibold underline underline-offset-2">
            Privacy Policy
          </span>
        </span>
      </label>
    </div>
  );
};
