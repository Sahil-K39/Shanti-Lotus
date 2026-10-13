"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageTrigger from "@/components/LanguageTrigger";
import { useLanguage } from "@/context/LanguageContext";

const desktopLinks = [
  { href: "/about", label: "About Kunti" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/rituals-sessions", label: "Rituals & Sessions" },
  { href: "/retreats", label: "Retreats" },
  { href: "/sacred-jewelry", label: "Jewelry" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/contact", label: "Contact" },
];

const allLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Kunti" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/rituals-sessions", label: "Rituals & Sessions" },
  { href: "/retreats", label: "Retreats & Courses" },
  { href: "/sacred-jewelry", label: "Sacred Jewelry" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { currentLanguage, setIsModalOpen } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          UNIFIED FIXED HEADER: TOP TICKER + MAIN NAV (ZERO OVERLAP)
          Styled with warm Cacao Profundo (#5A4636) & Brand Golds
          ══════════════════════════════════════════════════════════════ */}
      <header className="fixed inset-x-0 top-0 z-50 flex flex-col shadow-lg">
        {/* Top Ticker / Marquee Banner — ALEIA Style */}
        <div className="w-full bg-[#3D2C20] border-b border-[#C8A96B]/30 text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#F8F5F1] py-2.5 overflow-hidden select-none font-medium">
          <div className="flex whitespace-nowrap animate-marquee items-center justify-around">
            <span className="mx-8 font-serif italic normal-case tracking-wider text-[#E2C98F] text-sm">“To remember is to return to yourself”</span>
            <span className="mx-8 text-[#F8F5F1]"><span className="text-[#6F8F7A] font-bold">✦</span> Your body is a portal</span>
            <span className="mx-8 font-serif italic normal-case tracking-wider text-[#E2C98F] text-sm">“The sacred lives within you”</span>
            <span className="mx-8 text-[#F8F5F1]"><span className="text-[#5E9E9B] font-bold">✦</span> Awaken your creative energy</span>
            <span className="mx-8 font-serif italic normal-case tracking-wider text-[#E2C98F] text-sm">“To remember is to return to yourself”</span>
            <span className="mx-8 text-[#F8F5F1]"><span className="text-[#6F8F7A] font-bold">✦</span> Shakti Lotus · South America & Asia</span>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`w-full transition-all duration-500 ${
            scrolled
              ? "bg-[#4D382A]/98 py-2.5 backdrop-blur-xl border-b border-[#C8A96B]/30 shadow-md"
              : "bg-[#4D382A]/95 py-3 backdrop-blur-md border-b border-[#D8C8B6]/25"
          }`}
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-3 sm:gap-6">
              {/* LEFT: Logo & Brand Name */}
              <Link
                href="/"
                onClick={closeMenu}
                className="group flex items-center gap-2.5 sm:gap-3 flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
                aria-label="Shakti Lotus - Home"
              >
                <div className="relative h-11 w-11 sm:h-12 sm:w-12 md:h-13 md:w-13 overflow-hidden rounded-full border border-[#C8A96B]/60 bg-[#3D2C20] shadow-[0_0_15px_rgba(200,169,107,0.3)] flex-shrink-0">
                  <Image
                    src="/shakti-logo-assets/shakti-loto-logo.png"
                    alt="Shakti Lotus"
                    fill
                    priority
                    sizes="52px"
                    className="object-cover p-0.5 rounded-full"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display text-lg sm:text-xl md:text-2xl uppercase tracking-[0.2em] text-[#FFFFFF] font-normal leading-none group-hover:text-[#E2C98F] transition-colors whitespace-nowrap">
                    SHAKTI LOTUS
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#E2C98F] mt-1 font-semibold whitespace-nowrap">
                    South America · Asia
                  </span>
                </div>
              </Link>

              {/* CENTER/RIGHT: Desktop Nav Links (Clean, Single Line, No Wrapping) */}
              <nav
                className="hidden xl:flex items-center gap-4 2xl:gap-6 flex-shrink-0"
                aria-label="Main navigation"
              >
                {desktopLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative py-1 whitespace-nowrap text-[11px] 2xl:text-xs uppercase tracking-[0.16em] font-semibold transition-colors duration-300 ${
                        active
                          ? "text-[#E2C98F]"
                          : "text-[#FFFFFF] hover:text-[#E2C98F]"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-[#C8A96B] transition-transform duration-300 ${
                          active ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* RIGHT: Language Selector & Portal CTA */}
              <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
                <LanguageTrigger />

                <Link
                  href="/contact"
                  className="hidden sm:inline-flex rounded-full bg-[#F8F5F1] px-5 py-2 text-[11px] uppercase tracking-[0.18em] text-[#2E1F16] font-bold transition-all duration-300 hover:bg-[#C8A96B] hover:text-[#1A110B] shadow-md"
                >
                  Portal
                </Link>

                {/* Mobile / Tablet Menu Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen((open) => !open)}
                  className="xl:hidden relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[#EFE6DB]/30 text-[#EFE6DB] hover:border-[#E2C98F] transition-colors"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    className="block h-px w-5 bg-current"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block h-px w-5 bg-current"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    className="block h-px w-5 bg-current"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════
          MOBILE / TABLET FULLSCREEN DRAWER (LUXURY AESTHETIC)
          Warm Cacao Profundo backdrop with gold & sacred sand accents
          ══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#5A4636]/98 px-6 backdrop-blur-2xl xl:hidden"
          >
            <div className="absolute inset-6 border border-[#C8A96B]/25 rounded-3xl pointer-events-none" />

            <nav
              className="relative z-10 flex flex-col items-center gap-4 text-center max-h-[85vh] w-full overflow-y-auto py-8"
              aria-label="Mobile navigation"
            >
              <div className="relative h-16 w-16 mb-2 overflow-hidden rounded-full border border-[#C8A96B]/50 bg-[#4A3828] shadow-[0_0_20px_rgba(200,169,107,0.3)]">
                <Image
                  src="/shakti-logo-assets/shakti-loto-logo.png"
                  alt="Shakti Lotus"
                  fill
                  sizes="64px"
                  className="object-cover p-1 rounded-full"
                />
              </div>

              <div className="mb-4">
                <span className="font-display text-2xl uppercase tracking-[0.2em] text-[#FFFFFF] font-medium">
                  SHAKTI LOTUS
                </span>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#E2C98F] font-semibold mt-1">
                  South America · Asia
                </p>
              </div>

              <div className="h-px w-16 bg-[#C8A96B]/40 mb-3" />

              {allLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.03 * index, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`font-display text-xl uppercase tracking-[0.18em] transition-colors duration-300 ${
                      pathname === link.href ? "text-[#E2C98F]" : "text-[#EFE6DB]/90 hover:text-[#E2C98F]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.03 * allLinks.length, duration: 0.3 }}
                className="mt-4 flex flex-col items-center gap-3 w-full max-w-xs"
              >
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    setIsModalOpen(true);
                  }}
                  className="w-full rounded-full border border-[#C8A96B]/40 py-2.5 text-[10px] uppercase tracking-[0.25em] text-[#EFE6DB] hover:border-[#E2C98F] transition-colors"
                >
                  Language: <span className="text-[#E2C98F] font-medium">{currentLanguage.name}</span>
                </button>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="w-full rounded-full bg-[#C8A96B] py-3 text-xs uppercase tracking-[0.25em] text-[#5A4636] font-semibold hover:bg-[#F8F5F1] transition-colors text-center shadow-lg"
                >
                  Contact
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
