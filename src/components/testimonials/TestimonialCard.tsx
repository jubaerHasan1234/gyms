import React from "react";
import { TestimonialCardData } from "./testimonialsData";
import { TestimonialStarRating } from "./TestimonialStarRating";

export interface TestimonialCardProps {
  item: TestimonialCardData;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  const Avatar = item.AvatarComponent;

  return (
    <div
      className="bg-black text-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] group border border-white/5"
    >
      {/* Top content: Title and Review */}
      <div>
        <h3 className="text-white font-bold text-[15px] sm:text-[16px] md:text-[17px] tracking-tight leading-snug">
          {item.title}
        </h3>
        <p className="text-[#A7A9AE] text-xs sm:text-[13px] leading-relaxed mt-2.5 sm:mt-3 font-normal">
          {item.comment}
        </p>
      </div>

      {/* Bottom row: User Avatar, Name, Role, and Star Rating */}
      <div className="flex items-center justify-between mt-5 sm:mt-6 pt-2 border-t border-white/5">
        {/* Left: Avatar + Name/Role */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-white/10 shadow-sm">
            <Avatar />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-white font-semibold text-xs sm:text-sm tracking-tight truncate">
              {item.authorName}
            </span>
            <span className="text-[#8E9096] text-[10px] sm:text-xs truncate">
              {item.authorRole}
            </span>
          </div>
        </div>

        {/* Right: Star Rating + Score */}
        <div className="flex-shrink-0 pl-2">
          <TestimonialStarRating rating={item.rating} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
