"use client";

import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { certifications, images, poeticPhrases } from "@/lib/brand";

export default function AboutContent() {
  return (
    <div className="bg-ink text-ivory">
      <section className="px-6 pb-24 pt-40 md:pt-48">
        <AnimatedSection className="mx-auto max-w-5xl text-center">
          <p className="text-eyebrow">About Kunti</p>
          <h1 className="mt-6 font-display text-5xl leading-tight md:text-8xl">
            Namaste, I am <span className="gold-text">Kunti</span>
          </h1>
          <div className="gold-line mx-auto mt-10 max-w-xl" />
        </AnimatedSection>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <AnimatedSection direction="left" className="lg:sticky lg:top-28">
            <EditorialImage src={images.devi} alt="Kunti Shakti Loto water ritual image from the provided card" variant="organic-1" withBorder className="aspect-[3/4] w-full" />
          </AnimatedSection>
          <AnimatedSection direction="right" className="sacred-card p-8 md:p-12">
            <SacredIcon type="lotus" className="h-14 w-14 text-lightGold" />
            <div className="mt-8 space-y-7 text-lg font-light leading-loose text-parchment/82">
              <p>A Tantric Yogini and traveler of this Earth.</p>
              <p>I am here as a bridge between my ancestral roots of South America and the ancient wisdom and traditions of Asia.</p>
              <p>I come to accompany you on the path of awakening your feminine essence and creative energy, holding space for the journey back to the ultimate truth, where the spirit remembers its purity.</p>
              <p>My spiritual path and awakening began in Bolivia on December 21, 2012, during the awaited Pachakuti. It was there that I received the first codes and activation of the codes of the new humanity and the golden time that was arriving.</p>
              <p>For more than a decade, I have traveled the world reconnecting with my being and ancestral wisdom, remembering, offering, and transmitting the path of the Great Mother Goddess.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 py-24">
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <p className="font-display text-4xl leading-tight md:text-6xl">
            <span className="gold-text">{poeticPhrases[0]}</span>
          </p>
          <p className="mt-8 text-base font-light leading-loose text-parchment/75">
            Walking as a bridge between the Earth and the Spirit, Kunti carries a living path of devotion, remembrance, ritual, movement, plant wisdom, and sacred feminine embodiment.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-[1180px]">
          <AnimatedSection className="text-center">
            <p className="text-eyebrow">Trainings & Certifications</p>
            <h2 className="mt-5 font-display text-5xl md:text-7xl">A path of <span className="gold-text">lineage</span></h2>
          </AnimatedSection>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {certifications.map((item, index) => (
              <AnimatedSection key={item.place} delay={index * 0.05}>
                <div className="sacred-card h-full p-7">
                  <span className="font-display text-5xl text-lightGold/45">0{index + 1}</span>
                  <h3 className="mt-6 font-display text-2xl leading-tight text-ivory">{item.title}</h3>
                  <p className="mt-5 text-eyebrow">{item.place}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
