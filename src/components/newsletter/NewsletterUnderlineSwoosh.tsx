import React from "react";

export const NewsletterUnderlineSwoosh: React.FC = () => {
  return (
    <svg
      className="absolute left-0 w-full overflow-visible pointer-events-none -bottom-0.5 sm:-bottom-0.5 md:-bottom-0.5 lg:-bottom-2"
      viewBox="0 0 216 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 3 12 C 55 2, 155 2, 202 9.5"
        stroke="#FF5722"
        strokeWidth="2.4"
        className="stroke-[1.8] sm:stroke-[1.8] md:stroke-[1.9] lg:stroke-[3]"
        strokeLinecap="round"
      />
      <circle
        cx="211"
        cy="10"
        r="1.8"
        className="r-[1.3] sm:r-[1.3] md:r-[1.4] lg:r-[2.2]"
        fill="#FF5722"
      />
    </svg>
  );
};

export default NewsletterUnderlineSwoosh;
