import React from "react";
import Link from "next/link";
import { UserPlus } from "lucide-react";

export const LoginFooter: React.FC = () => {
  return (
    <div className="mt-8 pt-5 border-t border-neutral-200 text-center">
      <p className="text-xs text-neutral-600 flex items-center justify-center gap-2">
        <span>Don&apos;t have an account yet?</span>
        <Link
          href="/register"
          className="text-[#71AC16] hover:text-[#5d8d12] font-bold inline-flex items-center gap-1 hover:underline transition-colors"
        >
          <UserPlus className="w-3.5 h-3.5" />
          <span>Register here</span>
        </Link>
      </p>
    </div>
  );
};
