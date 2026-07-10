"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { brand, photos } from "@/lib/brand";

export default function ContactContent() {
  return (
    <div className="bg-ink text-ivory">
      <section className="px-4 pb-24 pt-36 sm:px-6 md:pb-28 md:pt-48">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <AnimatedSection direction="left" className="text-center lg:text-left">
            <p className="text-eyebrow">Contact</p>
            <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl md:text-8xl">
              Begin Your <span className="gold-text">Journey</span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-base font-light leading-loose text-parchment/82 lg:mx-0">
              Write to share where you are, what you are seeking, and which space is calling you. Your message will be met with clarity, care, and presence.
            </p>

            <div className="mx-auto mt-10 grid max-w-md gap-3 text-sm text-parchment/78 lg:mx-0">
              <p className="rounded-2xl border border-lightGold/18 bg-blancoRitual/66 px-5 py-3">
                Instagram:{" "}
                <a href={brand.contact.instagramUrl} target="_blank" rel="noreferrer" className="text-lightGold hover:text-ivory">
                  {brand.contact.instagram}
                </a>
              </p>
              <p className="rounded-2xl border border-lightGold/18 bg-blancoRitual/66 px-5 py-3">Email: {brand.contact.email}</p>
              <p className="rounded-2xl border border-lightGold/18 bg-blancoRitual/66 px-5 py-3">Phone: {brand.contact.phone}</p>
              <p className="rounded-2xl border border-lightGold/18 bg-blancoRitual/66 px-5 py-3">Website: {brand.contact.website}</p>
            </div>

            <div className="mx-auto mt-10 max-w-sm rounded-[26px] border border-lightGold/24 bg-charcoal/60 p-5 text-center shadow-[0_20px_70px_rgba(90,70,54,0.12)] lg:mx-0">
              <EditorialImage src={photos.gardenPortrait} alt="Kunti garden portrait" variant="rounded" imageClassName="brightness-[0.96] saturate-[0.95]" className="aspect-[27/17] w-full" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="sacred-card p-4 sm:p-6 md:p-10">
            <SacredIcon type="moon" className="mx-auto mb-8 h-14 w-14 text-lightGold" />
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
