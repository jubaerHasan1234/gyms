export const HeroTypography: React.FC = () => {
  return (
    <h1
      className="absolute left-[0%] w-[100%] flex flex-col uppercase tracking-[-0.04em] text-left select-none z-30 pointer-events-none"
      style={{
        fontFamily: "'Satoshi', sans-serif",
        fontWeight: 900,
        fontStyle: "normal",
        bottom: "-2.8cqw",
        lineHeight: 0.84,
      }}
    >
      {/* Line 1: POWER YOUR */}
      <span
        className="block tracking-[-0.04em] whitespace-nowrap"
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 900,
          fontStyle: "normal",
          fontSize: "9.2cqw",
          color: "rgba(255, 255, 255, 0.08)",
          WebkitTextStroke: "max(1.2px, 0.11cqw) rgba(255, 255, 255, 0.95)",
          textShadow: "0 0 25px rgba(0,0,0,0.7)",
          paddingBottom: "0.1cqw",
        }}
      >
        POWER YOUR
      </span>
      {/* Below Line: POTENTIAL */}
      <span
        className="block tracking-[-0.04em] whitespace-nowrap"
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 900,
          fontStyle: "normal",
          fontSize: "11.3cqw",
          color: "rgba(255, 255, 255, 0.08)",
          WebkitTextStroke: "max(1.2px, 0.11cqw) rgba(255, 255, 255, 0.95)",
          textShadow: "0 0 25px rgba(0,0,0,0.7)",
        }}
      >
        POTENTIAL
      </span>
    </h1>
  );
};

export default HeroTypography;
