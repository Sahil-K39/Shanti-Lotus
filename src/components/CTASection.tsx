"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
  dark?: boolean;
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonHref,
  dark = false,
}: CTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className={`relative py-16 md:py-28 overflow-hidden ${
        dark ? "bg-[#261710]" : "bg-[#EFE6DB]"
      }`}
    >
      {/* Ambient glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none ${
          dark ? "bg-[#B8904F]/10" : "bg-[#6F8F7A]/10"
        }`}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className={`font-display text-3xl md:text-4xl italic leading-snug mb-4 font-normal ${
            dark ? "text-[#FFFFFF]" : "text-[#261710]"
          }`}
        >
          {title}
        </motion.p>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-lg font-body font-normal mb-10 ${
              dark ? "text-[#F8F5F1]" : "text-[#33231A]"
            }`}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href={buttonHref}
            className={`inline-flex items-center gap-3 px-10 py-4 rounded-full text-xs font-body font-semibold uppercase tracking-[0.2em] transition-all duration-500 shadow-md ${
              dark
                ? "bg-[#E2C98F] text-[#261710] hover:bg-[#FFFFFF]"
                : "bg-[#261710] text-[#FFFFFF] hover:bg-[#3D2C20]"
            }`}
          >
            {buttonText}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
