"use client";

import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="relative border-t border-lightGold/15 bg-ink px-6 py-20 text-ivory flex justify-center">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lightGold/70 to-transparent" />
      <BrandLogo big={true} />
    </footer>
  );
}
