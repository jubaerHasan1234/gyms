import React, { Suspense } from "react";
import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/common/AuthLayout";
import { RegisterCard } from "@/components/auth/register/RegisterCard";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Join Kratos Fitness | Athlete Registration",
  description:
    "Register for Kratos Fitness to unlock elite personal training, specialized workout regimens, nutrition guidance, and club memberships.",
};

function LoadingFallback() {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center text-neutral-500 min-h-[300px]">
      <Loader2 className="w-8 h-8 text-[#71AC16] animate-spin mb-3" />
      <p className="text-sm">Loading registration...</p>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<LoadingFallback />}>
        <RegisterCard />
      </Suspense>
    </AuthLayout>
  );
}
