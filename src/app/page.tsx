"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";

const offerings = [
  {
    title: "Shakta Tantra",
    eyebrow: "The Path of Power",
    description: "Awaken the creative force within through mantra, breath, deity contemplation, and embodied ritual. A journey of remembering the body as an altar.",
    image: "/images/generated/shakta-tantra-final.png",
    detail: "Private rituals, subtle-body practice, lineage study",
    link: "/work-with-me",
  },
  {
    title: "Devi Yoga",
    eyebrow: "Embodied Grace",
    description: "A devotional physical and subtle practice connecting you to goddess energy. Cultivate strength, softness, intuition, and inner radiance through breath-led movement.",
    image: "/images/generated/devi-yoga-final.png",
    detail: "Somatic movement, pranayama, feminine embodiment",
    link: "/work-with-me",
  },
  {
    title: "Sacred Rituals",
    eyebrow: "Ancestral Wisdom",
    description: "Ceremonies of fire, water, earth, and air to honor transitions, release the old, and invite transformation. Reclaim the ancient art of gathering in reverence.",
    image: "/images/generated/sacred-rituals-final.png",
    detail: "Altars, ceremonies, life transitions, devotion",
    link: "/work-with-me",
  },
];

const pillars = [
  { value: "1:1", label: "Private mentorship" },
  { value: "500hr", label: "Yoga lineage training" },
  { value: "India", label: "Retreats and immersions" },
];

const process = [
  {
    step: "Listen",
    text: "We begin with where you are: your body, your season, your devotion, and the questions that keep returning.",
  },
  {
    step: "Practice",
    text: "Your path is shaped through breath, mantra, movement, ritual, and grounded integration between sessions.",
  },
  {
    step: "Embody",
    text: "The work becomes less like something you visit and more like a way of walking through your ordinary life.",
  },
];

