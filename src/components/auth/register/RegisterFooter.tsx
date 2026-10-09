import React from "react";
import Link from "next/link";
import { LogIn } from "lucide-react";

export const RegisterFooter: React.FC = () => {
  return (
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
  );
};
