import React from "react";
import { Check } from "lucide-react";

export interface NewsletterSuccessViewProps {
  email: string;
  onReset: () => void;
}

export const NewsletterSuccessView: React.FC<NewsletterSuccessViewProps> = ({
  email,
  onReset,
}) => {
  return (
    <div className="w-full max-w-[215px] sm:max-w-sm md:max-w-md mx-auto bg-neutral-900 border border-neutral-700/80 rounded-full py-1 sm:py-2.5 px-2.5 sm:px-5 md:px-6 flex items-center justify-between gap-1.5 sm:gap-3 text-left animate-fadeIn">
      <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
        <span className="w-3.5 h-3.5 sm:w-6 sm:h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <Check className="w-2 h-2 sm:w-3.5 sm:h-3.5" />
        </span>
        <div className="min-w-0">
          <p className="text-[9.5px] sm:text-sm font-semibold text-white leading-tight">
            Welcome aboard!
          </p>
          <p className="text-[8px] sm:text-xs text-neutral-400 truncate max-w-[100px] sm:max-w-xs">
            Sent to <span className="text-neutral-200 font-medium">{email}</span>
          </p>
        </div>
      </div>
      <button
        onClick={onReset}
        className="text-[8.5px] sm:text-xs text-neutral-400 hover:text-white underline underline-offset-2 shrink-0 transition-colors cursor-pointer"
      >
        Change
      </button>
    </div>
  );
};

export default NewsletterSuccessView;
