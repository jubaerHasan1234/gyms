import React from "react";

export const ProductsSectionHeader: React.FC = () => {
  return (
    <>
      {/* 1. Fully Responsive Header with Title */}
      <div className="w-full relative pt-2 sm:pt-4 pb-1 flex items-center justify-between overflow-visible z-10">
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A2B2E] tracking-tight leading-tight whitespace-nowrap pb-0"
          >
            Our Products
          </h2>
        </div>
      </div>

      {/* 2. Responsive Subtitle below Header */}
      <div className="w-full mb-5 sm:mb-7 md:mb-8 mt-1 sm:mt-1.5 relative z-10">
        <p
          className="text-xs sm:text-sm md:text-base font-medium text-slate-500 max-w-2xl leading-relaxed"
        >
          Fuel Your Workouts with Protein-Packed Nutrition
        </p>
      </div>
    </>
  );
};

export default ProductsSectionHeader;
