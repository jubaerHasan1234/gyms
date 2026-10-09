"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { RegisterForm } from "./RegisterForm";
import { OtpVerificationCard } from "../otp/OtpVerificationCard";

export const RegisterCard: React.FC = () => {
  const [registeredData, setRegisteredData] = useState<{
    email: string;
  } | null>(null);

  return (
    <div className="w-full">
      {registeredData ? (
        <OtpVerificationCard
          email={registeredData.email}
          onSuccessRedirect="/login?registered=true"
        />
      ) : (
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 uppercase tracking-tight">
              Create Your <span className="text-[#71AC16]">Account</span>
            </h1>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Join Kratos Fitness to unlock your training regimens and club privileges
            </p>
          </div>

          {/* Registration Form */}
          <RegisterForm
            onSuccess={(data) => {
              setRegisteredData(data);
            }}
          />

          {/* Switch to Login Link */}
          <div className="mt-7 pt-5 border-t border-neutral-200 text-center">
            <p className="text-xs text-neutral-600 flex items-center justify-center gap-2">
              <span>Already have an account?</span>
              <Link
                href="/login"
                className="text-[#71AC16] hover:text-[#5d8d12] font-bold inline-flex items-center gap-1 hover:underline transition-colors"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Log in here</span>
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
