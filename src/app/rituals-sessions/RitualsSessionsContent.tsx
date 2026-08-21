"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { photos, poeticPhrases } from "@/lib/brand";

const spaces = [
  {
    title: "Individual Sessions — 1:1 Guidance",
    text: "Deep guidance to reconnect with your energy, release blockages, and return to your center.",
    icon: "eye" as const,
  },
  {
    title: "Ritual & Feminine Energy",
    text: "Spaces to activate your creative energy, heal your relationship with the feminine, and inhabit your body with presence.",
    icon: "moon" as const,
  },
  {
    title: "Spiritual Integration",
    text: "Practices and guidance to expand your consciousness and root your spirituality into everyday life.",
    icon: "lotus" as const,
  },
];

export default function RitualsSessionsContent() {
  return (
    <div className="bg-[#EFE6DB] text-[#4D667D]">
      {/* Hero Section */}
      <section className="px-6 pb-12 md:pb-24 pt-28 md:pt-48">
        <AnimatedSection className="mx-auto max-w-5xl text-center space-y-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#4D667D]/60 font-medium">
            Rituals & Sessions
          </p>
          <h1 className="font-display text-5xl leading-[1.1] md:text-7xl uppercase font-light text-[#4D667D]">
            Your body is <span className="italic text-[#C8A96B]">a portal</span>
          </h1>
          <div className="h-px w-20 bg-[#C8A96B]/50 mx-auto mt-8" />
          <p className="mx-auto mt-8 max-w-3xl text-base md:text-lg font-light leading-[2] text-[#4D667D]/80">
            Private containers for energy clearing, feminine remembrance, spiritual integration, and the sacred return to your center.
          </p>
        </AnimatedSection>
      </section>

      {/* Spaces Cards */}
      <section className="px-6 pb-16 md:pb-28 bg-[#EFE6DB]">
        <div className="mx-auto grid max-w-[1220px] gap-6 md:grid-cols-3">
          {spaces.map((space, index) => (
            <AnimatedSection key={space.title} delay={index * 0.08} direction="up">
              <div className="bg-white/40 h-full p-8 shadow-sm border border-[#4D667D]/5 transition-transform duration-500 hover:-translate-y-1">
                <SacredIcon type={space.icon} className="h-12 w-12 text-[#C8A96B]" />
                <h2 className="mt-8 font-display text-2xl leading-[1.3] text-[#4D667D] font-light">
                  {space.title}
                </h2>
                <p className="mt-6 text-sm font-light leading-[1.9] text-[#4D667D]/75">
                  {space.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Ritual Field Section */}
      <section className="px-6 py-16 md:py-28 bg-white/30">
        <div className="mx-auto grid max-w-[1140px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <AnimatedSection direction="left" className="bg-white/40 p-8 md:p-12 shadow-sm border border-[#4D667D]/5">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#4D667D]/60 font-medium">
              Ritual Field
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.3] md:text-6xl font-light text-[#4D667D]">
              <span className="italic text-[#C8A96B]">{poeticPhrases[2]}</span>
            </h2>
            <p className="mt-8 text-base md:text-lg font-light leading-[2] text-[#4D667D]/80">
              Each session is shaped with breath, listening, ritual symbolism, plant allies, energetic care, and practical integration. The work is not to become someone else, but to return to the original wisdom already moving within you.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="mt-6 inline-block border border-[#4D667D] px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] text-[#4D667D] transition-all duration-500 hover:bg-[#4D667D] hover:text-[#EFE6DB]"
              >
                Inquire
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <EditorialImage
              src={photos.waterfallPrayer}
              alt="Waterfall prayer ritual field"
              variant="organic-2"
              withBorder
              className="aspect-[4/5] w-full"
            />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
