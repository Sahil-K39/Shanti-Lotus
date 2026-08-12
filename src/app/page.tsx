"use client";

import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import AuroraBackground from "@/components/AuroraBackground";
import { photos } from "@/lib/brand";
import MasonryGallery from "@/components/MasonryGallery";
import { galleryImages } from "@/lib/gallery";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-ivory relative z-0">
      <AuroraBackground />
      
      {/* 1. HERO */}
      <section className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 md:py-28 flex flex-col items-center justify-center">
        <div className="absolute left-1/2 top-1/2 h-[78vw] max-h-[760px] w-[78vw] max-w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-lightGold/10 opacity-60" />
        
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <AnimatedSection direction="up">
            <h2 className="font-display text-5xl leading-[1.02] text-lightGold sm:text-6xl md:text-8xl">
              SHAKTI LOTO
            </h2>
            <p className="mt-7 text-sm font-display text-2xl text-ivory">
              A journey back to the divine within.
            </p>
            <div className="mx-auto mt-12 space-y-6 max-w-3xl text-base font-light leading-relaxed text-parchment/82 md:text-lg md:leading-loose">
              <p>Shakti Loto is a space for deep reconnection with the life force — a living portal into the sacred that already exists within you.</p>
              <p>A place where ancestral wisdom, embodied practice, and the divine meet to awaken a deeper awareness of the body, the heart, and the spirit.</p>
              <p>It is an invitation to return to the Source — to the origin of who you are beneath the layers, beyond the forms, and closer to your essence.</p>
              <p>Through a journey of self-exploration and self-discovery, I invite you to awaken your creative energy, reconnect with your inner wisdom, and cultivate a deeper relationship with yourself.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. THE JOURNEY */}
      <section className="relative z-10 px-6 py-28">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <AnimatedSection direction="left">
            <EditorialImage src={photos.mainPhoto} alt="Kunti water ritual" variant="organic-1" withBorder className="aspect-[4/5] w-full" />
          </AnimatedSection>
          <AnimatedSection direction="right" className="sacred-card p-8 md:p-12">
            <h2 className="font-display text-4xl text-lightGold md:text-5xl tracking-widest">THE JOURNEY</h2>
            <div className="mt-8 space-y-5 text-base font-light leading-loose text-parchment/82">
              <p>Guided by Kunti, Tantric Yogini, traveler, and lifelong student of the sacred, Shakti Loto was born as a bridge between the ancestral wisdom of Latin America and the teachings, experiences, and encounters gathered across the world.</p>
              <p>Through Tantra, conscious movement, meditation, Yoga, and ancestral ritual, Shakti Loto invites you to experience spirituality not only as something to understand, but as something to feel, embody, and live.</p>
              <p>Here, the body becomes a temple.<br />Movement becomes a language.<br />Ritual becomes a doorway.<br />And the journey becomes a return.</p>
              <p>The path is a blossoming.<br />Like the lotus rising from deep waters, each process carries the possibility of transformation, awakening, and expansion.<br />Not becoming someone else.<br />But remembering what has always been there.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. MY APPROACH (Manifesto) */}
      <section className="relative z-10 px-6 py-28">
        <AnimatedSection className="mx-auto max-w-4xl text-center glass-panel p-8 md:p-12">
          <h2 className="font-display text-4xl text-lightGold md:text-5xl tracking-widest">
            MY APPROACH
          </h2>
          <div className="gold-line mx-auto my-12 max-w-xl" />
          <blockquote className="space-y-6 font-display text-2xl leading-[1.45] text-parchment md:text-4xl">
            <p>I am not here to guide you from above.</p>
            <p>I am here to create a space where you can listen more deeply, explore freely, and encounter your own inner wisdom.</p>
            <p>I do not believe that you need to become someone else.</p>
            <p>I believe there is something within you waiting to be remembered.</p>
            <p>My role is not to give you all the answers, but to offer practices, experiences, and a space where your own questions can unfold.</p>
          </blockquote>
        </AnimatedSection>
      </section>

      {/* 4. SHAKTI LOTO INVITES YOU TO */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-[1250px]">
          <AnimatedSection className="mb-20 text-center">
            <h2 className="font-display text-4xl text-lightGold md:text-5xl tracking-widest">SHAKTI LOTO INVITES YOU TO</h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Reconnect with the Source", "and explore the union of Shakti and Shiva — the feminine and masculine principles within."],
              ["Awaken your sensitivity and inner power", "through conscious connection with your body and energy."],
              ["Embody your body with presence and love", "learning to listen to its language and wisdom."],
              ["Explore spirituality as a lived experience", "rather than something separate from everyday life."],
              ["Reconnect with ancestral wisdom", "and the memories, rituals, and knowledge carried through generations."],
              ["Move through transformation and expansion", "with greater awareness, curiosity, and trust in your own process."],
            ].map(([title, text], index) => (
              <AnimatedSection key={title} delay={index * 0.08}>
                <div className="sacred-card flex h-full min-h-[300px] flex-col items-center justify-center p-10 text-center transition-all duration-500 hover:-translate-y-1 hover:border-lightGold/50 group relative overflow-hidden">
                  {galleryImages[index] && (
                    <Image src={galleryImages[index]} alt={title} fill className="object-cover opacity-10 transition-opacity duration-700 group-hover:opacity-30" />
                  )}
                  <div className="absolute inset-0 bg-ink/40 pointer-events-none" />
                  <div className="relative z-10 pointer-events-none">
                    <h3 className="font-display text-3xl leading-tight text-ivory">{title}</h3>
                    <p className="mt-5 text-sm font-light leading-relaxed text-parchment/80">{text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 SACRED GALLERY */}
      <MasonryGallery />

      {/* 5. OUTRO */}
      <section className="relative overflow-hidden px-6 py-40">
        <div className="absolute inset-0 opacity-50">
          <EditorialImage src={photos.mainPhoto} alt="Kunti water ritual" variant="sharp" imageClassName="h-full object-cover" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-ink/40" />
        <AnimatedSection className="relative z-10 mx-auto max-w-4xl text-center glass-panel p-8 md:p-12 mt-20">
          <SacredIcon type="lotus" className="mx-auto h-16 w-16 text-lightGold" />
          <p className="mt-10 font-display text-3xl tracking-widest text-lightGold">MORE THAN A PROJECT.</p>
          <div className="mt-8 space-y-2 font-display text-3xl leading-snug text-ivory md:text-5xl">
            <p>A living experience.</p>
            <p>A call to return to the Source.</p>
            <p>To listen to the body.</p>
            <p>To open the heart.</p>
            <p>To awaken the senses.</p>
            <p>To remember the wisdom within.</p>
            <p>To bloom from the depths.</p>
            <p>To remember who you are, beyond the forms.</p>
          </div>
          <div className="mt-20">
            <h3 className="font-display text-5xl text-lightGold md:text-6xl">Shakti Loto</h3>
            <p className="mt-4 text-xl font-display text-parchment">A journey back to the divine within. *</p>
          </div>
          <div className="mt-24 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-lightGold">
              REMEMBER · EMBODY · EXPLORE · RETURN · BLOSSOM
            </p>
            <p className="font-display text-2xl text-ivory">I do not believe that you need to become someone else.</p>
            <p className="font-display text-2xl text-ivory">I believe there is something within you waiting to be remembered.</p>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
