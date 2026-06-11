"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { brand, images, offerings, poeticPhrases } from "@/lib/brand";

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
    <div className="bg-ink text-ivory">
      <section className="px-6 pb-24 pt-40 md:pt-48">
        <AnimatedSection className="mx-auto max-w-5xl text-center">
          <p className="text-eyebrow">Work With Me</p>
          <h1 className="mt-6 font-display text-5xl leading-tight md:text-8xl">
            Spaces to <span className="gold-text">Remember</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-loose text-parchment/82 md:text-lg">
            Spaces to remember, heal, and awaken your creative energy through the union of mind, body, and soul, so we may awaken our consciousness and liberate the spirit.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-base font-light leading-loose text-parchment/82 md:text-lg">
            I accompany you in awakening your creative energy and reconnecting with your inner wisdom through the path of self-exploration and self-knowledge.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-[1180px] gap-10 border-y border-lightGold/18 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <AnimatedSection direction="left">
            <div className="sacred-glow relative mx-auto aspect-square max-w-sm overflow-hidden rounded-full border border-lightGold/35 bg-charcoal p-3">
              <Image
                src={images.hero}
                alt="Kunti Shakti Loto water ritual image from the provided card"
                width={1000}
                height={1000}
                className="h-full w-full rounded-full object-cover"
                priority
              />
              <div className="absolute inset-3 rounded-full bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="text-center lg:text-left">
            <p className="text-eyebrow">From the Brand Card</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              <span className="gold-text">Kunti Shakti Loto</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base font-light leading-loose text-parchment/82 lg:mx-0">
              Bridging ancient plant wisdom, alchemy and spirit to awaken the divine within.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["Tantric Yogini", "Herbal Alchemist", "Plant Medicine Guide", "Ritual Jewelry", "Ayurveda"].map((item) => (
                <span key={item} className="border border-lightGold/25 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-lightGold">
                  {item}
                </span>
              ))}
            </div>
            <a
              href={brand.contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex border border-lightGold/45 px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-lightGold transition-all duration-500 hover:bg-lightGold hover:text-ink"
            >
              View Instagram
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-[1350px] gap-5 md:grid-cols-2 xl:grid-cols-4">
          {offerings.map((offering, index) => (
            <AnimatedSection key={offering} delay={index * 0.05}>
              <div className="sacred-card group flex h-full flex-col p-7 transition-all duration-500 hover:-translate-y-1 hover:border-lightGold/50">
                <SacredIcon type={index % 2 ? "moon" : "lotus"} className="h-12 w-12 text-lightGold transition-transform duration-700 group-hover:rotate-12" />
                <h2 className="mt-8 font-display text-3xl leading-tight text-ivory">{offering}</h2>
                <p className="mt-5 flex-1 text-sm font-light leading-loose text-parchment/74">{descriptions[index]}</p>
                <div className="gold-line mt-8" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-1">
            <EditorialImage src={images.tantra} alt="Kunti Shakti Loto water ritual image from the provided card" variant="organic-1" withBorder className="aspect-[4/5] w-full" />
          </AnimatedSection>
          <AnimatedSection className="sacred-card p-8 md:p-12 lg:col-span-2">
            <p className="text-eyebrow">A living container</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              <span className="gold-text">{poeticPhrases[3]}</span>
            </h2>
            <p className="mt-8 text-base font-light leading-loose text-parchment/80">
              The work is intimate and devotional. Every session, ritual, training, or retreat is shaped as a space where the body can become a temple again, where ancestral memory can speak, and where the creative force can move with grace.
            </p>
            <Link href="/contact" className="mt-10 inline-flex border border-lightGold/45 px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-lightGold transition-all duration-500 hover:bg-lightGold hover:text-ink">
              Request a Space
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
