"use client";

import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { certifications, photos, poeticPhrases } from "@/lib/brand";

export default function AboutContent() {
  return (
    <div className="bg-[#EFE6DB] text-[#4D667D]">
      <section className="px-6 pb-24 pt-40 md:pt-48">
        <AnimatedSection className="mx-auto max-w-5xl text-center space-y-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#4D667D]/60 font-medium">About Kunti</p>
          <h1 className="font-display text-5xl leading-[1.1] md:text-7xl uppercase font-light text-[#4D667D]">
            Namaste, I am <span className="italic text-[#C8A96B]">Kunti</span>
          </h1>
          <div className="h-px w-20 bg-[#C8A96B]/50 mx-auto mt-10" />
        </AnimatedSection>
      </section>

      <section className="px-6 pb-28 bg-[#EFE6DB]">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <AnimatedSection direction="left" className="lg:sticky lg:top-28">
            <EditorialImage src={photos.mainPhoto} alt="Kunti honoring ancestral lineage" variant="organic-1" withBorder className="aspect-[3/4] w-full" />
          </AnimatedSection>
          <AnimatedSection direction="right" className="bg-white/40 p-8 md:p-12 shadow-sm border border-[#4D667D]/5">
            <SacredIcon type="lotus" className="h-14 w-14 text-[#C8A96B]" />
            <div className="mt-8 space-y-7 text-lg font-light leading-[2] text-[#4D667D]/80">
              <p>A Tantric Yogini and traveler of this Earth.</p>
              <p>I am here as a bridge between my ancestral roots of South America and the ancient wisdom and traditions of Asia.</p>
              <p>I come to accompany you on the path of awakening your feminine essence and creative energy, holding space for the journey back to the ultimate truth, where the spirit remembers its purity.</p>
              <p>My spiritual path and awakening began in Bolivia on December 21, 2012, during the awaited Pachakuti. It was there that I received the first codes and activation of the codes of the new humanity and the golden time that was arriving.</p>
              <p>For more than a decade, I have traveled the world reconnecting with my being and ancestral wisdom, remembering, offering, and transmitting the path of the Great Mother Goddess.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 py-28 bg-white/30">
        <AnimatedSection className="mx-auto max-w-4xl text-center space-y-8">
          <p className="font-display text-3xl leading-[1.5] md:text-5xl italic text-[#C8A96B] font-light">
            {poeticPhrases[0]}
          </p>
          <div className="h-px w-16 bg-[#C8A96B]/40 mx-auto" />
          <p className="text-base md:text-lg font-light leading-[2] text-[#4D667D]/70 max-w-2xl mx-auto">
            Walking as a bridge between the Earth and the Spirit, Kunti carries a living path of devotion, remembrance, ritual, movement, plant wisdom, and sacred feminine embodiment.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 py-32 bg-[#EFE6DB]">
        <div className="mx-auto max-w-[1180px]">
          <AnimatedSection className="text-center space-y-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#4D667D]/50 font-medium">Trainings & Certifications</p>
            <h2 className="font-display text-4xl md:text-6xl text-[#4D667D] font-light uppercase">
              A path of <span className="italic text-[#C8A96B]">lineage</span>
            </h2>
            <div className="h-px w-20 bg-[#C8A96B]/50 mx-auto mt-6" />
          </AnimatedSection>
          
          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {certifications.map((item, index) => (
              <AnimatedSection key={item.place} delay={index * 0.05} direction="up">
                <div className="bg-white/40 h-full p-8 shadow-sm border border-[#4D667D]/5 transition-transform duration-500 hover:-translate-y-1">
                  <span className="font-display text-5xl text-[#C8A96B]/30">0{index + 1}</span>
                  <h3 className="mt-6 font-display text-2xl leading-[1.4] text-[#4D667D]">{item.title}</h3>
                  <p className="mt-4 text-[10px] tracking-[0.25em] uppercase text-[#4D667D]/60">{item.place}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
