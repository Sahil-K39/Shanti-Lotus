"use client";

import AnimatedSection from "@/components/AnimatedSection";
import AuroraBackground from "@/components/AuroraBackground";
import CollectionGrid from "@/components/CollectionGrid";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { photos } from "@/lib/brand";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-ivory relative z-0">
      <AuroraBackground />
      
      {/* 01 — HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-screen overflow-hidden flex flex-col lg:flex-row items-center pt-20 lg:pt-0">
        <div className="relative z-10 w-full lg:w-1/2 px-6 lg:px-16 xl:px-24 flex flex-col justify-center text-center lg:text-left py-12 lg:py-0 order-2 lg:order-1">
          <AnimatedSection direction="up" className="space-y-6 md:space-y-8 max-w-xl mx-auto lg:mx-0">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-[0.1em] text-ink uppercase font-light leading-none">
              SHAKTI LOTO
            </h1>
            <p className="font-display text-xl md:text-3xl text-ink/80 italic font-light">
              A journey back to the divine within.
            </p>
            <div className="pt-4 lg:pt-8">
              <a href="#offerings" className="inline-block border-b border-ink pb-1 text-sm tracking-[0.2em] uppercase text-ink hover:text-lightGold hover:border-lightGold transition-colors duration-300">
                Explore The Offerings
              </a>
            </div>
          </AnimatedSection>
        </div>

        <div className="relative z-0 w-full lg:w-1/2 h-[55vh] lg:h-screen order-1 lg:order-2 overflow-hidden">
          <div className="absolute inset-0 bg-parchment/5 z-10" />
          <Image
            src={photos.mainPhoto}
            alt="Shakti Loto atmosphere"
            fill
            priority
            className="object-cover object-[center_top]"
          />
        </div>
      </section>

      {/* 02 — THE INVITATION */}
      <section className="editorial-section px-6 relative z-10 text-center">
        <div className="mx-auto max-w-4xl space-y-12">
          <AnimatedSection direction="up" className="space-y-8 text-lg md:text-xl font-light leading-loose text-ink/90">
            <p>
              Shakti Loto is a space for deep reconnection with the life force — a living portal into the sacred that already exists within you.
            </p>
            <p>
              A place where ancestral wisdom, embodied practice, and the divine meet to awaken a deeper awareness of the body, the heart, and the spirit.
            </p>
            <p>
              It is an invitation to return to the Source — to the origin of who you are beneath the layers, beyond the forms, and closer to your essence.
            </p>
            <p>
              Through a journey of self-exploration and self-discovery, I invite you to awaken your creative energy, reconnect with your inner wisdom, and cultivate a deeper relationship with yourself.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 03 — DIFFERENTIAL LANGUAGE MANIFESTO */}
      <section className="px-6 py-20 relative z-10 bg-surfaceDark/60 text-center border-y border-lightGold/10">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection direction="up">
            <p className="font-display text-lg md:text-2xl tracking-[0.3em] uppercase text-lightGold/80 font-light">
              REMEMBER <span className="mx-4 text-ink/30">·</span> EMBODY <span className="mx-4 text-ink/30">·</span> EXPLORE <span className="mx-4 text-ink/30">·</span> RETURN <span className="mx-4 text-ink/30">·</span> BLOSSOM
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 03.5 — THE OFFERINGS */}
      <section id="offerings" className="px-6 py-24 md:py-32 relative z-10 bg-parchment/20">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection direction="up" className="text-center space-y-4 mb-16 md:mb-24">
            <span className="text-eyebrow text-ink/60">Discover</span>
            <h2 className="font-display text-4xl md:text-5xl text-ink font-light tracking-[0.2em] uppercase">
              THE OFFERINGS
            </h2>
            <div className="h-px w-24 bg-ink/10 mx-auto mt-8" />
          </AnimatedSection>
          <CollectionGrid />
        </div>
      </section>

      {/* 04 — THE JOURNEY */}
      <section className="editorial-section px-6 relative z-10">
        <div className="mx-auto max-w-[1250px] grid gap-14 lg:grid-cols-2 lg:items-center">
          <AnimatedSection direction="left">
            <EditorialImage 
              src={photos.sacredTree} 
              alt="Ancestral wisdom and conscious movement" 
              variant="organic-1" 
              withBorder 
              className="aspect-[4/5] w-full max-w-md mx-auto opacity-90" 
            />
          </AnimatedSection>
          
          <AnimatedSection direction="right" className="space-y-8">
            <div className="space-y-2">
              <span className="text-eyebrow">The Path</span>
              <h2 className="font-display text-4xl md:text-6xl text-lightGold font-light tracking-wide uppercase">
                THE JOURNEY
              </h2>
            </div>
            
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed md:leading-loose text-ink/90">
              <p>
                Guided by Kunti, Tantric Yogini, traveler, and lifelong student of the sacred, Shakti Loto was born as a bridge between the ancestral wisdom of Latin America and the teachings, experiences, and encounters gathered across the world.
              </p>
              <p>
                Through Tantra, conscious movement, meditation, Yoga, and ancestral ritual, Shakti Loto invites you to experience spirituality not only as something to understand, but as something to feel, embody, and live.
              </p>
            </div>
            
            <div className="gold-line w-24 my-8" />
            
            <div className="font-display text-xl md:text-2xl text-lightGold/90 italic space-y-2">
              <p>Here, the body becomes a temple.</p>
              <p>Movement becomes a language.</p>
              <p>Ritual becomes a doorway.</p>
              <p>And the journey becomes a return.</p>
            </div>
            
            <div className="pt-6 space-y-6 text-base font-light leading-relaxed text-ink/90">
              <p>
                The path is a blossoming. Like the lotus rising from deep waters, each process carries the possibility of transformation, awakening, and expansion.
              </p>
              <p className="font-medium text-ink italic text-xl font-display">
                Not becoming someone else.<br />
                But remembering what has always been there.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 05 — THE JOURNAL & TRAVEL */}
      <section className="px-6 py-24 relative z-10 bg-parchment border-t border-ink/5">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection direction="up" className="text-center space-y-4 mb-20">
            <span className="text-eyebrow text-ink/60">Journal</span>
            <h2 className="font-display text-4xl md:text-5xl text-ink font-light tracking-[0.2em] uppercase">
              STORIES & TRAVEL
            </h2>
            <div className="h-px w-24 bg-ink/10 mx-auto mt-8" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection direction="left" className="order-2 md:order-1 space-y-8 max-w-lg mx-auto md:mx-0">
              <p className="text-lg md:text-xl font-light text-ink/90 leading-loose italic">
                “I do not believe that you need to become someone else. I believe there is something within you waiting to be remembered.”
              </p>
              <div className="h-px w-12 bg-ink/20" />
              <p className="text-base font-light text-ink/70 leading-relaxed">
                My role is not to give you all the answers, but to offer practices, experiences, and a space where your own questions can unfold. Through travel, ancestral wisdom, and conscious movement, we journey back to the source.
              </p>
              <div className="pt-4">
                <Link href="/about" className="inline-block border-b border-ink/30 pb-1 text-xs tracking-[0.2em] uppercase text-ink hover:text-lightGold hover:border-lightGold transition-colors">
                  Read the Journal
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="order-1 md:order-2 relative">
              <div className="relative aspect-[4/5] w-full max-w-[400px] mx-auto rotate-2 hover:rotate-0 transition-transform duration-700 bg-white p-4 shadow-sm border border-ink/5">
                <div className="relative w-full h-full">
                  <Image 
                    src={photos.gardenPortrait} 
                    alt="Travel Journal" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 aspect-square w-32 md:w-48 -rotate-6 bg-white p-2 shadow-sm border border-ink/5 hidden md:block">
                <div className="relative w-full h-full">
                  <Image 
                    src={photos.waterfallPrayer} 
                    alt="Ritual" 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 06 — WORK WITH ME BANNER */}
      <section className="relative px-6 py-32 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[#E8DFD5] z-0" />
        {/* Subtle noise/texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] z-[1] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
        
        <AnimatedSection className="relative z-10 mx-auto max-w-3xl space-y-10">
          <span className="text-eyebrow text-ink/60">Custom Journeys</span>
          <h2 className="font-display text-4xl md:text-6xl text-ink font-light tracking-[0.1em] uppercase">
            WORK WITH ME
          </h2>
          <p className="text-lg md:text-xl font-light text-ink/80 leading-relaxed max-w-2xl mx-auto">
            Whether you are looking for a personalized 1:1 mentorship, a custom sacred jewelry piece, or to join an upcoming retreat, I am here to guide the unfolding.
          </p>
          <div className="pt-6">
            <Link 
              href="/contact"
              className="inline-block border border-ink px-10 py-4 text-xs uppercase tracking-[0.25em] text-ink hover:bg-ink hover:text-parchment transition-colors duration-500"
            >
              Begin Your Journey
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* 07 — CLOSING CTA */}
      <section className="relative overflow-hidden px-6 py-40 flex flex-col items-center justify-center text-center border-t border-ink/10">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src={photos.roseMeditation}
            alt="Closing background"
            fill
            className="object-cover mix-blend-luminosity"
          />
        </div>
        <div className="absolute inset-0 bg-parchment/80" />
        
        <AnimatedSection className="relative z-10 mx-auto max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl text-lightGold font-light tracking-widest uppercase">
              MORE THAN A PROJECT.
            </h2>
            <p className="font-display text-3xl md:text-4xl text-ink/90 italic">
              A living experience.
            </p>
          </div>

          <div className="gold-line mx-auto max-w-xs my-8" />

          <div className="font-display text-xl md:text-3xl text-ink/80 space-y-3 font-light italic">
            <p>A call to return to the Source.</p>
            <p>To listen to the body.</p>
            <p>To open the heart.</p>
            <p>To awaken the senses.</p>
            <p>To remember the wisdom within.</p>
            <p>To bloom from the depths.</p>
            <p className="text-lightGold">To remember who you are, beyond the forms.</p>
          </div>

          <div className="pt-12 space-y-6">
            <SacredIcon type="lotus" className="mx-auto h-10 w-10 text-terracotta/80" />
            <h3 className="font-display text-3xl tracking-[0.2em] text-lightGold uppercase font-light">
              Shakti Loto
            </h3>
            <p className="text-sm tracking-[0.3em] uppercase text-ink/60 font-light">
              A journey back to the divine within. *
            </p>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

