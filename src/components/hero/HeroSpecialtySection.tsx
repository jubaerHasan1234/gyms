import React from "react";
import { HeroSpecialtyDroplets } from "./HeroSpecialtyDroplets";
import { HeroSpecialtyCard, SpecialtyItem } from "./HeroSpecialtyCard";

export const servicePath =
  "M 218 118 C 216 356 228 371 176 369 H 143 H 75 H 27.5 C -6 368 -7 368 -8 299 V -20 C -8 -35 -4 -59 17 -56 C 66 -45 69 -44 111 -31 L 194 -1 C 221 14 218 75 218 58 Z";

export const DEFAULT_SPECIALTIES: SpecialtyItem[] = [
  { title: "Ground running", image: "/images/running.png" },
  { title: "Yoga Assistance", image: "/images/yoga.png" },
  { title: "Personal Trainer", image: "/images/personalTesting.png" },
];

export const HeroSpecialtySection: React.FC = () => {
  return (
    <div
      className="absolute z-10 select-none pointer-events-auto"
      style={{
        left: "1.5%",
        top: "36.5%",
        width: "29%",
        height: "59.48%",
      }}
    >
      {/* Layer 1: Green Service Shape Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="-8 -59 236 430"
          preserveAspectRatio="none"
          className="w-full h-full filter drop-shadow-md"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={servicePath}
            fill="#71AC16"
            className="transition-all duration-300"
          />
        </svg>
      </div>

      {/* Layer 2: Content truly nested inside the green shape (expanded width on left side) */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between pl-[1.5%] pr-[5.5%] pt-[0.8%] pb-[3.5%] text-white">
        
        {/* 1. Top Droplet Capsule Pattern: full design starting significantly more to the left */}
        <HeroSpecialtyDroplets />

        {/* 2. Heading: OUR SPECIALTY (Shifted towards cards) */}
        <div className="w-full px-[0.5%] mb-[0.7cqw]">
          <h2
            className="font-tilt uppercase tracking-tight text-white leading-none font-normal"
            style={{
              fontSize: "2.4cqw",
              letterSpacing: "-0.04em",
            }}
          >
            Our Specialty
          </h2>
        </div>

        {/* 3. Three Specialty Cards (Spanning with side margins and bottom gap) */}
        <div
          className="w-full flex flex-col justify-start"
          style={{ gap: "0.95cqw" }}
        >
          {DEFAULT_SPECIALTIES.map((item, index) => (
            <HeroSpecialtyCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSpecialtySection;
