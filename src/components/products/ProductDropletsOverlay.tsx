import React from "react";
import { VerticalDroplet, VerticalDropletProps } from "../droplets/VerticalDroplet";
import { DropletSvgPattern, DropletSvgPatternProps } from "../droplets/DropletSvgPattern";

export { VerticalDroplet, DropletSvgPattern };
export type { VerticalDropletProps, DropletSvgPatternProps };

/**
 * ProductDropletsOverlay:
 * Pure decorative droplet component containing JUST TWO ELEMENTS:
 * 1. Left side droplet (positioned right after the title)
 * 2. Right side droplet (positioned at the right edge)
 *
 * Exactly matches the reference design.
 */
export interface ProductDropletsOverlayProps {
  color?: string;
  className?: string;
}

export const ProductDropletsOverlay: React.FC<ProductDropletsOverlayProps> = ({
  color = "#D1D5DB",
  className = "",
}) => {
  return (
    <div
      className={`w-full relative [container-type:inline-size] flex items-end justify-between pointer-events-none select-none overflow-visible ${className}`}
    >
      {/* 1. Left Side Droplet - reduced margin on mobile, expanding up to desktop */}
      <div 
        className="flex-shrink-0 -mb-1"
        style={{
          marginLeft: "clamp(24px, 16cqw, 230px)",
        }}
      >
        <DropletSvgPattern color={color} />
      </div>

      {/* 2. Right Side Droplet - aligned to the rightmost edge */}
      <div className="flex-shrink-0 -mb-1">
        <DropletSvgPattern color={color} />
      </div>
    </div>
  );
};

export default ProductDropletsOverlay;
