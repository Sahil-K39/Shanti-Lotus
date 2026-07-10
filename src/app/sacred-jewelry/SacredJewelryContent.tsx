"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { photos } from "@/lib/brand";

const pieces = [
  ["Protection", "Talismans held with mantra, intention, and ancient symbolism."],
  ["Devotion", "Adornments that invite beauty, softness, prayer, and remembrance."],
  ["Ritual", "Pieces created to accompany ceremonies, offerings, and sacred thresholds."],
];

export default function SacredJewelryContent() {
  return (
    <div className="bg-ink text-ivory">
      <section className="px-6 pb-24 pt-40 md:pt-48">
        <AnimatedSection className="mx-auto max-w-5xl text-center">
          <p className="text-eyebrow">Sacred Jewelry / Shop</p>
          <h1 className="mt-6 font-display text-5xl leading-tight md:text-8xl">
            Jewelry of <span className="gold-text">the Soul</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-loose text-parchment/82 md:text-lg">
            Sacred adornments created as talismans for devotion, protection, beauty, and inner remembrance.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <AnimatedSection direction="left">
            <EditorialImage src={photos.redTempleDoor} alt="Kunti at a vivid red temple doorway" variant="organic-1" withBorder className="aspect-[4/5] w-full" />
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="grid gap-5">
              {pieces.map(([title, text], index) => (
                <div key={title} className="sacred-card p-7">
                  <div className="flex gap-5">
                    <SacredIcon type={index === 0 ? "star" : index === 1 ? "lotus" : "ritual"} className="h-11 w-11 flex-none text-lightGold" />
                    <div>
                      <h2 className="font-display text-3xl text-ivory">{title}</h2>
                      <p className="mt-3 text-sm font-light leading-loose text-parchment/75">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-flex border border-lightGold/45 px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-lightGold transition-all duration-500 hover:bg-lightGold hover:text-ink">
              Request the Collection
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
