import React from "react";

export interface ClientRightDropletGroupProps {
  color?: string;
  className?: string;
}

/**
 * Top-Right Droplets Pattern:
 * Sliced dome droplets with curved convex top and flat bottom (with soft rounded corners),
 * matching the user's reference screenshot:
 * Row 1 (top):    [Col 1]
 * Row 2:          [Col 1]  [Col 2]  [Col 3]
 * Row 3:          [Col 1]           [Col 3]  [Col 4 (right edge)]
 * Row 4 (bottom):          [Col 2]           [Col 4 (right edge)]
 */
export const ClientRightDropletGroup: React.FC<ClientRightDropletGroupProps> = ({
  color = "#D1D5DB",
  className = "",
}) => {
  // Curved top dome droplet:
  // Smooth semicircular/elliptical dome top, flat bottom horizontal edge, and softly rounded bottom corners
  const renderCurvedTopDome = (
    x: number,
    y: number,
    key: string,
    w = 19,
    h = 9.5,
    cr = 1.8
  ) => {
    const d = `
      M ${x} ${y + h - cr}
      A ${w / 2} ${h} 0 0 1 ${x + w} ${y + h - cr}
      Q ${x + w} ${y + h} ${x + w - cr} ${y + h}
      L ${x + cr} ${y + h}
      Q ${x} ${y + h} ${x} ${y + h - cr}
      Z
    `;
    return <path key={key} d={d} fill={color} />;
  };

  return (
    <svg
      viewBox="0 0 88 58"
      className={`w-[68px] sm:w-[80px] md:w-[92px] lg:w-[100px] h-auto overflow-visible select-none pointer-events-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Row 1 (top): Col 1 */}
      {renderCurvedTopDome(2, 2, "r-1-1")}

      {/* Row 2: Col 1, Col 2, Col 3 */}
      {renderCurvedTopDome(2, 17, "r-2-1")}
      {renderCurvedTopDome(24, 17, "r-2-2")}
      {renderCurvedTopDome(46, 17, "r-2-3")}

      {/* Row 3: Col 1, Col 3, Col 4 (flush to right edge) */}
      {renderCurvedTopDome(2, 32, "r-3-1")}
      {renderCurvedTopDome(46, 32, "r-3-3")}
      {renderCurvedTopDome(68, 32, "r-3-4")}

      {/* Row 4 (bottom): Col 2, Col 4 (flush to right edge) */}
      {renderCurvedTopDome(24, 47, "r-4-2")}
      {renderCurvedTopDome(68, 47, "r-4-4")}
    </svg>
  );
};

export default ClientRightDropletGroup;
