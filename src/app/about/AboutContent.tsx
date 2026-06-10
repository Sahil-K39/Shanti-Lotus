"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";

const timelineNodes = [
  {
    eyebrow: "The Awakening",
    title: "The First Descent",
    description: "It began in the quiet valleys of northern India, where the silence was louder than any city. I immersed myself in traditional Tantric lineages in Rishikesh and the Himalayas, learning that the physical body is not an obstacle to the divine, but the very altar upon which we worship.",
  },
  {
    eyebrow: "Journey to the East",
    title: "Integrating Ayurveda",
    description: "The fire of Tantra needed the grounding earth of Ayurveda. Years spent studying the elemental constitutions taught me that true healing requires returning to our natural rhythms. The doshas became my language for understanding human complexity.",
  },
  {
    eyebrow: "Mastering the Arts",
    title: "The Synthesis",
    description: "Bridging ancient wisdom with modern psychological frameworks, I developed a unique methodology. It is a practice of bringing shadow into light, utilizing breath, movement, and deep inquiry to dismantle the armor we build around our hearts.",
  },
  {
    eyebrow: "The Lotus Blooms",
    title: "Offering the Altar",
    description: "Today, Shakti Lotus is the culmination of this journey. It is a vessel designed to hold others as they traverse their own depths. A sanctuary where the screen becomes a window to the soul, and every interaction is an invitation to presence.",
  },
];

export default function AboutContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the component container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Slow parallax for the portrait
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div ref={containerRef} className="bg-ivory text-textDark min-h-screen relative w-full overflow-hidden">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-48 pb-24 px-6 relative max-w-[1200px] mx-auto text-center">
        <AnimatedSection>
          <span className="text-eyebrow text-terracotta mb-8 block">Meet Kunti</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight font-light text-textDark mb-10">
            A Journey into <br />
            <span className="italic text-antiqueGold">the Deep</span>
          </h1>
          <div className="w-[1px] h-24 bg-antiqueGold/40 mx-auto" />
        </AnimatedSection>
      </section>

      {/* 2. THE MEMOIR TIMELINE */}
      <main className="relative w-full flex flex-col lg:flex-row max-w-[1400px] mx-auto pb-32">
        
        {/* Left Panel: Sticky Portrait */}
        <section className="w-full lg:w-1/2 relative lg:sticky lg:top-0 h-auto lg:h-screen flex flex-col items-center justify-center p-6 lg:p-16 z-10">
          <motion.div style={{ y }} className="w-full max-w-md">
            <EditorialImage 
              src="/images/generated/devi-yoga-final.png"
              alt="Portrait of Kunti"
              variant="organic-1"
              withBorder
              className="w-full aspect-[3/4]"
            />
            <p className="mt-8 font-display italic text-2xl text-center text-textDark/80">
              &ldquo;We must descend into the body to ascend into the spirit.&rdquo;
            </p>
          </motion.div>
        </section>

        {/* Right Panel: Scrolling Timeline */}
        <section className="w-full lg:w-1/2 px-6 lg:px-16 py-16 lg:py-32 relative">
          <div className="max-w-xl relative">
            
            {/* Timeline Line */}
            <div className="absolute left-[3px] top-4 bottom-0 w-[1px] bg-antiqueGold/20 z-0 hidden md:block" />

            <div className="space-y-32">
              {timelineNodes.map((node, index) => (
                <div key={node.title} className="relative z-10 md:pl-12">
                  <AnimatedSection delay={index * 0.1}>
                    {/* Timeline Dot */}
                    <div className="absolute left-[-1.5px] top-2 w-2 h-2 rounded-full bg-terracotta hidden md:block" />
                    
                    <span className="text-eyebrow text-antiqueGold block mb-6">
                      {node.eyebrow}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-display text-textDark mb-8">
                      {node.title}
                    </h3>
                    <p className="font-body font-light text-textDark/70 leading-[2] text-lg">
                      {node.description}
                    </p>
                    
                    {/* Organic divider instead of card boxes */}
                    {index !== timelineNodes.length - 1 && (
                      <div className="mt-16 w-12 h-[1px] bg-terracotta/30" />
                    )}
                    
                    {index === timelineNodes.length - 1 && (
                      <div className="mt-16">
                        <Link 
                          href="/contact" 
                          className="group inline-flex items-center gap-4 text-xs font-body uppercase tracking-[0.2em] text-textDark hover:text-terracotta transition-colors duration-500"
                        >
                          <span>Connect with Me</span>
                          <span className="w-12 h-[1px] bg-textDark/30 transition-all duration-500 group-hover:w-16 group-hover:bg-terracotta" />
                        </Link>
                      </div>
                    )}
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 3. FULL WIDTH QUOTE / CERTIFICATIONS */}
      <section className="py-32 px-6 bg-surfaceDark text-ivory text-center">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="w-8 h-8 text-antiqueGold mx-auto mb-12 opacity-50">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.4] font-light mb-16">
              &ldquo;The healing we seek is not found by running away from the darkness, but by lighting a candle within it. Every shadow is an unloved part of the self waiting to be held.&rdquo;
            </h2>
            
            <div className="flex flex-wrap justify-center gap-12 opacity-60">
              <div className="flex flex-col items-center gap-2">
                <span className="text-eyebrow text-antiqueGold">YACEP</span>
                <span className="font-body text-xs tracking-widest uppercase">Yoga Alliance Certified</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-eyebrow text-antiqueGold">E-RYT 500</span>
                <span className="font-body text-xs tracking-widest uppercase">Experienced Teacher</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-eyebrow text-antiqueGold">Ayurveda</span>
                <span className="font-body text-xs tracking-widest uppercase">Clinical Practitioner</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
