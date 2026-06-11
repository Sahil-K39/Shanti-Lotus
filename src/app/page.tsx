"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import BrandLogo from "@/components/BrandLogo";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { brand, certifications, images, offerings, poeticPhrases, services } from "@/lib/brand";

const icons = ["leaf", "alchemy", "moon", "flame", "ritual", "lotus", "star", "eye"] as const;

function MoonPhases() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="moon-phase crescent" />
      <span className="moon-phase half" />
      <span className="moon-phase full" />
      <span className="moon-phase half" />
      <span className="moon-phase crescent" />
    </div>
  );
}

function GoldDivider() {
  return (
    <div className="mx-auto flex w-full max-w-xs items-center gap-3 text-lightGold/75" aria-hidden="true">
      <span className="h-px flex-1 bg-lightGold/45" />
      <span className="h-1 w-1 rounded-full bg-current" />
      <span className="moon-phase crescent scale-75" />
      <span className="h-1 w-1 rounded-full bg-current" />
      <span className="h-px flex-1 bg-lightGold/45" />
    </div>
  );
}

function ReferenceHeroCard() {
  return (
    <div className="sacred-glow mx-auto w-full max-w-[520px] border border-lightGold/35 bg-ink">
      <div className="relative h-[430px] overflow-hidden md:h-[500px]">
        <EditorialImage
          src={images.hero}
          alt="Kunti Shakti Loto water ritual image from the provided card"
          variant="sharp"
          imageClassName="h-full object-cover brightness-[0.82] saturate-[0.95]"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/95" />
      </div>
      <div className="px-8 pb-10 pt-4 text-center">
        <h1 className="font-display text-4xl uppercase leading-none tracking-[0.08em] text-lightGold md:text-5xl">
          Kunti Shakti Loto
        </h1>
        <GoldDivider />
        <p className="mt-4 text-sm uppercase tracking-[0.24em] text-ivory md:text-base">{brand.role}</p>
        <p className="mt-5 text-sm uppercase leading-relaxed tracking-[0.16em] text-ivory">
          Tantric Yogini <span className="text-lightGold">•</span> Herbal Alchemist <br />
          Plant Medicine Guide
        </p>
        <GoldDivider />
        <p className="mt-6 font-display text-2xl italic leading-tight text-lightGold/85">
          A sacred return <br /> to your divine essence.
        </p>
      </div>
    </div>
  );
}

function BackCardPanel() {
  const primaryServices = services.slice(0, 5);

  return (
    <div className="sacred-glow mx-auto max-w-[760px] border border-lightGold/28 bg-[#0b0b0a] px-7 py-9 md:px-10 md:py-12">
      <div className="text-center">
        <BrandLogo className="justify-center" />
        <p className="mx-auto mt-6 max-w-sm text-sm uppercase leading-relaxed tracking-[0.14em] text-lightGold/85">
          Bridging ancient plant wisdom, alchemy and spirit to awaken the divine within.
        </p>
        <GoldDivider />
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto_1fr]">
        <div className="space-y-6">
          {primaryServices.map((service, index) => (
            <div key={service.title} className="flex items-center gap-4">
              <SacredIcon type={icons[index]} className="h-9 w-9 flex-none text-lightGold/80" />
              <p className="text-xs uppercase leading-snug tracking-[0.1em] text-ivory">{service.title}</p>
            </div>
          ))}
        </div>

        <div className="hidden w-px bg-lightGold/45 md:block" />

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.15em] text-lightGold">Jewelry of the Soul</p>
          <div className="mx-auto mt-4 grid h-24 w-24 place-items-center rounded-full border border-lightGold/35">
            <SacredIcon type="star" className="h-16 w-16 text-lightGold" />
          </div>
          <p className="mx-auto mt-5 max-w-[15rem] text-sm leading-relaxed text-ivory/86">
            sacred & ritual jewelry infused with intention, devotion and spirit.
          </p>
          <div className="mx-auto my-5 h-1 w-1 rounded-full bg-lightGold" />
          <p className="text-sm uppercase leading-relaxed tracking-[0.12em] text-lightGold">Eco Conscious Clothing Brand</p>
          <p className="mx-auto mt-3 max-w-[15rem] text-sm leading-relaxed text-ivory/86">
            conscious designs created with love from the earth to your soul.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 border-t border-lightGold/35 pt-7 md:grid-cols-[0.8fr_1.2fr]">
        <div className="grid aspect-square place-items-center border border-lightGold/30 bg-ivory p-4 text-center text-ink">
          <SacredIcon type="lotus" className="h-12 w-12 text-gold" />
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em]">@kunti_shaktiloto</p>
          <div className="mt-3 grid grid-cols-5 gap-1" aria-hidden="true">
            {Array.from({ length: 25 }).map((_, index) => (
              <span key={index} className={`h-1.5 w-1.5 ${index % 3 === 0 ? "bg-ink" : "bg-mutedGold/45"}`} />
            ))}
          </div>
        </div>
        <div className="space-y-3 text-sm text-ivory/85">
          <p>Instagram: {brand.contact.instagram}</p>
          <p>Email: {brand.contact.email}</p>
          <p>Phone: {brand.contact.phone}</p>
          <p>Website: {brand.contact.website}</p>
        </div>
      </div>

      <div className="mt-6 border border-lightGold/45 px-5 py-4 text-center">
        <p className="text-sm uppercase tracking-[0.17em] text-lightGold">Ayurveda Health Coach</p>
        <p className="mt-2 text-xs text-parchment/82">Guiding you to balance body, mind and spirit through ancient Ayurvedic wisdom.</p>
      </div>
    </div>
  );
}

