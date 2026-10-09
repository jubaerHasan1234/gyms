import React, { Suspense } from "react";
import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/common/AuthLayout";
import { LoginCard } from "@/components/auth/login/LoginCard";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Member Sign In | Kratos Fitness",
  description:
    "Log in to your Kratos Fitness account to access your customized high-performance workouts, gym schedule, and club privileges.",
};

function LoadingFallback() {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center text-neutral-500 min-h-[300px]">
      <Loader2 className="w-8 h-8 text-[#71AC16] animate-spin mb-3" />
      <p className="text-sm">Loading member portal...</p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<LoadingFallback />}>
        <LoginCard />
      </Suspense>
    </AuthLayout>
  );
}
