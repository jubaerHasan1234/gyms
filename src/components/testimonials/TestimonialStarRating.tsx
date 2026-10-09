import React from "react";

export interface TestimonialStarRatingProps {
  rating?: number;
}

/**
 * 5-Star Rating component matching the screenshot:
 * 4 solid gold stars and 1 half-gold star (or 4.5 rating representation)
 */
export const TestimonialStarRating: React.FC<TestimonialStarRatingProps> = ({
  rating = 4.5,
}) => {
  return (
    <div className="flex items-center gap-0.5 select-none" aria-label={`Rating: ${rating} out of 5 stars`}>
      {/* 4 Full Stars */}
      {[0, 1, 2, 3].map((index) => (
        <svg
          key={index}
          className="w-3 h-3 text-[#FBBF24] fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}

      {/* 5th Star: Half filled star for 4.5 */}
      <svg className="w-3 h-3 text-[#FBBF24]" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="halfStarGrad">
            <stop offset="55%" stopColor="#FBBF24" />
            <stop offset="55%" stopColor="#4B5563" />
          </linearGradient>
        </defs>
        <path
          fill="url(#halfStarGrad)"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>

      {/* Numeric score "(4.5)" matching screenshot */}
      <span className="text-[10px] sm:text-[11px] text-neutral-400 font-medium ml-1">
        ({rating.toFixed(1)})
      </span>
    </div>
  );
};

export default TestimonialStarRating;
