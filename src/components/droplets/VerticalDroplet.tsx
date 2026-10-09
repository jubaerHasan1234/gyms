import React from "react";

export interface VerticalDropletProps {
  cx: number;
  cy: number;
  width?: number;
  height?: number;
  color?: string;
}

/**
 * VerticalDroplet:
 * D-shaped half capsule matching the reference screenshot:
 * Curved round LEFT side, straight vertical RIGHT side.
 */
export const VerticalDroplet: React.FC<VerticalDropletProps> = ({
  cx,
  cy,
  width = 6,
  height = 14,
  color = "#D1D5DB",
}) => {
  const r = width;
  return (
    <path
      d={`M ${cx + width} ${cy}
          A ${r} ${height / 2} 0 0 0 ${cx + width} ${cy + height}
          Z`}
      fill={color}
    />
  );
};

export default VerticalDroplet;