export default function Home() {
  return (
    <div className="bg-ivory text-textDark">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[86svh] md:min-h-[92vh] flex items-center justify-center overflow-hidden bg-deepPlum pb-12 md:pb-10">
        {/* Layered Background Imagery */}
        <div className="absolute inset-0 z-0 opacity-55">
          <EditorialImage
            src="/images/generated/shakti-hero-final.png"
            alt="Atmospheric sunset over water"
            className="w-full h-full"
            variant="sharp"
          />
        </div>

        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(26,21,18,0.72),rgba(26,21,18,0.42)_45%,rgba(26,21,18,0.74))]" />
        <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-t from-ivory via-ivory/25 to-transparent" />

        {/* Content Block */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 text-center md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center"
          >
            <span className="text-eyebrow text-antiqueGold mb-5 md:mb-6">
              A return to the source
            </span>

            <h1 className="font-display text-4xl md:text-6xl xl:text-7xl leading-[1.08] font-light text-ivory mb-6 md:mb-8 drop-shadow-lg">
              Awaken the <br />
              <span className="italic text-antiqueGold">Inner Goddess</span>
            </h1>

            <p className="font-body text-base md:text-lg text-ivory/80 max-w-2xl font-light leading-relaxed mb-8">
              A sacred space for deep reconnection with vital energy. Rooted in classical Tantra, Devi Yoga, Ayurveda, and feminine embodiment, this is a return to your universal divine essence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-9 md:mb-10">
              <Link
                href="/work-with-me"
                className="group inline-flex min-h-14 items-center gap-4 border border-antiqueGold/50 bg-antiqueGold px-8 py-4 text-deepPlum transition-all duration-700 hover:bg-ivory hover:border-ivory"
              >
                <span className="text-xs font-body uppercase tracking-[0.2em] font-medium">Explore Offerings</span>
                <span className="w-10 h-[1px] bg-current transition-all duration-700 group-hover:w-14" />
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-14 items-center border border-ivory/25 px-8 py-4 text-ivory transition-all duration-700 hover:border-antiqueGold hover:text-antiqueGold"
              >
                <span className="text-xs font-body uppercase tracking-[0.2em]">Meet Kunti</span>
              </Link>
            </div>

            <div className="grid w-full max-w-3xl grid-cols-3 border-y border-ivory/15">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="px-2 py-3 border-l first:border-l-0 border-ivory/15 md:px-6 md:py-4">
                  <p className="font-display text-2xl text-antiqueGold md:text-3xl">{pillar.value}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-ivory/65 md:text-[10px] md:tracking-[0.22em]">{pillar.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. EDITORIAL INTRO */}
      <section className="py-32 md:py-48 px-6 bg-ivory relative">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
              <div className="w-full md:w-1/2">
                <EditorialImage
                  src="/images/generated/lotus-philosophy.png"
                  alt="Lotus resting on calm water"
                  variant="organic-1"
                  withBorder
                  className="w-full aspect-[4/5]"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <span className="text-eyebrow text-terracotta mb-6">The Philosophy</span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-textDark leading-tight mb-8">
                  Your body is <br /><span className="italic text-antiqueGold">a portal.</span>
                </h2>
                <p className="font-body text-textDark/70 leading-loose font-light mb-10 text-lg">
                  We have forgotten the ancient memory that dwells in our blood. Shakti Lotus is an invitation to strip away the armor, to walk as a bridge between the earth and the spirit, and to remember that the sacred lives within you.
                </p>
                <Link
                  href="/philosophy"
                  className="text-xs font-body font-medium uppercase tracking-[0.2em] text-terracotta hover:text-textDark transition-colors duration-500 border-b border-terracotta/30 pb-2"
                >
                  Read the Philosophy
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. GUIDED PROCESS */}
      <section className="px-6 py-24 bg-deepPlum text-ivory">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <span className="text-eyebrow text-antiqueGold mb-6 block">How the work unfolds</span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                A path that is intimate, embodied, and precise.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {process.map((item, index) => (
                <div key={item.step} className="border-l border-antiqueGold/35 pl-6">
                  <span className="font-display text-5xl text-antiqueGold/70">0{index + 1}</span>
                  <h3 className="mt-6 font-display text-3xl text-ivory">{item.step}</h3>
                  <p className="mt-4 font-body text-sm font-light leading-loose text-ivory/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. ASYMMETRICAL OFFERINGS */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="text-center mb-28">
            <span className="text-eyebrow text-terracotta mb-4 block">Sacred Offerings</span>
            <h2 className="font-display text-5xl md:text-6xl text-textDark">Choose Your Doorway</h2>
            <p className="font-body text-lg font-light leading-relaxed text-textDark/65 max-w-2xl mx-auto mt-8">
              Each doorway can stand alone, or become part of a deeper mentorship woven around your season of life.
            </p>
          </AnimatedSection>

          <div className="space-y-40">
            {offerings.map((offering, index) => {
              const isEven = index % 2 === 0;
              return (
                <AnimatedSection key={offering.title}>
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-32`}>
                    {/* Image Side */}
                    <div className="w-full md:w-1/2">
                      <EditorialImage
                        src={offering.image}
                        alt={offering.title}
                        variant={isEven ? "pebble" : "organic-2"}
                        withBorder
                        className="w-full aspect-[4/5] md:aspect-[3/4]"
                      />
                    </div>

                    {/* Content Side */}
                    <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'items-start text-left' : 'items-start md:items-end md:text-right'}`}>
                      <span className="text-eyebrow text-terracotta mb-6">{offering.eyebrow}</span>
                      <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-textDark mb-8">
                        {offering.title}
                      </h3>
                      <p className={`font-body text-lg font-light text-textDark/70 leading-loose mb-12 max-w-md ${!isEven && 'md:ml-auto'}`}>
                        {offering.description}
                      </p>
                      <p className={`text-xs uppercase tracking-[0.22em] text-antiqueGold mb-10 leading-relaxed ${!isEven && 'md:ml-auto'}`}>
                        {offering.detail}
                      </p>
                      <Link
                        href={offering.link}
                        className="group flex items-center gap-4 text-xs font-body uppercase tracking-[0.2em] text-textDark hover:text-terracotta transition-colors duration-500"
                      >
                        {isEven ? (
                          <>
                            <span>Explore Path</span>
                            <span className="w-12 h-[1px] bg-textDark/30 transition-all duration-500 group-hover:w-16 group-hover:bg-terracotta" />
                          </>
                        ) : (
                          <>
                            <span className="w-12 h-[1px] bg-textDark/30 transition-all duration-500 group-hover:w-16 group-hover:bg-terracotta hidden md:block" />
                            <span>Explore Path</span>
                            <span className="w-12 h-[1px] bg-textDark/30 transition-all duration-500 group-hover:w-16 group-hover:bg-terracotta md:hidden" />
                          </>
                        )}
                      </Link>
                    </div>

                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIAL */}
      <section className="px-6 py-28 bg-ivory">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <div className="w-[1px] h-20 bg-antiqueGold/40 mx-auto mb-12" />
          <p className="font-display text-3xl md:text-5xl leading-[1.35] text-textDark">
            &ldquo;This is not performance spirituality. It is a tender, exacting return to the body as a sacred teacher.&rdquo;
          </p>
          <p className="mt-8 text-eyebrow text-terracotta">Student reflection</p>
        </AnimatedSection>
      </section>

      {/* 6. POETIC CLOSING CTA */}
      <section className="relative py-44 px-6 bg-deepPlum overflow-hidden">
        {/* Subtle background layer */}
        <div className="absolute inset-0 z-0 opacity-20">
          <EditorialImage
            src="/images/generated/mentorship-atmosphere-final.png"
            alt="Soft light and shadows"
            variant="sharp"
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-eyebrow text-antiqueGold mb-8 block">Private Mentorship</span>
            <h2 className="font-display text-4xl md:text-6xl text-ivory leading-tight mb-12">
              Ready to meet yourself <br />
              <span className="italic text-antiqueGold">in the deep?</span>
            </h2>
            <Link
              href="/mentorship"
              className="inline-flex items-center gap-4 px-12 py-5 bg-ivory text-deepPlum hover:bg-antiqueGold hover:text-ivory transition-colors duration-700"
            >
              <span className="text-xs font-body uppercase tracking-[0.2em] font-medium">Apply for Mentorship</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
