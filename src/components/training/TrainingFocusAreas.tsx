import React from "react";

export const TrainingFocusAreas: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col justify-between space-y-5 sm:space-y-6">
      <div>
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight">
          Training Focus Areas:
        </h3>
      </div>

      {/* Point 1 */}
      <div>
        <h4 className="text-xs sm:text-sm md:text-base font-semibold text-white tracking-tight">
          Strength &amp; Conditioning
        </h4>
        <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 leading-relaxed">
          Develop knockout power with a mix of strength training and explosive movements.
        </p>
      </div>

      {/* Point 2 */}
      <div>
        <h4 className="text-xs sm:text-sm md:text-base font-semibold text-white tracking-tight">
          Speed &amp; Agility
        </h4>
        <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 leading-relaxed">
          Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination.
        </p>
      </div>

      {/* Point 3 */}
      <div>
        <h4 className="text-xs sm:text-sm md:text-base font-semibold text-white tracking-tight">
          Endurance Training
        </h4>
        <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 leading-relaxed">
          Boost your stamina with high-intensity circuits that keep you fighting strong till the final round.
        </p>
      </div>
    </div>
  );
};

export default TrainingFocusAreas;
