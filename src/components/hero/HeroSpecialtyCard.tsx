import React from "react";
import Image from "../NextImageShim";

export interface SpecialtyItem {
  title: string;
  image: string;
}

export interface HeroSpecialtyCardProps {
  item: SpecialtyItem;
  index: number;
}

export const HeroSpecialtyCard: React.FC<HeroSpecialtyCardProps> = ({ item, index }) => {
  const isPersonalTrainer = item.title.toLowerCase().includes("personal") || index === 2;

  return (
    <div
      className={`flex items-center justify-start border border-white/50 bg-white/15 hover:bg-white/25 transition-all w-full text-left shadow-sm group backdrop-blur-[2px] cursor-default select-none ${
        isPersonalTrainer ? "" : "rounded-[2.7cqw]"
      }`}
      style={{
        minHeight: "6.8cqw",
        padding: "1.25cqw 1.35cqw",
        gap: "1.2cqw",
        ...(isPersonalTrainer
          ? {
              borderRadius: "4cqw 4cqw 8.5cqw 8.5cqw",
            }
          : {}),
      }}
    >
      {/* Left Icon Container: Rounded square with thin white border */}
      <div
        className="flex-shrink-0 bg-white/[0.08] border border-white/50 flex items-center justify-center overflow-hidden rounded-[1.4cqw]"
        style={{
          width: "5cqw",
          height: "5cqw",
        }}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={44}
          height={44}
          className="object-contain w-[80%] h-[80%] group-hover:scale-110 transition-transform duration-200"
        />
      </div>

      {/* Right Title: Fully responsive cqw typography with no minimum clamp blowout on mobile */}
      <span
        className="font-tilt text-white whitespace-nowrap leading-none font-normal"
        style={{
          fontSize: "1.7cqw",
          letterSpacing: "-0.03em",
        }}
      >
        {item.title}
      </span>
    </div>
  );
};

export default HeroSpecialtyCard;
