import React from "react";
import { VerticalDroplet } from "./VerticalDroplet";

export interface DropletSvgPatternProps {
  color?: string;
  className?: string;
}

/**
 * DropletSvgPattern:
 * Exact 4-column pattern from user screenshot:
 * Row 1 (top):       col3, col4
 * Row 2:             col2, col3
 * Row 3:             col2, col4
 * Row 4 (bottom):    col1, col2, col3
 */
export const DropletSvgPattern: React.FC<DropletSvgPatternProps> = ({
  color = "#D1D5DB",
  className = "",
}) => (
  <svg
    className={`h-[48px] sm:h-[56px] md:h-[62px] w-[54px] sm:w-[62px] md:w-[70px] overflow-visible ${className}`}
    viewBox="0 0 68 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Column 1 (x: 2) - bottom only */}
    <VerticalDroplet cx={2} cy={54} width={5.5} height={14} color={color} />

    {/* Column 2 (x: 18) - rows 2, 3, 4 */}
    <VerticalDroplet cx={18} cy={18} width={5.5} height={14} color={color} />
    <VerticalDroplet cx={18} cy={36} width={5.5} height={14} color={color} />
    <VerticalDroplet cx={18} cy={54} width={5.5} height={14} color={color} />

    {/* Column 3 (x: 34) - rows 1, 2, 4 */}
    <VerticalDroplet cx={34} cy={0} width={5.5} height={14} color={color} />
    <VerticalDroplet cx={34} cy={18} width={5.5} height={14} color={color} />
    <VerticalDroplet cx={34} cy={54} width={5.5} height={14} color={color} />

    {/* Column 4 (x: 50) - rows 1, 3 */}
    <VerticalDroplet cx={50} cy={0} width={5.5} height={14} color={color} />
    <VerticalDroplet cx={50} cy={36} width={5.5} height={14} color={color} />
  </svg>
);

export default DropletSvgPattern;
