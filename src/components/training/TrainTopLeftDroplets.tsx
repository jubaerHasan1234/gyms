import React from "react";

export interface TrainTopLeftDropletsProps {
  color?: string;
}

/**
 * Top-Left Droplet:
 * Horizontal dome shapes: Curved round TOP dome with soft rounded corner radius (cr) on the bottom edge
 * Matches the user request ("droplet some radius add") so the corners are smoothly rounded and organic.
 */
export const TrainTopLeftDroplets: React.FC<TrainTopLeftDropletsProps> = ({
  color = "#D1D5DB",
}) => {
  // Curved dome top, smooth rounded bottom corners with corner radius `cr`:
  const domeD = (x: number, y: number, w = 15, h = 8, cr = 1.6) =>
    `M ${x} ${y + h - cr}
     A ${w / 2} ${h} 0 0 1 ${x + w} ${y + h - cr}
     Q ${x + w} ${y + h} ${x + w - cr} ${y + h}
     L ${x + cr} ${y + h}
     Q ${x} ${y + h} ${x} ${y + h - cr}
     Z`;

  return (
    <svg
      viewBox="0 0 84 62"
      className="w-[70px] sm:w-[82px] md:w-[96px] h-auto overflow-visible select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Row 0 */}
      <path d={domeD(4, 2)} fill={color} />

      {/* Row 1 */}
      <path d={domeD(4, 16)} fill={color} />
      <path d={domeD(24, 16)} fill={color} />
      <path d={domeD(44, 16)} fill={color} />

      {/* Row 2 */}
      <path d={domeD(4, 30)} fill={color} />
      <path d={domeD(44, 30)} fill={color} />
      <path d={domeD(64, 30)} fill={color} />

      {/* Row 3 */}
      <path d={domeD(24, 44)} fill={color} />
      <path d={domeD(64, 44)} fill={color} />
    </svg>
  );
};

export default TrainTopLeftDroplets;
