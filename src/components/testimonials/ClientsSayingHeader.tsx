import React from "react";
import { ClientLeftDropletGroup } from "./ClientLeftDropletGroup";
import { ClientRightDropletGroup } from "./ClientRightDropletGroup";

export const ClientsSayingHeader: React.FC = () => {
  return (
    <div className="w-full relative flex items-start justify-between pb-3 sm:pb-5">
      {/* Left column: Droplet and Title/Subtitle */}
      <div className="flex flex-col items-start relative z-10 max-w-[80%]">
        {/* Top-Left Droplet Pattern */}
        <div className="mb-2 sm:mb-3 pointer-events-none">
          <ClientLeftDropletGroup />
        </div>

        {/* Section Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#23262F] tracking-tight leading-tight"
        >
          What Our Clients Are Saying
        </h2>

        {/* Section Subtitle */}
        <p
          className="text-xs sm:text-sm md:text-base font-medium text-slate-500 mt-1 sm:mt-1.5 leading-relaxed"
        >
          Real Stories, Real Results — Hear From Our Athletes
        </p>
      </div>

      {/* Right column: Top-Right Droplet Pattern adjusted */}
      <div className="self-end mb-2 md:mb-4 flex-shrink-0 pointer-events-none ml-auto">
        <ClientRightDropletGroup />
      </div>
    </div>
  );
};

export default ClientsSayingHeader;
