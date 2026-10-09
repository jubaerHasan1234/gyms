"use client";

import React, { useState } from "react";
import { LoginHeader } from "./LoginHeader";
import { LoginForm } from "./LoginForm";
import { LoginFooter } from "./LoginFooter";
import { OtpVerificationCard } from "../otp/OtpVerificationCard";

export const LoginCard: React.FC = () => {
  const [unverifiedData, setUnverifiedData] = useState<{
    email: string;
  } | null>(null);

  if (unverifiedData) {
    return (
      <div className="w-full">
        <OtpVerificationCard
          email={unverifiedData.email}
          onSuccessRedirect={`/login?registered=true&email=${encodeURIComponent(
            unverifiedData.email
          )}`}
          onBackToLogin={() => setUnverifiedData(null)}
          title="Verify Your Email"
          subtitle="Your account email requires verification before you can log in."
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header (Server-rendered presentation component) */}
      <LoginHeader />

      {/* The Form (Client-rendered interactive component) */}
      <LoginForm onUnverifiedEmail={setUnverifiedData} />

      {/* Registration Redirection Callout (Server-rendered presentation component) */}
      <LoginFooter />
    </div>
  );
};
