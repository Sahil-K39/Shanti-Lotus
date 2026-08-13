"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import AuroraBackground from "@/components/AuroraBackground";
import { photos, homepageExperiences } from "@/lib/brand";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-ivory relative z-0">
      <AuroraBackground />
      
      {/* 01 — HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6">
        {/* One strong, atmospheric background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={photos.mainPhoto}
            alt="Shakti Loto atmosphere"
            fill
            priority
            className="object-cover opacity-25 mix-blend-luminosity filter saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/40 to-ink pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <AnimatedSection direction="up" className="space-y-8">
            <h1 className="font-display text-6xl tracking-[0.1em] text-lightGold sm:text-7xl md:text-9xl uppercase font-light">
              SHAKTI LOTO
            </h1>
            <p className="font-display text-2xl md:text-3xl text-cacaoProfundo/90 max-w-2xl mx-auto italic font-light">
              A journey back to the divine within.
            </p>
            
            <div className="h-px w-24 bg-lightGold/30 mx-auto my-6" />
            
            <p className="text-sm tracking-[0.3em] uppercase text-cacaoProfundo/70 font-light font-body">
              Tantra · Conscious Movement · Ritual · Meditation · Yoga
            </p>
            
            <div className="pt-8">
              <Link href="/contact" className="btn-primary">
                ENTER THE JOURNEY →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 02 — THE INVITATION */}
      <section className="editorial-section px-6 relative z-10">
        <div className="mx-auto max-w-4xl text-center space-y-12">
          <AnimatedSection direction="up" className="space-y-4">
            <h2 className="font-display text-3xl md:text-5xl italic text-cacaoProfundo font-light">
              What if you don't need to become someone else?
            </h2>
            <h2 className="font-display text-3xl md:text-5xl italic text-cacaoProfundo font-light">
              What if the journey is simply about remembering?
            </h2>
          </AnimatedSection>
          
          <div className="gold-line mx-auto max-w-md my-8" />
          
          <AnimatedSection direction="up" className="space-y-8 max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed md:leading-loose text-parchment/90">
            <p>
              Shakti Loto is a space for deep reconnection with the life force — a living portal into the sacred that already exists within you.
            </p>
            <p>
              A place where ancestral wisdom, embodied practices, and the divine meet to awaken a deeper awareness of the body, the heart, and the spirit.
            </p>
            <p>
              It is an invitation to return to the Source — to the origin of who you are beneath the layers, beyond the forms, and closer to your essence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 03 — THE PHILOSOPHY */}
      <section className="editorial-section px-6 relative z-10 bg-charcoal/30">
        <div className="mx-auto max-w-[1250px] grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <AnimatedSection direction="left" className="space-y-12">
            <div className="space-y-2">
              <span className="text-eyebrow">The Core Essence</span>
              <h2 className="font-display text-4xl md:text-6xl text-cacaoProfundo font-light tracking-wide">
                THE PHILOSOPHY
              </h2>
            </div>
            
            <div className="space-y-10">
              {[
                ["REMEMBER", "To reconnect with the wisdom that already lives within."],
                ["EMBODY", "To experience spirituality through the body, the senses, and conscious presence."],
                ["EXPLORE", "To approach the inner world with curiosity, awareness, and freedom."],
                ["RETURN", "To come back to the Source, to yourself, and to what is essential."],
                ["BLOSSOM", "Like the lotus rising from deep waters, allowing each experience to become an opportunity for transformation and expansion."]
              ].map(([title, desc], index) => (
                <div key={title} className="flex gap-6 items-start group">
                  <span className="font-display text-2xl text-lightGold/60 group-hover:text-lightGold transition-colors duration-300">
                    0{index + 1}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-display text-xl md:text-2xl text-cacaoProfundo font-semibold tracking-wider">
                      {title}
                    </h3>
                    <p className="text-sm font-light text-parchment/80 leading-relaxed max-w-xl">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right">
            <EditorialImage 
              src={photos.sacredTree} 
              alt="Sacred tree meditation" 
              variant="organic-1" 
              withBorder 
              className="aspect-[4/5] w-full max-w-md mx-auto" 
            />
          </AnimatedSection>
        </div>
      </section>

      {/* 04 — MEET KUNTI */}
      <section className="editorial-section px-6 relative z-10">
        <div className="mx-auto max-w-[1250px] grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <AnimatedSection direction="left">
            <EditorialImage 
              src={photos.gardenPortrait} 
              alt="Kunti holding space" 
              variant="organic-2" 
              withBorder 
              className="aspect-[3/4] w-full max-w-sm mx-auto" 
            />
          </AnimatedSection>
          
          <AnimatedSection direction="right" className="space-y-8 sacred-card p-8 md:p-14">
            <div className="space-y-2">
              <span className="text-eyebrow">The Founder & Guide</span>
              <h2 className="font-display text-4xl md:text-6xl text-cacaoProfundo font-light">
                Meet Kunti
              </h2>
              <p className="text-sm tracking-widest text-lightGold font-medium">
                Tantric Yogini · Traveler · Lifelong Student of the Sacred
              </p>
            </div>
            
            <div className="space-y-6 text-sm md:text-base font-light leading-relaxed text-parchment/90">
              <p>
                Shakti Loto was born through Kunti's journey between worlds — connecting the ancestral wisdom of Latin America with the teachings, experiences, and encounters gathered throughout her travels.
              </p>
              <p>
                Her path unfolds through Tantra, Yoga, conscious movement, meditation, ritual, and a deep relationship with the body and the natural world.
              </p>
              <p className="font-semibold text-cacaoProfundo">
                She does not position herself above those she accompanies.
              </p>
            </div>

            <blockquote className="border-l-2 border-lightGold/60 pl-6 italic text-cacaoProfundo/80 text-lg space-y-4">
              <p>“I am not here to guide you from above.”</p>
              <p className="text-base font-light not-italic text-parchment/80">
                I am here to create a space where you can listen more deeply, explore freely, and encounter your own inner wisdom.
              </p>
              <p className="text-base font-light not-italic text-parchment/80">
                I do not believe you need to become someone else.
              </p>
              <p className="text-base font-light not-italic text-parchment/80">
                I believe there is something within you waiting to be remembered.
              </p>
            </blockquote>

            <div className="pt-4">
              <Link href="/about" className="btn-secondary">
                READ KUNTI'S STORY →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 05 — EXPERIENCES */}
      <section className="editorial-section px-6 relative z-10 bg-charcoal/30">
        <div className="mx-auto max-w-[1250px] space-y-16">
          <AnimatedSection direction="up" className="text-center space-y-2">
            <span className="text-eyebrow">Embark on the Path</span>
            <h2 className="font-display text-4xl md:text-6xl text-cacaoProfundo font-light tracking-widest">
              ENTER THE WORLD OF SHAKTI LOTO
            </h2>
          </AnimatedSection>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {homepageExperiences.map((exp, index) => (
              <AnimatedSection key={exp.title} delay={index * 0.08}>
                <div className="sacred-card flex h-full min-h-[420px] flex-col justify-between p-8 group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-lightGold/50">
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={exp.image} 
                      alt={exp.title} 
                      fill 
                      className="object-cover opacity-15 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-25" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/60 to-ink/90" />
                  </div>
                  
                  <div className="relative z-10 space-y-4">
                    <SacredIcon type="lotus" className="h-8 w-8 text-lightGold/70" />
                    <h3 className="font-display text-2xl tracking-wider text-cacaoProfundo font-medium">
                      {exp.title}
                    </h3>
                    <p className="text-xs md:text-sm font-light leading-relaxed text-parchment/85">
                      {exp.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-6">
                    <Link href={exp.href} className="btn-secondary !text-sm">
                      {exp.cta}
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — THE SHAKTI LOTO APPROACH */}
      <section className="editorial-section px-6 relative z-10 text-center">
        <div className="mx-auto max-w-4xl space-y-10">
          <AnimatedSection direction="up" className="space-y-4">
            <span className="text-eyebrow">A Lived Path</span>
            <h2 className="font-display text-4xl md:text-6xl text-cacaoProfundo font-light tracking-wide">
              THE SHAKTI LOTO APPROACH
            </h2>
          </AnimatedSection>

          <div className="gold-line mx-auto max-w-md my-8" />

          <AnimatedSection direction="up" className="space-y-8 font-display text-xl md:text-3xl text-cacaoProfundo/90 italic font-light leading-relaxed">
            <p>Spirituality is not only something to understand.</p>
            <p>It is something to feel.</p>
            <p>To embody.</p>
            <p>To live.</p>
          </AnimatedSection>

          <AnimatedSection direction="up" className="max-w-2xl mx-auto text-base font-light leading-loose text-parchment/80">
            <p>
              Through Tantra, conscious movement, meditation, Yoga, and ancestral ritual, Shakti Loto invites you to explore spirituality as a lived and embodied experience.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" className="font-display text-2xl md:text-3xl text-lightGold space-y-2 pt-6">
            <p>Here, the body becomes a temple.</p>
            <p>Movement becomes a language.</p>
            <p>Ritual becomes a doorway.</p>
            <p>And the journey becomes a return.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* 07 — THE INVITATION (Closing poem) */}
      <section className="editorial-section px-6 relative z-10 bg-charcoal/30 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <AnimatedSection direction="up" className="space-y-2">
            <span className="text-eyebrow">devotion</span>
            <h2 className="font-display text-3xl md:text-4xl italic text-cacaoProfundo/80">
              You are not here to become someone else.
            </h2>
            <h2 className="font-display text-3xl md:text-5xl text-cacaoProfundo font-light tracking-wider">
              You are here to remember.
            </h2>
          </AnimatedSection>

          <div className="h-px w-16 bg-lightGold/30 mx-auto my-6" />

          <AnimatedSection direction="up" className="font-display text-xl md:text-3xl text-parchment/90 space-y-4 font-light">
            <p className="transition-all duration-300 hover:text-lightGold cursor-default">To listen to the body.</p>
            <p className="transition-all duration-300 hover:text-lightGold cursor-default">To open the heart.</p>
            <p className="transition-all duration-300 hover:text-lightGold cursor-default">To awaken the senses.</p>
            <p className="transition-all duration-300 hover:text-lightGold cursor-default">To reconnect with your inner wisdom.</p>
            <p className="transition-all duration-300 hover:text-lightGold cursor-default">To return to the Source.</p>
            <p className="transition-all duration-300 hover:text-lightGold cursor-default">To blossom from the depths.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* 08 — FINAL CTA */}
      <section className="relative overflow-hidden px-6 py-40 flex flex-col items-center justify-center text-center">
        {/* Subtle background image */}
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src={photos.roseMeditation}
            alt="Final CTA background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-ink/70" />
        
        <AnimatedSection className="relative z-10 mx-auto max-w-4xl space-y-8">
          <SacredIcon type="lotus" className="mx-auto h-12 w-12 text-lightGold/80" />
          <h2 className="font-display text-4xl md:text-6xl text-cacaoProfundo font-light tracking-wider">
            Ready to enter the journey?
          </h2>
          <p className="font-display text-xl text-parchment/80 italic">
            A journey back to the divine within.
          </p>
          <div className="pt-6">
            <Link href="/contact" className="btn-primary">
              ENTER THE JOURNEY →
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

