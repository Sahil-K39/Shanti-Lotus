"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import LanguageTrigger from "@/components/LanguageTrigger";

const navLinks = [
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
    const handleScroll = () => setScrolled(window.scrollY > 28);
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
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled ? "border-b border-lightGold/20 bg-ink/90 py-3 backdrop-blur-xl shadow-altar" : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10" aria-label="Main navigation">
          <Link href="/" onClick={closeMenu} className="group transition-transform duration-700 hover:scale-[1.01]" aria-label="Shakti Loto - Home">
            <BrandLogo />
          </Link>

          <div className="hidden items-center gap-6 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-[10px] uppercase tracking-[0.22em] transition-colors duration-500 ${
                  pathname === link.href ? "text-lightGold" : "text-parchment/70 hover:text-lightGold"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-px w-full origin-left bg-lightGold transition-transform duration-500 ${
                  pathname === link.href ? "scale-x-100" : "scale-x-0"
                }`} />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 xl:flex">
            <LanguageTrigger />
            <Link
              href="/contact"
              className="border border-lightGold/45 px-6 py-2.5 text-[10px] uppercase tracking-[0.22em] text-lightGold transition-all duration-500 hover:bg-lightGold hover:text-ink"
            >
              Begin
            </Link>
          </div>

          <div className="flex items-center gap-3 xl:hidden">
            <LanguageTrigger />
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-lightGold/30 text-lightGold"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <motion.span animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block h-px w-5 bg-current" />
              <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-px w-5 bg-current" />
              <motion.span animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block h-px w-5 bg-current" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-ink/96 px-6 backdrop-blur-xl xl:hidden"
          >
            <div className="absolute inset-8 border border-lightGold/15" />
            <nav className="relative z-10 flex flex-col items-center gap-7 text-center" aria-label="Mobile navigation">
              <div className="mb-3 text-lightGold">
                <BrandLogo />
              </div>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.55 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="font-display text-3xl uppercase tracking-[0.12em] text-ivory transition-colors duration-500 hover:text-lightGold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
