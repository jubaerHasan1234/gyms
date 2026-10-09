"use client";

import React, { useState } from "react";
import { User, Mail, Lock, ShieldCheck, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { AuthInputField } from "../common/AuthInputField";
import { authApi } from "@/lib/authApi";

interface RegisterFormProps {
  onSuccess: (data: { email: string }) => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: true,
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.first_name.trim()) {
      setErrorMessage("Please enter your first name.");
      return;
    }
    if (!formData.last_name.trim()) {
      setErrorMessage("Please enter your last name.");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (formData.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }
    if (formData.password !== formData.password_confirmation) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (!formData.terms) {
      setErrorMessage("You must accept the terms and conditions to register.");
      return;
    }

    try {
      setLoading(true);
      const res = await authApi.register(formData);

      if (res.status) {
        onSuccess({
          email: formData.email.trim(),
        });
      } else {
        const errorText =
          res.message ||
          (res.errors
            ? Object.values(res.errors).flat().join(". ")
            : "Registration failed. Please check your details and try again.");
        setErrorMessage(errorText);
      }
    } catch (err: any) {
      setErrorMessage(
        err?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
          <div className="flex-1 leading-relaxed">{errorMessage}</div>
        </div>
      )}

      {/* Name Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <AuthInputField
          label="First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="Alexander"
          icon={<User className="w-4 h-4" />}
          required
          autoComplete="given-name"
        />

        <AuthInputField
          label="Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Vance"
          icon={<User className="w-4 h-4" />}
          required
          autoComplete="family-name"
        />
      </div>

      {/* Email */}
      <AuthInputField
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="alexander@kratosfitness.com"
        icon={<Mail className="w-4 h-4" />}
        required
        autoComplete="email"
      />

      {/* Passwords */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <AuthInputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••••••"
          icon={<Lock className="w-4 h-4" />}
          required
          autoComplete="new-password"
          helperText="Min. 6 characters"
        />

        <AuthInputField
          label="Confirm Password"
          type="password"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
          placeholder="••••••••••••"
          icon={<ShieldCheck className="w-4 h-4" />}
          required
          autoComplete="new-password"
        />
      </div>

      {/* Terms & Conditions */}
      <div className="pt-1 select-none">
        <label className="flex items-start gap-2.5 cursor-pointer text-xs text-neutral-600 hover:text-neutral-900">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
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

      {/* Register CTA Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 py-3 px-6 rounded-full bg-[#71AC16] hover:bg-[#639912] active:scale-[0.98] text-white font-black uppercase tracking-wider text-sm transition-all shadow-md shadow-[#71AC16]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Creating account...</span>
          </>
        ) : (
          <>
            <span>Register Account</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </>
        )}
      </button>
    </form>
  );
};
