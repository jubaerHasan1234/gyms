"use client";
import React, { useState } from "react";
import { Check, Play } from "lucide-react";

export const WhyTrainWithUs: React.FC = () => {
  const [booked, setBooked] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="flex-1 flex flex-col justify-between space-y-5 sm:space-y-6">
      <div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight">
          Why Train With Us:
        </h3>
      </div>

      {/* Point 1 */}
      <div>
        <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight">
          Expert Coaches
        </h4>
        <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
          Our experienced boxing trainers have worked with amateur and professional athletes, ensuring you get the best training tailored to your goals.
        </p>
      </div>

      {/* Point 2 */}
      <div>
        <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight">
          Flexible Programs
        </h4>
        <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
          Whether you're a beginner or seasoned boxer, we offer flexible programs that fit your schedule and needs.
        </p>
      </div>

      {/* Call to Action: Punch Now Button + Video Play Button */}
      <div className="pt-2 sm:pt-4 flex items-center gap-3 sm:gap-4 flex-wrap">
        {/* Bright Green Punch Now Button */}
        <button
          type="button"
          onClick={() => setBooked(!booked)}
          className={`font-bold text-xs sm:text-sm md:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-[12px] sm:rounded-[14px] transition-all cursor-pointer shadow-lg select-none flex items-center gap-2 active:scale-95 ${
            booked
              ? "bg-[#358a1c] text-white shadow-green-950/40"
              : "bg-[#5DB928] hover:bg-[#68CE2C] text-white shadow-green-900/40"
          }`}
        >
          {booked ? (
            <>
              <Check className="w-4 h-4 stroke-[3]" /> Session Reserved!
            </>
          ) : (
            "Punch Now"
          )}
        </button>

        {/* Circular Play Button with Dashed Ring */}
        <button
          type="button"
          onClick={() => setShowVideo(!showVideo)}
          aria-label={showVideo ? "Hide training preview" : "Play training video preview"}
          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border-2 border-dashed border-[#5DB928]/80 hover:border-[#68CE2C] flex items-center justify-center transition-all cursor-pointer active:scale-90 group flex-shrink-0 bg-white/5 hover:bg-white/10"
        >
          <Play className="w-4 h-4 text-[#5DB928] group-hover:text-[#68CE2C] ml-0.5 fill-[#5DB928] group-hover:fill-[#68CE2C] transition-colors" />
        </button>

        {showVideo && (
          <span className="text-xs text-[#78B419] font-medium animate-fadeIn">
            Previewing: Championship Boxing Masterclass
          </span>
        )}
      </div>
    </div>
  );
};

export default WhyTrainWithUs;
