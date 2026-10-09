import React from "react";

interface RegisterHeaderProps {
  title?: string;
  subtitle?: string;
}

export const RegisterHeader: React.FC<RegisterHeaderProps> = ({
  title,
  subtitle = "Join Kratos Fitness to unlock your training regimens and club privileges",
}) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 uppercase tracking-tight">
        {title ? (
          <span>{title}</span>
        ) : (
          <>
            Create Your <span className="text-[#71AC16]">Account</span>
          </>
        )}
      </h1>
      <p className="text-neutral-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};
