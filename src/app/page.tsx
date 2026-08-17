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
    <div className="relative z-0">
      <AuroraBackground />
      
      {/* 01 — HERO SECTION: Split-screen editorial */}
      <section className="relative min-h-[85vh] lg:min-h-screen overflow-hidden flex flex-col lg:flex-row items-stretch pt-20 lg:pt-0">
        {/* Left: Text */}
        <div className="relative z-10 w-full lg:w-1/2 px-8 lg:px-16 xl:px-24 flex flex-col justify-center text-center lg:text-left py-16 lg:py-0 order-2 lg:order-1">
          <AnimatedSection direction="up" className="space-y-6 md:space-y-8 max-w-xl mx-auto lg:mx-0">
            <p className="text-xs tracking-[0.3em] uppercase text-[#4D667D]/50 font-medium">
              Tantric Yogini · Traveler · Guide
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-[0.08em] text-[#4D667D] uppercase font-light leading-[0.95]">
              Shakti<br />Loto
            </h1>
            <p className="font-display text-xl md:text-2xl text-[#5A4636] italic font-light leading-relaxed">
              A journey back to the divine within.
            </p>
            <div className="pt-4 lg:pt-6">
              <a href="#offerings" className="inline-block border border-[#4D667D]/30 px-8 py-3 text-[10px] tracking-[0.25em] uppercase text-[#4D667D] hover:bg-[#4D667D] hover:text-[#EFE6DB] transition-all duration-500">
                Explore The Offerings
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Right: Hero Image */}
        <div className="relative z-0 w-full lg:w-1/2 h-[50vh] lg:h-auto order-1 lg:order-2 overflow-hidden">
          <Image
            src={photos.mainPhoto}
            alt="Shakti Loto atmosphere"
            fill
            priority
            className="object-cover object-[center_top]"
          />
        </div>
      </section>

      {/* 02 — THE INVITATION: Simple text block */}
      <section className="px-8 py-24 md:py-32 bg-[#EFE6DB]">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection direction="up" className="space-y-8">
            <p className="text-lg md:text-xl font-light leading-[2] text-[#4D667D]">
              Shakti Loto is a space for deep reconnection with the life force — a living portal into the sacred that already exists within you.
            </p>
            <div className="h-px w-16 bg-[#C8A96B] mx-auto" />
            <p className="text-lg md:text-xl font-light leading-[2] text-[#4D667D]">
              A place where ancestral wisdom, embodied practice, and the divine meet to awaken a deeper awareness of the body, the heart, and the spirit.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 03 — MANTRA STRIP */}
      <section className="px-8 py-12 bg-[#D8C8B6]/40 text-center">
        <AnimatedSection direction="up">
          <p className="font-display text-base md:text-lg tracking-[0.3em] uppercase text-[#4D667D]/70 font-light">
            Remember <span className="mx-3 text-[#C8A96B]">·</span> Embody <span className="mx-3 text-[#C8A96B]">·</span> Explore <span className="mx-3 text-[#C8A96B]">·</span> Return <span className="mx-3 text-[#C8A96B]">·</span> Blossom
          </p>
        </AnimatedSection>
      </section>

      {/* 04 — THE OFFERINGS: Collection Grid */}
      <section id="offerings" className="px-8 py-24 md:py-32 bg-[#EFE6DB]">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection direction="up" className="text-center space-y-4 mb-16 md:mb-24">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#4D667D]/50 font-medium">Discover</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#4D667D] font-light tracking-[0.15em] uppercase">
              The Offerings
            </h2>
            <div className="h-px w-20 bg-[#C8A96B]/50 mx-auto mt-6" />
          </AnimatedSection>
          <CollectionGrid />
        </div>
      </section>

      {/* 05 — THE JOURNEY: Editorial two-column */}
      <section className="px-8 py-24 md:py-32 bg-white/40">
        <div className="mx-auto max-w-[1200px] grid gap-16 lg:grid-cols-2 lg:items-center">
          <AnimatedSection direction="left">
            <EditorialImage 
              src={photos.sacredTree} 
              alt="Ancestral wisdom and conscious movement" 
              variant="organic-1" 
              withBorder 
              className="aspect-[4/5] w-full max-w-md mx-auto" 
            />
          </AnimatedSection>
          
          <AnimatedSection direction="right" className="space-y-8">
            <div className="space-y-3">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8A96B] font-medium">The Path</p>
              <h2 className="font-display text-4xl md:text-5xl text-[#4D667D] font-light tracking-wide uppercase">
                The Journey
              </h2>
            </div>
            
            <div className="space-y-6 text-base md:text-lg font-light leading-[1.9] text-[#4D667D]/85">
              <p>
                Guided by Kunti, Tantric Yogini, traveler, and lifelong student of the sacred, Shakti Loto was born as a bridge between the ancestral wisdom of Latin America and the teachings, experiences, and encounters gathered across the world.
              </p>
              <p>
                Through Tantra, conscious movement, meditation, Yoga, and ancestral ritual, Shakti Loto invites you to experience spirituality not only as something to understand, but as something to feel, embody, and live.
              </p>
            </div>
            
            <div className="h-px w-20 bg-[#C8A96B]/50 my-6" />
            
            <div className="font-display text-xl md:text-2xl text-[#5A4636] italic space-y-2 leading-relaxed">
              <p>Here, the body becomes a temple.</p>
              <p>Movement becomes a language.</p>
              <p>Ritual becomes a doorway.</p>
              <p>And the journey becomes a return.</p>
            </div>
            
            <div className="pt-4 space-y-5 text-base font-light leading-[1.9] text-[#4D667D]/85">
              <p>
                The path is a blossoming. Like the lotus rising from deep waters, each process carries the possibility of transformation, awakening, and expansion.
              </p>
              <p className="font-medium text-[#4D667D] italic text-lg font-display">
                Not becoming someone else.<br />
                But remembering what has always been there.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 06 — STORIES & TRAVEL: Polaroid layout */}
      <section className="px-8 py-24 md:py-32 bg-[#EFE6DB]">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection direction="up" className="text-center space-y-4 mb-20">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#4D667D]/50 font-medium">Journal</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#4D667D] font-light tracking-[0.15em] uppercase">
              Stories & Travel
            </h2>
            <div className="h-px w-20 bg-[#C8A96B]/50 mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection direction="left" className="order-2 md:order-1 space-y-8 max-w-lg mx-auto md:mx-0">
              <p className="text-lg md:text-xl font-light text-[#5A4636] leading-[2] italic font-display">
                "I do not believe that you need to become someone else. I believe there is something within you waiting to be remembered."
              </p>
              <div className="h-px w-12 bg-[#C8A96B]/40" />
              <p className="text-base font-light text-[#4D667D]/70 leading-[1.9]">
                My role is not to give you all the answers, but to offer practices, experiences, and a space where your own questions can unfold. Through travel, ancestral wisdom, and conscious movement, we journey back to the source.
              </p>
              <div className="pt-4">
                <Link href="/about" className="inline-block text-[10px] tracking-[0.25em] uppercase text-[#4D667D] border-b border-[#4D667D]/30 pb-1 hover:border-[#C8A96B] hover:text-[#C8A96B] transition-colors">
                  Read the Journal
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="order-1 md:order-2 relative">
              <div className="relative aspect-[4/5] w-full max-w-[380px] mx-auto rotate-2 hover:rotate-0 transition-transform duration-700 bg-white p-4 shadow-sm">
                <div className="relative w-full h-full">
                  <Image 
                    src={photos.gardenPortrait} 
                    alt="Travel Journal" 
                    fill 
                    className="object-cover object-[center_top]" 
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 aspect-square w-32 md:w-44 -rotate-6 bg-white p-2 shadow-sm hidden md:block">
                <div className="relative w-full h-full">
                  <Image 
                    src={photos.waterfallPrayer} 
                    alt="Ritual" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 07 — WORK WITH ME BANNER */}
      <section className="relative px-8 py-28 md:py-36 flex flex-col items-center justify-center text-center overflow-hidden bg-[#D8C8B6]/30">
        <AnimatedSection className="relative z-10 mx-auto max-w-3xl space-y-8">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#4D667D]/50 font-medium">Custom Journeys</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#4D667D] font-light tracking-[0.1em] uppercase">
            Work With Me
          </h2>
          <p className="text-base md:text-lg font-light text-[#4D667D]/75 leading-[1.9] max-w-2xl mx-auto">
            Whether you are looking for a personalized 1:1 mentorship, a custom sacred jewelry piece, or to join an upcoming retreat, I am here to guide the unfolding.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact"
              className="inline-block border border-[#4D667D]/30 px-10 py-4 text-[10px] uppercase tracking-[0.25em] text-[#4D667D] hover:bg-[#4D667D] hover:text-[#EFE6DB] transition-all duration-500"
            >
              Begin Your Journey
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* 08 — CLOSING */}
      <section className="relative overflow-hidden px-8 py-32 md:py-40 flex flex-col items-center justify-center text-center bg-[#EFE6DB]">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src={photos.roseMeditation}
            alt="Closing background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#EFE6DB]/85" />
        
        <AnimatedSection className="relative z-10 mx-auto max-w-4xl space-y-10">
          <div className="space-y-5">
            <h2 className="font-display text-4xl md:text-5xl text-[#4D667D] font-light tracking-[0.15em] uppercase">
              More Than a Project.
            </h2>
            <p className="font-display text-2xl md:text-3xl text-[#5A4636] italic">
              A living experience.
            </p>
          </div>

          <div className="h-px w-20 bg-[#C8A96B]/50 mx-auto" />

          <div className="font-display text-lg md:text-2xl text-[#4D667D]/80 space-y-3 font-light italic leading-relaxed">
            <p>A call to return to the Source.</p>
            <p>To listen to the body.</p>
            <p>To open the heart.</p>
            <p>To awaken the senses.</p>
            <p>To remember the wisdom within.</p>
            <p>To bloom from the depths.</p>
            <p className="text-[#5A4636]">To remember who you are, beyond the forms.</p>
          </div>

          <div className="pt-8 space-y-5">
            <SacredIcon type="lotus" className="mx-auto h-8 w-8 text-[#C8A96B]/60" />
            <h3 className="font-display text-2xl tracking-[0.2em] text-[#4D667D] uppercase font-light">
              Shakti Loto
            </h3>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#4D667D]/50 font-light">
              A journey back to the divine within. ✦
            </p>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
