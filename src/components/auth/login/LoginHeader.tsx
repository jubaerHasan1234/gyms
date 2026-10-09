import React from "react";

interface LoginHeaderProps {
  title?: string;
  subtitle?: string;
}

export const LoginHeader: React.FC<LoginHeaderProps> = ({
  title,
  subtitle = "Log in to your Kratos Fitness account to continue your training",
}) => {
  return (
    <div className="text-center mb-7">
      <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 uppercase tracking-tight">
        {title ? (
          <span>{title}</span>
        ) : (
          <>
            Welcome Back, <span className="text-[#71AC16]">Warrior</span>
          </>
        )}
      </h1>
      <p className="text-neutral-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};
