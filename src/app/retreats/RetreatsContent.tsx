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
    <div className="bg-[#EFE6DB] text-[#261710]">
      {/* ═══════════════════════════════════════════
          01 — HERO BANNER
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pb-16 md:pb-28 md:pt-48">
        <AnimatedSection className="relative z-10 mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xs tracking-[0.25em] uppercase text-[#261710] font-bold">
            Immersive Containers
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#261710] uppercase tracking-[0.08em] leading-tight">
            Journeys into the Sacred
          </h1>
          <div className="h-0.5 w-16 bg-[#8C6527]/50 mx-auto mt-6" />
          <p className="mx-auto max-w-2xl text-base md:text-lg font-normal leading-[2] text-[#33231A]">
            Immersive containers to awaken consciousness, liberate the spirit, and root devotion into the body through nature, ritual, and sacred study.
          </p>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          02 — RETREATS & COURSES OFFERINGS
          ═══════════════════════════════════════════ */}
      <section className="px-6 pb-16 md:pb-28">
        <div className="mx-auto grid max-w-[1250px] gap-20 md:gap-28">
          {retreatOfferings.map((item, index) => (
            <AnimatedSection key={item.title}>
              <div
                className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-2 border-[#D8C8B6] bg-[#F8F5F1] shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    quality={95}
                    className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                  />
                </div>

                <div className="rounded-3xl border-2 border-[#D8C8B6] bg-[#F8F5F1] p-8 md:p-12 shadow-sm space-y-6">
                  <SacredIcon type={item.icon} className="h-10 w-10 text-[#8C6527]" />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#261710] font-bold">
                      {item.subtitle}
                    </p>
                    <h2 className="mt-2 font-display text-3xl md:text-5xl font-medium text-[#261710] tracking-wide">
                      {item.title}
                    </h2>
                  </div>

                  <p className="text-base font-normal leading-[2] text-[#33231A]">
                    {item.text}
                  </p>

                  <div className="pt-2">
                    <p className="text-xs tracking-[0.18em] uppercase text-[#261710] font-bold mb-3">
                      What is included & explored:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-2 text-xs font-medium text-[#261710]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#8C6527]" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-block bg-[#261710] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFFFFF] hover:bg-[#3D2C20] transition-all duration-300 rounded-full shadow-sm"
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
      <section className="border-t border-[#D8C8B6] bg-white/60 px-6 py-16 md:py-32">
        <div className="mx-auto max-w-[1250px]">
          <AnimatedSection className="text-center space-y-4 mb-16 md:mb-20">
            <p className="text-xs tracking-[0.25em] uppercase text-[#261710] font-bold">
              The Architecture
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-normal uppercase tracking-[0.08em] text-[#261710]">
              Essential Pillars of Our Containers
            </h2>
            <div className="h-0.5 w-16 bg-[#8C6527]/50 mx-auto" />
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => (
              <AnimatedSection key={pillar.title} delay={idx * 0.08}>
                <div className="h-full rounded-2xl border-2 border-[#D8C8B6] bg-[#F8F5F1] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#261710]">
                  <SacredIcon type={pillar.icon} className="h-8 w-8 text-[#8C6527]" />
                  <h3 className="mt-6 font-display text-xl font-bold tracking-wide text-[#261710]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm font-normal leading-relaxed text-[#33231A]">
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
      <section className="px-6 py-16 md:py-36 bg-[#EFE6DB]">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection direction="up" className="space-y-6">
            <SacredIcon type="lotus" className="mx-auto h-8 w-8 text-[#8C6527]" />
            <p className="font-display text-2xl md:text-4xl italic font-normal text-[#261710] leading-[1.6]">
              "{poeticPhrases[2]} {poeticPhrases[3]}"
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="h-0.5 w-12 bg-[#8C6527]/50" />
              <p className="text-xs tracking-[0.25em] uppercase text-[#261710] font-bold">
                Kunti · Shakti Lotus
              </p>
              <div className="h-0.5 w-12 bg-[#8C6527]/50" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          05 — CALL TO ACTION / INQUIRY BANNER
          ═══════════════════════════════════════════ */}
      <section className="border-t border-[#D8C8B6] bg-white/60 px-6 py-16 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection className="space-y-6">
            <p className="text-xs tracking-[0.25em] uppercase text-[#261710] font-bold">
              Upcoming Gatherings
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-normal uppercase tracking-[0.08em] text-[#261710]">
              Begin Your Journey
            </h2>
            <p className="text-base md:text-lg font-normal leading-[2] text-[#33231A] max-w-xl mx-auto">
              Spaces are intentionally kept intimate to preserve depth and energetic integrity. Contact us to receive the current dates, registration details, or custom group offerings.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block bg-[#261710] px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFFFFF] hover:bg-[#3D2C20] transition-all duration-300 rounded-full shadow-md"
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
