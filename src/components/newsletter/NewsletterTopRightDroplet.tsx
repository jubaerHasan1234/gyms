import React from "react";

/**
 * VerticalDroplet:
 * D-shaped vertical capsule matching the top-right pattern from the screenshot:
 * Curved round LEFT side, straight vertical RIGHT side.
 */
const VerticalDroplet: React.FC<{
  cx: number;
  cy: number;
  width?: number;
  height?: number;
  color?: string;
}> = ({ cx, cy, width = 6.5, height = 15, color = "#CBD5E1" }) => {
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

export interface NewsletterTopRightDropletProps {
  color?: string;
  className?: string;
}

/**
 * NewsletterTopRightDroplet:
 * Exact 4-column vertical droplet pattern as seen in the user's reference screenshot:
 * Kept visible and identical across desktop, tablet, and mobile.
 */
export const NewsletterTopRightDroplet: React.FC<NewsletterTopRightDropletProps> = ({
  color = "#CBD5E1",
  className = "",
}) => (
  <svg
    className={`w-[34px] sm:w-[48px] md:w-[62px] lg:w-[70px] h-auto overflow-visible select-none pointer-events-none ${className}`}
    viewBox="0 0 66 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Column 1 (x: 2) - Row 4 */}
    <VerticalDroplet cx={2} cy={56} width={6.5} height={15} color={color} />

    {/* Column 2 (x: 19) - Rows 2, 3, 4 */}
    <VerticalDroplet cx={19} cy={20} width={6.5} height={15} color={color} />
    <VerticalDroplet cx={19} cy={38} width={6.5} height={15} color={color} />
    <VerticalDroplet cx={19} cy={56} width={6.5} height={15} color={color} />

    {/* Column 3 (x: 36) - Rows 1, 2, 4 */}
    <VerticalDroplet cx={36} cy={2} width={6.5} height={15} color={color} />
    <VerticalDroplet cx={36} cy={20} width={6.5} height={15} color={color} />
    <VerticalDroplet cx={36} cy={56} width={6.5} height={15} color={color} />

    {/* Column 4 (x: 53) - Rows 1, 3 */}
    <VerticalDroplet cx={53} cy={2} width={6.5} height={15} color={color} />
    <VerticalDroplet cx={53} cy={38} width={6.5} height={15} color={color} />
  </svg>
);

export default NewsletterTopRightDroplet;
