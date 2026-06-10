"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  alignment?: "center" | "left";
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  alignment = "center",
  dark = false,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`mb-16 ${alignment === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`inline-block text-xs font-body font-medium uppercase tracking-[0.2em] mb-4 ${
            dark ? "text-antiqueGold" : "text-antiqueGold"
          }`}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.1 }}
        className={`font-display text-4xl md:text-5xl leading-tight ${
          dark ? "text-ivory" : "text-textDark"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`mt-6 text-lg font-body font-light leading-relaxed max-w-2xl ${
            alignment === "center" ? "mx-auto" : ""
          } ${dark ? "text-ivory/60" : "text-textDark/60"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
