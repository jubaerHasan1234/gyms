import React from 'react';

interface DropletPatternProps {
  className?: string;
  rows?: number;
  cols?: number;
  opacity?: number;
}

/**
 * Droplet / seed capsule grid pattern seen in the Figma design.
 */
export const DropletPattern: React.FC<DropletPatternProps> = ({
  className = '',
  rows = 4,
  cols = 5,
  opacity = 0.5,
}) => {
  return (
    <div 
      className={`inline-grid gap-x-2 gap-y-1.5 select-none pointer-events-none ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        opacity,
      }}
      aria-hidden="true"
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div
          key={i}
          className="w-1.5 h-2.5 rounded-full bg-current transform rotate-[-5deg]"
        />
      ))}
    </div>
  );
};
