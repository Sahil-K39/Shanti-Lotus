"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TimelineItem {
  label: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  dark?: boolean;
}

export default function Timeline({ items, dark = false }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className={`absolute left-6 top-0 bottom-0 w-px ${
          dark ? "bg-antiqueGold/30" : "bg-antiqueGold/20"
        }`}
      />

      <div className="space-y-16">
        {items.map((item, index) => (
          <TimelineNode key={index} item={item} index={index} dark={dark} />
        ))}
      </div>
    </div>
  );
}

function TimelineNode({
  item,
  index,
  dark,
}: {
  item: TimelineItem;
  index: number;
  dark: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative flex gap-8 group"
    >
      {/* Node dot */}
      <div className="relative z-10 flex-shrink-0 mt-2">
        <div
          className={`w-12 h-12 rounded-full border-[4px] flex items-center justify-center transition-all duration-500 ${
            dark
              ? "bg-surfaceDark border-deepPlum shadow-[0_0_15px_rgba(156,75,62,0.3)] group-hover:shadow-[0_0_20px_rgba(200,169,126,0.5)]"
              : "bg-surface border-ivory shadow-breathe group-hover:shadow-glow"
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full transition-colors duration-500 ${
              dark
                ? "bg-terracotta group-hover:bg-antiqueGold"
                : "bg-lotusPink group-hover:bg-antiqueGold"
            }`}
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex-1 p-8 rounded-2xl backdrop-blur-sm border transition-colors duration-700 ${
          dark
            ? "bg-surfaceDark/30 border-surfaceDark shadow-altar hover:border-terracotta/30"
            : "bg-surface/60 border-lotusPink/10 shadow-breathe hover:shadow-glow"
        }`}
      >
        <span
          className={`font-display tracking-widest text-sm uppercase block mb-3 ${
            dark ? "text-antiqueGold" : "text-antiqueGold"
          }`}
        >
          {item.label}
        </span>
        <h3
          className={`text-2xl font-display mb-4 ${
            dark ? "text-ivory" : "text-textDark"
          }`}
        >
          {item.title}
        </h3>
        <p
          className={`font-body font-light leading-[1.8] ${
            dark ? "text-ivory/70" : "text-textDark/60"
          }`}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
