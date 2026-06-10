"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

interface OfferingCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  duration?: string;
  location?: string;
  index?: number;
}

export default function OfferingCard({
  title,
  description,
  image,
  href = "/contact",
  duration,
  location,
  index = 0,
}: OfferingCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative overflow-hidden rounded-[30px] bg-surface border border-lotusPink/10 shadow-breathe hover:shadow-glow transition-all duration-700"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepPlum/60 via-deepPlum/20 to-transparent" />

        {/* Badges */}
        {(duration || location) && (
          <div className="absolute bottom-4 left-4 flex gap-2">
            {duration && (
              <span className="px-3 py-1 rounded-full bg-ivory/90 backdrop-blur-sm text-xs font-body font-medium text-textDark">
                {duration}
              </span>
            )}
            {location && (
              <span className="px-3 py-1 rounded-full bg-ivory/90 backdrop-blur-sm text-xs font-body font-medium text-textDark">
                {location}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="font-display text-2xl mb-3 text-textDark group-hover:text-terracotta transition-colors duration-500">
          {title}
        </h3>
        <p className="text-sm font-body font-light text-textDark/60 leading-relaxed mb-6">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs font-body font-medium uppercase tracking-[0.15em] text-antiqueGold hover:text-terracotta transition-colors duration-500 group/btn"
        >
          Learn More
          <svg
            className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1"
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
      </div>
    </motion.div>
  );
}
