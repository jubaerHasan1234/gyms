import React from "react";

export const HeroDecorativeDroplets: React.FC = () => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: "3%",
        right: "6%",
        width: "5.5cqw",
        height: "7.5cqw",
      }}
    >
      <svg viewBox="0 0 68 96" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/*
          Exact pattern from screenshot:
          Row 0: [X] [X] [X]
          Row 1: [X] [X] [ ]
          Row 2: [X] [X] [ ]
          Row 3: [X] [X] [X]
          Row 4: [ ] [X] [ ]
        */}
        {[
          [true, true, true],
          [true, true, false],
          [true, true, false],
          [true, true, true],
          [false, true, false],
        ].map((row, r) =>
          row.map((active, c) => {
            if (!active) return null;
            const x = c * 22 + 4;
            const y = r * 18 + 4;
            return (
              <path
                key={`hero-grid-${r}-${c}`}
                d={`M ${x} ${y} h 16 q 1 0 1 1 v 0.5 c 0 6.5 -8 6.5 -8 6.5 s -8 0 -8 -6.5 v -0.5 q 0 -1 1 -1 z`}
                fill="#5A5D64"
                opacity="0.85"
              />
            );
          })
        )}
      </svg>
    </div>
  );
};

export default HeroDecorativeDroplets;
