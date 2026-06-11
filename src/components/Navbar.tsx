"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Kunti" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/rituals-sessions", label: "Rituals & Sessions" },
  { href: "/retreats", label: "Retreats & Courses" },
  { href: "/sacred-jewelry", label: "Sacred Jewelry" },
  { href: "/contact", label: "Contact" },
];

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
            <span className="sacred-glow grid h-12 w-24 place-items-center border border-lightGold/28 bg-ink/68 px-1 transition-transform duration-700 group-hover:scale-[1.03] md:h-14 md:w-28">
              <BrandLogo compact />
            </span>
            <span className="font-display text-lg uppercase leading-none tracking-[0.14em] text-ivory md:text-2xl">
              Kunti <span className="gold-text">Shakti Loto</span>
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
