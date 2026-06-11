"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { brand, images } from "@/lib/brand";

export default function ContactContent() {
  return (
    <div className="bg-ink text-ivory">
      <section className="px-6 pb-28 pt-40 md:pt-48">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <AnimatedSection direction="left">
            <p className="text-eyebrow">Contact</p>
            <h1 className="mt-6 font-display text-5xl leading-tight md:text-8xl">
              Begin Your <span className="gold-text">Journey</span>
            </h1>
            <p className="mt-8 max-w-xl text-base font-light leading-loose text-parchment/82">
              Write to share where you are, what you are seeking, and which space is calling you. The visual world follows the black, gold, lotus, moon, and ritual language from the Shakti Loto card.
            </p>

            <div className="mt-10 space-y-5 text-sm text-parchment/78">
              <p>
                Instagram:{" "}
                <a href={brand.contact.instagramUrl} target="_blank" rel="noreferrer" className="text-lightGold hover:text-ivory">
                  {brand.contact.instagram}
                </a>
              </p>
              <p>Email: {brand.contact.email}</p>
              <p>Phone: {brand.contact.phone}</p>
              <p>Website: {brand.contact.website}</p>
            </div>

            <div className="mt-12 max-w-sm border border-lightGold/30 bg-charcoal/60 p-8 text-center">
              <EditorialImage src={images.cardContactDetail} alt="Shakti Loto contact details from the provided card" variant="sharp" className="aspect-[27/17] w-full" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="sacred-card p-8 md:p-12">
            <SacredIcon type="moon" className="mb-8 h-14 w-14 text-lightGold" />
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
