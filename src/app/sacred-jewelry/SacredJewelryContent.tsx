"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { photos } from "@/lib/brand";

const pieces = [
  {
    title: "Protection",
    text: "Talismans held with mantra, intention, and ancient symbolism to shield and anchor your energy.",
    icon: "star" as const,
  },
  {
    title: "Devotion",
    text: "Adornments that invite beauty, softness, prayer, and deep remembrance of the divine feminine.",
    icon: "lotus" as const,
  },
  {
    title: "Ritual",
    text: "Pieces created to accompany ceremonies, offerings, threshold moments, and sacred everyday life.",
    icon: "ritual" as const,
  },
];

export default function SacredJewelryContent() {
  return (
    <div className="bg-[#EFE6DB] text-[#261710]">
      {/* Hero Header */}
      <section className="px-6 pb-12 md:pb-24 pt-28 md:pt-48 bg-[#EFE6DB]">
        <AnimatedSection className="mx-auto max-w-5xl text-center space-y-6">
          <p className="text-xs tracking-[0.25em] uppercase text-[#261710] font-bold">
            Sacred Jewelry / Shop
          </p>
          <h1 className="font-display text-5xl leading-[1.1] md:text-7xl uppercase font-normal text-[#261710]">
            Jewelry of <span className="italic text-[#8C6527] font-serif">the Soul</span>
          </h1>
          <div className="h-0.5 w-20 bg-[#8C6527]/50 mx-auto mt-8" />
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg font-normal leading-[2.1] text-[#33231A]">
            Sacred adornments created as talismans for devotion, protection, beauty, and inner remembrance.
          </p>
        </AnimatedSection>
      </section>

      {/* Main Content Grid */}
      <section className="px-6 pb-16 md:pb-28 bg-[#EFE6DB]">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <AnimatedSection direction="left">
            <EditorialImage
              src="/media/gallery/IMG_6693.jpg"
              alt="Handcrafted Sacred Scarab Talisman Necklace - Shakti Lotus"
              variant="rounded"
              withBorder
              className="aspect-[4/5] w-full"
              imageClassName="object-cover object-[center_35%]"
            />
          </AnimatedSection>
          <AnimatedSection direction="right" className="space-y-6">
            <div className="grid gap-5">
              {pieces.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#F8F5F1] p-7 shadow-sm border-2 border-[#D8C8B6] rounded-2xl transition-all duration-500 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex gap-5 items-start">
                    <SacredIcon
                      type={item.icon}
                      className="h-10 w-10 flex-none text-[#8C6527] mt-1"
                    />
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl text-[#261710] font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-sm font-normal leading-relaxed text-[#33231A]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#261710] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFFFFF] transition-all duration-300 hover:bg-[#3D2C20] rounded-full shadow-md"
              >
                Request the Collection
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
