import React, { Suspense } from "react";
import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/common/AuthLayout";
import { VerifyOtpContent } from "@/components/auth/otp/VerifyOtpContent";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Verify Security Code | Kratos Fitness",
  description:
    "Verify your account or password reset security code to access Kratos Fitness.",
};

function LoadingFallback() {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center text-neutral-500 min-h-[300px]">
      <Loader2 className="w-8 h-8 text-[#71AC16] animate-spin mb-3" />
      <p className="text-sm">Loading verification...</p>
    </div>
  );
}

export default function VerifyOtpPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<LoadingFallback />}>
        <VerifyOtpContent />
      </Suspense>
    </AuthLayout>
  );
}
