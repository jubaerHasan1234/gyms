import React from "react";

export const ProductsHeaderWithDroplets: React.FC = () => {
  return (
    <div className="w-full relative select-none pt-0 mt-0 pb-1 overflow-visible">
      {/* 
        Title Component:
        Clean, independent text element in natural document flow.
        (Droplet overlay is controlled directly in App.tsx below HeroSection)
      */}
      <div className="w-full relative flex items-end pl-0 h-[40px] sm:h-[50px] md:h-[60px]">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2A2B2E] tracking-tight leading-none z-10 whitespace-nowrap pb-0">
          Our Products
        </h2>
      </div>
    </div>
  );
};

export default ProductsHeaderWithDroplets;
