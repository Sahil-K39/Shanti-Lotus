'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import EditorialImage from '@/components/EditorialImage';

const steps = [
  {
    number: '01',
    title: 'The Invitation',
    description: 'Reach out and share where you are on your journey. We begin with a sacred, no-pressure conversation to see if our energies align.',
  },
  {
    number: '02',
    title: 'Opening the Field',
    description: 'Together we create a container of absolute trust, safety, and deep presence. This is the foundation for your true transformation.',
  },
  {
    number: '03',
    title: 'The Deep Work',
    description: 'Step into the ongoing practice of remembering, healing, and awakening your creative energy. We dismantle the armor and return to your center.',
  },
];

export default function MentorshipContent() {
  return (
    <div className="bg-ivory text-textDark min-h-screen">
      
      {/* 1. HERO / INTRODUCTION */}
      <section className="pt-48 pb-24 px-6 max-w-[1200px] mx-auto">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-eyebrow text-terracotta mb-8 block">Private Mentorship</span>
              <h1 className="font-display text-5xl md:text-7xl leading-[1.1] font-light text-textDark mb-10">
                A Return to <br />
                <span className="italic text-antiqueGold">Your Center</span>
              </h1>
              <p className="font-body text-lg font-light text-textDark/70 leading-relaxed max-w-md">
                1:1 Mentorship is a deeply intimate container. It is designed for the woman who is ready to descend into her body, release ancestral blockages, and inhabit her life with presence and creative fire.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <EditorialImage 
                src="/images/generated/mentorship-atmosphere-final.png"
                alt="Soft morning light"
                variant="organic-2"
                withBorder
                className="w-full aspect-[4/5] max-w-md mx-auto"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. AREAS OF FOCUS */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection className="mb-20 text-center">
            <span className="text-eyebrow text-terracotta mb-6 block">The Container</span>
            <h2 className="font-display text-4xl md:text-5xl text-textDark">Areas of Deep Work</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection delay={0.1}>
              <div className="border-t border-terracotta/20 pt-8">
                <span className="text-eyebrow text-antiqueGold mb-4 block">01 / Foundation</span>
                <h3 className="font-display text-3xl text-textDark mb-4">Ritual & Feminine Energy</h3>
                <p className="font-body font-light text-textDark/70 leading-relaxed">
                  Spaces to activate your creative energy, heal your bond with the feminine, and inhabit your body with absolute presence.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="border-t border-terracotta/20 pt-8">
                <span className="text-eyebrow text-antiqueGold mb-4 block">02 / Expansion</span>
                <h3 className="font-display text-3xl text-textDark mb-4">Spiritual Integration</h3>
                <p className="font-body font-light text-textDark/70 leading-relaxed">
                  Practices and guidance to expand your consciousness and root your spirituality deeply into the reality of your daily life.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. CALM PROCESS SECTION */}
      <section className="py-32 px-6 bg-ivory">
        <div className="max-w-[1000px] mx-auto">
          <AnimatedSection className="text-center mb-24">
            <h2 className="font-display text-4xl text-textDark">How We Begin</h2>
            <div className="w-[1px] h-16 bg-antiqueGold/30 mx-auto mt-8" />
          </AnimatedSection>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                  <div className="font-display text-5xl md:text-7xl text-antiqueGold/30 font-light italic w-24 flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl text-textDark mb-4">{step.title}</h3>
                    <p className="font-body font-light text-textDark/70 leading-relaxed max-w-lg text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EMOTIONAL CTA */}
      <section className="py-32 px-6 bg-deepPlum text-center relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-antiqueGold/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <AnimatedSection>
            <EditorialImage 
              src="/images/generated/lotus-philosophy.png"
              alt="Soft hands / ritual detail"
              variant="pebble"
              className="w-32 h-32 mx-auto mb-12 opacity-80"
            />
            <h2 className="font-display text-4xl md:text-6xl leading-[1.2] font-light text-ivory mb-10">
              Your body is a portal. <br />
              <span className="italic text-antiqueGold">Your wisdom is already within you.</span>
            </h2>
            <p className="font-body text-ivory/60 font-light mb-16 max-w-xl mx-auto">
              If you feel the call to descend, to heal, and to remember, I am here to hold the space.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-5 border border-antiqueGold/40 text-antiqueGold hover:bg-antiqueGold hover:text-deepPlum transition-all duration-700 backdrop-blur-sm"
            >
              <span className="text-xs font-body uppercase tracking-[0.2em] font-medium">Inquire About Mentorship</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
