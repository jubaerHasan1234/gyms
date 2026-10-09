import React, { ReactNode } from "react";
import { AuthBrandLogo } from "./AuthBrandLogo";

interface AuthLayoutProps {
  children: ReactNode;
  showLogo?: boolean;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  showLogo = true,
}) => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col items-center justify-center px-4 py-8 sm:py-14 select-text selection:bg-[#71AC16] selection:text-white">
      {/* Centered content wrapper - Clean, open layout with no cards or borders */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {showLogo && (
          <div className="mb-8">
            <AuthBrandLogo showSubtitle={true} />
          </div>
        )}

        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};
