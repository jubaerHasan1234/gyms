"use client";
import React from "react";
import { ShapePatternSvg } from "./ShapePatternSvg";
import { HeroBackground } from "./HeroBackground";
import { HeroTopNav } from "./HeroTopNav";
import { HeroSocialFollow } from "./HeroSocialFollow";
import { HeroSpecialtySection } from "./HeroSpecialtySection";
import { HeroBannerContent } from "./HeroBannerContent";

export interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    /*
      The container preserves the exact 800/600 (4:3) aspect ratio with Container Queries (cqw).
      By consistently using cqw (container query width units) without breaking clamps/min-widths,
      every shape, text, card, and pattern stays at the EXACT SAME relative position on ALL devices.
    */
    <div className="relative w-full aspect-[800/600] bg-white overflow-hidden select-none [container-type:inline-size]">
      {/* Background Hero Layer (Black Hero Shape) */}
      <HeroBackground />

      {/* Decorative Droplet SVG Patterns across the canvas */}
      <ShapePatternSvg />

      {/* Top Header Navigation */}
      <HeroTopNav />

      {/* Social Follow On (Top-Left inside Black Hero Shape) matching screenshot - shifted more bottom */}
      <HeroSocialFollow />

      {/* Our Specialty Service Section (Green Shape, Droplets, Cards) */}
      <HeroSpecialtySection />

      {/* Image & Text Section (Hero Image, Satoshi Typography, Action Buttons) */}
      <HeroBannerContent />
    </div>
  );
};

export default HeroSection;
