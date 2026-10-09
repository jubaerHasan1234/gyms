"use client";

import React, { useState, ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";

interface AuthInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  icon?: ReactNode;
}

export const AuthInputField: React.FC<AuthInputFieldProps> = ({
  label,
  error,
  helperText,
  icon,
  type = "text",
  id,
  name,
  className = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || name || label.toLowerCase().replace(/\s+/g, "-");
  const isPassword = type === "password";
  const actualType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      <div className="flex items-center justify-between">
        <label
          htmlFor={inputId}
          className="text-xs font-bold uppercase tracking-wider text-neutral-700 select-none"
        >
          {label} {props.required && <span className="text-[#71AC16]">*</span>}
        </label>
      </div>

      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3.5 text-neutral-400 pointer-events-none flex items-center justify-center">
            {icon}
          </div>
        )}

        <input
          id={inputId}
          name={name}
          type={actualType}
          className={`w-full bg-neutral-50 text-neutral-900 placeholder:text-neutral-400 rounded-xl border text-sm font-medium transition-all duration-200 outline-none
            ${icon ? "pl-11" : "pl-4"}
            ${isPassword ? "pr-11" : "pr-4"}
            py-3
            ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 bg-red-50/20"
                : "border-neutral-300 hover:border-neutral-400 focus:bg-white focus:border-[#71AC16] focus:ring-2 focus:ring-[#71AC16]/25"
            }`}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
            className="absolute right-3.5 text-neutral-400 hover:text-neutral-700 transition-colors p-1 rounded-md focus:outline-none focus:ring-1 focus:ring-[#71AC16]"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {error ? (
        <p className="text-xs font-medium text-red-600 mt-0.5 flex items-center gap-1">
          <span>•</span> {error}
        </p>
      ) : helperText ? (
        <p className="text-xs text-neutral-500 mt-0.5">{helperText}</p>
      ) : null}
    </div>
  );
};
