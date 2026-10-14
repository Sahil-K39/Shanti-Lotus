"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SacredIcon from "@/components/SacredIcon";
import {
  brand,
  certifications,
  individualSessions,
  photos,
  sacredPhrases,
  workWithMeSpaces,
} from "@/lib/brand";
import Image from "next/image";
import Link from "next/link";

import mainHeroPhoto from "../../public/images/kunti/sunset-water-blessing.jpg";

export default function Home() {
  return (
    <div className="relative z-0 bg-[#EFE6DB] text-[#261710] selection:bg-[#C8A96B]/40 selection:text-[#1A110B]">
      {/* ═══════════════════════════════════════════
          01 — EDITORIAL HERO (SHAKTI LOTUS)
          Raw, authentic, unedited photography.
          High-contrast typography for 100% visibility.
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen w-full flex items-end justify-center overflow-hidden pb-16 md:pb-24 pt-44">
        {/* Raw unedited photo */}
        <div className="absolute inset-0">
          <Image
            src={mainHeroPhoto}
            alt="Shakti Lotus - Kunti"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-[65%_10%] md:object-[65%_10%]"
          />
        </div>

        {/* Natural gradient at the bottom for crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A110B]/95 via-[#1A110B]/45 to-transparent pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-[#FFFFFF]">
          <AnimatedSection direction="up" className="space-y-4 sm:space-y-6">

            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-[0.16em] font-normal leading-none text-[#FFFFFF] drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
              Shakti Lotus
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#FFFFFF] font-normal drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] tracking-wide">
              A path back to your universal divine essence
            </p>

            {/* Exactly client specified button */}
            <div className="pt-6 sm:pt-8 flex items-center justify-center">
              <a
                href="#spaces"
                className="inline-block rounded-full bg-[#FFFFFF] px-10 py-4 text-xs font-bold uppercase tracking-[0.22em] text-[#261710] transition-all duration-500 hover:bg-[#C8A96B] hover:text-[#1A110B] shadow-2xl hover:scale-105"
              >
                Explore my spaces (photos)
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          02 — SACRED INVOCATION
          Client's exact invocation quote & button
          ═══════════════════════════════════════════ */}
      <section id="invocation" className="bg-[#EFE6DB] py-24 md:py-36 px-6 border-b border-[#C8A96B]/30">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection direction="up" className="space-y-8">
            <SacredIcon type="lotus" className="mx-auto h-9 w-9 text-[#8C6527]" />

            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-[#261710] font-normal leading-[1.6] max-w-3xl mx-auto">
              “I invoke the ancient memory that dwells in our blood.
              <br className="hidden sm:inline" />
              Walking as a bridge between the earth and the spirit.
              <br className="hidden sm:inline" />
              May ancestral wisdom awaken in every heart,
              <br className="hidden sm:inline" />
              and guide the return to the purity of being, to the sacred origin where all is one.”
            </blockquote>

            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="h-px w-16 bg-[#261710]/40" />
              <span className="font-display text-xl uppercase tracking-[0.25em] text-[#261710] font-semibold">
                Kunti
              </span>
              <div className="h-px w-16 bg-[#261710]/40" />
            </div>

            <div className="pt-4 flex items-center justify-center">
              <a
                href="#spaces"
                className="inline-block rounded-full bg-[#261710] px-9 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-[#FFFFFF] transition-all duration-500 hover:bg-[#8C6527] shadow-md hover:scale-105"
              >
                Explore my spaces (photos)
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          03 — NAMASTE, I AM KUNTI (ABOUT KUNTI)
          Follows directly after the invocation as specified
          Crisp white & cream text on warm Cacao Profundo
          ═══════════════════════════════════════════ */}
      <section id="about" className="bg-[#4D382A] text-[#F8F5F1] py-24 md:py-36 px-6 relative overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Arched Portrait Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative mx-auto max-w-md">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[180px] rounded-b-3xl border-2 border-[#D8C8B6] shadow-2xl">
                  <Image
                    src={photos.roseMeditation}
                    alt="Kunti - Tantric Yogini"
                    fill
                    quality={95}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A110B]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-6 inset-x-0 text-center px-4">
                    <p className="font-display text-3xl text-[#FFFFFF] font-normal drop-shadow-md">Kunti</p>
                    <p className="text-xs tracking-[0.3em] uppercase text-[#E2C98F] font-bold drop-shadow-md">Tantric Yogini</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story & Biography Column — Exact Client Words */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] font-normal leading-tight">
                  Namaste, I am Kunti
                </h2>
                <p className="font-display text-2xl md:text-3xl text-[#E2C98F] italic font-normal">
                  Tantric Yogini, traveler of this Earth
                </p>
              </div>

              <div className="h-0.5 w-20 bg-[#C8A96B]" />

              <div className="space-y-4 text-base md:text-[17px] font-normal leading-[1.9] text-[#F8F5F1]">
                <p>
                  I am here as a bridge between my ancestral roots in South America and the ancient wisdom and traditions of Asia.
                </p>
                <p>
                  I come to accompany you on the path of awakening your feminine essence and your creative energy, holding the space for the journey back to the ultimate truth, where the spirit remembers its purity.
                </p>
                <p>
                  My path and spiritual awakening began in Bolivia on December 21, 2012, during the long-awaited{" "}
                  <strong className="font-bold text-[#E2C98F] tracking-wide">PACHAKUTI</strong>. It was there that I received the first codes and the activation of the codes of the new humanity and the golden age that was arriving.
                </p>
                <p>
                  I have traveled the world for over a decade, reconnecting with my being and ancestral knowledge—remembering, offering, and transmitting the path of the Great Mother Goddess.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="rounded-full bg-[#C8A96B] px-9 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#1A110B] transition-all duration-500 hover:bg-[#FFFFFF] shadow-lg"
                >
                  About Kunti
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border-2 border-[#FFFFFF] px-9 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#FFFFFF] transition-all duration-500 hover:bg-[#FFFFFF] hover:text-[#1A110B]"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          04 — INDIVIDUAL SESSIONS | 1:1 MENTORSHIP
          Client's exact heading & 3 offerings
          High-contrast cards, readable description & button
          ═══════════════════════════════════════════ */}
      <section id="sessions" className="bg-[#EFE6DB] py-20 md:py-36 px-6">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection direction="up" className="text-center space-y-4 mb-16 md:mb-24">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#261710] font-normal tracking-wide uppercase">
              Individual Sessions | 1:1 Mentorship
            </h2>
            <div className="h-0.5 w-16 bg-[#8C6527] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {individualSessions.map((session, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#F8F5F1] border-2 border-[#D8C8B6] p-8 sm:p-10 transition-all duration-500 hover:border-[#8C6527] hover:shadow-xl hover:-translate-y-1.5"
              >
                <div className="relative mb-6 h-56 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={session.image}
                    alt={session.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A110B]/85 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 font-display text-2xl font-semibold text-[#FFFFFF] bg-[#1A110B]/70 rounded-xl px-3.5 py-1 backdrop-blur-sm drop-shadow-md">
                    {session.number}
                  </span>
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="font-display text-2xl md:text-3xl font-medium uppercase tracking-wide text-[#261710]">
                    {session.title}
                  </h3>
                  <p className="text-[15px] font-normal leading-relaxed text-[#33231A]">
                    {session.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D8C8B6]">
                  <Link
                    href={session.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#33231A] px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-[#FFFFFF] font-semibold transition-all hover:bg-[#C8A96B] hover:text-[#1A110B] shadow-sm"
                  >
                    <span>{session.cta}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          05 — 4 PHRASES YOU CAN USE THROUGHOUT THE WEBSITE
          Identity Anchors in Blanco Ritual (#F8F5F1) with crisp text
          ═══════════════════════════════════════════ */}
      <section className="bg-[#EFE6DB] py-20 md:py-32 px-6 border-b border-[#C8A96B]/20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#8C6527] font-bold mb-3">
              Phrases That Sustain Our Identity
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#261710] font-normal uppercase tracking-wide">
              Shakti Lotus
            </h2>
            <div className="h-0.5 w-16 bg-[#8C6527] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sacredPhrases.map((phrase, idx) => (
              <div
                key={idx}
                className="rounded-2xl border-2 border-[#D8C8B6] bg-[#F8F5F1] p-8 text-center shadow-sm transition-all duration-500 hover:border-[#8C6527] hover:shadow-md hover:-translate-y-1 flex flex-col items-center justify-center min-h-[160px]"
              >
                <SacredIcon
                  type="lotus"
                  className={`mb-4 h-6 w-6 ${idx % 2 === 0 ? "text-[#8C6527]" : "text-[#4D667D]"}`}
                />
                <p className="font-display text-xl text-[#261710] font-medium leading-snug">
                  “{phrase}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          06 — TRAININGS & CERTIFICATIONS:
          Exact client list with bold highlights & lineage
          ═══════════════════════════════════════════ */}
      <section className="bg-[#EFE6DB] py-20 md:py-32 px-6 border-y border-[#C8A96B]/25">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection direction="up" className="text-center space-y-3 mb-16">
            <h2 className="font-display text-4xl sm:text-5xl text-[#261710] font-normal tracking-wide uppercase">
              TRAININGS & CERTIFICATIONS:
            </h2>
            <div className="h-0.5 w-16 bg-[#8C6527] mx-auto" />
          </AnimatedSection>

          <div className="divide-y-2 divide-[#D8C8B6] border-y-2 border-[#D8C8B6]">
            {certifications.map((item, index) => (
              <div
                key={index}
                className="py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-[#F8F5F1] px-4 rounded-xl"
              >
                <div className="space-y-2 md:max-w-2xl">
                  <h3 className="font-display text-xl sm:text-2xl text-[#261710] font-normal leading-snug">
                    <strong className="font-semibold text-[#8C6527]">{item.highlight}</strong>
                    {item.detail && <span> {item.detail}</span>}
                    {item.institution && (
                      <span className="italic text-[#2C4A63] text-lg sm:text-xl block sm:inline sm:ml-2">
                        ({item.institution})
                      </span>
                    )}
                  </h3>
                </div>

                {item.location && (
                  <div className="md:text-right flex-shrink-0">
                    <span className="inline-block rounded-full border-2 border-[#D8C8B6] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#261710] bg-[#FFFFFF] shadow-sm">
                      {item.location}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          07 — WORK WITH ME
          Exact client heading, intro, 8 offerings & closing sentence
          ═══════════════════════════════════════════ */}
      <section id="spaces" className="bg-[#EFE6DB] py-20 md:py-36 px-6">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection direction="up" className="text-center space-y-4 mb-16 md:mb-20">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#261710] font-normal tracking-wide uppercase">
              WORK WITH ME
            </h2>
            <div className="h-0.5 w-16 bg-[#8C6527] mx-auto" />
            <p className="text-base md:text-lg font-normal text-[#33231A] max-w-3xl mx-auto leading-relaxed">
              {brand.workWithMeIntro}
            </p>
          </AnimatedSection>

          {/* 8 Offerings Grid with Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workWithMeSpaces.map((space, index) => (
              <Link
                key={index}
                href={space.href}
                className="group relative block aspect-[3/4] overflow-hidden rounded-[28px] bg-[#33231A] shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 border border-[#D8C8B6]"
              >
                <Image
                  src={space.image}
                  alt={space.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A110B]/95 via-[#1A110B]/35 to-transparent" />
                <div className="absolute bottom-6 inset-x-6">
                  <h3 className="font-display text-2xl text-[#FFFFFF] font-medium uppercase tracking-wide leading-tight group-hover:text-[#E2C98F] transition-colors drop-shadow-md">
                    {space.name}
                  </h3>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFFFFF]/20 backdrop-blur-md px-3.5 py-1 text-[11px] uppercase tracking-[0.2em] text-[#FFFFFF] font-semibold group-hover:bg-[#C8A96B] group-hover:text-[#1A110B] transition-all">
                    <span>Explore</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Exact Client Closing Sentence */}
          <div className="mt-20 rounded-3xl bg-[#F8F5F1] border-2 border-[#D8C8B6] p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-sm">
            <SacredIcon type="lotus" className="mx-auto mb-4 h-7 w-7 text-[#8C6527]" />
            <p className="font-display text-xl sm:text-2xl text-[#261710] font-normal italic leading-relaxed">
              “{brand.workWithMeClosing}”
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          08 — FINAL PHRASE (CLIENT CLOSING)
          Full-bleed image with strong dark overlay
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] py-28 overflow-hidden flex items-center justify-center">
        <Image
          src={photos.ancestralLineage}
          alt="Shakti Lotus"
          fill
          quality={95}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A110B]/95 via-[#1A110B]/80 to-[#1A110B]/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <AnimatedSection className="space-y-8">
            <blockquote className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#FFFFFF] font-normal leading-relaxed drop-shadow-2xl max-w-3xl mx-auto">
              “Each space is an invitation to return to yourself,
              <br className="hidden sm:inline" />
              to inhabit your body as a temple,
              <br className="hidden sm:inline" />
              and to remember the wisdom that already lives within you.”
            </blockquote>
            <div className="h-0.5 w-16 bg-[#C8A96B] mx-auto" />
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[#C8A96B] px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#1A110B] transition-all duration-500 hover:bg-[#FFFFFF] shadow-2xl hover:scale-105"
              >
                Contact
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
