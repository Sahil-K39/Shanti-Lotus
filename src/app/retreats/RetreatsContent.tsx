"use client";

import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import Link from "next/link";

const immersionDates = [
  {
    date: "12th – 22nd JAN 2026",
    title: "Goa Season Immersion",
    location: "Tantraloka Shakti Centre, Goa, India",
    image: "/images/generated/shakti-hero-final.png",
  },
  {
    date: "17th – 27th APR 2026",
    title: "Himalaya Immersion",
    location: "Himalayan Spiritual Centre, Dharamshala, India",
    image: "/images/generated/lotus-philosophy.png",
  },
];

export default function RetreatsContent() {
  return (
    <div className="bg-surfaceDark text-ivory min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <EditorialImage 
            src="/images/generated/mentorship-atmosphere-final.png"
            alt="Sacred landscape"
            variant="sharp"
            className="w-full h-full opacity-60"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">
          <AnimatedSection>
            <span className="text-eyebrow text-antiqueGold mb-8 block">Immersive Travel</span>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-light text-ivory mb-10">
              Journeys into <br />
              <span className="italic text-antiqueGold">the Sacred</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto font-light leading-relaxed mb-16">
              Step into an authentic, ancient lineage. A sacred descent in Goa and Dharamshala, India. Deepen your practice, awaken your life-force, and learn to hold transformative spaces.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. THE INVITATIONS */}
      <section className="py-32 px-6 bg-ivory text-textDark">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection className="text-center mb-24">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-textDark">
              The Invitations
            </h2>
            <div className="w-[1px] h-16 bg-antiqueGold/40 mx-auto mt-8" />
          </AnimatedSection>

          <div className="space-y-32">
            {immersionDates.map((immersion, index) => {
              const isEven = index % 2 === 0;
              return (
                <AnimatedSection key={immersion.title} delay={0.1}>
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                    
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                      <EditorialImage 
                        src={immersion.image}
                        alt={immersion.title}
                        variant={isEven ? "organic-1" : "organic-2"}
                        withBorder
                        className="w-full aspect-[4/5]"
                      />
                    </div>

                    {/* Details */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start">
                      <span className="text-eyebrow text-terracotta mb-6">{immersion.date}</span>
                      <h3 className="font-display text-4xl md:text-5xl text-textDark mb-6">
                        {immersion.title}
                      </h3>
                      <p className="font-body text-lg font-light text-textDark/70 mb-10">
                        {immersion.location}
                      </p>
                      <p className="font-body font-light text-textDark/80 leading-loose mb-12">
                        Join us for a 10-day intensive journey. We will dive deep into classical Tantra, somatic movement, and womb healing, surrounded by the powerful energy of India. This is not just a retreat; it is an initiation.
                      </p>
                      
                      <Link
                        href="/contact"
                        className="group flex items-center gap-4 text-xs font-body uppercase tracking-[0.2em] text-textDark hover:text-terracotta transition-colors duration-500"
                      >
                        <span>Apply for Pre-Screening</span>
                        <span className="w-12 h-[1px] bg-textDark/30 transition-all duration-500 group-hover:w-16 group-hover:bg-terracotta" />
                      </Link>
                    </div>

                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. EXCHANGE & ACCOMMODATION (Editorial Layout) */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-[1000px] mx-auto">
          <AnimatedSection className="text-center mb-24">
            <span className="text-eyebrow text-terracotta mb-4 block">The Exchange</span>
            <h2 className="font-display text-4xl md:text-5xl text-textDark">Accommodation</h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-12 border border-antiqueGold/20 bg-ivory rounded-none shadow-breathe hover:border-antiqueGold/50 transition-colors duration-500">
                <div className="mb-6 md:mb-0 md:pr-12 text-center md:text-left">
                  <h4 className="font-display text-3xl text-textDark mb-2">Course Only</h4>
                  <p className="font-body text-sm font-light text-textDark/60">Tuition, handbook, temple access.</p>
                </div>
                <div className="text-center md:text-right">
                  <span className="font-display text-4xl text-terracotta">$650</span>
                  <p className="font-body text-xs tracking-widest uppercase text-textDark/40 mt-2">USD</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-12 border border-antiqueGold/20 bg-ivory rounded-none shadow-breathe hover:border-antiqueGold/50 transition-colors duration-500">
                <div className="mb-6 md:mb-0 md:pr-12 text-center md:text-left">
                  <h4 className="font-display text-3xl text-textDark mb-2">Shared AC Dorm</h4>
                  <p className="font-body text-sm font-light text-textDark/60">10 nights accommodation, daily breakfast, tuition.</p>
                </div>
                <div className="text-center md:text-right">
                  <span className="font-display text-4xl text-terracotta">$900</span>
                  <p className="font-body text-xs tracking-widest uppercase text-textDark/40 mt-2">USD</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-12 border border-antiqueGold/20 bg-ivory rounded-none shadow-breathe hover:border-antiqueGold/50 transition-colors duration-500">
                <div className="mb-6 md:mb-0 md:pr-12 text-center md:text-left">
                  <h4 className="font-display text-3xl text-textDark mb-2">Private AC Room</h4>
                  <p className="font-body text-sm font-light text-textDark/60">En-suite privacy, 10 nights, daily breakfast, tuition.</p>
                </div>
                <div className="text-center md:text-right">
                  <span className="font-display text-4xl text-terracotta">$1,200</span>
                  <p className="font-body text-xs tracking-widest uppercase text-textDark/40 mt-2">USD</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-32 px-6 bg-deepPlum text-center">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.3] font-light text-ivory mb-12 max-w-2xl mx-auto">
            Ready to embark on the <br />
            <span className="italic text-antiqueGold">sacred journey?</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-12 py-5 bg-ivory text-deepPlum hover:bg-antiqueGold hover:text-ivory transition-colors duration-700"
          >
            <span className="text-xs font-body uppercase tracking-[0.2em] font-medium">Inquire via WhatsApp</span>
          </Link>
        </AnimatedSection>
      </section>
      
    </div>
  );
}
