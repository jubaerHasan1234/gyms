"use client";
import React, { useState } from "react";
import { NewsletterBottomLeftDroplet } from "./NewsletterBottomLeftDroplet";
import { NewsletterSuccessView } from "./NewsletterSuccessView";
import { NewsletterTopRightDroplet } from "./NewsletterTopRightDroplet";
import { NewsletterUnderlineSwoosh } from "./NewsletterUnderlineSwoosh";

export {
  NewsletterBottomLeftDroplet, NewsletterSuccessView, NewsletterTopRightDroplet, NewsletterUnderlineSwoosh
};

export interface NewsletterSectionProps {
  className?: string;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  className = "",
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter an email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    // Simulate quick feedback
    setTimeout(() => {
      setStatus("success");
    }, 400);
  };

  const handleReset = () => {
    setEmail("");
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section
      id="newsletter"
      className={`relative w-full  px-4 sm:px-8 md:px-12 lg:px-16 bg-white overflow-x-clip overflow-y-visible select-text scroll-mt-6 ${className}`}
      aria-labelledby="newsletter-heading"
    >
      {/* Container holding droplets and newsletter card (wraps card without controlling width) */}
      <div className="relative w-fit mx-auto">
        {/* 1. TOP-RIGHT DROPLET PATTERN - Shifted some to the right */}
        <div
          className="absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 -right-12 sm:-right-26 md:-right-32 lg:-right-22 xl:-right-50 z-10 pointer-events-none"
          aria-hidden="true"
        >
          <NewsletterTopRightDroplet />
        </div>

        {/* 2. BOTTOM-LEFT DROPLET PATTERN - Shifted more to the left */}
        <div
          className="absolute -bottom-3 sm:-bottom-5 md:-bottom-6 lg:-bottom-8 -left-12 sm:-left-26 md:-left-32 lg:-left-22 xl:-left-50 z-10 pointer-events-none"
          aria-hidden="true"
        >
          <NewsletterBottomLeftDroplet />
        </div>

        {/* 3. MAIN BLACK NEWSLETTER CARD CONTAINER */}
        <div
          className="relative z-20 mx-auto w-full max-w-[245px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[810px] xl:max-w-[1000px] bg-black text-white text-center rounded-[20px] sm:rounded-[28px] md:rounded-[36px] lg:rounded-[44px] px-3 py-4.5 sm:px-7 sm:py-8 md:px-11 md:py-11 lg:px-14 lg:py-14 shadow-2xl flex flex-col items-center justify-center border border-white/10"
        >
          {/* Eyebrow: Join our community */}
          <p className="font-semibold tracking-wider text-neutral-300 text-[9.5px] sm:text-xs md:text-sm uppercase mb-1 sm:mb-1.5 md:mb-2">
            Join our community
          </p>

          {/* Title: Subscribe to our newsletter with swoosh */}
          <h2
            id="newsletter-heading"
            className="font-extrabold tracking-tight text-white leading-tight text-base sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3 md:mb-3.5"
          >
            <span>Subscribe to our </span>
            <span className="relative inline-block whitespace-nowrap">
              <span>newsletter</span>
              <NewsletterUnderlineSwoosh />
            </span>
          </h2>

          {/* Subtitle / Description Paragraph */}
          <p className="font-normal text-neutral-300 mx-auto text-[10px] sm:text-xs md:text-[13.5px] lg:text-[15px] max-w-[215px] sm:max-w-md md:max-w-lg lg:max-w-2xl mb-3.5 sm:mb-6 md:mb-8 leading-relaxed">
            Join our community of fitness enthusiasts and athletes! By subscribing to
            our newsletter, you&apos;ll receive expert training tips, nutrition guides,
            exclusive discounts, and the latest news on upcoming events.
          </p>

          {/* Subscription Form / Status */}
          {status === "success" ? (
            <div className="w-full max-w-[215px] sm:max-w-sm md:max-w-md mx-auto">
              <NewsletterSuccessView email={email} onReset={handleReset} />
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="w-full max-w-[215px] sm:max-w-sm md:max-w-md mx-auto"
            >
              {/* Email box: inline row layout with small button on the right side */}
              <div className="relative rounded-full border border-neutral-700 bg-neutral-950 flex flex-row items-center justify-between p-0.5 sm:p-1.5 pl-2 sm:pl-4 md:pl-5 gap-1 sm:gap-0 focus-within:border-white focus-within:ring-2 focus-within:ring-white/20 transition-all shadow-inner">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") {
                      setStatus("idle");
                      setErrorMessage("");
                    }
                  }}
                  placeholder="Enter your email"
                  aria-label="Email Address"
                  className="w-full min-w-0 bg-transparent text-white placeholder:text-neutral-400 outline-none text-[10px] sm:text-xs md:text-sm font-normal sm:font-medium px-1 sm:px-0 sm:pr-2 py-0.5 sm:py-0 text-left"
                />

                {/* Right side small button */}
                <button
                  type="submit"
                  className="shrink-0 bg-white hover:bg-neutral-200 active:scale-95 text-black font-bold uppercase tracking-wider rounded-full px-2 sm:px-5 md:px-7 py-0.5 sm:py-2 md:py-2.5 text-[9px] sm:text-xs md:text-xs transition-all duration-150 cursor-pointer shadow-md text-center"
                >
                  SUBSCRIBE
                </button>
              </div>

              {/* Error Message if invalid */}
              {status === "error" && (
                <p
                  role="alert"
                  className="mt-1 text-[9.5px] sm:text-xs text-rose-400 font-medium"
                >
                  {errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
