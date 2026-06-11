"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { images, poeticPhrases } from "@/lib/brand";

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
    <div className="overflow-hidden bg-ink text-ivory">
      <section className="px-6 pb-24 pt-40 md:pt-48">
        <AnimatedSection className="mx-auto max-w-5xl text-center">
          <p className="text-eyebrow">Rituals & Sessions</p>
          <h1 className="mt-6 font-display text-5xl leading-tight md:text-8xl">
            Your body is <span className="gold-text">a portal</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-loose text-parchment/82 md:text-lg">
            Private containers for energy clearing, feminine remembrance, spiritual integration, and the sacred return to your center.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-[1220px] gap-6 md:grid-cols-3">
          {spaces.map((space, index) => (
            <AnimatedSection key={space.title} delay={index * 0.08}>
              <div className="sacred-card h-full p-8">
                <SacredIcon type={space.icon} className="h-14 w-14 text-lightGold" />
                <h2 className="mt-8 font-display text-3xl leading-tight text-ivory">{space.title}</h2>
                <p className="mt-6 text-sm font-light leading-loose text-parchment/75">{space.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-[1140px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <AnimatedSection direction="left" className="sacred-card p-8 md:p-12">
            <p className="text-eyebrow">Ritual Field</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              <span className="gold-text">{poeticPhrases[2]}</span>
            </h2>
            <p className="mt-8 text-base font-light leading-loose text-parchment/80">
              Each session is shaped with breath, listening, ritual symbolism, plant allies, energetic care, and practical integration. The work is not to become someone else, but to return to the original wisdom already moving within you.
            </p>
            <Link href="/contact" className="mt-10 inline-flex border border-lightGold/45 px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-lightGold transition-all duration-500 hover:bg-lightGold hover:text-ink">
              Inquire
            </Link>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <EditorialImage src={images.ritual} alt="Gold ritual ornament from the provided Shakti Loto card" variant="organic-2" withBorder className="aspect-[4/5] w-full" />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
