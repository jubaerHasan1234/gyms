import React from "react";
import { Dumbbell, ShieldCheck, Trophy, Flame } from "lucide-react";

interface AuthSideHeroProps {
  headline?: string;
  tagline?: string;
  badge?: string;
}

export const AuthSideHero: React.FC<AuthSideHeroProps> = ({
  headline = "POWER YOUR POTENTIAL",
  tagline = "Join an elite community of athletes, trainers, and champions redefining personal peak performance.",
  badge = "KRATOS ATHLETIC CLUB",
}) => {
  return (
    <div className="relative w-full h-full min-h-[580px] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl flex flex-col justify-between p-8 lg:p-12 select-none">
      {/* Background athlete photo with dark vignette gradient overlay */}
      <img
        src="/images/hero-bodybuilders.jpg"
        alt="Kratos Fitness Athletes"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.1] scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/70" />

      {/* Top Header Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-[#71AC16]/40 px-3.5 py-1.5 rounded-full text-white text-xs font-bold tracking-wider uppercase">
          <Flame className="w-3.5 h-3.5 text-[#71AC16]" />
          <span>{badge}</span>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-300 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#71AC16] animate-pulse" />
          <span>Live Community</span>
        </div>
      </div>

      {/* Center Highlight */}
      <div className="relative z-10 my-auto py-8">
        <div className="text-stroke-white text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none mb-3">
          {headline}
        </div>
        <p className="text-neutral-200 text-sm sm:text-base font-normal max-w-md leading-relaxed drop-shadow-md">
          {tagline}
        </p>

        {/* Value props pill badges */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-xs font-semibold text-white">
            <Trophy className="w-3.5 h-3.5 text-[#71AC16]" />
            <span>Championship Training</span>
          </div>
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-xs font-semibold text-white">
            <Dumbbell className="w-3.5 h-3.5 text-[#71AC16]" />
            <span>State-of-the-Art Gear</span>
          </div>
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-xs font-semibold text-white">
            <ShieldCheck className="w-3.5 h-3.5 text-[#71AC16]" />
            <span>Certified Elite Coaches</span>
          </div>
        </div>
      </div>

      {/* Bottom Testimonial / Credibility snippet */}
      <div className="relative z-10 bg-black/75 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center gap-4">
        <div className="flex -space-x-2">
          <div className="w-9 h-9 rounded-full bg-[#71AC16] text-black font-extrabold text-xs flex items-center justify-center ring-2 ring-black">
            JH
          </div>
          <div className="w-9 h-9 rounded-full bg-neutral-700 text-white font-extrabold text-xs flex items-center justify-center ring-2 ring-black">
            MK
          </div>
          <div className="w-9 h-9 rounded-full bg-neutral-800 text-white font-extrabold text-xs flex items-center justify-center ring-2 ring-black">
            SL
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 text-[#71AC16] text-xs">
            ★★★★★
          </div>
          <p className="text-xs text-neutral-300 font-medium truncate mt-0.5">
            Over 2,400+ active members leveling up daily
          </p>
        </div>
      </div>
    </div>
  );
};
