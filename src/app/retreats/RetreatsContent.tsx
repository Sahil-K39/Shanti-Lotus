"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SacredIcon from "@/components/SacredIcon";
import { photos, poeticPhrases } from "@/lib/brand";

const retreatOfferings = [
  {
    title: "Retreats & Immersions",
    subtitle: "Sacred Sanctuaries in Nature",
    text: "Immersive spaces for transformation, healing, movement, ritual, and remembrance. Stepping away from the ordinary world into sanctuaries where the body can rest, the nervous system can soften, and deep spiritual communion is woven.",
    image: photos.mountainLakePrayer,
    alt: "Mountain lake prayer retreat landscape",
    icon: "moon" as const,
    highlights: [
      "Sacred Nature Sanctuaries",
      "Tantric Movement & Breathwork",
      "Plant & Cacao Ceremonies",
      "Deep Sisterhood & Altar Craft",
    ],
  },
  {
    title: "Courses & Study Containers",
    subtitle: "Living Wisdom & Devotional Practice",
    text: "Guided study and practice containers for Tantra, Ayurveda, feminine embodiment, and spiritual integration. Structured to support your journey over weeks of guided contemplation, practices, and live communion.",
    image: photos.sacredTree,
    alt: "Ancient sacred tree",
    icon: "lotus" as const,
    highlights: [
      "Traditional Shaiva Shakta Tantra",
      "Ayurvedic Daily Rhythms & Vitality",
      "Feminine Archetypes & Energetics",
      "Mantra, Mudra & Subtle Body Anatomy",
    ],
  },
];

const pillars = [
  {
    title: "Tantric Movement",
    desc: "Awakening the subtle body through somatic flow, breath, and conscious presence.",
    icon: "eye" as const,
  },
  {
    title: "Sacred Ritual",
    desc: "Ceremonial spaces honoring thresholds, elements, ancestral blessing, and prayer.",
    icon: "lotus" as const,
  },
  {
    title: "Plant & Herbal Wisdom",
    desc: "Reconnecting with botanical allies, alchemical tea rituals, and Ayurvedic balance.",
    icon: "moon" as const,
  },
  {
    title: "Spiritual Integration",
    desc: "Grounding transcendent experiences into practical, embodied, everyday living.",
    icon: "star" as const,
  },
];

export default function RetreatsContent() {
  return (
    <div className="bg-[#EFE6DB] text-[#4D667D]">
      {/* ═══════════════════════════════════════════
          01 — HERO BANNER
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-48">
        <AnimatedSection className="relative z-10 mx-auto max-w-4xl text-center space-y-6">
          <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#C8A96B] font-medium">
            Immersive Containers
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#4D667D] uppercase tracking-[0.08em] leading-tight">
            Journeys into the Sacred
          </h1>
          <div className="h-px w-16 bg-[#C8A96B]/40 mx-auto mt-6" />
          <p className="mx-auto max-w-2xl text-base md:text-lg font-light leading-[2] text-[#4D667D]/80">
            Immersive containers to awaken consciousness, liberate the spirit, and root devotion into the body through nature, ritual, and sacred study.
          </p>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          02 — RETREATS & COURSES OFFERINGS
          ═══════════════════════════════════════════ */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-[1250px] gap-20 md:gap-28">
          {retreatOfferings.map((item, index) => (
            <AnimatedSection key={item.title}>
              <div
                className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#4D667D]/10 bg-white/40 shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                  />
                </div>

                <div className="rounded-3xl border border-[#4D667D]/10 bg-white/60 p-8 md:p-12 backdrop-blur-sm shadow-sm space-y-6">
                  <SacredIcon type={item.icon} className="h-10 w-10 text-[#C8A96B]" />
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8A96B] font-medium">
                      {item.subtitle}
                    </p>
                    <h2 className="mt-2 font-display text-3xl md:text-5xl font-light text-[#4D667D] tracking-wide">
                      {item.title}
                    </h2>
                  </div>

                  <p className="text-base font-light leading-[2] text-[#4D667D]/80">
                    {item.text}
                  </p>

                  <div className="pt-2">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#4D667D]/60 font-semibold mb-3">
                      What is included & explored:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-2 text-xs font-light text-[#4D667D]/80"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#C8A96B]" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-block border border-[#4D667D] px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] text-[#4D667D] hover:bg-[#4D667D] hover:text-[#EFE6DB] transition-all duration-500"
                    >
                      Inquire & Reserve
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          03 — PILLARS / ESSENTIAL ELEMENTS
          ═══════════════════════════════════════════ */}
      <section className="border-t border-[#4D667D]/10 bg-white/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1250px]">
          <AnimatedSection className="text-center space-y-4 mb-16 md:mb-20">
            <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#C8A96B] font-medium">
              The Architecture
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light uppercase tracking-[0.1em] text-[#4D667D]">
              Essential Pillars of Our Containers
            </h2>
            <div className="h-px w-16 bg-[#C8A96B]/40 mx-auto" />
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => (
              <AnimatedSection key={pillar.title} delay={idx * 0.08}>
                <div className="h-full rounded-2xl border border-[#4D667D]/10 bg-white/60 p-7 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A96B]/40">
                  <SacredIcon type={pillar.icon} className="h-8 w-8 text-[#C8A96B]" />
                  <h3 className="mt-6 font-display text-xl font-medium tracking-wide text-[#4D667D]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[#4D667D]/70">
                    {pillar.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          04 — POETIC MANIFESTO QUOTE
          ═══════════════════════════════════════════ */}
      <section className="px-6 py-24 md:py-36 bg-[#EFE6DB]">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection direction="up" className="space-y-6">
            <SacredIcon type="lotus" className="mx-auto h-8 w-8 text-[#C8A96B]/60" />
            <p className="font-display text-2xl md:text-4xl italic font-light text-[#4D667D] leading-[1.6]">
              "{poeticPhrases[2]} {poeticPhrases[3]}"
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="h-px w-12 bg-[#C8A96B]/40" />
              <p className="text-xs tracking-[0.3em] uppercase text-[#4D667D]/50 font-medium">
                Kunti Shakti Loto
              </p>
              <div className="h-px w-12 bg-[#C8A96B]/40" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          05 — CALL TO ACTION / INQUIRY BANNER
          ═══════════════════════════════════════════ */}
      <section className="border-t border-[#4D667D]/10 bg-[#D8C8B6]/20 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection className="space-y-6">
            <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#C8A96B] font-medium">
              Upcoming Gatherings
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-light uppercase tracking-[0.1em] text-[#4D667D]">
              Begin Your Journey
            </h2>
            <p className="text-base md:text-lg font-light leading-[2] text-[#4D667D]/80 max-w-xl mx-auto">
              Spaces are intentionally kept intimate to preserve depth and energetic integrity. Contact us to receive the current dates, registration details, or custom group offerings.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block border border-[#4D667D] px-10 py-4 text-[10px] uppercase tracking-[0.25em] text-[#4D667D] hover:bg-[#4D667D] hover:text-[#EFE6DB] transition-all duration-500"
              >
                Inquire for Next Dates
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
