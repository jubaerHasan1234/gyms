import React from "react";

export interface TrainTopRightDropletsProps {
  color?: string;
}

/**
 * Top-Right Droplet:
 * Vertical D-shaped droplets (curved left side, soft rounded straight right corners)
 * Column 1 (left): row 4 (bottom)
 * Column 2: row 1, row 3, row 4
 * Column 3: row 0, row 1, row 4
 * Column 4 (right): row 0, row 2
 */
export const TrainTopRightDroplets: React.FC<TrainTopRightDropletsProps> = ({
  color = "#D1D5DB",
}) => {
  // D-droplet with subtle rounded radius on the right vertical corners:
  const dDroplet = (x: number, y: number, w = 5.5, h = 13, cr = 1.4) =>
    `M ${x + w} ${y + cr}
     L ${x + w} ${y + h - cr}
     Q ${x + w} ${y + h} ${x + w - cr} ${y + h}
     A ${w} ${h / 2} 0 0 1 ${x + w - cr} ${y}
     Q ${x + w} ${y} ${x + w} ${y + cr}
     Z`;

  return (
    <svg
      viewBox="0 0 68 76"
      className="w-[52px] sm:w-[60px] md:w-[68px] h-auto overflow-visible select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Col 1 */}
      <path d={dDroplet(2, 54)} fill={color} />

      {/* Col 2 */}
      <path d={dDroplet(18, 18)} fill={color} />
      <path d={dDroplet(18, 36)} fill={color} />
      <path d={dDroplet(18, 54)} fill={color} />

      {/* Col 3 */}
      <path d={dDroplet(34, 0)} fill={color} />
      <path d={dDroplet(34, 18)} fill={color} />
      <path d={dDroplet(34, 54)} fill={color} />

      {/* Col 4 */}
      <path d={dDroplet(50, 0)} fill={color} />
      <path d={dDroplet(50, 36)} fill={color} />
    </svg>
  );
};

export default TrainTopRightDroplets;
