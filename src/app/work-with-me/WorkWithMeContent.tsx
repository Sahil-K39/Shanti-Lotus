"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { brand, offerings, photos, sacredPhrases } from "@/lib/brand";

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
    <div className="bg-[#EFE6DB] text-[#261710]">
      {/* Hero Section */}
      <section className="px-6 pb-12 md:pb-24 pt-28 md:pt-48">
        <AnimatedSection className="mx-auto max-w-5xl text-center space-y-6">
          <p className="text-xs tracking-[0.35em] uppercase text-[#8C6527] font-bold">
            Work With Me
          </p>
          <h1 className="font-display text-5xl leading-tight md:text-8xl font-normal text-[#261710]">
            Spaces to <span className="text-[#8C6527] italic">Remember</span>
          </h1>
          <div className="h-0.5 w-16 bg-[#8C6527] mx-auto" />
          <p className="mx-auto max-w-3xl text-base font-normal leading-relaxed text-[#33231A] md:text-lg">
            {brand.workWithMeIntro}
          </p>
          <p className="mx-auto max-w-3xl text-base font-normal leading-relaxed text-[#33231A] md:text-lg">
            {brand.workWithMeClosing}
          </p>
        </AnimatedSection>
      </section>

      {/* Brand Card / Profile Section */}
      <section className="px-6 pb-16 md:pb-28">
        <div className="mx-auto grid max-w-[1180px] gap-10 border-y-2 border-[#D8C8B6] py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <AnimatedSection direction="left">
            <div className="mx-auto max-w-sm rounded-full border-2 border-[#D8C8B6] bg-[#F8F5F1] p-3 shadow-sm">
              <EditorialImage
                src={photos.redTempleDoor}
                alt="Kunti at a vivid red temple doorway"
                variant="circle"
                className="aspect-square w-full"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="text-center lg:text-left">
            <p className="text-xs tracking-[0.35em] uppercase text-[#8C6527] font-bold">
              Tantric Yogini · Traveler of this Earth
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-[#261710] md:text-6xl font-normal">
              <span className="text-[#8C6527]">Kunti</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base font-normal leading-relaxed text-[#33231A] lg:mx-0">
              I am here as a bridge between my ancestral roots in South America and the ancient wisdom and traditions of Asia. I come to accompany you on the path of awakening your feminine essence and your creative energy.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["South America", "Asia", "Pachakuti 2012", "Shakta Tantra", "Devi Yoga"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border-2 border-[#D8C8B6] bg-[#F8F5F1] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#261710] font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href={brand.contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex rounded-full bg-[#261710] px-8 py-4 text-xs uppercase tracking-[0.24em] text-[#FFFFFF] font-bold transition-all duration-500 hover:bg-[#8C6527] shadow-md"
            >
              Instagram @shakti_loto_
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="px-6 pb-16 md:pb-28">
        <div className="mx-auto grid max-w-[1350px] gap-6 md:grid-cols-2 xl:grid-cols-4">
          {offerings.map((offering, index) => (
            <AnimatedSection key={offering} delay={index * 0.05}>
              <div className="group flex h-full flex-col rounded-2xl border-2 border-[#D8C8B6] bg-[#F8F5F1] p-7 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#8C6527] hover:shadow-md">
                <SacredIcon
                  type={index % 2 ? "moon" : "lotus"}
                  className="h-10 w-10 text-[#8C6527] transition-transform duration-700 group-hover:rotate-12"
                />
                <h2 className="mt-8 font-display text-2xl leading-tight text-[#261710] font-medium md:text-3xl">
                  {offering}
                </h2>
                <p className="mt-4 flex-1 text-sm font-normal leading-relaxed text-[#33231A]">
                  {descriptions[index]}
                </p>
                <div className="mt-8 h-px w-full bg-[#D8C8B6]" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Living Container CTA Section */}
      <section className="px-6 py-16 md:py-28">
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
          <AnimatedSection className="flex flex-col justify-center rounded-3xl border-2 border-[#D8C8B6] bg-[#F8F5F1] p-8 shadow-sm backdrop-blur-md md:p-12 lg:col-span-2">
            <p className="text-xs tracking-[0.35em] uppercase text-[#8C6527] font-bold">
              Identity Anchor
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-[#261710] md:text-6xl font-normal">
              <span className="text-[#8C6527]">{sacredPhrases[3]}</span>
            </h2>
            <blockquote className="mt-8 font-serif italic text-xl md:text-2xl font-normal leading-relaxed text-[#33231A]">
              “{brand.finalPhrase}”
            </blockquote>
            <div className="pt-4">
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-[#261710] px-8 py-4 text-xs uppercase tracking-[0.24em] text-[#FFFFFF] font-bold transition-all duration-500 hover:bg-[#8C6527] shadow-md"
              >
                Contact
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
