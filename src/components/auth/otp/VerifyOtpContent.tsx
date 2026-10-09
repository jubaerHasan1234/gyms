"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { OtpVerificationCard } from "./OtpVerificationCard";

export const VerifyOtpContent: React.FC = () => {
  const searchParams = useSearchParams();

  const emailParam = searchParams.get("email") || "";

  return (
    <OtpVerificationCard
      email={emailParam || "user@example.com"}
      onSuccessRedirect="/login?registered=true"
    />
  );
};
