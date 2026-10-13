import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  showText?: boolean;
  compact?: boolean;
  big?: boolean;
};

export default function BrandLogo({
  className = "",
  showText = false,
  compact = false,
  big = false,
}: BrandLogoProps) {
  const src = "/shakti-logo-assets/shakti-loto-logo.png";

  const sizeClasses = compact
    ? "h-12 w-12 sm:h-14 sm:w-14 border border-[#C8A96B]/40 shadow-sm"
    : big
    ? "h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 border-2 border-[#C8A96B]/60 shadow-[0_0_30px_rgba(200,169,107,0.3)]"
    : "h-16 w-16 sm:h-20 sm:w-20 border-2 border-[#C8A96B]/50 shadow-[0_0_20px_rgba(200,169,107,0.25)]";

  return (
    <div className={`inline-flex items-center gap-4 text-[#C8A96B] ${className}`}>
      <span
        className={`relative block overflow-hidden rounded-full bg-[#5A4636] transition-all duration-500 hover:scale-105 ${sizeClasses}`}
      >
        <Image
          src={src}
          alt={showText ? "" : "Shakti Lotus"}
          aria-hidden={showText ? "true" : undefined}
          fill
          priority
          sizes="(max-width: 768px) 80px, 120px"
          className="rounded-full object-cover p-1"
        />
      </span>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-display text-2xl uppercase tracking-[0.2em] text-[#FFFFFF] font-medium leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            SHAKTI LOTUS
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2C98F] mt-1 font-semibold drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            South America · Asia
          </span>
        </div>
      )}
    </div>
  );
}
