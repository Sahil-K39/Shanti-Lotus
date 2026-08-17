"use client";

import AnimatedSection from "@/components/AnimatedSection";
import AuroraBackground from "@/components/AuroraBackground";
import CollectionGrid from "@/components/CollectionGrid";
import SacredIcon from "@/components/SacredIcon";
import { photos } from "@/lib/brand";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative z-0">
      <AuroraBackground />

      {/* ═══════════════════════════════════════════
          01 — FULL-BLEED HERO
          Immersive, magazine-style. Image dominates.
          ═══════════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden">
        {/* Full background image */}
        <Image
          src={photos.mainPhoto}
          alt="Shakti Loto"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        {/* Soft gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a]/60 via-transparent to-[#2a2a2a]/20" />

        {/* Centered bottom text — minimal, editorial */}
        <div className="absolute inset-x-0 bottom-0 z-10 pb-16 md:pb-24 text-center px-6">
          <AnimatedSection direction="up" className="space-y-4">
            <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/70 font-light">
              Tantric Yogini · Traveler · Guide
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.12em] text-white uppercase font-light leading-[0.9]">
              Shakti Loto
            </h1>
            <p className="font-display text-lg md:text-2xl text-white/80 italic font-light pt-2">
              A journey back to the divine within.
            </p>
            <div className="pt-6">
              <a
                href="#welcome"
                className="inline-block w-8 h-8 border border-white/40 rounded-full flex items-center justify-center animate-bounce"
                aria-label="Scroll down"
              >
                <svg className="w-3 h-3 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          02 — WELCOME / INTRO
          Clean, centered text. Lots of breathing room.
          ═══════════════════════════════════════════ */}
      <section id="welcome" className="px-6 py-28 md:py-40 bg-[#EFE6DB]">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedSection direction="up" className="space-y-10">
            <SacredIcon type="lotus" className="mx-auto h-8 w-8 text-[#C8A96B]/50" />
            <h2 className="font-display text-3xl md:text-4xl text-[#4D667D] font-light leading-[1.5] tracking-wide">
              Welcome to my visual space
            </h2>
            <div className="h-px w-16 bg-[#C8A96B]/40 mx-auto" />
            <p className="text-base md:text-lg font-light leading-[2.1] text-[#4D667D]/80">
              Shakti Loto is a space for deep reconnection with the life force — where ancestral wisdom, embodied practice, and the divine meet to awaken a deeper awareness of the body, the heart, and the spirit.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          03 — EDITORIAL IMAGE STRIP
          Two side-by-side photos, like a magazine spread
          ═══════════════════════════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:h-[80vh] overflow-hidden group">
          <Image
            src="/media/gallery/IMG_5374.jpg"
            alt="Conscious Movement"
            fill
            className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">Explore</p>
            <h3 className="font-display text-3xl md:text-4xl text-white font-light tracking-wide">
              Tantric Movement
            </h3>
          </div>
        </div>
        <div className="relative aspect-[4/5] md:aspect-auto md:h-[80vh] overflow-hidden group">
          <Image
            src="/media/gallery/IMG_0596.jpg"
            alt="Sacred Rituals"
            fill
            className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">Discover</p>
            <h3 className="font-display text-3xl md:text-4xl text-white font-light tracking-wide">
              Sacred Rituals
            </h3>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          04 — MANIFESTO QUOTE
          Full-width centered quote, very editorial
          ═══════════════════════════════════════════ */}
      <section className="px-6 py-28 md:py-40 bg-[#EFE6DB]">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection direction="up" className="space-y-8">
            <p className="font-display text-2xl md:text-4xl lg:text-5xl text-[#4D667D] italic font-light leading-[1.5]">
              "I do not believe that you need to become someone else. I believe there is something within you waiting to be remembered."
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="h-px w-12 bg-[#C8A96B]/40" />
              <p className="text-xs tracking-[0.3em] uppercase text-[#4D667D]/50 font-medium">Kunti</p>
              <div className="h-px w-12 bg-[#C8A96B]/40" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          05 — THE OFFERINGS / COLLECTION GRID
          Visual-first masonry grid, like a shop
          ═══════════════════════════════════════════ */}
      <section id="offerings" className="px-6 md:px-12 py-24 md:py-36 bg-white/30">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection direction="up" className="text-center space-y-4 mb-20 md:mb-28">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96B] font-medium">Discover</p>
            <h2 className="font-display text-4xl md:text-6xl text-[#4D667D] font-light tracking-[0.12em] uppercase">
              The Offerings
            </h2>
          </AnimatedSection>
          <CollectionGrid />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          06 — FULL-BLEED JOURNEY IMAGE
          Huge immersive photo with text overlay
          ═══════════════════════════════════════════ */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <Image
          src={photos.sacredTree}
          alt="The Journey"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a]/70 via-[#2a2a2a]/30 to-transparent" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="px-8 md:px-20 max-w-2xl">
            <AnimatedSection direction="left" className="space-y-6">
              <p className="text-[10px] tracking-[0.35em] uppercase text-white/60 font-medium">The Path</p>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wide uppercase leading-[0.95]">
                The Journey
              </h2>
              <div className="h-px w-16 bg-white/30" />
              <p className="text-base md:text-lg font-light text-white/80 leading-[2] max-w-lg">
                Through Tantra, conscious movement, meditation, Yoga, and ancestral ritual, Shakti Loto invites you to experience spirituality not only as something to understand, but as something to feel, embody, and live.
              </p>
              <div className="pt-4">
                <Link href="/about" className="inline-block border border-white/40 px-8 py-3 text-[10px] tracking-[0.25em] uppercase text-white/90 hover:bg-white hover:text-[#4D667D] transition-all duration-500">
                  Read More
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          07 — POETIC STRIP
          Horizontal mantra, very Lexie-style
          ═══════════════════════════════════════════ */}
      <section className="px-6 py-12 md:py-16 bg-[#D8C8B6]/30 text-center overflow-hidden">
        <AnimatedSection direction="up">
          <p className="font-display text-sm md:text-base tracking-[0.35em] uppercase text-[#4D667D]/60 font-light whitespace-nowrap">
            Remember &nbsp;✦&nbsp; Embody &nbsp;✦&nbsp; Explore &nbsp;✦&nbsp; Return &nbsp;✦&nbsp; Blossom
          </p>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════════
          08 — TRAVEL GALLERY STRIP
          3-column image strip, Instagram-like
          ═══════════════════════════════════════════ */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {[
          "/media/gallery/IMG_9749.jpg",
          "/media/gallery/IMG_1873.jpg",
          "/media/gallery/IMG_2222.jpg",
          "/media/gallery/IMG_8613.jpg",
        ].map((src, i) => (
          <div key={i} className="relative aspect-square overflow-hidden group">
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              fill
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.05]"
            />
          </div>
        ))}
      </section>

      {/* ═══════════════════════════════════════════
          09 — WORK WITH ME
          Clean CTA banner
          ═══════════════════════════════════════════ */}
      <section className="px-6 py-28 md:py-40 bg-[#EFE6DB]">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection className="space-y-8">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96B] font-medium">Custom Journeys</p>
            <h2 className="font-display text-4xl md:text-6xl text-[#4D667D] font-light tracking-[0.1em] uppercase">
              Work With Me
            </h2>
            <p className="text-base md:text-lg font-light text-[#4D667D]/70 leading-[2] max-w-2xl mx-auto">
              Whether you are looking for a personalized 1:1 mentorship, a custom sacred jewelry piece, or to join an upcoming retreat — I am here to guide the unfolding.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block border border-[#4D667D] px-10 py-4 text-[10px] uppercase tracking-[0.25em] text-[#4D667D] hover:bg-[#4D667D] hover:text-[#EFE6DB] transition-all duration-500"
              >
                Begin Your Journey
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10 — CLOSING FULL-BLEED IMAGE
          Final emotional impact, like Lexie's footer
          ═══════════════════════════════════════════ */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden flex items-center justify-center">
        <Image
          src={photos.roseMeditation}
          alt="A living experience"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#2a2a2a]/50" />
        <div className="relative z-10 text-center px-6">
          <AnimatedSection className="space-y-6">
            <h2 className="font-display text-4xl md:text-6xl text-white font-light tracking-[0.12em] uppercase">
              More Than a Project.
            </h2>
            <p className="font-display text-xl md:text-3xl text-white/80 italic font-light">
              A living experience.
            </p>
            <div className="pt-6">
              <SacredIcon type="lotus" className="mx-auto h-7 w-7 text-[#C8A96B]/70" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
