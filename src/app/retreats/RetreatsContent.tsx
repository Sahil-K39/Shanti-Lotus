"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { images } from "@/lib/brand";

const retreats = [
  {
    title: "Retreats",
    text: "Immersive spaces for transformation, healing, movement, ritual, and remembrance.",
    image: images.landscape,
  },
  {
    title: "Courses",
    text: "Guided study and practice containers for Tantra, Ayurveda, feminine embodiment, and spiritual integration.",
    image: images.lotus,
  },
];

export default function RetreatsContent() {
  return (
    <div className="bg-ink text-ivory">
      <section className="relative overflow-hidden px-6 pb-28 pt-40 md:pt-48">
        <div className="absolute inset-0 opacity-30">
          <EditorialImage src={images.atmosphere} alt="Back side artwork from the provided Shakti Loto card" variant="sharp" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/88 to-ink" />
        <AnimatedSection className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="text-eyebrow">Retreats & Courses</p>
          <h1 className="mt-6 font-display text-5xl leading-tight md:text-8xl">
            Journeys into <span className="gold-text">the Sacred</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-loose text-parchment/82 md:text-lg">
            Immersive containers to awaken consciousness, liberate the spirit, and root devotion into the body.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-[1250px] gap-16">
          {retreats.map((item, index) => (
            <AnimatedSection key={item.title}>
              <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <EditorialImage src={item.image} alt={`Provided Shakti Loto card artwork for ${item.title}`} variant={index % 2 ? "organic-2" : "organic-1"} withBorder className="aspect-[4/3] w-full" />
                <div className="sacred-card p-8 md:p-12">
                  <SacredIcon type={index ? "star" : "moon"} className="h-14 w-14 text-lightGold" />
                  <h2 className="mt-8 font-display text-5xl text-ivory">{item.title}</h2>
                  <p className="mt-6 text-base font-light leading-loose text-parchment/80">{item.text}</p>
                  <Link href="/contact" className="mt-9 inline-flex border border-lightGold/45 px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-lightGold transition-all duration-500 hover:bg-lightGold hover:text-ink">
                    Inquire
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
