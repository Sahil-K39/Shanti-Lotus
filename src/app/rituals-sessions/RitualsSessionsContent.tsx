"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { photos, poeticPhrases } from "@/lib/brand";

const spaces = [
  {
    title: "Ritual and Feminine Energy",
    text: "Spaces to activate your creative energy, heal your bond with the feminine, and inhabit your body with presence.",
    icon: "moon" as const,
    color: "text-[#2C4A63]",
  },
  {
    title: "Spiritual Integration",
    text: "Practices and guidance to expand your consciousness and root your spirituality in daily life.",
    icon: "lotus" as const,
    color: "text-[#8C6527]",
  },
  {
    title: "Deep Mentorship",
    text: "Deep support to reconnect with your energy, release blockages, and return to your center.",
    icon: "eye" as const,
    color: "text-[#2C4A63]",
  },
];

export default function RitualsSessionsContent() {
  return (
    <div className="bg-[#EFE6DB] text-[#261710]">
      {/* Hero Section */}
      <section className="px-6 pb-12 md:pb-24 pt-28 md:pt-48">
        <AnimatedSection className="mx-auto max-w-5xl text-center space-y-6">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8C6527] font-bold">
            Individual Sessions | 1:1 Mentorship
          </p>
          <h1 className="font-display text-5xl leading-[1.1] md:text-7xl uppercase font-normal text-[#261710]">
            Your body is <span className="italic text-[#8C6527]">a portal</span>
          </h1>
          <div className="h-0.5 w-20 bg-[#8C6527] mx-auto mt-8" />
          <p className="mx-auto mt-8 max-w-3xl text-base md:text-lg font-normal leading-[2] text-[#33231A]">
            Spaces to activate your creative energy, heal your bond with the feminine, and inhabit your body with presence.
          </p>
        </AnimatedSection>
      </section>

      {/* Spaces Cards */}
      <section className="px-6 pb-16 md:pb-28 bg-[#EFE6DB]">
        <div className="mx-auto grid max-w-[1220px] gap-6 md:grid-cols-3">
          {spaces.map((space, index) => (
            <AnimatedSection key={space.title} delay={index * 0.08} direction="up">
              <div className="bg-[#F8F5F1] h-full p-8 shadow-sm border-2 border-[#D8C8B6] rounded-2xl transition-all duration-500 hover:border-[#8C6527] hover:-translate-y-1">
                <SacredIcon type={space.icon} className={`h-12 w-12 ${space.color}`} />
                <h2 className="mt-8 font-display text-2xl leading-[1.3] text-[#261710] font-medium">
                  {space.title}
                </h2>
                <p className="mt-6 text-sm font-normal leading-[1.9] text-[#33231A]">
                  {space.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Ritual Field Section */}
      <section className="px-6 py-16 md:py-28 bg-[#F8F5F1] border-y-2 border-[#D8C8B6]">
        <div className="mx-auto grid max-w-[1140px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <AnimatedSection direction="left" className="bg-[#EFE6DB] p-8 md:p-12 shadow-sm border-2 border-[#D8C8B6] rounded-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-[#8C6527] font-bold">
              Identity Anchor
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.3] md:text-6xl font-normal text-[#261710]">
              <span className="italic text-[#8C6527]">{poeticPhrases[2]}</span>
            </h2>
            <p className="mt-8 font-serif italic text-lg md:text-xl font-normal leading-[2] text-[#33231A]">
              “Each space is an invitation to return to yourself, to inhabit your body as a temple, and to remember the wisdom that already lives within you.”
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-full bg-[#261710] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-[#FFFFFF] transition-all duration-500 hover:bg-[#8C6527] shadow-md"
              >
                Contact
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <EditorialImage
              src={photos.waterfallPrayer}
              alt="Waterfall prayer ritual field"
              variant="organic-2"
              withBorder
              className="aspect-[4/5] w-full"
            />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
