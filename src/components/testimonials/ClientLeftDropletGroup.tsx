import React from "react";

export interface ClientLeftDropletGroupProps {
  color?: string;
  className?: string;
}

/**
 * Top-Left Droplets Pattern:
 * Sliced capsule / bowl droplets with curved convex bottom and flat top,
 * tilted ~ -16° upwards-right, exactly matching the user's reference screenshot:
 * 9 droplets arranged in a dynamic wave above "What Our Clients Are Saying".
 */
export const ClientLeftDropletGroup: React.FC<ClientLeftDropletGroupProps> = ({
  color = "#D1D5DB",
  className = "",
}) => {
  // Curved bottom bowl droplet:
  // Flat top edge, rounded corner radiuses on the sides, deeply curved smooth elliptical bottom
  const renderCurvedBottomDroplet = (
    cx: number,
    cy: number,
    rot = -16,
    w = 21,
    h = 9.5,
    cr = 2.2,
    key = `d-${cx}-${cy}`
  ) => {
    const hw = w / 2;
    const hh = h / 2;
    const d = `
      M ${-hw + cr} ${-hh}
      L ${hw - cr} ${-hh}
      Q ${hw} ${-hh} ${hw} ${-hh + cr}
      A ${hw} ${h - cr} 0 0 1 ${-hw} ${-hh + cr}
      Q ${-hw} ${-hh} ${-hw + cr} ${-hh}
      Z
    `;

    return (
      <path
        key={key}
        d={d}
        fill={color}
        transform={`translate(${cx}, ${cy}) rotate(${rot})`}
      />
    );
  };

  return (
    <svg
      viewBox="0 0 144 86"
      className={`w-[78px] sm:w-[88px] md:w-[100px] h-auto overflow-visible select-none pointer-events-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 1. Topmost center-peak droplet */}
      {renderCurvedBottomDroplet(76, 11, -16, 21, 9.5, 2.2, "d-top")}

      {/* 2. Left column (2 droplets) */}
      {renderCurvedBottomDroplet(24, 25, -17, 21, 9.5, 2.2, "d-left-top")}
      {renderCurvedBottomDroplet(30, 49, -16, 21, 9.5, 2.2, "d-left-bot")}

      {/* 3. Middle-left column (2 droplets) */}
      {renderCurvedBottomDroplet(56, 40, -17, 21, 9.5, 2.2, "d-mid-top")}
      {renderCurvedBottomDroplet(62, 63, -17, 21, 9.5, 2.2, "d-mid-bot")}

      {/* 4. Center-right lower droplet */}
      {renderCurvedBottomDroplet(88, 54, -16, 21, 9.5, 2.2, "d-center-right")}

      {/* 5. Right column (3 descending droplets) */}
      {renderCurvedBottomDroplet(108, 25, -16, 21, 9.5, 2.2, "d-right-top")}
      {renderCurvedBottomDroplet(114, 49, -16, 21, 9.5, 2.2, "d-right-mid")}
      {renderCurvedBottomDroplet(120, 72, -17, 21, 9.5, 2.2, "d-right-bot")}
    </svg>
  );
};

export default ClientLeftDropletGroup;
