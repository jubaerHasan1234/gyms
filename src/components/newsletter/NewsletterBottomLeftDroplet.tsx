import React from "react";

export interface NewsletterBottomLeftDropletProps {
  color?: string;
  className?: string;
}

/**
 * NewsletterBottomLeftDroplet:
 * Horizontal dome-shaped droplet pattern with CURVED TOP and flat base
 * as requested ("this droplet curved top"):
 * Kept visible and identical across desktop, tablet, and mobile.
 */
export const NewsletterBottomLeftDroplet: React.FC<NewsletterBottomLeftDropletProps> = ({
  color = "#CBD5E1",
  className = "",
}) => {
  // Curved TOP dome shape, flat bottom with smooth corners
  const renderDome = (x: number, y: number, key: string, w = 16, h = 8, cr = 1.2) => (
    <path
      key={key}
      d={`M ${x} ${y + h - cr}
          A ${w / 2} ${h} 0 0 1 ${x + w} ${y + h - cr}
          Q ${x + w} ${y + h} ${x + w - cr} ${y + h}
          L ${x + cr} ${y + h}
          Q ${x} ${y + h} ${x} ${y + h - cr}
          Z`}
      fill={color}
    />
  );

  return (
    <svg
      className={`w-[48px] sm:w-[68px] md:w-[88px] lg:w-[98px] h-auto overflow-visible select-none pointer-events-none ${className}`}
      viewBox="0 0 106 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Row 1 (top) */}
      {renderDome(14, 2, "b-r1-1")}

      {/* Row 2 */}
      {renderDome(0, 16, "b-r2-1")}
      {renderDome(28, 16, "b-r2-2")}
      {renderDome(56, 16, "b-r2-3")}

      {/* Row 3 */}
      {renderDome(0, 32, "b-r3-1")}
      {renderDome(42, 32, "b-r3-2")}
      {renderDome(84, 32, "b-r3-3")}

      {/* Row 4 (bottom) */}
      {renderDome(28, 48, "b-r4-1")}
      {renderDome(84, 48, "b-r4-2")}
    </svg>
  );
};

export default NewsletterBottomLeftDroplet;
