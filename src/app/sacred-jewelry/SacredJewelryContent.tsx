"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { photos } from "@/lib/brand";

const pieces = [
  {
    title: "Protection",
    text: "Talismans held with mantra, intention, and ancient symbolism to shield and anchor your energy.",
    icon: "star" as const,
  },
  {
    title: "Devotion",
    text: "Adornments that invite beauty, softness, prayer, and deep remembrance of the divine feminine.",
    icon: "lotus" as const,
  },
  {
    title: "Ritual",
    text: "Pieces created to accompany ceremonies, offerings, threshold moments, and sacred everyday life.",
    icon: "ritual" as const,
  },
];

export default function SacredJewelryContent() {
  return (
    <div className="bg-[#EFE6DB] text-[#4D667D]">
      {/* Hero Header */}
      <section className="px-6 pb-24 pt-40 md:pt-48 bg-[#EFE6DB]">
        <AnimatedSection className="mx-auto max-w-5xl text-center space-y-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#4D667D]/60 font-medium">
            Sacred Jewelry / Shop
          </p>
          <h1 className="font-display text-5xl leading-[1.1] md:text-7xl uppercase font-light text-[#4D667D]">
            Jewelry of <span className="italic text-[#C8A96B]">the Soul</span>
          </h1>
          <div className="h-px w-20 bg-[#C8A96B]/50 mx-auto mt-8" />
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg font-light leading-[2.1] text-[#4D667D]/80">
            Sacred adornments created as talismans for devotion, protection, beauty, and inner remembrance.
          </p>
        </AnimatedSection>
      </section>

      {/* Main Content Grid */}
      <section className="px-6 pb-28 bg-[#EFE6DB]">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <AnimatedSection direction="left">
            <EditorialImage
              src={photos.redTempleDoor}
              alt="Kunti at a vivid red temple doorway with sacred adornments"
              variant="organic-1"
              withBorder
              className="aspect-[4/5] w-full"
            />
          </AnimatedSection>
          <AnimatedSection direction="right" className="space-y-6">
            <div className="grid gap-5">
              {pieces.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/40 p-7 shadow-sm border border-[#4D667D]/10 rounded-sm transition-all duration-500 hover:bg-white/60 hover:-translate-y-0.5"
                >
                  <div className="flex gap-5 items-start">
                    <SacredIcon
                      type={item.icon}
                      className="h-10 w-10 flex-none text-[#C8A96B] mt-1"
                    />
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl text-[#4D667D] font-light">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-sm font-light leading-relaxed text-[#4D667D]/75">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-[#4D667D] px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-[#4D667D] transition-all duration-500 hover:bg-[#4D667D] hover:text-[#EFE6DB]"
              >
                Request the Collection
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
