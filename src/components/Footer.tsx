import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { brand } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 bg-parchment px-6 py-20 text-ink">
      <div className="mx-auto grid max-w-[1300px] gap-14 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div className="p-8 md:p-10">
          <BrandLogo />
          <h2 className="mt-6 font-display text-4xl leading-tight text-ink">
            Kunti <span className="text-lightGold">Shakti Loto</span>
          </h2>
          <p className="mt-5 max-w-lg font-body text-sm font-light leading-loose text-ink/60">
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
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-ink/50">Contact</p>
          <div className="mt-8 space-y-5 text-sm text-ink/70">
            <p>
              Instagram:{" "}
              <a href={brand.contact.instagramUrl} target="_blank" rel="noreferrer" className="text-ink hover:text-lightGold">
                {brand.contact.instagram}
              </a>
            </p>
            <p>Email: {brand.contact.email}</p>
            <p>Phone: {brand.contact.phone}</p>
            <p>Website: {brand.contact.website}</p>
          </div>
          <Link
            href="/contact"
            className="mt-9 inline-flex border border-ink/20 px-7 py-4 text-[10px] uppercase tracking-[0.25em] text-ink transition-all duration-500 hover:bg-ink hover:text-parchment"
          >
            Contact
          </Link>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-ink/50">Explore</p>
          <div className="mt-8 grid gap-4 text-[11px] uppercase tracking-[0.18em] text-ink/60">
            <Link href="/about" className="hover:text-ink">About Kunti</Link>
            <Link href="/work-with-me" className="hover:text-ink">Work With Me</Link>
            <Link href="/rituals-sessions" className="hover:text-ink">Rituals & Sessions</Link>
            <Link href="/retreats" className="hover:text-ink">Retreats & Courses</Link>
            <Link href="/sacred-jewelry" className="hover:text-ink">Sacred Jewelry</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1300px] flex-col gap-3 border-t border-ink/10 pt-8 text-[10px] uppercase tracking-[0.22em] text-ink/40 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Shakti Loto. All rights reserved.</p>
        <p>The sacred lives within you.</p>
      </div>
    </footer>
  );
}
