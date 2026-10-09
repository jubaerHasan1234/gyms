"use client";
import React from "react";
import { TrainSectionHeader } from "./TrainSectionHeader";
import { AthletePhotoCard } from "./AthletePhotoCard";
import { TrainingFocusAreas } from "./TrainingFocusAreas";
import { WhyTrainWithUs } from "./WhyTrainWithUs";
import { TrainTopLeftDroplets } from "./TrainTopLeftDroplets";
import { TrainTopRightDroplets } from "./TrainTopRightDroplets";

export { TrainTopLeftDroplets, TrainTopRightDroplets };

export interface TrainLikeChampionSectionProps {
  className?: string;
}

export const TrainLikeChampionSection: React.FC<TrainLikeChampionSectionProps> = ({
  className = "",
}) => {
  return (
    <section className={`w-full select-none relative ${className}`}>
      {/* 1. Droplets + Header Section */}
      <TrainSectionHeader />

      {/* 2. Main Black Card Container with Smooth Curved Corners */}
      <div
        className="w-full bg-black text-white rounded-[24px] sm:rounded-[30px] md:rounded-[36px] lg:rounded-[40px] p-4 sm:p-6 md:p-8 lg:p-10 mt-3 sm:mt-4 relative overflow-hidden"
      >
        <div
          className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-stretch"
        >
          {/* Left: Athlete Photo Card with rounded corners */}
          <AthletePhotoCard />

          {/* Right: Two Columns of Training Focus & Why Train With Us */}
          <div
            className="flex-1 flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 justify-between"
          >
            {/* Column A: Training Focus Areas */}
            <TrainingFocusAreas />

            {/* Column B: Why Train With Us + Call to Action Buttons */}
            <WhyTrainWithUs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainLikeChampionSection;
