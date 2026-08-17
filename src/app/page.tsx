"use client";

import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import AuroraBackground from "@/components/AuroraBackground";
import { photos } from "@/lib/brand";
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
            className="object-cover object-[center_top] opacity-30 mix-blend-luminosity filter saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-parchment/30 via-parchment/60 to-parchment pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <AnimatedSection direction="up" className="space-y-6 md:space-y-8">
            <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-[0.15em] text-lightGold uppercase font-light">
              SHAKTI LOTO
            </h1>
            <p className="font-display text-xl md:text-3xl text-parchment max-w-2xl mx-auto italic font-light px-4">
              A journey back to the divine within.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 02 — THE INVITATION */}
      <section className="editorial-section px-6 relative z-10 text-center">
        <div className="mx-auto max-w-4xl space-y-12">
          <AnimatedSection direction="up" className="space-y-8 text-lg md:text-xl font-light leading-loose text-parchment/90">
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
      <section className="px-6 py-20 relative z-10 bg-charcoal/40 text-center border-y border-lightGold/10">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection direction="up">
            <p className="font-display text-lg md:text-2xl tracking-[0.3em] uppercase text-lightGold/80 font-light">
              REMEMBER <span className="mx-4 text-parchment/30">·</span> EMBODY <span className="mx-4 text-parchment/30">·</span> EXPLORE <span className="mx-4 text-parchment/30">·</span> RETURN <span className="mx-4 text-parchment/30">·</span> BLOSSOM
            </p>
          </AnimatedSection>
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
            
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed md:leading-loose text-parchment/90">
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
            
            <div className="pt-6 space-y-6 text-base font-light leading-relaxed text-parchment/90">
              <p>
                The path is a blossoming. Like the lotus rising from deep waters, each process carries the possibility of transformation, awakening, and expansion.
              </p>
              <p className="font-medium text-parchment italic text-xl font-display">
                Not becoming someone else.<br />
                But remembering what has always been there.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 05 — MY APPROACH */}
      <section className="editorial-section px-6 relative z-10 bg-charcoal/40">
        <div className="mx-auto max-w-[1250px] grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <AnimatedSection direction="left" className="space-y-10 sacred-card p-10 md:p-16 border border-lightGold/10">
            <div className="space-y-2">
              <span className="text-eyebrow">The Space Holder</span>
              <h2 className="font-display text-4xl md:text-6xl text-lightGold font-light tracking-wide uppercase">
                MY APPROACH
              </h2>
            </div>

            <blockquote className="space-y-6 text-lg md:text-xl font-light text-parchment">
              <p className="italic text-2xl md:text-3xl font-display text-lightGold">
                “I am not here to guide you from above.”
              </p>
              <p>
                I am here to create a space where you can listen more deeply, explore freely, and encounter your own inner wisdom.
              </p>
              
              <div className="py-4 border-l-2 border-terracotta pl-6 my-8">
                <p className="text-xl md:text-2xl font-display text-parchment italic">
                  I do not believe that you need to become someone else.
                </p>
                <p className="text-xl md:text-2xl font-display text-parchment italic pt-2">
                  I believe there is something within you waiting to be remembered.
                </p>
              </div>

              <p>
                My role is not to give you all the answers, but to offer practices, experiences, and a space where your own questions can unfold.
              </p>
            </blockquote>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <EditorialImage 
              src={photos.gardenPortrait} 
              alt="Kunti holding space" 
              variant="organic-2" 
              withBorder 
              className="aspect-[3/4] w-full max-w-sm mx-auto opacity-85 mix-blend-luminosity filter saturate-50 hover:saturate-100 hover:mix-blend-normal transition-all duration-1000"
              imageClassName="object-[center_top]" 
            />
          </AnimatedSection>
        </div>
      </section>

      {/* 06 — SHAKTI LOTO INVITES YOU TO */}
      <section className="editorial-section px-6 relative z-10">
        <div className="mx-auto max-w-[1250px] space-y-16">
          <AnimatedSection direction="up" className="text-center space-y-2">
            <span className="text-eyebrow">The Invitation</span>
            <h2 className="font-display text-3xl md:text-5xl text-lightGold font-light tracking-widest uppercase">
              SHAKTI LOTO INVITES YOU TO
            </h2>
          </AnimatedSection>
          
          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Reconnect with the Source",
                desc: "and explore the union of Shakti and Shiva — the feminine and masculine principles within."
              },
              {
                title: "Awaken your sensitivity and inner power",
                desc: "through conscious connection with your body and energy."
              },
              {
                title: "Embody your body with presence and love",
                desc: "learning to listen to its language and wisdom."
              },
              {
                title: "Explore spirituality as a lived experience",
                desc: "rather than something separate from everyday life."
              },
              {
                title: "Reconnect with ancestral wisdom",
                desc: "and the memories, rituals, and knowledge carried through generations."
              },
              {
                title: "Move through transformation and expansion",
                desc: "with greater awareness, curiosity, and trust in your own process."
              }
            ].map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 0.1}>
                <div className="space-y-4 group">
                  <div className="h-px w-12 bg-terracotta/40 group-hover:bg-terracotta group-hover:w-24 transition-all duration-700" />
                  <h3 className="font-display text-2xl text-lightGold font-medium leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-base font-light leading-relaxed text-parchment/90">
                    {pillar.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — CLOSING CTA */}
      <section className="relative overflow-hidden px-6 py-40 flex flex-col items-center justify-center text-center border-t border-lightGold/10">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src={photos.roseMeditation}
            alt="Closing background"
            fill
            className="object-cover mix-blend-luminosity"
          />
        </div>
        <div className="absolute inset-0 bg-ink/80" />
        
        <AnimatedSection className="relative z-10 mx-auto max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl text-lightGold font-light tracking-widest uppercase">
              MORE THAN A PROJECT.
            </h2>
            <p className="font-display text-3xl md:text-4xl text-parchment/90 italic">
              A living experience.
            </p>
          </div>

          <div className="gold-line mx-auto max-w-xs my-8" />

          <div className="font-display text-xl md:text-3xl text-parchment/80 space-y-3 font-light italic">
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
            <p className="text-sm tracking-[0.3em] uppercase text-parchment/60 font-light">
              A journey back to the divine within. *
            </p>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

