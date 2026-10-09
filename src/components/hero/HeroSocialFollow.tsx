import React from "react";

export const HeroSocialFollow: React.FC = () => {
  return (
    <div
      className="absolute z-20 flex items-center text-white font-normal select-none"
      style={{
        top: "20.5%",
        left: "7.2%",
        gap: "1.2cqw",
        fontSize: "1.3cqw",
      }}
    >
      <span className="text-white font-bold tracking-tight">Follow On:</span>
      <div className="flex items-center text-white" style={{ gap: "1.15cqw" }}>
        {/* Facebook 'f' */}
        <span className="hover:text-[#71AC16] cursor-pointer font-bold text-[1.4cqw] leading-none">f</span>
        {/* Instagram camera icon outline with rounded inner lens and flash dot */}
        <svg
          className="hover:text-[#71AC16] cursor-pointer"
          style={{ width: "1.4cqw", height: "1.4cqw" }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="6" ry="6" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
        </svg>
        {/* X (formerly Twitter) logo */}
        <span className="hover:text-[#71AC16] cursor-pointer font-black text-[1.3cqw] leading-none">𝕏</span>
        {/* LinkedIn 'in' */}
        <span className="hover:text-[#71AC16] cursor-pointer font-bold text-[1.3cqw] leading-none tracking-tighter">in</span>
      </div>
    </div>
  );
};

export default HeroSocialFollow;
