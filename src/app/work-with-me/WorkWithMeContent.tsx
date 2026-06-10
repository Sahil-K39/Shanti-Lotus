'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import EditorialImage from '@/components/EditorialImage';

const offerings = [
  {
    title: 'Shakta Tantra',
    description: 'Awaken the creative force within through practices that honor the divine feminine and sacred union.',
    image: '/images/generated/shakta-tantra-final.png',
    span: 'col-span-12 md:col-span-8',
    aspect: 'aspect-[16/9] md:aspect-[3/2]',
    href: '/contact',
  },
  {
    title: 'Devi Yoga',
    description: 'A devotional yoga practice connecting you to the goddess energy, cultivating strength and grace.',
    image: '/images/generated/devi-yoga-final.png',
    span: 'col-span-12 md:col-span-4',
    aspect: 'aspect-square md:aspect-[3/4]',
    href: '/contact',
  },
  {
    title: 'Ayurveda',
    description: 'Ancient science of life and natural healing — return to balance through the wisdom of your elemental constitution.',
    image: '/images/generated/lotus-philosophy.png',
    span: 'col-span-12 md:col-span-4',
    aspect: 'aspect-square md:aspect-[3/4]',
    href: '/contact',
  },
  {
    title: 'Divine Dance',
    description: 'Sacred movement practices that free the body, awaken creative energy, and reconnect you to your feminine essence.',
    image: '/images/generated/devi-yoga-final.png',
    span: 'col-span-12 md:col-span-8',
    aspect: 'aspect-[16/9] md:aspect-[3/2]',
    href: '/contact',
  },
  {
    title: 'Sacred Jewelry',
    description: 'Handcrafted sacred adornments infused with intention, mantra, and the energy of ancient symbols.',
    image: '/images/generated/sacred-rituals-final.png',
    span: 'col-span-12 md:col-span-6',
    aspect: 'aspect-[4/3]',
    href: '/contact',
  },
  {
    title: 'Alchemy & Botanicals',
    description: 'Plant medicine wisdom and alchemical preparations for purification, healing, and spiritual expansion.',
    image: '/images/generated/lotus-philosophy.png',
    span: 'col-span-12 md:col-span-6',
    aspect: 'aspect-[4/3]',
    href: '/contact',
  },
  {
    title: 'Rituals & Altars',
    description: 'Sacred ceremonies and altar creation for honoring transitions, releasing the old, and inviting transformation.',
    image: '/images/generated/sacred-rituals-final.png',
    span: 'col-span-12',
    aspect: 'aspect-[21/9]',
    href: '/contact',
  },
  {
    title: 'Retreats & Courses',
    description: 'Immersive transformational experiences in sacred locations around the world.',
    image: '/images/generated/shakti-hero-final.png',
    span: 'col-span-12 md:col-span-4 md:col-start-5',
    aspect: 'aspect-[3/4]',
    href: '/retreats',
  },
];

export default function WorkWithMeContent() {
  return (
    <div className="bg-surfaceDark text-ivory min-h-screen">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-48 pb-24 px-6 relative max-w-[1200px] mx-auto text-center">
        <AnimatedSection>
          <span className="text-eyebrow text-antiqueGold mb-8 block">Sacred Offerings</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight font-light text-ivory mb-10">
            Spaces to <br />
            <span className="italic text-antiqueGold">Remember</span>
          </h1>
          <p className="font-body text-lg font-light text-ivory/70 max-w-2xl mx-auto leading-relaxed">
            Every offering is a sacred doorway. Step through to heal, awaken your creative energy, and return to the union of mind, body, and soul.
          </p>
          <div className="w-[1px] h-24 bg-antiqueGold/40 mx-auto mt-16" />
        </AnimatedSection>
      </section>

      {/* 2. ASYMMETRICAL BENTO GRID */}
      <section className="px-6 py-16 md:py-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {offerings.map((offering, index) => (
            <div key={offering.title} className={`${offering.span} group relative overflow-hidden rounded-[24px]`}>
              <AnimatedSection delay={index * 0.1}>
                <Link href={offering.href} className="block relative w-full h-full">
                  
                  {/* Image Background */}
                  <EditorialImage 
                    src={offering.image}
                    alt={offering.title}
                    variant="sharp"
                    imageClassName="brightness-75 group-hover:brightness-100 transition-all duration-1000"
                    className={`w-full ${offering.aspect}`}
                  />
                  
                  {/* Heavy dark gradient at the bottom for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deepPlum via-deepPlum/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <h3 className="font-display text-3xl md:text-4xl text-ivory mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                      {offering.title}
                    </h3>
                    <p className="font-body text-sm font-light text-ivory/70 leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 max-w-md">
                      {offering.description}
                    </p>
                    
                    <div className="flex items-center gap-3 text-xs font-body uppercase tracking-[0.2em] text-antiqueGold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200">
                      <span>Enter Doorway</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                </Link>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PHILOSOPHY QUOTE */}
      <section className="px-6 py-32 bg-deepPlum text-center border-t border-ivory/5">
        <AnimatedSection>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-3xl md:text-5xl leading-[1.4] font-light text-ivory/90 mb-12">
              &ldquo;I accompany you to awaken your creative energy and reconnect with your inner wisdom through the path of deep self-exploration.&rdquo;
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-5 border border-antiqueGold/40 text-antiqueGold hover:bg-antiqueGold hover:text-deepPlum transition-colors duration-700"
            >
              <span className="text-xs font-body uppercase tracking-[0.2em]">Book a Sacred Space</span>
            </Link>
          </div>
        </AnimatedSection>
      </section>
      
    </div>
  );
}
