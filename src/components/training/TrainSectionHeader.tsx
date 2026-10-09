import React from "react";
import { TrainTopLeftDroplets } from "./TrainTopLeftDroplets";
import { TrainTopRightDroplets } from "./TrainTopRightDroplets";

export const TrainSectionHeader: React.FC = () => {
  return (
    <div className="w-full relative flex items-start justify-between pb-3 sm:pb-4">
      {/* Left column: Droplet and Title/Subtitle */}
      <div className="flex flex-col items-start relative z-10 max-w-[80%]">
        {/* Top-Left Droplet Pattern */}
        <div className="mb-2 sm:mb-3 pointer-events-none">
          <TrainTopLeftDroplets />
        </div>

        {/* Section Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A2B2E] tracking-tight leading-tight"
        >
          Train Like a Champion
        </h2>

        {/* Section Subtitle */}
        <p
          className="text-xs sm:text-sm md:text-base font-medium text-slate-500 mt-1 sm:mt-1.5 leading-relaxed"
        >
          Unleash Your Power with Expert Boxing Training
        </p>
      </div>

      {/* Right column: Top-Right Droplet Pattern anchored cleanly */}
      <div className="pt-2 sm:pt-4 flex-shrink-0 pointer-events-none">
        <TrainTopRightDroplets />
      </div>
    </div>
  );
};

export default TrainSectionHeader;
