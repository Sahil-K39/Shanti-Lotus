"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  quote?: string;
  alignment?: "center" | "left";
  dark?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  quote,
  alignment = "center",
  dark = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative min-h-[60vh] flex items-center justify-center overflow-hidden ${
        dark ? "bg-deepPlum text-ivory" : "bg-ivory text-textDark"
      }`}
    >
      {/* Background atmospheric elements */}
      <div
        className={`absolute top-20 right-[-10%] w-[600px] h-[600px] rounded-full blur-3xl animate-breathe pointer-events-none ${
          dark
            ? "bg-terracotta/10"
            : "bg-lotusPink/10"
        }`}
      />
      <div
        className={`absolute bottom-20 left-[-10%] w-[500px] h-[700px] rounded-full blur-3xl animate-breathe pointer-events-none ${
          dark
            ? "bg-antiqueGold/5"
            : "bg-antiqueGold/5"
        }`}
        style={{ animationDelay: "-4s" }}
      />

      <div
        className={`relative z-10 max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-20 ${
          alignment === "center" ? "text-center" : "text-left"
        }`}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight tracking-wide"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className={`text-lg md:text-xl font-body font-light leading-relaxed max-w-2xl ${
              alignment === "center" ? "mx-auto" : ""
            } ${dark ? "text-ivory/70" : "text-muted"}`}
          >
            {subtitle}
          </motion.p>
        )}

        {quote && (
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className={`mt-10 font-display text-xl md:text-2xl italic leading-relaxed max-w-2xl ${
              alignment === "center" ? "mx-auto" : ""
            } ${dark ? "text-antiqueGold/70" : "text-antiqueGold/80"}`}
          >
            &ldquo;{quote}&rdquo;
          </motion.blockquote>
        )}
      </div>
    </section>
  );
}
