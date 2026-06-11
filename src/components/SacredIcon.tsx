type SacredIconProps = {
  type?: "lotus" | "moon" | "star" | "ritual" | "alchemy" | "eye" | "leaf" | "flame";
  className?: string;
};

export default function SacredIcon({ type = "star", className = "" }: SacredIconProps) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      {type === "lotus" && (
        <>
          <path {...common} d="M24 6c5.2 7.4 7.8 13.4 7.8 18 0 4.9-2.6 9-7.8 12.2C18.8 33 16.2 28.9 16.2 24c0-4.6 2.6-10.6 7.8-18Z" />
          <path {...common} d="M8 23.5c7.7.5 13 2.5 16 6-3.1 3.5-7.4 5.2-12.8 5.2-3.5 0-6.6-1.2-9.2-3.5 1.4-3.1 3.4-5.7 6-7.7Z" />
          <path {...common} d="M40 23.5c-7.7.5-13 2.5-16 6 3.1 3.5 7.4 5.2 12.8 5.2 3.5 0 6.6-1.2 9.2-3.5-1.4-3.1-3.4-5.7-6-7.7Z" />
        </>
      )}
      {type === "moon" && <path {...common} d="M32.5 6.8A17 17 0 1 0 41.2 28 13.7 13.7 0 1 1 32.5 6.8Z" />}
      {type === "star" && (
        <>
          <path {...common} d="M24 4v40M4 24h40" />
          <path {...common} d="M10 10l28 28M38 10 10 38" opacity="0.55" />
          <circle {...common} cx="24" cy="24" r="5" />
        </>
      )}
      {type === "ritual" && (
        <>
          <path {...common} d="M12 34h24M16 34l3-14h10l3 14" />
          <path {...common} d="M19 20c0-4 2-7 5-10 3 3 5 6 5 10" />
          <path {...common} d="M24 8c-1 3-1 5 0 8" />
        </>
      )}
      {type === "alchemy" && (
        <>
          <path {...common} d="M18 7h12M21 7v10L11 35c-1.8 3.2.5 7 4.1 7h17.8c3.6 0 5.9-3.8 4.1-7L27 17V7" />
          <path {...common} d="M16 31h16" />
        </>
      )}
      {type === "eye" && (
        <>
          <path {...common} d="M5 24s7-11 19-11 19 11 19 11-7 11-19 11S5 24 5 24Z" />
          <circle {...common} cx="24" cy="24" r="5" />
        </>
      )}
      {type === "leaf" && (
        <>
          <path {...common} d="M38 8C18 8 8 18 8 38c20 0 30-10 30-30Z" />
          <path {...common} d="M12 34 34 12" />
        </>
      )}
      {type === "flame" && (
        <>
          <path {...common} d="M24 43c8-3 12-8 12-15 0-7-5-12-9-18-.3 5-2 8-5 11-2 2-6 5-6 11 0 5 3 9 8 11Z" />
          <path {...common} d="M24 37c3-1.5 5-4 5-7 0-3-2-5-4-8-.4 3-3 5-4 7-1.4 3 .2 6.2 3 8Z" opacity="0.65" />
        </>
      )}
    </svg>
  );
}
