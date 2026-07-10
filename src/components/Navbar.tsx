"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import LanguageTrigger from "@/components/LanguageTrigger";

// Curated primary links for clean desktop display
const desktopLinks = [
  { href: "/about", label: "About Kunti" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/rituals-sessions", label: "Rituals" },
  { href: "/retreats", label: "Retreats" },
  { href: "/sacred-jewelry", label: "Jewelry" },
  { href: "/philosophy", label: "Philosophy" },
];

// Full links for overlay mobile/tablet menu
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
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
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-lightGold/20 bg-ink/95 py-2.5 backdrop-blur-xl shadow-altar"
            : "bg-gradient-to-b from-ink/80 via-ink/40 to-transparent py-4"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
          aria-label="Main navigation"
        >
          {/* Brand Logo - compact proportion */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center transition-transform duration-500 hover:scale-[1.02]"
            aria-label="Shakti Loto - Home"
          >
            <BrandLogo compact={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {desktopLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1.5 text-[10px] xl:text-[11px] uppercase tracking-[0.22em] font-medium transition-colors duration-400 ${
                    active
                      ? "text-lightGold"
                      : "text-parchment/80 hover:text-lightGold"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-px w-full origin-left bg-lightGold transition-transform duration-400 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Actions: Language Selector + CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <LanguageTrigger />
            <Link
              href="/contact"
              className="border border-lightGold/45 px-5 py-2 text-[10px] uppercase tracking-[0.25em] text-lightGold transition-all duration-500 hover:border-lightGold hover:bg-lightGold hover:text-ink"
            >
              Begin
            </Link>
          </div>

          {/* Mobile / Tablet Controls */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <LanguageTrigger />
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-lightGold/30 text-lightGold hover:border-lightGold transition-colors"
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
        </nav>
      </motion.header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-ink/96 px-6 backdrop-blur-2xl lg:hidden"
          >
            <div className="absolute inset-6 border border-lightGold/15 pointer-events-none" />
            <nav
              className="relative z-10 flex flex-col items-center gap-5 text-center max-h-[80vh] overflow-y-auto py-6"
              aria-label="Mobile navigation"
            >
              <div className="mb-2 text-lightGold">
                <BrandLogo compact={false} />
              </div>

              {allLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`font-display text-2xl sm:text-3xl uppercase tracking-[0.14em] transition-colors duration-300 ${
                      pathname === link.href ? "text-lightGold" : "text-ivory/90 hover:text-lightGold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * allLinks.length, duration: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="border border-lightGold px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-lightGold hover:bg-lightGold hover:text-ink transition-colors"
                >
                  Begin Journey
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
