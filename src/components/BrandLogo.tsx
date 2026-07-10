import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  showText?: boolean;
  compact?: boolean;
};

export default function BrandLogo({ className = "", showText = false, compact = false }: BrandLogoProps) {
  const src = compact ? "/shakti-logo-assets/icon-192.png" : "/shakti-logo-assets/logo-crop-80.png";

  return (
    <div className={`inline-flex items-center gap-3 text-lightGold ${className}`}>
      <span className={compact ? "relative h-12 w-12 overflow-hidden rounded-full" : "relative h-20 w-20 overflow-hidden rounded-full md:h-24 md:w-24"}>
        <Image
          src={src}
          alt={showText ? "" : "Shakti Loto"}
          aria-hidden={showText ? "true" : undefined}
          fill
          sizes={compact ? "48px" : "(min-width: 768px) 96px, 80px"}
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
