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
  const src = "/shakti-logo-assets/logo-crop-160.png";

  const sizeClasses = big
    ? "h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 border-2 border-lightGold/50 shadow-[0_0_28px_rgba(200,169,107,0.35)]"
    : compact
    ? "h-11 w-11 border border-lightGold/30"
    : "h-14 w-14 sm:h-16 sm:w-16 border border-lightGold/40";

  return (
    <div className={`inline-flex items-center gap-3.5 text-lightGold ${className}`}>
      <span
        className={`relative block overflow-hidden rounded-full bg-ink/90 transition-all duration-500 ${sizeClasses}`}
      >
        <Image
          src={src}
          alt={showText ? "" : "Shakti Loto"}
          aria-hidden={showText ? "true" : undefined}
          fill
          sizes="128px"
          className="rounded-full object-cover"
        />
      </span>

      {showText && (
        <span className="font-display text-xl uppercase leading-none tracking-[0.16em] text-ivory md:text-2xl">
          Kunti <span className="gold-text">Shakti Loto</span>
        </span>
      )}
    </div>
  );
}
