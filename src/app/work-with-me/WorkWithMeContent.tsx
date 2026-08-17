"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { brand, offerings, photos, poeticPhrases } from "@/lib/brand";

const descriptions = [
  "Tantric remembrance through mantra, ritual, subtle body devotion, and the living wisdom of Shakti.",
  "Embodied goddess practice with breath, movement, stillness, and inner listening.",
  "Elemental lifestyle guidance to restore rhythm, vitality, digestion, and balance.",
  "Sacred movement to free expression, awaken sensual innocence, and open creative channels.",
  "Talismans and adornments created as extensions of prayer, beauty, and protection.",
  "Botanical preparations, plant devotion, and ritual alchemy for transformation.",
  "Ceremonial altar craft for thresholds, release, blessing, and spiritual anchoring.",
  "Immersive journeys and courses for remembrance, healing, and devotion.",
];

export default function WorkWithMeContent() {
  return (
    <div className="bg-[#EFE6DB] text-[#4D667D]">
      {/* Hero Section */}
      <section className="px-6 pb-24 pt-40 md:pt-48">
        <AnimatedSection className="mx-auto max-w-5xl text-center space-y-6">
          <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#C8A96B] font-medium">
            Work With Me
          </p>
          <h1 className="font-display text-5xl leading-tight md:text-8xl font-light text-[#4D667D]">
            Spaces to <span className="text-[#C8A96B] italic">Remember</span>
          </h1>
          <div className="h-px w-16 bg-[#C8A96B]/40 mx-auto" />
          <p className="mx-auto max-w-3xl text-base font-light leading-relaxed text-[#4D667D]/80 md:text-lg">
            Spaces to remember, heal, and awaken your creative energy through the union of mind, body, and soul, so we may awaken our consciousness and liberate the spirit.
          </p>
          <p className="mx-auto max-w-3xl text-base font-light leading-relaxed text-[#4D667D]/80 md:text-lg">
            I accompany you in awakening your creative energy and reconnecting with your inner wisdom through the path of self-exploration and self-knowledge.
          </p>
        </AnimatedSection>
      </section>

      {/* Brand Card / Profile Section */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-[1180px] gap-10 border-y border-[#C8A96B]/20 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <AnimatedSection direction="left">
            <div className="mx-auto max-w-sm rounded-full border border-[#C8A96B]/30 bg-white/40 p-3 shadow-sm">
              <EditorialImage
                src={photos.redTempleDoor}
                alt="Kunti at a vivid red temple doorway"
                variant="sharp"
                imageClassName="rounded-full"
                className="aspect-square w-full rounded-full"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="text-center lg:text-left">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96B] font-medium">
              From the Brand Card
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-[#4D667D] md:text-6xl font-light">
              <span className="text-[#C8A96B]">Kunti Shakti Loto</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base font-light leading-relaxed text-[#4D667D]/80 lg:mx-0">
              Bridging ancient plant wisdom, alchemy and spirit to awaken the divine within.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["Tantric Yogini", "Herbal Alchemist", "Plant Medicine Guide", "Ritual Jewelry", "Ayurveda"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#C8A96B]/30 bg-white/50 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#4D667D]/80"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href={brand.contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex border border-[#4D667D] px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-[#4D667D] transition-all duration-500 hover:bg-[#4D667D] hover:text-[#EFE6DB]"
            >
              View Instagram
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-[1350px] gap-6 md:grid-cols-2 xl:grid-cols-4">
          {offerings.map((offering, index) => (
            <AnimatedSection key={offering} delay={index * 0.05}>
              <div className="group flex h-full flex-col rounded-2xl border border-[#4D667D]/10 bg-white/50 p-7 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C8A96B]/50 hover:bg-white/80">
                <SacredIcon
                  type={index % 2 ? "moon" : "lotus"}
                  className="h-10 w-10 text-[#C8A96B] transition-transform duration-700 group-hover:rotate-12"
                />
                <h2 className="mt-8 font-display text-2xl leading-tight text-[#4D667D] font-light md:text-3xl">
                  {offering}
                </h2>
                <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-[#4D667D]/75">
                  {descriptions[index]}
                </p>
                <div className="mt-8 h-px w-full bg-[#C8A96B]/30" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Living Container CTA Section */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-1">
            <EditorialImage
              src={photos.gardenPortrait}
              alt="Kunti in a garden portrait"
              variant="organic-1"
              withBorder
              className="aspect-[4/5] w-full"
            />
          </AnimatedSection>
          <AnimatedSection className="flex flex-col justify-center rounded-2xl border border-[#4D667D]/10 bg-white/60 p-8 shadow-sm backdrop-blur-md md:p-12 lg:col-span-2">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96B] font-medium">
              A living container
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-[#4D667D] md:text-6xl font-light">
              <span className="text-[#C8A96B]">{poeticPhrases[3]}</span>
            </h2>
            <p className="mt-8 text-base font-light leading-relaxed text-[#4D667D]/80">
              The work is intimate and devotional. Every session, ritual, training, or retreat is shaped as a space where the body can become a temple again, where ancestral memory can speak, and where the creative force can move with grace.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="mt-6 inline-flex border border-[#4D667D] px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-[#4D667D] transition-all duration-500 hover:bg-[#4D667D] hover:text-[#EFE6DB]"
              >
                Request a Space
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
