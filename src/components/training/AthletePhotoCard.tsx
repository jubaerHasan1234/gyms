"use client";
import React, { useState } from "react";
import boxerImg from "../../assets/images/boxer_champion_training_1790843406316.jpg";

export const AthletePhotoCard: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const src = typeof boxerImg === "string" ? boxerImg : (boxerImg as any)?.src || boxerImg;

  return (
    <div
      className="w-full md:w-[42%] lg:w-[35%] xl:w-[33%] aspect-[4/3] sm:aspect-[3/4] rounded-[18px] sm:rounded-[22px] md:rounded-[26px] overflow-hidden bg-neutral-900 flex-shrink-0 relative shadow-inner"
    >
      {!imgError && src ? (
        <img
          src={src}
          alt="Male athletic boxer champion in training"
          className="w-full h-full object-cover object-top"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-neutral-400 p-4">
          <span className="font-semibold text-sm">Champion Boxing Training</span>
        </div>
      )}
    </div>
  );
};

export default AthletePhotoCard;
