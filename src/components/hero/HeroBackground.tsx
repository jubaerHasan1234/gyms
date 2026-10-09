import React from "react";

export const heroPath =
  "M 554 87 C 620 86 603 108 607 208 V 317 L 607 391 C 609 576 618 576 534 573 H 292 C 181 572 178 572 178 484 L 176 355 V 312 C 176 276 181 241 149 231 L 105 216 L 64 203 C 11 187 0 182 -7 164 C -7 164 -34 74 40 82 C 109 69 77 14 114 20 L 354 23 C 461 20 359 78 464 84 Z";

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hero Shape (Black) */}
        <path
          d={heroPath}
          fill="black"
          transform="translate(30, 0) scale(1.266, 1)"
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
    </div>
  );
};

export default HeroBackground;
