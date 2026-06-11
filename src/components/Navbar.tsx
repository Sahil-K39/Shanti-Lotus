"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Kunti" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/rituals-sessions", label: "Rituals & Sessions" },
  { href: "/retreats", label: "Retreats & Courses" },
  { href: "/sacred-jewelry", label: "Sacred Jewelry" },
  { href: "/contact", label: "Contact" },
];

function LotusMark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-full w-full">
      <path
        d="M32 8c5.6 8.4 8.4 15.4 8.4 21 0 5.2-2.8 9.6-8.4 13.2-5.6-3.6-8.4-8-8.4-13.2C23.6 23.4 26.4 16.4 32 8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13.8 26.3c9.2.8 15.3 3.2 18.2 7.1-2.9 4-7.3 6-13.1 6-4.4 0-8.9-1.7-13.4-5.1 2.4-3.5 5.2-6.2 8.3-8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M50.2 26.3c-9.2.8-15.3 3.2-18.2 7.1 2.9 4 7.3 6 13.1 6 4.4 0 8.9-1.7 13.4-5.1-2.4-3.5-5.2-6.2-8.3-8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M32 42.2c4.2 1.8 7.1 5.2 8.7 10.2H23.3c1.6-5 4.5-8.4 8.7-10.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
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
          scrolled ? "bg-ink/82 py-3 shadow-[0_12px_42px_rgba(0,0,0,0.34)] backdrop-blur-xl" : "bg-transparent py-6"
        }`}
      >
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-5 md:px-10 xl:px-14" aria-label="Main navigation">
          <Link href="/" onClick={closeMenu} className="group flex items-center gap-3 text-lightGold" aria-label="Kunti Shakti Loto home">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-lightGold/35 bg-gold/5 shadow-[0_0_24px_rgba(214,168,90,0.18)] transition-transform duration-700 group-hover:rotate-45">
              <LotusMark />
            </span>
            <span className="font-display text-xl uppercase tracking-[0.18em] text-ivory md:text-2xl">
              Shakti <span className="gold-text">Loto</span>
            </span>
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

          <Link
            href="/contact"
            className="hidden border border-lightGold/45 px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-lightGold transition-all duration-500 hover:bg-lightGold hover:text-ink xl:inline-flex"
          >
            Begin
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-lightGold/30 text-lightGold xl:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <motion.span animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-current" />
            <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-px w-6 bg-current" />
            <motion.span animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-current" />
          </button>
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
              <div className="mb-2 flex items-center gap-2">
                <span className="moon-phase crescent" />
                <span className="moon-phase half" />
                <span className="moon-phase full" />
                <span className="moon-phase half" />
                <span className="moon-phase crescent" />
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
