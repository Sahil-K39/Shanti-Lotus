type BrandLogoProps = {
  className?: string;
  showText?: boolean;
  compact?: boolean;
};

export default function BrandLogo({ className = "", showText = false, compact = false }: BrandLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 text-lightGold ${className}`}>
      <svg
        viewBox="0 0 240 132"
        aria-hidden="true"
        className={compact ? "h-12 w-24" : "h-16 w-32"}
      >
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <g strokeWidth="1.6">
            <path d="M120 18c17 24 20 45 0 68-20-23-17-44 0-68Z" />
            <path d="M96 32c20 17 28 35 18 57-22-8-30-27-18-57Z" />
            <path d="M144 32c-20 17-28 35-18 57 22-8 30-27 18-57Z" />
            <path d="M74 52c27 8 41 22 41 42-24 1-38-13-41-42Z" />
            <path d="M166 52c-27 8-41 22-41 42 24 1 38-13 41-42Z" />
            <path d="M52 76c30 0 52 8 65 24-27 9-49 1-65-24Z" />
            <path d="M188 76c-30 0-52 8-65 24 27 9 49 1 65-24Z" />
            <path d="M83 93c18-2 30 1 37 9-17 4-29 1-37-9Z" />
            <path d="M157 93c-18-2-30 1-37 9 17 4 29 1 37-9Z" />
          </g>

          <g strokeWidth="1.25" opacity="0.84">
            <path d="M120 29v39" />
            <path d="M107 48c6 9 9 18 8 29" />
            <path d="M133 48c-6 9-9 18-8 29" />
            <path d="M86 67c10 8 19 17 26 28" />
            <path d="M154 67c-10 8-19 17-26 28" />
          </g>

          <path
            d="M127 104a13 13 0 1 1-12.2-18.6 10.5 10.5 0 1 0 12.2 18.6Z"
            fill="currentColor"
            stroke="none"
          />

          <g strokeWidth="1.2" opacity="0.92">
            <path d="M45 104h40M155 104h40" />
            <circle cx="34" cy="104" r="2.2" fill="currentColor" stroke="none" />
            <circle cx="24" cy="104" r="1.6" fill="currentColor" stroke="none" />
            <circle cx="14" cy="104" r="1.2" fill="currentColor" stroke="none" />
            <circle cx="206" cy="104" r="2.2" fill="currentColor" stroke="none" />
            <circle cx="216" cy="104" r="1.6" fill="currentColor" stroke="none" />
            <circle cx="226" cy="104" r="1.2" fill="currentColor" stroke="none" />
          </g>
        </g>
      </svg>

      {showText && (
        <span className="font-display text-xl uppercase leading-none tracking-[0.16em] text-ivory md:text-2xl">
          Kunti <span className="gold-text">Shakti Loto</span>
        </span>
      )}
    </div>
  );
}
