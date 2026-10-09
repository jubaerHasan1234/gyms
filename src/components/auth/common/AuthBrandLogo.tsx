import React from "react";
import Link from "next/link";

interface AuthBrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const AuthBrandLogo: React.FC<AuthBrandLogoProps> = ({
  className = "",
  showSubtitle = true,
}) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group select-none ${className}`}
      aria-label="Kratos Fitness Home"
    >
      {/* Lime circular icon matching HeroTopNav */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#71AC16] flex items-center justify-center shadow-md shadow-[#71AC16]/20 group-hover:scale-105 active:scale-95 transition-transform flex-shrink-0">
        <img
          src="/images/logo.png"
          alt="Kratos Logo"
          width={32}
          height={32}
          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
          style={{ transform: "rotate(-45deg)" }}
        />
      </div>

      <div className="flex flex-col text-left">
        <span className="text-lg sm:text-xl font-black tracking-wider text-neutral-900 uppercase group-hover:text-[#71AC16] transition-colors leading-none">
          KRATOS <span className="text-[#71AC16]">FITNESS</span>
        </span>
        {showSubtitle && (
          <span className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase mt-1">
            POWER YOUR POTENTIAL
          </span>
        )}
      </div>
    </Link>
  );
};
