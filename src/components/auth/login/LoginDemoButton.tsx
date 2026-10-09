"use client";

import React from "react";

interface LoginDemoButtonProps {
  onPreFill: () => void;
}

export const LoginDemoButton: React.FC<LoginDemoButtonProps> = ({ onPreFill }) => {
  return (
    <div className="pt-2">
      <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs">
        <span className="text-neutral-500">Quick sample account?</span>
        <button
          type="button"
          onClick={onPreFill}
          className="text-[#71AC16] hover:underline font-bold cursor-pointer"
        >
          Pre-fill credentials
        </button>
      </div>
    </div>
  );
};
