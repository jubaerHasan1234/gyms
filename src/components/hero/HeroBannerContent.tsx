import React from "react";
import { HeroDecorativeDroplets } from "./HeroDecorativeDroplets";
import { HeroTypography } from "./HeroTypography";
import { HeroActionButtons } from "./HeroActionButtons";

export const HeroBannerContent: React.FC = () => {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-visible">
      {/* Content Aligned to Center Right following reference design */}
      <div
        className="absolute flex flex-col items-end overflow-visible"
        style={{
          right: "2%",
          bottom: "23%",
          width: "61%",
        }}
      >
        <div className="relative w-full flex justify-end overflow-visible">
          <div className="relative w-full max-w-[100%] overflow-visible">
            {/* User uploaded image hero-bodybuilders.jpg */}
            <img
              src="/images/hero-bodybuilders.jpg"
              alt="Power Your Potential - Bodybuilders"
              width={1200}
              height={750}
              className="h-auto w-full object-contain block drop-shadow-2xl"
              loading="eager"
            />

            {/* Decorative top-right droplet pattern matching the exact uploaded reference screenshot */}
            <HeroDecorativeDroplets />

            {/* TEXT: Line 1 "POWER YOUR", Line 2 below "PONTETIALE" with Satoshi */}
            <HeroTypography />
          </div>
        </div>
      </div>

      {/* BUTTON SECTION: Directly below the typography aligned to the left of the P in POWER / PONTETIAL */}
      <HeroActionButtons />
    </div>
  );
};

export default HeroBannerContent;
