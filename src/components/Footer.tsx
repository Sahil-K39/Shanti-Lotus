import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { brand } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="relative border-t border-lightGold/15 bg-ink px-6 py-20 text-ivory">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lightGold/70 to-transparent" />
      <div className="mx-auto grid max-w-[1300px] gap-14 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div className="sacred-card p-8 md:p-10">
          <BrandLogo />
          <h2 className="mt-6 font-display text-4xl leading-tight text-ivory">
            Kunti <span className="gold-text">Shakti Loto</span>
          </h2>
          <p className="mt-5 max-w-lg font-body text-sm font-light leading-loose text-parchment/78">
            Each space is an invitation to return to yourself, to inhabit your body as a temple, and to remember the wisdom that already lives within you.
          </p>
          <div className="mt-8 flex gap-2">
            <span className="moon-phase crescent" />
            <span className="moon-phase half" />
            <span className="moon-phase full" />
            <span className="moon-phase half" />
            <span className="moon-phase crescent" />
          </div>
        </div>

        <div>
          <p className="text-eyebrow">Contact</p>
          <div className="mt-8 space-y-5 text-sm text-parchment/78">
            <p>
              Instagram:{" "}
              <a href={brand.contact.instagramUrl} target="_blank" rel="noreferrer" className="text-lightGold hover:text-ivory">
                {brand.contact.instagram}
              </a>
            </p>
            <p>Email: {brand.contact.email}</p>
            <p>Phone: {brand.contact.phone}</p>
            <p>Website: {brand.contact.website}</p>
          </div>
          <Link
            href="/contact"
            className="mt-9 inline-flex border border-lightGold/45 px-7 py-4 text-[10px] uppercase tracking-[0.25em] text-lightGold transition-all duration-500 hover:bg-lightGold hover:text-ink"
          >
            Contact
          </Link>
        </div>

        <div>
          <p className="text-eyebrow">Explore</p>
          <div className="mt-8 grid gap-4 text-[11px] uppercase tracking-[0.18em] text-parchment/68">
            <Link href="/about" className="hover:text-lightGold">About Kunti</Link>
            <Link href="/work-with-me" className="hover:text-lightGold">Work With Me</Link>
            <Link href="/rituals-sessions" className="hover:text-lightGold">Rituals & Sessions</Link>
            <Link href="/retreats" className="hover:text-lightGold">Retreats & Courses</Link>
            <Link href="/sacred-jewelry" className="hover:text-lightGold">Sacred Jewelry</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1300px] flex-col gap-3 border-t border-lightGold/10 pt-8 text-[10px] uppercase tracking-[0.22em] text-parchment/45 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Shakti Loto. All rights reserved.</p>
        <p>The sacred lives within you.</p>
      </div>
    </footer>
  );
}
