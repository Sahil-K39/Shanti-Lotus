"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Kunti" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/mentorship", label: "Mentorship" },
  { href: "/retreats", label: "Retreats" },
  { href: "/philosophy", label: "Philosophy" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isDarkPage = pathname === "/about" || pathname === "/philosophy" || pathname === "/mentorship";
  const isDarkHeader = isDarkPage || (pathname === "/retreats" && !scrolled);

  const headerBgClass = isDarkPage
    ? scrolled
      ? "bg-deepPlum/80 backdrop-blur-md border-b border-white/5 shadow-breathe"
      : "bg-transparent"
    : scrolled
    ? "bg-ivory/80 backdrop-blur-md border-b border-antiqueGold/10 shadow-breathe"
    : "bg-transparent";

  const logoTextClass = isDarkHeader ? "text-ivory" : "text-textDark";

  const getLinkColor = (href: string, isMobile = false) => {
    if (pathname === href) return "text-antiqueGold";
    const useDarkStyle = isMobile ? isDarkPage : isDarkHeader;
    return useDarkStyle
      ? "text-ivory/60 hover:text-antiqueGold"
      : "text-textDark/60 hover:text-antiqueGold";
  };

  const ctaButtonClass = isDarkHeader
    ? "border-antiqueGold/30 text-antiqueGold hover:bg-antiqueGold hover:text-deepPlum"
    : "border-antiqueGold/40 text-antiqueGold hover:bg-antiqueGold hover:text-ivory";

  const mobileMenuBgClass = isDarkPage ? "bg-deepPlum" : "bg-ivory";
  const mobileBtnLineClass = isDarkHeader ? "bg-ivory" : "bg-textDark";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${headerBgClass} ${scrolled ? "py-2" : "py-6"}`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <nav className="flex items-center justify-between" aria-label="Main navigation">
            
            {/* Logo */}
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-4 group z-50" aria-label="Shakti Lotus - Home">
              <div className="w-7 h-7 text-antiqueGold transition-transform duration-1000 group-hover:rotate-[360deg]">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 4C24 4 28 12 28 18C28 22 26 24 24 26C22 24 20 22 20 18C20 12 24 4 24 4ZM4 24C4 24 12 20 18 20C22 20 24 22 26 24C24 26 22 28 18 28C12 28 4 24 4 24ZM44 24C44 24 36 28 30 28C26 28 24 26 22 24C24 22 26 20 30 20C36 20 44 24 44 24ZM24 44C24 44 20 36 20 30C20 26 22 24 24 22C26 24 28 26 28 30C28 36 24 44 24 44Z" fill="currentColor" />
                </svg>
              </div>
              <span className={`font-display text-xl tracking-[0.1em] transition-colors duration-700 ${logoTextClass}`}>
                SHAKTI LOTUS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[10px] font-body tracking-[0.25em] uppercase transition-colors duration-500 relative group py-2 ${getLinkColor(link.href)}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-antiqueGold origin-left scale-x-0 transition-transform duration-500 ease-out ${pathname === link.href ? 'scale-x-100' : 'group-hover:scale-x-100'}`} />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className={`hidden lg:inline-flex items-center px-8 py-3 rounded-none border text-[10px] font-body uppercase tracking-[0.2em] transition-all duration-700 ${ctaButtonClass}`}
            >
              Inquire
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 z-50 relative"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <motion.span animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className={`w-8 h-[1px] block origin-center transition-colors duration-500 ${isOpen ? (isDarkPage ? 'bg-ivory' : 'bg-textDark') : mobileBtnLineClass}`} />
              <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className={`w-8 h-[1px] block transition-colors duration-500 ${isOpen ? (isDarkPage ? 'bg-ivory' : 'bg-textDark') : mobileBtnLineClass}`} />
              <motion.span animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className={`w-8 h-[1px] block origin-center transition-colors duration-500 ${isOpen ? (isDarkPage ? 'bg-ivory' : 'bg-textDark') : mobileBtnLineClass}`} />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className={`fixed inset-0 z-40 flex flex-col items-center justify-center pt-20 ${mobileMenuBgClass}`}
          >
            <nav className="flex flex-col items-center gap-10 w-full px-6" aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-4xl tracking-widest uppercase transition-colors duration-500 ${isDarkPage ? 'text-ivory/80 hover:text-antiqueGold' : 'text-textDark/80 hover:text-antiqueGold'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`inline-flex items-center px-12 py-4 border text-xs font-body uppercase tracking-[0.25em] transition-all duration-700 ${isDarkPage ? 'border-antiqueGold text-antiqueGold hover:bg-antiqueGold hover:text-deepPlum' : 'border-textDark text-textDark hover:bg-textDark hover:text-ivory'}`}
                >
                  Begin Your Journey
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
