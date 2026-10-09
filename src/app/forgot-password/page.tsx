import React, { Suspense } from "react";
import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/common/AuthLayout";
import { ForgotPasswordCard } from "@/components/auth/forgot-password/ForgotPasswordCard";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Reset Password | Kratos Fitness",
  description:
    "Reset your Kratos Fitness account password securely with email verification.",
};

function LoadingFallback() {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center text-neutral-500 min-h-[300px]">
      <Loader2 className="w-8 h-8 text-[#71AC16] animate-spin mb-3" />
      <p className="text-sm">Loading security portal...</p>
    </div>
  );
}

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<LoadingFallback />}>
        <ForgotPasswordCard />
      </Suspense>
    </AuthLayout>
  );
}
