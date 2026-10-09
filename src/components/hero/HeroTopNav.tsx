"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { LogOut, User as UserIcon, Check, ChevronDown } from "lucide-react";

export const HeroTopNav: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { user, isAuthenticated, logout } = useAuth();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Close menu on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowUserMenu(false);
      }
    };

    if (showUserMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showUserMenu]);

  // First name's first letter for profile circle
  const firstLetter = (
    user?.first_name?.trim()?.charAt(0) ||
    user?.email?.trim()?.charAt(0) ||
    "U"
  ).toUpperCase();

  const fullName =
    [user?.first_name, user?.last_name].filter(Boolean).join(" ") ||
    user?.email?.split("@")[0] ||
    "Athlete";

  const handleLogout = async () => {
    setShowUserMenu(false);
    await logout();
  };

  return (
    <div className="absolute top-[2.4%] left-[2.8%] right-[2.8%] z-30 flex items-center justify-between pointer-events-auto select-none">
      {/* Brand Logo Button: Vibrant Lime Green circle with logo.png rotated -45 deg */}
      <Link
        href="/"
        onClick={(e) => {
          if (window.location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="flex items-center justify-center rounded-full bg-[#71AC16] shadow-md hover:scale-105 active:scale-95 transition-transform"
        style={{
          width: "5.8cqw",
          height: "5.8cqw",
        }}
        aria-label="Home"
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          width={48}
          height={48}
          className="w-[58%] h-[58%] object-contain"
          style={{
            transform: "rotate(-45deg)",
          }}
        />
      </Link>

      {/* Center Nav Pill: Black background with subtle crisp white border and clean typography */}
      <div
        className="flex items-center bg-black border border-white/90 rounded-full text-white shadow-sm"
        style={{
          padding: "0.55cqw 0.75cqw 0.55cqw 2.4cqw",
          gap: "1.8cqw",
          transform: "translate(-3cqw, 1.2cqw)",
        }}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-white hover:text-[#71AC16] transition-colors font-medium whitespace-nowrap cursor-pointer"
          style={{
            fontSize: "1.25cqw",
            letterSpacing: "-0.01em",
          }}
        >
          Home
        </a>
        <a
          href="#training"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("training");
          }}
          className="text-white hover:text-[#71AC16] transition-colors cursor-pointer font-medium whitespace-nowrap"
          style={{
            fontSize: "1.25cqw",
            letterSpacing: "-0.01em",
          }}
        >
          Our gym location
        </a>
        <a
          href="#products"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("products");
          }}
          className="text-white hover:text-[#71AC16] transition-colors cursor-pointer font-medium whitespace-nowrap"
          style={{
            fontSize: "1.25cqw",
            letterSpacing: "-0.01em",
          }}
        >
          Products
        </a>

        {/* Vertical Separator */}
        <span
          className="text-white/60 font-light select-none"
          style={{
            fontSize: "1.15cqw",
            margin: "0 0.1cqw",
          }}
        >
          |
        </span>

        {/* Search Pill inside: Dark Charcoal oval pill */}
        <div
          className="flex items-center justify-between bg-[#383A3D] hover:bg-[#424448] focus-within:bg-[#424448] focus-within:ring-1 focus-within:ring-white/40 rounded-full transition-all"
          style={{
            padding: "0.5cqw 1.1cqw",
            gap: "0.8cqw",
            width: "8.5cqw",
          }}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            aria-label="Search"
            className="bg-transparent outline-none placeholder:text-neutral-300 text-white font-normal w-full"
            style={{
              fontSize: "1.15cqw",
              lineHeight: "1",
            }}
          />
          <svg
            style={{ width: "1.2cqw", height: "1.2cqw" }}
            viewBox="0 0 24 24"
            fill="none"
            className="text-white flex-shrink-0"
          >
            <circle cx="10" cy="10" r="6.5" stroke="white" strokeWidth="3.2" />
            <line
              x1="15"
              y1="15"
              x2="21"
              y2="21"
              stroke="white"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Right Auth Action Container */}
      <div
        className="flex items-center pointer-events-auto"
        style={{
          transform: "translate(-1.5cqw, 1.0cqw)",
        }}
      >
        {isAuthenticated && user ? (
          /* When user is logged in: Registration button is hidden.
             Display user first name's first letter as profile avatar circle.
             Clicking opens the dropdown at the bottom with logout option. */
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setShowUserMenu((prev) => !prev)}
              aria-expanded={showUserMenu}
              aria-label={`Profile: ${fullName}`}
              className="flex items-center justify-center rounded-full bg-[#71AC16] hover:bg-[#7ebd19] text-black font-black shadow-lg hover:shadow-[#71AC16]/30 border-2 border-white/90 hover:scale-105 active:scale-95 transition-all cursor-pointer relative"
              style={{
                width: "4.8cqw",
                height: "4.8cqw",
                fontSize: "2.1cqw",
                letterSpacing: "-0.02em",
              }}
            >
              <span>{firstLetter}</span>
              <span className="absolute bottom-0 right-0 w-[1.1cqw] h-[1.1cqw] bg-white rounded-full flex items-center justify-center shadow">
                <ChevronDown
                  className={`transition-transform duration-200 text-black`}
                  style={{ width: "0.8cqw", height: "0.8cqw" }}
                />
              </span>
            </button>

            {/* Profile Dropdown Menu - Opens directly at the bottom of the profile avatar */}
            {showUserMenu && (
              <div
                className="absolute right-0 top-[115%] mt-2 bg-[#121417] text-white border border-white/20 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150 select-none"
                style={{
                  minWidth: "16rem",
                }}
              >
                {/* User Info Header */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#71AC16] text-black font-black flex items-center justify-center text-lg shadow-sm flex-shrink-0">
                    {firstLetter}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-extrabold text-white truncate capitalize leading-tight">
                      {fullName}
                    </p>
                    <p className="text-xs text-neutral-400 truncate mt-0.5">
                      {user.email}
                    </p>
                    <span className="inline-block mt-1 text-[10px] font-bold text-[#71AC16] bg-[#71AC16]/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {user.role || "Active Member"}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 my-1" />

                {/* Logout Button */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-bold text-red-400 hover:text-red-200 hover:bg-red-500/20 active:scale-[0.98] rounded-xl transition-all cursor-pointer"
                >
                  <LogOut className="w-4 h-4 text-red-400" />
                  <span>Log Out</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Unauthenticated: LOGIN & REGISTER Buttons */
          <div className="flex items-center" style={{ gap: "0.6cqw" }}>
            <Link
              href="/login"
              className="bg-transparent hover:bg-white/10 border border-white/40 text-white font-bold tracking-wider rounded-full transition-all uppercase select-none flex items-center justify-center cursor-pointer whitespace-nowrap active:scale-95"
              style={{
                padding: "0.8cqw 1.8cqw",
                fontSize: "1.2cqw",
                letterSpacing: "0.03em",
              }}
            >
              LOGIN
            </Link>

            <Link
              href="/register"
              className="bg-[#6FA816] hover:bg-[#78B419] active:scale-95 text-white font-extrabold tracking-wider rounded-full transition-all uppercase select-none flex items-center justify-center shadow-md cursor-pointer whitespace-nowrap"
              style={{
                padding: "0.85cqw 2.2cqw",
                fontSize: "1.25cqw",
                letterSpacing: "0.04em",
              }}
            >
              REGISTER
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroTopNav;
