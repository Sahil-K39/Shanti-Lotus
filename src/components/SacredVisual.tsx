import SacredIcon from "@/components/SacredIcon";

type SacredVisualProps = {
  className?: string;
  icon?: "lotus" | "moon" | "star" | "ritual" | "alchemy" | "eye" | "leaf" | "flame";
  label?: string;
};

export default function SacredVisual({ className = "", icon = "lotus", label = "Shakti Loto" }: SacredVisualProps) {
  return (
    <div
      className={`sacred-visual sacred-glow relative grid place-items-center overflow-hidden border border-lightGold/28 bg-blancoRitual ${className}`}
      aria-label={label}
      role="img"
    >
      <div className="absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-lightGold/20" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-lightGold/20" aria-hidden="true" />
      <div className="relative z-10 grid place-items-center text-center">
        <SacredIcon type={icon} className="h-20 w-20 text-lightGold md:h-28 md:w-28" />
        <div className="gold-line mt-7 w-56 max-w-[60vw]" aria-hidden="true" />
        <p className="mt-7 max-w-xs px-6 font-display text-3xl leading-tight text-ivory md:text-4xl">{label}</p>
      </div>
    </div>
  );
}
