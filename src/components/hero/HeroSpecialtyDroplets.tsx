import React, { ReactElement } from "react";

// Helper to render authentic Figma droplet/capsule shapes (flat top with subtle rounded corners, curved bowl bottom)
export const renderFigmaDroplet = (
  x: number,
  y: number,
  key: string,
  w: number = 21,
  h: number = 10.5,
  fill: string = "#89C53A"
): ReactElement => (
  <path
    key={key}
    d={`M ${x + 1.5} ${y} 
       h ${w - 3} 
       q 1.5 0 1.5 1.5 
       v 0.5 
       c 0 ${h - 2} -${w / 2} ${h - 2} -${w / 2} ${h - 2} 
       s -${w / 2} 0 -${w / 2} -${h - 2} 
       v -0.5 
       q 0 -1.5 1.5 -1.5 
       z`}
    fill={fill}
  />
);

export const HeroSpecialtyDroplets: React.FC = () => {
  return (
    <div className="w-full flex justify-start -ml-[13%] mt-[1.4cqw] mb-[0.6cqw]">
      <svg
        viewBox="-48 -2 250 84"
        className="w-full h-auto"
        style={{ maxHeight: "7cqw" }}
      >
        {/* Row 1: 1 droplet in Col 2 */}
        {renderFigmaDroplet(-4, 8, "f-r1-c2", 21, 10.5)}

        {/* Row 2: 4 droplets in Col 1, Col 2, Col 3, Col 4 */}
        {renderFigmaDroplet(-42, 26, "f-r2-c1", 21, 10.5)}
        {renderFigmaDroplet(-4, 26, "f-r2-c2", 21, 10.5)}
        {renderFigmaDroplet(30, 26, "f-r2-c3", 21, 10.5)}
        {renderFigmaDroplet(64, 26, "f-r2-c4", 21, 10.5)}

        {/* Row 3: 5 droplets in Col 1, Col 2, Col 3, Col 5, Col 7 */}
        {renderFigmaDroplet(-42, 44, "f-r3-c1", 21, 10.5)}
        {renderFigmaDroplet(-4, 44, "f-r3-c2", 21, 10.5)}
        {renderFigmaDroplet(30, 44, "f-r3-c3", 21, 10.5)}
        {renderFigmaDroplet(96, 44, "f-r3-c5", 21, 10.5)}
        {renderFigmaDroplet(160, 44, "f-r3-c7", 21, 10.5)}

        {/* Row 4: 3 droplets in Col 3, Col 4, Col 6 */}
        {renderFigmaDroplet(30, 62, "f-r4-c3", 21, 10.5)}
        {renderFigmaDroplet(64, 62, "f-r4-c4", 21, 10.5)}
        {renderFigmaDroplet(128, 62, "f-r4-c6", 21, 10.5)}
      </svg>
    </div>
  );
};

export default HeroSpecialtyDroplets;
