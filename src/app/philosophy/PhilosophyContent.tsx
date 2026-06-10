"use client";

import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import Link from "next/link";

export default function PhilosophyContent() {
  return (
    <div className="bg-ivory text-textDark min-h-screen">
      
      {/* 1. EDITORIAL HERO */}
      <section className="pt-48 pb-24 px-6 max-w-[1000px] mx-auto text-center">
        <AnimatedSection>
          <span className="text-eyebrow text-terracotta mb-8 block">The Philosophy</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-light text-textDark mb-12">
            The Body is <br />
            <span className="italic text-antiqueGold">an Altar</span>
          </h1>
          <div className="w-[1px] h-24 bg-antiqueGold/40 mx-auto" />
        </AnimatedSection>
      </section>

      {/* 2. THE ARTICLE */}
      <article className="max-w-[800px] mx-auto px-6 pb-32">
        <AnimatedSection delay={0.1}>
          
          <div className="mb-16">
            <p className="font-body text-lg font-light leading-loose text-textDark/80 drop-cap">
              e live in a world that asks us to transcend the body, to rise above our earthly nature in search of the divine. But the ancient path of Shakta Tantra teaches something entirely different: the divine is not found by leaving the body, but by descending deeply into it. Every breath, every sensation, every emotion is a manifestation of the Goddess—the vital creative force known as Shakti.
            </p>
          </div>

          <p className="font-body text-lg font-light leading-loose text-textDark/80 mb-16">
            When we strip away the armor we have built around our hearts, we realize that we are already whole. The healing we so desperately seek is not an acquisition of new spiritual tools, but a process of profound remembering. It is the courageous act of meeting our shadows with unconditional love.
          </p>

        </AnimatedSection>

        {/* FULL BLEED IMAGE WITH ORGANIC BORDER */}
        <AnimatedSection>
          <div className="my-24 w-[110%] -ml-[5%] md:w-[120%] md:-ml-[10%]">
            <EditorialImage 
              src="/images/generated/shakti-hero-final.png"
              alt="Nature abstract"
              variant="organic-1"
              className="w-full aspect-[21/9]"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p className="font-body text-lg font-light leading-loose text-textDark/80 mb-16">
            To walk this path is to honor the cycles of nature within your own biology. Through the integration of classical yoga, Ayurveda, and somatic embodiment, we do not bypass our humanity; we sanctify it. The physical body becomes the temple where the deepest alchemy occurs. 
          </p>

          {/* MAGAZINE PULL QUOTE */}
          <div className="my-24 border-l-2 border-terracotta pl-8 md:pl-12 py-4">
            <p className="font-display text-3xl md:text-5xl italic text-antiqueGold leading-tight mb-6">
              &ldquo;We must stop trying to heal ourselves and instead learn to hold ourselves.&rdquo;
            </p>
            <span className="text-eyebrow text-textDark/50 block">Kunti, Founder</span>
          </div>

          <p className="font-body text-lg font-light leading-loose text-textDark/80 mb-16">
            This work requires tremendous courage. It asks you to feel exactly what is here, without attempting to fix or change it. In this state of radical acceptance, the nervous system settles, the creative channels open, and the true self emerges from the depths. This is the path of Shakti Lotus.
          </p>

          <div className="pt-16 border-t border-antiqueGold/20 mt-24 text-center">
            <Link
              href="/work-with-me"
              className="inline-flex items-center gap-4 text-xs font-body uppercase tracking-[0.2em] text-textDark hover:text-terracotta transition-colors duration-500 group"
            >
              <span>Explore The Offerings</span>
              <span className="w-16 h-[1px] bg-textDark/30 transition-all duration-500 group-hover:w-24 group-hover:bg-terracotta" />
            </Link>
          </div>
        </AnimatedSection>

      </article>
      
    </div>
  );
}
