import React from "react";

export const AuthDecorativeBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Deep dark gradient base */}
      <div className="absolute inset-0 bg-[#0E1012]" />

      {/* Radial glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#71AC16]/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] bg-[#71AC16]/10 rounded-full blur-[140px]" />
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-[#71AC16]/10 rounded-full blur-[100px]" />

      {/* Subtle geometric dot grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="auth-grid-dots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#auth-grid-dots)" />
      </svg>

      {/* Organic droplet decorative vectors matching landing page style */}
      <svg
        className="absolute top-8 right-12 w-64 h-64 text-[#71AC16]/5 opacity-60 hidden lg:block"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M42.7,-62.9C53.9,-54.6,60.8,-40.4,67.7,-25.5C74.6,-10.5,81.5,5.2,78.9,19.8C76.2,34.4,64,47.8,49.8,58.3C35.6,68.9,19.3,76.5,2.1,73.6C-15.1,70.7,-30.2,57.3,-44.7,44.9C-59.2,32.5,-73.2,21.1,-78.3,5.8C-83.4,-9.4,-79.6,-28.5,-68.8,-42.6C-58,-56.6,-40.2,-65.7,-24.1,-69.3C-8.1,-73,11.5,-71.2,42.7,-62.9Z" transform="translate(100 100)" />
      </svg>

      <svg
        className="absolute -bottom-16 -left-16 w-80 h-80 text-[#71AC16]/5 opacity-60 hidden lg:block"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M47.7,-57.2C59.9,-46.8,66.8,-30.4,70.2,-13.4C73.6,3.6,73.5,21.2,65.3,34.7C57.1,48.1,40.8,57.5,24.1,62.8C7.4,68.2,-9.7,69.5,-25.9,64.2C-42.1,58.9,-57.4,47,-66.1,31.2C-74.8,15.4,-77,-4.3,-71.7,-21.8C-66.5,-39.3,-53.8,-54.6,-38.7,-64.2C-23.6,-73.8,-6,-77.7,8.6,-74.6C23.2,-71.5,35.5,-67.6,47.7,-57.2Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
};
