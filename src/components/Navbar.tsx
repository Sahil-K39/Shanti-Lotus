"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-lightGold/20 bg-ink/95 py-2.5 sm:py-3 backdrop-blur-xl shadow-altar"
          : "bg-gradient-to-b from-ink/90 via-ink/50 to-transparent py-4 sm:py-5"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center transition-transform duration-500 hover:scale-[1.03]"
          aria-label="Shakti Loto - Home"
        >
          <BrandLogo big={true} />
        </Link>
      </nav>
    </motion.header>
  );
}
