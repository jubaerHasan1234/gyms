import React from 'react';

interface NextImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
}

const NextImage: React.FC<NextImageProps> = ({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  className = '',
  style,
  ...props
}) => {
  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(fill
      ? {
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          objectFit: 'contain',
        }
      : {}),
  };

  // Check if src references one of the 4 user-uploaded vector icons
  const normalizedSrc = (typeof src === 'string' ? src : '').toLowerCase();

  // 1. Logo: 4 rounded rectangular rings in 2x2 grid rotated -45 degrees
  if (normalizedSrc.includes('logo')) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className={className}
        style={combinedStyle}
        width={width}
        height={height}
        aria-label={alt}
      >
        <g transform="rotate(-45 50 50)">
          <rect x="16" y="16" width="30" height="30" rx="8" stroke="white" strokeWidth="7" />
          <rect x="54" y="16" width="30" height="30" rx="8" stroke="white" strokeWidth="7" />
          <rect x="16" y="54" width="30" height="30" rx="8" stroke="white" strokeWidth="7" />
          <rect x="54" y="54" width="30" height="30" rx="8" stroke="white" strokeWidth="7" />
        </g>
      </svg>
    );
  }

  // 2. Ground Running: Athletic sneaker pushing off ground with speed streaks
  if (normalizedSrc.includes('running')) {
    return (
      <svg
        viewBox="0 0 50 50"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={combinedStyle}
        width={width}
        height={height}
        aria-label={alt}
      >
        {/* Speed motion lines */}
        <line x1="8" y1="21" x2="15" y2="21" strokeWidth="2.2" />
        <line x1="12" y1="15" x2="18" y2="15" strokeWidth="2.2" />
        <line x1="9" y1="27" x2="16" y2="27" strokeWidth="2.2" />
        {/* Ankle lines */}
        <line x1="22" y1="9" x2="25" y2="15" strokeWidth="2.2" />
        <line x1="26" y1="7" x2="29" y2="13" strokeWidth="2.2" />
        {/* Sneaker body */}
        <path
          d="M 18 18 C 17 23 16 27 21 30 L 28 35 C 33 39 37 39 41 39 L 43 39 C 44 39 45 38 44 36 C 41 31 37 26 34 24 L 29 20 L 24 16 C 22 14 19 14 18 18 Z"
          strokeWidth="2.2"
        />
        {/* Sole */}
        <path d="M 21 31 L 28 36 C 33 40 37 40 42 40 L 44 40" strokeWidth="3" />
        {/* Ground baseline */}
        <line x1="22" y1="41" x2="43" y2="41" strokeWidth="2.2" />
        {/* Stripes / Laces */}
        <line x1="24" y1="29" x2="28" y2="24" strokeWidth="2" />
        <line x1="27" y1="32" x2="31" y2="27" strokeWidth="2" />
      </svg>
    );
  }

  // 3. Yoga Assistance: Meditating yogi in full lotus pose on mat
  if (normalizedSrc.includes('yoga')) {
    return (
      <svg
        viewBox="0 0 50 50"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={combinedStyle}
        width={width}
        height={height}
        aria-label={alt}
      >
        {/* Topknot bun */}
        <circle cx="25" cy="7.5" r="2.8" fill="white" />
        {/* Hair shape */}
        <path d="M 21 13 C 21 9 29 9 29 13" strokeWidth="2" />
        {/* Head */}
        <circle cx="25" cy="14" r="4.2" strokeWidth="2.2" />
        {/* Neck & Torso */}
        <path d="M 22 19 C 23.5 21.5 26.5 21.5 28 19" strokeWidth="2" />
        <path d="M 21 19.5 L 20 27 L 30 27 L 29 19.5" strokeWidth="2.2" />
        {/* Arms down to knees in chin mudra */}
        <path d="M 21 21.5 C 17 24 13 28 10 33 C 9.5 35 11 36.5 13 36.5 C 15 36.5 17 35 18 33" strokeWidth="2.2" />
        <path d="M 29 21.5 C 33 24 37 28 40 33 C 40.5 35 39 36.5 37 36.5 C 35 36.5 33 35 32 33" strokeWidth="2.2" />
        {/* Crossed legs / Lotus base */}
        <path d="M 12 36 C 12 40 19 41.5 25 41.5 C 31 41.5 38 40 38 36 C 36 34 31 35 25 35 C 19 35 14 34 12 36 Z" strokeWidth="2.2" />
        {/* Yoga Mat */}
        <line x1="9" y1="43.5" x2="41" y2="43.5" strokeWidth="2.4" />
      </svg>
    );
  }

  // 4. Personal Trainer: Bodybuilder performing barbell back squats
  if (normalizedSrc.includes('personal') || normalizedSrc.includes('trainer')) {
    return (
      <svg
        viewBox="0 0 50 50"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={combinedStyle}
        width={width}
        height={height}
        aria-label={alt}
      >
        {/* Barbell Bar */}
        <line x1="5" y1="16" x2="45" y2="16" strokeWidth="2.4" />
        {/* Weight plates left */}
        <rect x="6" y="9.5" width="2.8" height="13" rx="1" fill="white" stroke="none" />
        <rect x="10.5" y="11.5" width="2" height="9" rx="0.8" fill="white" stroke="none" />
        {/* Weight plates right */}
        <rect x="41.2" y="9.5" width="2.8" height="13" rx="1" fill="white" stroke="none" />
        <rect x="37.5" y="11.5" width="2" height="9" rx="0.8" fill="white" stroke="none" />
        {/* Head */}
        <circle cx="25" cy="14" r="4.2" strokeWidth="2.2" />
        {/* Upper torso */}
        <path d="M 21 19 L 20 26 L 23 30 L 27 30 L 30 26 L 29 19" strokeWidth="2.2" />
        <path d="M 22.5 24 L 27.5 24" strokeWidth="1.8" />
        {/* Arms gripping bar */}
        <path d="M 20 19 L 16 16" strokeWidth="2.4" />
        <path d="M 30 19 L 34 16" strokeWidth="2.4" />
        {/* Squatting Thighs & Calves */}
        <path d="M 20 28 C 15 29 13 35 17 40 L 18 45" strokeWidth="2.4" />
        <path d="M 30 28 C 35 29 37 35 33 40 L 32 45" strokeWidth="2.4" />
        {/* Feet / Shoes */}
        <rect x="15" y="44" width="6" height="2.5" rx="1" fill="white" stroke="none" />
        <rect x="29" y="44" width="6" height="2.5" rx="1" fill="white" stroke="none" />
      </svg>
    );
  }

  // Standard Image component for photos / external assets
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={combinedStyle}
      loading={priority ? 'eager' : 'lazy'}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};

export default NextImage;
