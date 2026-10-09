import React from 'react';

/**
 * ShapePatternSvg reproduces the exact decorative droplet / bowl capsule patterns
 * from the uploaded screenshot.
 *
 * Each droplet in the prompt is a horizontal half-capsule / bowl:
 * - Straight flat top edge
 * - Smooth downward rounded semicircular curve
 * - Width ~ 16px, Height ~ 8px
 *
 * Coordinates match the columns directly beneath Follow On: [f] [IG] [X] [in]
 */
export const ShapePatternSvg: React.FC = () => {
  // Exact bowl droplet path: flat top horizontal, rounded semicircle bowl at the bottom
  const renderBowl = (x: number, y: number, key: string, fill = "#585B62") => (
    <path
      key={key}
      d={`M ${x} ${y} h 16 q 1 0 1 1 v 0.5 c 0 6.5 -8 6.5 -8 6.5 s -8 0 -8 -6.5 v -0.5 q 0 -1 1 -1 z`}
      fill={fill}
      opacity={0.88}
    />
  );

  /**
   * Exact positions from the prompt image:
   * Col 1 (beneath "Follow On:"):
   *   y: 8, y: 22
   * Col 2 (between Follow On and 'f'):
   *   y: 15, y: 29
   * Col 3 (aligned with 'f' lower):
   *   y: 24
   * Col 4 (beneath 'f'):
   *   y: 5, y: 33, y: 47
   * Col 5 (beneath 'IG'):
   *   y: 1, y: 15, y: 43, y: 57
   * Col 6 (beneath 'X'):
   *   y: 10, y: 20, y: 47, y: 61
   * Col 7 (beneath 'in'):
   *   y: 10, y: 31, y: 47, y: 61
   */
  const droplets = [
    // Column 1 (below Follow On)
    { x: 4, y: 9 },
    { x: 4, y: 22 },

    // Column 2 (offset)
    { x: 26, y: 16 },
    { x: 26, y: 29 },

    // Column 3 (further down)
    { x: 48, y: 24 },

    // Column 4 (under 'f')
    { x: 70, y: 7 },
    { x: 70, y: 34 },
    { x: 70, y: 47 },

    // Column 5 (under 'IG')
    { x: 92, y: 2 },
    { x: 92, y: 15 },
    { x: 92, y: 43 },
    { x: 92, y: 56 },

    // Column 6 (under 'X')
    { x: 114, y: 10 },
    { x: 114, y: 20 },
    { x: 114, y: 47 },
    { x: 114, y: 60 },

    // Column 7 (under 'in')
    { x: 136, y: 10 },
    { x: 136, y: 30 },
    { x: 136, y: 47 },
    { x: 136, y: 60 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden select-none">
      {/* Top-Left Pattern inside Black Hero (below social row) matching exact uploaded screenshot */}
      <svg
        className="absolute pointer-events-none"
        style={{
          top: "23.8%",
          left: "7.2%",
          width: "15.5cqw",
          height: "8.5cqw",
        }}
        viewBox="0 0 160 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {droplets.map((d, i) => renderBowl(d.x, d.y, `bowl-${i}`))}
      </svg>
    </div>
  );
};

export default ShapePatternSvg;
