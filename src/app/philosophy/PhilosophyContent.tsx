"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { photos, poeticPhrases } from "@/lib/brand";

const philosophyPillars = [
  {
    number: "01",
    title: "The Body as Altar",
    subtitle: "Embodied Presence",
    icon: "lotus" as const,
    description:
      "The physical body is not an obstacle to spiritual awakening, but its sacred vessel. By honoring sensation, breath, and organic rhythm, we welcome the divine to live fully through us.",
  },
  {
    number: "02",
    title: "Ancestral & Earth Medicine",
    subtitle: "Rooted Wisdom",
    icon: "leaf" as const,
    description:
      "Deep reverence for the ancestral roots of South America and botanical allies that reconnect our spirit with the wisdom, cycles, and healing memory of Mother Earth.",
  },
  {
    number: "03",
    title: "Shaiva Shakta Tantra",
    subtitle: "Sacred Union",
    icon: "flame" as const,
    description:
      "The meeting of stillness and dynamic life force—unifying consciousness and creative energy to awaken sovereign truth, sensual innocence, and spiritual liberation.",
  },
  {
    number: "04",
    title: "Living Devotion & Ritual",
    subtitle: "Daily Sanctity",
    icon: "moon" as const,
    description:
      "Spirituality rooted in everyday life. Every breath, altar offering, prayer, and conscious action becomes a gateway to remembrance, presence, and grace.",
  },
];export default function PhilosophyContent() {
  return (
    <div className="bg-[#EFE6DB] text-[#261710]">
      {/* ═══════════════════════════════════════════
          01 — HERO SECTION
          ═══════════════════════════════════════════ */}
      <section className="px-6 pb-12 md:pb-24 pt-28 md:pt-48">
        <AnimatedSection className="mx-auto max-w-5xl text-center space-y-6">
          <p className="text-xs tracking-[0.25em] uppercase text-[#261710] font-bold">
            Philosophy & Vision
          </p>
          <h1 className="font-display text-5xl leading-[1.1] md:text-7xl lg:text-8xl uppercase font-normal text-[#261710]">
            The Path of <span className="italic text-[#8C6527] font-serif">Remembrance</span>
          </h1>
          <div className="h-0.5 w-20 bg-[#8C6527]/50 mx-auto mt-10" />
          <p className="mx-auto mt-8 max-w-3xl text-base md:text-lg font-normal leading-[2.1] text-[#33231A]">
            A living bridge between ancestral South American roots and ancient Himalayan Tantra, inviting you to experience spirituality as embodied, felt, and sovereign.
          </p>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          02 — CORE VISION SPREAD
          ═══════════════════════════════════════════ */}
      <section className="px-6 pb-16 md:pb-28 bg-[#EFE6DB]">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <AnimatedSection direction="left" className="lg:sticky lg:top-28">
            <EditorialImage
              src={photos.ancestralLineage}
              alt="Kunti holding ancestral sacred wisdom"
              variant="rounded"
              withBorder
              className="aspect-[4/5] w-full"
              imageClassName="object-cover object-[center_20%]"
            />
          </AnimatedSection>

          <AnimatedSection direction="right" className="bg-[#F8F5F1] p-8 md:p-12 shadow-sm border-2 border-[#D8C8B6] rounded-2xl space-y-8">
            <SacredIcon type="lotus" className="h-14 w-14 text-[#8C6527]" />
            <div className="space-y-6 text-lg font-normal leading-[2] text-[#33231A]">
              <p className="font-display text-2xl md:text-3xl text-[#261710] font-medium leading-snug">
                "I believe there is something within you waiting to be remembered."
              </p>
              <p>
                Shakti Lotus is born from the deep realization that we are not separate from the sacred. We do not need to renounce the world or deny our human experience to touch the divine.
              </p>
              <p>
                Our philosophy embraces the union of Shiva (pure awareness) and Shakti (creative life current). When we allow the body to become an altar and ritual to become our language, life itself becomes a devotional return to truth.
              </p>
              <p>
                Walking as a bridge between worlds, Kunti accompanies seekers in releasing conditioned blockages, awakening primal feminine intelligence, and grounding high spiritual insight into everyday reality.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          03 — POETIC MANIFESTO STRIP
          ═══════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-28 bg-white/60 border-y border-[#D8C8B6]">
        <AnimatedSection className="mx-auto max-w-4xl text-center space-y-8">
          <p className="text-xs tracking-[0.25em] uppercase text-[#261710] font-bold">
            The Living Essence
          </p>
          <p className="font-display text-3xl leading-[1.5] md:text-5xl italic text-[#261710] font-normal">
            {poeticPhrases[2]} {poeticPhrases[3]}
          </p>
          <div className="h-0.5 w-16 bg-[#8C6527]/50 mx-auto" />
          <p className="text-base md:text-lg font-normal leading-[2] text-[#33231A] max-w-2xl mx-auto">
            A sacred space to soften, listen inward, and restore the vital connection to the Great Mother and your innate creative potential.
          </p>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          04 — FOUR PILLARS GRID
          ═══════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-32 bg-[#EFE6DB]">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="text-center space-y-6">
            <p className="text-xs tracking-[0.25em] uppercase text-[#261710] font-bold">
              Foundations of Practice
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-[#261710] font-normal uppercase">
              Pillars of <span className="italic text-[#8C6527] font-serif">Wisdom</span>
            </h2>
            <div className="h-0.5 w-20 bg-[#8C6527]/50 mx-auto mt-6" />
          </AnimatedSection>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {philosophyPillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 0.08} direction="up">
                <div className="bg-[#F8F5F1] h-full p-8 md:p-10 shadow-sm border-2 border-[#D8C8B6] rounded-2xl transition-transform duration-500 hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-5xl text-[#8C6527] font-semibold">{pillar.number}</span>
                      <SacredIcon type={pillar.icon} className="h-10 w-10 text-[#8C6527]" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl md:text-3xl text-[#261710] font-medium">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs tracking-[0.18em] uppercase text-[#261710] font-bold">
                      {pillar.subtitle}
                    </p>
                    <p className="mt-6 text-base font-normal leading-[1.9] text-[#33231A]">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="h-0.5 w-12 bg-[#8C6527]/30 mt-8" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          05 — EDITORIAL DUAL FEATURE
          ═══════════════════════════════════════════ */}
      <section className="px-6 pb-16 md:pb-28 bg-[#EFE6DB]">
        <div className="mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedSection direction="left" className="order-2 lg:order-1 bg-[#F8F5F1] p-8 md:p-12 shadow-sm border-2 border-[#D8C8B6] rounded-2xl space-y-6">
            <p className="text-xs tracking-[0.25em] uppercase text-[#261710] font-bold">
              Devotional Integration
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-[#261710] font-normal">
              Living the <span className="italic text-[#8C6527] font-serif">Sacred</span>
            </h2>
            <p className="text-base md:text-lg font-normal leading-[2] text-[#33231A]">
              True transformation occurs not when we escape our humanity, but when we infuse every layer of existence with awareness, love, and sacred intentionality.
            </p>
            <p className="text-base font-normal leading-[2] text-[#33231A]">
              Through ceremonial spaces, private mentorship, herbal alchemy, and sacred jewelry, each container is crafted as a living talisman to support your authentic evolution.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/rituals-sessions"
                className="inline-block bg-[#261710] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFFFFF] hover:bg-[#3D2C20] transition-all duration-300 rounded-full shadow-sm"
              >
                Explore Rituals
              </Link>
              <Link
                href="/work-with-me"
                className="inline-block border-2 border-[#261710] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#261710] hover:bg-[#261710] hover:text-[#FFFFFF] transition-all duration-300 rounded-full"
              >
                Work With Me
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="order-1 lg:order-2">
            <EditorialImage
              src={photos.roseMeditation}
              alt="Rose meditation and devotional presence"
              variant="rounded"
              withBorder
              className="aspect-square w-full"
              imageClassName="object-cover object-[center_20%]"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          06 — CLOSING CTA SECTION
          ═══════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-28 md:py-36 bg-white/60 border-t border-[#D8C8B6] text-center">
        <AnimatedSection className="mx-auto max-w-3xl space-y-8">
          <SacredIcon type="moon" className="mx-auto h-12 w-12 text-[#8C6527]" />
          <p className="text-xs tracking-[0.25em] uppercase text-[#261710] font-bold">
            Begin The Journey
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-[#261710] font-normal uppercase tracking-[0.08em]">
            Step into the <span className="italic text-[#8C6527] font-serif">Sacred</span>
          </h2>
          <p className="text-base md:text-lg font-normal text-[#33231A] leading-[2] max-w-2xl mx-auto">
            Whether you feel called to a private session, a deep ceremonial retreat, or an intentional piece of jewelry, the space is open for your return.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block bg-[#261710] px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFFFFF] hover:bg-[#3D2C20] transition-all duration-300 rounded-full shadow-md"
            >
              Connect With Kunti
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