function BrandCardLanguage() {
  return (
    <div className="sacred-glow border border-lightGold/24 bg-[#0b0b0a] p-5 md:p-7">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="border border-lightGold/25 bg-ink px-7 py-10 text-center">
          <MoonPhases />
          <BrandLogo className="mt-8 justify-center" />
          <h3 className="mt-8 font-display text-4xl uppercase leading-none tracking-[0.1em] text-lightGold md:text-5xl">
            Kunti Shakti Loto
          </h3>
          <GoldDivider />
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-ivory">{brand.role}</p>
          <p className="mt-5 text-xs uppercase leading-relaxed tracking-[0.16em] text-parchment">
            Tantric Yogini <span className="text-lightGold">•</span> Herbal Alchemist <br />
            Plant Medicine Guide
          </p>
          <GoldDivider />
          <p className="mt-7 font-display text-2xl italic leading-tight text-lightGold/85">
            A sacred return <br /> to your divine essence.
          </p>
        </div>

        <div className="border border-lightGold/25 bg-ink px-7 py-10">
          <div className="text-center">
            <BrandLogo className="justify-center" />
            <p className="mx-auto mt-6 max-w-xs text-xs uppercase leading-relaxed tracking-[0.15em] text-lightGold/90">
              Bridging ancient plant wisdom, alchemy and spirit to awaken the divine within.
            </p>
            <GoldDivider />
          </div>
          <div className="mt-8 space-y-5">
            {services.slice(0, 5).map((service, index) => (
              <div key={service.title} className="flex items-center gap-4">
                <SacredIcon type={icons[index]} className="h-9 w-9 flex-none text-lightGold/85" />
                <p className="text-xs uppercase leading-snug tracking-[0.12em] text-ivory">{service.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 border-t border-lightGold/25 pt-7 text-center">
            <p className="text-sm uppercase tracking-[0.16em] text-lightGold">Jewelry of the Soul</p>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-parchment/82">
              sacred & ritual jewelry infused with intention, devotion and spirit.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.16em] text-lightGold">Eco Conscious Clothing Brand</p>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-parchment/82">
              conscious designs created with love from the earth to your soul.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center justify-between gap-4 border-t border-lightGold/18 pt-5 text-center md:flex-row md:text-left">
        <p className="text-xs uppercase leading-relaxed tracking-[0.18em] text-parchment/72">
          Text, lotus marks, moon phases, sacred icons, and gold dividers translated from the original Shakti Loto card.
        </p>
        <a
          href={brand.contact.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="border border-lightGold/40 px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-lightGold transition-all duration-500 hover:bg-lightGold hover:text-ink"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

function PoeticDivider({ text }: { text: string }) {
  return (
    <section className="px-6 py-20">
      <AnimatedSection className="mx-auto max-w-5xl text-center">
        <MoonPhases />
        <div className="gold-line mx-auto my-8 max-w-2xl" />
        <p className="font-display text-3xl leading-tight text-ivory md:text-5xl">
          <span className="gold-text">{text}</span>
        </p>
      </AnimatedSection>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-ink text-ivory">
      <section className="relative min-h-screen overflow-hidden px-6 py-24 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(214,168,90,0.18),transparent_32rem)]" />
        <div className="absolute left-1/2 top-24 h-[78vw] max-h-[760px] w-[78vw] max-w-[760px] -translate-x-1/2 rounded-full border border-lightGold/10 opacity-60" />
        <div className="absolute left-1/2 top-36 h-[58vw] max-h-[560px] w-[58vw] max-w-[560px] -translate-x-1/2 rounded-full border border-lightGold/10 opacity-60" />

        <div className="relative z-10 mx-auto grid min-h-[78vh] max-w-[1320px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection direction="left">
            <ReferenceHeroCard />
          </AnimatedSection>

          <AnimatedSection className="text-center lg:text-left" direction="right">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <MoonPhases />
              <p className="mt-10 text-eyebrow">Bridging ancient plant wisdom, alchemy and spirit</p>
              <h2 className="mt-7 font-display text-5xl leading-[0.96] text-ivory md:text-7xl xl:text-8xl">
                A sacred return to your <span className="gold-text">divine essence</span>
              </h2>
              <p className="mt-8 font-display text-3xl text-lightGold md:text-4xl">Kunti Shakti Loto</p>
              <p className="mt-6 text-sm uppercase leading-relaxed tracking-[0.18em] text-parchment/82">
                Multidisciplinary Artist <span className="text-lightGold">•</span> Tantric Yogini <span className="text-lightGold">•</span> Herbal Alchemist <span className="text-lightGold">•</span> Plant Medicine Guide
              </p>
              <p className="mt-8 max-w-xl text-base font-light leading-loose text-parchment/82 lg:mx-0">
                Enter a handcrafted sanctuary of ritual, feminine remembrance, plant wisdom, tantra, and embodied spiritual guidance.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <Link
                  href="/work-with-me"
                  className="sacred-glow border border-lightGold/50 bg-lightGold px-8 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-ink transition-all duration-500 hover:bg-ivory"
                >
                  Explore My Spaces
                </Link>
                <Link
                  href="/about"
                  className="border border-lightGold/30 px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-lightGold transition-all duration-500 hover:bg-lightGold hover:text-ink"
                >
                  Meet Kunti
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <AnimatedSection className="text-center lg:text-left" direction="left">
            <SacredIcon type="lotus" className="mx-auto h-14 w-14 text-lightGold lg:mx-0" />
            <p className="mt-8 text-eyebrow">Reference Card Language</p>
            <h2 className="mt-5 font-display text-5xl leading-tight text-ivory md:text-7xl">
              Gold-on-dark spaces for <span className="gold-text">ritual work</span>
            </h2>
            <p className="mt-8 max-w-xl text-base font-light leading-loose text-parchment/80 lg:mx-0">
              Plant medicine, alchemy, tantra, sacred adornment, and earth-conscious creation are held together as one elegant spiritual ecosystem.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <BrandCardLanguage />
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 py-16">
        <AnimatedSection className="mx-auto max-w-4xl">
          <BackCardPanel />
        </AnimatedSection>
      </section>

      <section className="px-6 py-28">
        <AnimatedSection className="mx-auto max-w-5xl text-center">
          <p className="text-eyebrow">Shakti Loto</p>
          <h2 className="mt-5 font-display text-4xl text-ivory md:text-6xl">
            A path back to your <span className="gold-text">universal divine essence</span>
          </h2>
          <div className="gold-line mx-auto my-12 max-w-xl" />
          <blockquote className="font-display text-2xl leading-[1.45] text-parchment md:text-4xl">
            &ldquo;I invoke the ancient memory that lives within our blood.
            Walking as a bridge between the Earth and the Spirit.
            May ancestral wisdom awaken in every heart,
            and guide the return to the purity of being,
            to the sacred origin where all is one.&rdquo;
          </blockquote>
        </AnimatedSection>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <AnimatedSection direction="left">
            <EditorialImage src={images.devi} alt="Kunti Shakti Loto water ritual image from the provided card" variant="organic-1" withBorder className="aspect-[4/5] w-full" />
          </AnimatedSection>
          <AnimatedSection direction="right" className="sacred-card p-8 md:p-12">
            <p className="text-eyebrow">About</p>
            <h2 className="mt-5 font-display text-4xl text-ivory md:text-6xl">Namaste, I am <span className="gold-text">Kunti</span></h2>
            <div className="mt-8 space-y-5 text-base font-light leading-loose text-parchment/82">
              <p>A Tantric Yogini and traveler of this Earth. I am here as a bridge between my ancestral roots of South America and the ancient wisdom and traditions of Asia.</p>
              <p>I come to accompany you on the path of awakening your feminine essence and creative energy, holding space for the journey back to the ultimate truth, where the spirit remembers its purity.</p>
              <p>My spiritual path and awakening began in Bolivia on December 21, 2012, during the awaited Pachakuti. It was there that I received the first codes and activation of the codes of the new humanity and the golden time that was arriving.</p>
              <p>For more than a decade, I have traveled the world reconnecting with my being and ancestral wisdom, remembering, offering, and transmitting the path of the Great Mother Goddess.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <PoeticDivider text={poeticPhrases[0]} />

      <section className="px-6 py-28">
        <div className="mx-auto max-w-[1350px]">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="text-eyebrow">Sacred Spaces</p>
            <h2 className="mt-5 font-display text-5xl text-ivory md:text-7xl">Services</h2>
          </AnimatedSection>
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.04}>
                <div className="sacred-card group h-full p-7 transition-all duration-500 hover:-translate-y-1 hover:border-lightGold/50">
                  <SacredIcon type={icons[index]} className="h-12 w-12 text-lightGold transition-transform duration-700 group-hover:scale-110" />
                  <h3 className="mt-8 font-display text-3xl leading-tight text-ivory">{service.title}</h3>
                  <p className="mt-5 text-sm font-light leading-loose text-parchment/72">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-[1250px] gap-6 md:grid-cols-3">
          {[
            ["Individual Sessions — 1:1 Guidance", "Deep guidance to reconnect with your energy, release blockages, and return to your center."],
            ["Ritual & Feminine Energy", "Spaces to activate your creative energy, heal your relationship with the feminine, and inhabit your body with presence."],
            ["Spiritual Integration", "Practices and guidance to expand your consciousness and root your spirituality into everyday life."],
          ].map(([title, text], index) => (
            <AnimatedSection key={title} delay={index * 0.08}>
              <div className="sacred-card h-full p-8">
                <span className="font-display text-5xl text-lightGold/50">0{index + 1}</span>
                <h3 className="mt-8 font-display text-3xl leading-tight text-ivory">{title}</h3>
                <p className="mt-5 text-sm font-light leading-loose text-parchment/75">{text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <PoeticDivider text={poeticPhrases[1]} />

      <section className="px-6 py-28">
        <div className="mx-auto max-w-[1180px]">
          <AnimatedSection className="text-center">
            <p className="text-eyebrow">Trainings & Certifications</p>
            <h2 className="mt-5 font-display text-5xl text-ivory md:text-7xl">Lineage & Study</h2>
          </AnimatedSection>
          <div className="relative mt-16 space-y-6 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-lightGold/25 md:before:left-1/2">
            {certifications.map((item, index) => (
              <AnimatedSection key={item.place} delay={index * 0.06}>
                <div className={`relative grid gap-6 md:grid-cols-2 ${index % 2 ? "" : "md:text-right"}`}>
                  <div className={index % 2 ? "md:col-start-2" : ""}>
                    <div className="sacred-card relative ml-12 p-7 md:ml-0">
                      <span className="absolute -left-[3.25rem] top-8 grid h-8 w-8 place-items-center rounded-full border border-lightGold/50 bg-ink text-[10px] text-lightGold md:left-auto md:right-[-1.05rem]">
                        {index + 1}
                      </span>
                      <h3 className="font-display text-2xl leading-tight text-ivory">{item.title}</h3>
                      <p className="mt-4 text-eyebrow">{item.place}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-[1300px] gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <AnimatedSection>
            <p className="text-eyebrow">Work With Me</p>
            <h2 className="mt-5 font-display text-5xl text-ivory md:text-7xl">Spaces to <span className="gold-text">Remember</span></h2>
            <p className="mt-8 max-w-xl text-base font-light leading-loose text-parchment/80">
              Spaces to remember, heal, and awaken your creative energy through the union of mind, body, and soul, so we may awaken our consciousness and liberate the spirit.
            </p>
            <p className="mt-6 max-w-xl text-base font-light leading-loose text-parchment/80">
              I accompany you in awakening your creative energy and reconnecting with your inner wisdom through the path of self-exploration and self-knowledge.
            </p>
            <Link href="/work-with-me" className="mt-10 inline-flex border border-lightGold/45 px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-lightGold hover:bg-lightGold hover:text-ink">
              Explore Offerings
            </Link>
          </AnimatedSection>
          <div className="grid gap-4 sm:grid-cols-2">
            {offerings.map((offering, index) => (
              <AnimatedSection key={offering} delay={index * 0.04}>
                <div className="border border-lightGold/18 bg-charcoal/62 p-5 text-sm uppercase tracking-[0.16em] text-parchment/82 transition-colors duration-500 hover:border-lightGold/50 hover:text-lightGold">
                  {offering}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <PoeticDivider text={poeticPhrases[4]} />

      <section className="relative overflow-hidden px-6 py-32">
        <div className="absolute inset-0 opacity-35">
          <EditorialImage src={images.atmosphere} alt="Back side artwork from the provided Shakti Loto card" variant="sharp" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/82 to-ink/55" />
        <AnimatedSection className="relative z-10 mx-auto max-w-4xl text-center">
          <SacredIcon type="lotus" className="mx-auto h-16 w-16 text-lightGold" />
          <p className="mt-10 font-display text-4xl leading-tight text-ivory md:text-6xl">
            Each space is an invitation to return to yourself,
            to inhabit your body as a temple,
            and to remember the wisdom that already lives within you.
          </p>
          <Link href="/contact" className="sacred-glow mt-12 inline-flex bg-lightGold px-9 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-ink hover:bg-ivory">
            Begin the Conversation
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
