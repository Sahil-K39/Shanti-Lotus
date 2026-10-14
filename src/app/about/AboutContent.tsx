"use client";

import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { brand, certifications, photos, sacredPhrases } from "@/lib/brand";

export default function AboutContent() {
  return (
    <div className="bg-[#EFE6DB] text-[#261710]">
      {/* Header */}
      <section className="px-6 pb-12 md:pb-24 pt-28 md:pt-48">
        <AnimatedSection className="mx-auto max-w-5xl text-center space-y-6">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8C6527] font-bold">About Kunti</p>
          <h1 className="font-display text-5xl leading-[1.1] md:text-7xl uppercase font-normal text-[#261710]">
            Namaste, I am <span className="italic text-[#8C6527]">Kunti</span>
          </h1>
          <p className="font-display text-2xl md:text-3xl text-[#8C6527] italic font-normal">
            Tantric Yogini, traveler of this Earth
          </p>
          <div className="h-0.5 w-20 bg-[#8C6527] mx-auto mt-6" />
        </AnimatedSection>
      </section>

      {/* Main Bio Spread */}
      <section className="px-6 pb-16 md:pb-28 bg-[#EFE6DB]">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <AnimatedSection direction="left" className="lg:sticky lg:top-28">
            <EditorialImage
              src={photos.mainPhoto}
              alt="Kunti honoring ancestral lineage"
              variant="rounded"
              withBorder
              className="aspect-[4/5] w-full"
              imageClassName="object-cover object-[center_top]"
            />
          </AnimatedSection>
          <AnimatedSection direction="right" className="bg-[#F8F5F1] p-8 md:p-12 shadow-md border-2 border-[#D8C8B6] rounded-3xl">
            <SacredIcon type="lotus" className="h-12 w-12 text-[#8C6527]" />
            <div className="mt-8 space-y-7 text-lg font-normal leading-[2] text-[#33231A]">
              <p>
                I am here as a bridge between my ancestral roots in South America and the ancient wisdom and traditions of Asia.
              </p>
              <p>
                I come to accompany you on the path of awakening your feminine essence and your creative energy, holding the space for the journey back to the ultimate truth, where the spirit remembers its purity.
              </p>
              <p>
                My path and spiritual awakening began in Bolivia on December 21, 2012, during the long-awaited{" "}
                <strong className="font-bold text-[#8C6527] tracking-wide">PACHAKUTI</strong>. It was there that I received the first codes and the activation of the codes of the new humanity and the golden age that was arriving.
              </p>
              <p>
                I have traveled the world for over a decade, reconnecting with my being and ancestral knowledge—remembering, offering, and transmitting the path of the Great Mother Goddess.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sacred Invocation Strip */}
      <section className="px-6 py-16 md:py-28 bg-[#F8F5F1] border-y-2 border-[#D8C8B6]">
        <AnimatedSection className="mx-auto max-w-4xl text-center space-y-8">
          <p className="font-display text-3xl leading-[1.5] md:text-5xl italic text-[#8C6527] font-normal">
            “{sacredPhrases[0]}”
          </p>
          <div className="h-0.5 w-16 bg-[#8C6527] mx-auto" />
          <blockquote className="font-serif italic text-lg md:text-2xl font-normal leading-[1.8] text-[#261710] max-w-2xl mx-auto">
            {brand.invocation}
          </blockquote>
        </AnimatedSection>
      </section>

      {/* Trainings & Certifications */}
      <section className="px-6 py-16 md:py-32 bg-[#EFE6DB]">
        <div className="mx-auto max-w-[1180px]">
          <AnimatedSection className="text-center space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-[#8C6527] font-bold">Lineage & Roots</p>
            <h2 className="font-display text-4xl md:text-6xl text-[#261710] font-normal uppercase">
              TRAININGS & CERTIFICATIONS:
            </h2>
            <div className="h-0.5 w-20 bg-[#8C6527] mx-auto mt-6" />
          </AnimatedSection>
          
          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {certifications.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.05} direction="up">
                <div className="bg-[#F8F5F1] h-full p-8 shadow-sm border-2 border-[#D8C8B6] rounded-2xl transition-all duration-500 hover:border-[#8C6527] hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <span className="font-display text-5xl text-[#2C4A63] font-semibold">0{index + 1}</span>
                    <h3 className="mt-6 font-display text-2xl leading-[1.4] text-[#261710] font-normal">
                      <strong className="font-semibold text-[#8C6527]">{item.highlight}</strong>
                      {item.detail && <span> {item.detail}</span>}
                    </h3>
                    {item.institution && (
                      <p className="mt-4 text-xs tracking-[0.25em] uppercase text-[#2C4A63] font-bold">
                        {item.institution}
                      </p>
                    )}
                  </div>
                  {item.location && (
                    <div className="mt-6 pt-4 border-t border-[#D8C8B6]/60">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8C6527]">
                        {item.location}
                      </span>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
