"use client";
import React from "react";

export interface FooterSectionProps {
  className?: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  className = "",
}) => {
  return (
    <footer
      id="contact"
      className={`w-full bg-white text-neutral-900 select-text transition-all duration-200 pt-6 sm:pt-10 ${className}`}
      aria-label="Site Footer"
    >
      {/* 
        1. TOP HORIZONTAL DIVIDER LINE
      */}
      <div className="w-full border-t border-neutral-300 mb-8 sm:mb-10 lg:mb-12" />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1400px] mx-auto">
        {/* 
          2. MAIN 4-COLUMN FOOTER CONTENT
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 md:gap-10 lg:gap-10 xl:gap-12">
          {/* COLUMN 1: ABOUT */}
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 mb-3 sm:mb-4">
              About
            </h3>

            <p className="text-xs sm:text-[13px] md:text-sm text-neutral-600 leading-relaxed max-w-sm mb-4">
              At MuscleForge, we believe in the power of dedication and hard
              work. Our mission is to provide you with the tools, resources, and
              community you need to build the body of your dreams.
            </p>

            {/* Subtle Divider */}
            <div className="w-36 sm:w-44 border-t border-neutral-300 my-2 sm:my-3" />

            {/* Social Media Line */}
            <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm">
              <span className="font-semibold text-neutral-900 select-none">
                Social Media:
              </span>

              <div className="inline-flex items-center gap-2">
                <a
                  href="#facebook"
                  className="font-bold text-neutral-900 hover:text-[#71AC16] px-1 py-0.5 rounded transition-colors"
                  aria-label="Facebook"
                >
                  Fb
                </a>

                <a
                  href="#instagram"
                  className="font-bold text-neutral-900 hover:text-[#71AC16] px-1 py-0.5 rounded transition-colors"
                  aria-label="Instagram"
                >
                  In
                </a>

                <a
                  href="#twitter"
                  className="font-bold text-neutral-900 hover:text-[#71AC16] px-1 py-0.5 rounded transition-colors"
                  aria-label="Twitter"
                >
                  Tw
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 mb-3 sm:mb-4">
              Quick Links
            </h3>

            <ul className="flex flex-col space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] md:text-sm text-neutral-600">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-neutral-900 hover:translate-x-0.5 transition-all inline-block cursor-pointer"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#training"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("training")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-neutral-900 hover:translate-x-0.5 transition-all inline-block cursor-pointer"
                >
                  Our gym location
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-neutral-900 hover:translate-x-0.5 transition-all inline-block"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#privacy"
                  className="hover:text-neutral-900 hover:translate-x-0.5 transition-all inline-block"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: OUR SERVICE */}
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 mb-3 sm:mb-4">
              Our Service
            </h3>

            <ul className="flex flex-col space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] md:text-sm text-neutral-600">
              <li>
                <a
                  href="#indoor-gym"
                  className="hover:text-neutral-900 hover:translate-x-0.5 transition-all inline-block"
                >
                  Indoor gym
                </a>
              </li>

              <li>
                <a
                  href="#outdoor-gym"
                  className="hover:text-neutral-900 hover:translate-x-0.5 transition-all inline-block"
                >
                  Outdoor gym
                </a>
              </li>

              <li>
                <a
                  href="#ground-gym"
                  className="hover:text-neutral-900 hover:translate-x-0.5 transition-all inline-block"
                >
                  On ground gym
                </a>
              </li>

              <li>
                <a
                  href="#yoga-class"
                  className="hover:text-neutral-900 hover:translate-x-0.5 transition-all inline-block"
                >
                  Yoga class
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO */}
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 mb-3 sm:mb-4">
              Contact Info
            </h3>

            <div className="flex flex-col space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] md:text-sm text-neutral-600">
              {/* Mail */}
              <div className="flex items-center flex-wrap gap-1.5">
                <span className="font-semibold text-neutral-900">Mail:</span>
                <a
                  href="mailto:info@example.com"
                  className="hover:text-neutral-900 hover:underline transition-colors"
                >
                  info@example.com
                </a>
              </div>

              {/* Call */}
              <div className="flex items-center flex-wrap gap-1.5">
                <span className="font-semibold text-neutral-900">Call:</span>
                <a
                  href="tel:+919876543210"
                  className="hover:text-neutral-900 hover:underline transition-colors tabular-nums"
                >
                  +91 9876543210
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start flex-wrap gap-1.5">
                <span className="font-semibold text-neutral-900 shrink-0">
                  Location:
                </span>
                <span className="text-neutral-700">
                  New York, 235 Lane, 10001
                </span>
              </div>

              {/* Workout Hours Time */}
              <div className="flex items-baseline flex-wrap gap-1.5">
                <span className="font-semibold text-neutral-900 shrink-0">
                  Time:
                </span>
                <span className="text-neutral-700">
                  Workout Hours: 5AM - 8PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 
          3. CENTER DIVIDER LINE
        */}
        <div className="mt-8 sm:mt-10 md:mt-12 mb-5 sm:mb-6 flex justify-center">
          <div className="w-40 sm:w-60 md:w-80 border-t border-neutral-300" />
        </div>

        {/* 
          4. BOTTOM COPYRIGHT TEXT
        */}
        <div className="pb-8 sm:pb-10 text-center">
          <p className="text-xs sm:text-[13px] text-neutral-500 font-normal tracking-tight">
            websitename.com©2024 all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
