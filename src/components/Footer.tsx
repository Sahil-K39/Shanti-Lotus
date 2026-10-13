import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { brand, sacredPhrases } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="relative bg-[#3D2C20] border-t-2 border-[#C8A96B]/40 text-[#F8F5F1] pt-20 pb-12 px-6">
      <div className="mx-auto max-w-[1300px]">
        {/* Free Altar / Invitation Callout - Warm Cacao Luxury Style */}
        <div className="relative mb-20 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2E1F16] to-[#1F140D] border-2 border-[#C8A96B]/50 p-10 md:p-16 text-center shadow-2xl">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-[#E2C98F] mb-4">
            A path back to your universal divine essence
          </p>
          <h3 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#FFFFFF] font-normal max-w-4xl mx-auto leading-tight mb-8 drop-shadow-md">
            “Each space is an invitation to return to yourself, to inhabit your body as a temple, and to remember the wisdom that already lives within you.”
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#C8A96B] px-9 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#1A110B] transition-all duration-500 hover:bg-[#FFFFFF] shadow-lg"
            >
              Contact
            </Link>
            <Link
              href="/rituals-sessions"
              className="rounded-full border-2 border-[#FFFFFF] px-9 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#FFFFFF] transition-all duration-500 hover:bg-[#FFFFFF] hover:text-[#1A110B]"
            >
              Explore Sessions
            </Link>
          </div>
        </div>

        {/* Multi-column Information */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_0.8fr] pb-16 border-b border-[#D8C8B6]/30">
          <div>
            <div className="flex items-center gap-3.5 mb-6">
              <BrandLogo compact={true} />
              <div>
                <span className="font-display text-2xl uppercase tracking-[0.2em] text-[#FFFFFF] font-normal">
                  SHAKTI LOTUS
                </span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#E2C98F] font-semibold mt-0.5">
                  South America · Asia
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm font-normal leading-relaxed text-[#F8F5F1] mb-6">
              Tantric Yogini, traveler of this Earth. Serving as a bridge between ancestral roots in South America and the ancient wisdom and traditions of Asia.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] tracking-[0.18em] uppercase text-[#F8F5F1]">
              {sacredPhrases.map((phrase, i) => (
                <span key={i} className="rounded-full border border-[#D8C8B6]/50 px-3.5 py-1.5 bg-[#1F140D]/70 font-medium">
                  {phrase}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#E2C98F] mb-6">Connect</p>
            <div className="space-y-4 text-sm text-[#F8F5F1] font-normal">
              <p>
                Instagram:{" "}
                <a href={brand.contact.instagramUrl} target="_blank" rel="noreferrer" className="text-[#E2C98F] font-semibold hover:underline">
                  {brand.contact.instagram}
                </a>
              </p>
              <p>Email: {brand.contact.email}</p>
              <p>Phone: {brand.contact.phone}</p>
              <p>Website: {brand.contact.website}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#E2C98F] mb-6">Spaces & Pathways</p>
            <div className="grid gap-3.5 text-xs uppercase tracking-[0.18em] text-[#F8F5F1] font-medium">
              <Link href="/about" className="hover:text-[#E2C98F] transition-colors">Namaste, I am Kunti</Link>
              <Link href="/rituals-sessions" className="hover:text-[#E2C98F] transition-colors">Individual Sessions | 1:1 Mentorship</Link>
              <Link href="/work-with-me" className="hover:text-[#E2C98F] transition-colors">Work With Me</Link>
              <Link href="/retreats" className="hover:text-[#E2C98F] transition-colors">Retreats & Courses</Link>
              <Link href="/sacred-jewelry" className="hover:text-[#E2C98F] transition-colors">Sacred Jewelry</Link>
              <Link href="/philosophy" className="hover:text-[#E2C98F] transition-colors">Philosophy</Link>
            </div>
          </div>
        </div>

        {/* Copyright and signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-[#EFE6DB]">
          <p>© {new Date().getFullYear()} SHAKTI LOTUS · ALL RIGHTS RESERVED.</p>
          <p className="text-[#E2C98F] font-serif italic text-base normal-case tracking-normal font-normal">
            “To remember is to return to yourself”
          </p>
        </div>
      </div>
    </footer>
  );
}
