"use client";

import React from "react";
import { OtpVerificationCardProps } from "./types";
import { useOtpVerification } from "./useOtpVerification";
import { OtpHeader } from "./OtpHeader";
import { OtpAlerts } from "./OtpAlerts";
import { OtpForm } from "./OtpForm";

export type { OtpVerificationCardProps };

export const OtpVerificationCard: React.FC<OtpVerificationCardProps> = ({
  email,
  onSuccessRedirect = "/login?registered=true",
  isForgotPasswordFlow = false,
  onForgotVerified,
  onBackToLogin,
  title,
  subtitle,
}) => {
  const {
    otp,
    setOtp,
    loading,
    resending,
    errorMessage,
    successMessage,
    cooldown,
    handleVerify,
    handleResend,
  } = useOtpVerification({
    email,
    onSuccessRedirect,
    isForgotPasswordFlow,
    onForgotVerified,
    onBackToLogin,
  });

  return (
    <div className="w-full">
      {/* Card Header */}
      <OtpHeader email={email} title={title} subtitle={subtitle} />

      {/* Status Messages */}
      <OtpAlerts successMessage={successMessage} errorMessage={errorMessage} />

      {/* Form with Input, Action Button, and Resend Footer */}
      <OtpForm
        email={email}
        otp={otp}
        onOtpChange={(val) => setOtp(val)}
        onSubmit={handleVerify}
        loading={loading}
        resending={resending}
        cooldown={cooldown}
        onResend={handleResend}
        onBackToLogin={onBackToLogin}
      />
    </div>
  );
};
