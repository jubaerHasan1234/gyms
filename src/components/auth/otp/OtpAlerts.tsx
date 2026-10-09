import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface OtpAlertsProps {
  successMessage: string | null;
  errorMessage: string | null;
}

export const OtpAlerts: React.FC<OtpAlertsProps> = ({ successMessage, errorMessage }) => {
  if (!successMessage && !errorMessage) return null;

  return (
    <>
      {successMessage && (
        <div className="mb-4 p-3.5 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs font-semibold flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#71AC16]" />
          <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
          <div className="flex-1 leading-relaxed">{errorMessage}</div>
        </div>
      )}
    </>
  );
};
