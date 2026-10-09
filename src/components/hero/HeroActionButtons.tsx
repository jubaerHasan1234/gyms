"use client";
import React from "react";

export const HeroActionButtons: React.FC = () => {
  return (
    <div
      className="absolute flex flex-row items-center pointer-events-auto"
      style={{
        left: "38.5%",
        bottom: "10.5%",
        gap: "1.1cqw",
      }}
    >
      <a
        href="#products"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("products");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        className="flex items-center bg-[#151719] border border-white/60 rounded-[1.2cqw] text-white font-bold hover:bg-white hover:text-black transition-all group shadow-2xl cursor-pointer active:scale-95 select-none"
        style={{
          padding: "0.9cqw 2.2cqw",
          fontSize: "1.35cqw",
          gap: "1cqw",
        }}
      >
        <span className="tracking-wide">SHOP NOW</span>
        <span className="group-hover:translate-x-1.5 transition-transform" style={{ fontSize: "1.1em" }}>
          →
        </span>
      </a>

      <a
        href="#training"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("training");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        className="bg-[#151719] border border-white/60 rounded-[1.2cqw] text-white hover:bg-white hover:text-black transition-all shadow-2xl cursor-pointer active:scale-95 flex items-center justify-center select-none"
        style={{
          padding: "0.9cqw",
          width: "3.8cqw",
          height: "3.8cqw",
        }}
        aria-label="Gym Location"
      >
        <svg
          style={{ width: "1.8cqw", height: "1.8cqw" }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </a>
    </div>
  );
};

export default HeroActionButtons;
