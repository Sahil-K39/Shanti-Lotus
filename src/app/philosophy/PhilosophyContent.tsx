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
];

export default function PhilosophyContent() {
  return (
    <div className="bg-[#EFE6DB] text-[#4D667D]">
      {/* ═══════════════════════════════════════════
          01 — HERO SECTION
          ═══════════════════════════════════════════ */}
      <section className="px-6 pb-24 pt-40 md:pt-48">
        <AnimatedSection className="mx-auto max-w-5xl text-center space-y-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#4D667D]/60 font-medium">
            Philosophy & Vision
          </p>
          <h1 className="font-display text-5xl leading-[1.1] md:text-7xl lg:text-8xl uppercase font-light text-[#4D667D]">
            The Path of <span className="italic text-[#C8A96B]">Remembrance</span>
          </h1>
          <div className="h-px w-20 bg-[#C8A96B]/50 mx-auto mt-10" />
          <p className="mx-auto mt-8 max-w-3xl text-base md:text-lg font-light leading-[2.1] text-[#4D667D]/80">
            A living bridge between ancestral South American roots and ancient Himalayan Tantra, inviting you to experience spirituality as embodied, felt, and sovereign.
          </p>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          02 — CORE VISION SPREAD
          ═══════════════════════════════════════════ */}
      <section className="px-6 pb-28 bg-[#EFE6DB]">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <AnimatedSection direction="left" className="lg:sticky lg:top-28">
            <EditorialImage
              src={photos.ancestralLineage}
              alt="Kunti holding ancestral sacred wisdom"
              variant="organic-1"
              withBorder
              className="aspect-[3/4] w-full"
            />
          </AnimatedSection>

          <AnimatedSection direction="right" className="bg-white/40 p-8 md:p-12 shadow-sm border border-[#4D667D]/5 space-y-8">
            <SacredIcon type="lotus" className="h-14 w-14 text-[#C8A96B]" />
            <div className="space-y-6 text-lg font-light leading-[2] text-[#4D667D]/80">
              <p className="font-display text-2xl md:text-3xl text-[#4D667D] leading-snug">
                "I believe there is something within you waiting to be remembered."
              </p>
              <p>
                Shakti Loto is born from the deep realization that we are not separate from the sacred. We do not need to renounce the world or deny our human experience to touch the divine.
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
      <section className="px-6 py-28 bg-white/30">
        <AnimatedSection className="mx-auto max-w-4xl text-center space-y-8">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#4D667D]/50 font-medium">
            The Living Essence
          </p>
          <p className="font-display text-3xl leading-[1.5] md:text-5xl italic text-[#C8A96B] font-light">
            {poeticPhrases[2]} {poeticPhrases[3]}
          </p>
          <div className="h-px w-16 bg-[#C8A96B]/40 mx-auto" />
          <p className="text-base md:text-lg font-light leading-[2] text-[#4D667D]/70 max-w-2xl mx-auto">
            A sacred space to soften, listen inward, and restore the vital connection to the Great Mother and your innate creative potential.
          </p>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          04 — FOUR PILLARS GRID
          ═══════════════════════════════════════════ */}
      <section className="px-6 py-32 bg-[#EFE6DB]">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="text-center space-y-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#4D667D]/50 font-medium">
              Foundations of Practice
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-[#4D667D] font-light uppercase">
              Pillars of <span className="italic text-[#C8A96B]">Wisdom</span>
            </h2>
            <div className="h-px w-20 bg-[#C8A96B]/50 mx-auto mt-6" />
          </AnimatedSection>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {philosophyPillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 0.08} direction="up">
                <div className="bg-white/40 h-full p-8 md:p-10 shadow-sm border border-[#4D667D]/5 transition-transform duration-500 hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-5xl text-[#C8A96B]/30">{pillar.number}</span>
                      <SacredIcon type={pillar.icon} className="h-10 w-10 text-[#C8A96B]" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl md:text-3xl text-[#4D667D]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-[10px] tracking-[0.25em] uppercase text-[#4D667D]/60 font-medium">
                      {pillar.subtitle}
                    </p>
                    <p className="mt-6 text-base font-light leading-[1.9] text-[#4D667D]/75">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="h-px w-12 bg-[#C8A96B]/30 mt-8" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          05 — EDITORIAL DUAL FEATURE
          ═══════════════════════════════════════════ */}
      <section className="px-6 pb-28 bg-[#EFE6DB]">
        <div className="mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedSection direction="left" className="order-2 lg:order-1 bg-white/40 p-8 md:p-12 shadow-sm border border-[#4D667D]/5 space-y-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#4D667D]/50 font-medium">
              Devotional Integration
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-[#4D667D] font-light">
              Living the <span className="italic text-[#C8A96B]">Sacred</span>
            </h2>
            <p className="text-base md:text-lg font-light leading-[2] text-[#4D667D]/80">
              True transformation occurs not when we escape our humanity, but when we infuse every layer of existence with awareness, love, and sacred intentionality.
            </p>
            <p className="text-base font-light leading-[2] text-[#4D667D]/75">
              Through ceremonial spaces, private mentorship, herbal alchemy, and sacred jewelry, each container is crafted as a living talisman to support your authentic evolution.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/rituals-sessions"
                className="inline-block border border-[#4D667D] px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] text-[#4D667D] hover:bg-[#4D667D] hover:text-[#EFE6DB] transition-all duration-500"
              >
                Explore Rituals
              </Link>
              <Link
                href="/work-with-me"
                className="inline-block border border-[#C8A96B] px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] text-[#C8A96B] hover:bg-[#C8A96B] hover:text-[#EFE6DB] transition-all duration-500"
              >
                Work With Me
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="order-1 lg:order-2">
            <EditorialImage
              src={photos.roseMeditation}
              alt="Rose meditation and devotional presence"
              variant="organic-2"
              withBorder
              className="aspect-[4/3] w-full"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          06 — CLOSING CTA SECTION
          ══════════════════════════════════════════ */}
      <section className="px-6 py-28 md:py-36 bg-white/30 text-center">
        <AnimatedSection className="mx-auto max-w-3xl space-y-8">
          <SacredIcon type="moon" className="mx-auto h-12 w-12 text-[#C8A96B]" />
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96B] font-medium">
            Begin The Journey
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-[#4D667D] font-light uppercase tracking-[0.08em]">
            Step into the <span className="italic text-[#C8A96B]">Sacred</span>
          </h2>
          <p className="text-base md:text-lg font-light text-[#4D667D]/70 leading-[2] max-w-2xl mx-auto">
            Whether you feel called to a private session, a deep ceremonial retreat, or an intentional piece of jewelry, the space is open for your return.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block border border-[#4D667D] px-10 py-4 text-[10px] uppercase tracking-[0.25em] text-[#4D667D] hover:bg-[#4D667D] hover:text-[#EFE6DB] transition-all duration-500"
            >
              Connect With Kunti
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
