"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  index?: number;
}

const iconMap: Record<string, ReactNode> = {
  lotus: (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4C24 4 28 12 28 18C28 22 26 24 24 26C22 24 20 22 20 18C20 12 24 4 24 4Z" fill="currentColor" opacity="0.6" />
      <path d="M4 24C4 24 12 20 18 20C22 20 24 22 26 24C24 26 22 28 18 28C12 28 4 24 4 24Z" fill="currentColor" opacity="0.4" />
      <path d="M44 24C44 24 36 28 30 28C26 28 24 26 22 24C24 22 26 20 30 20C36 20 44 24 44 24Z" fill="currentColor" opacity="0.4" />
      <path d="M24 44C24 44 20 36 20 30C20 26 22 24 24 22C26 24 28 26 28 30C28 36 24 44 24 44Z" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  flame: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2c0 4-4 6-4 10a4 4 0 008 0c0-4-4-6-4-10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  water: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l-5 8a5 5 0 1010 0L12 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  star: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4.5L6 21l1.5-7.5L2 9h7l3-7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  moon: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sun: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
  leaf: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  gem: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="6 3 18 3 22 9 12 22 2 9" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="2" y1="9" x2="22" y2="9" />
      <line x1="12" y1="22" x2="6" y2="9" />
      <line x1="12" y1="22" x2="18" y2="9" />
    </svg>
  ),
};

export default function ServiceCard({
  icon,
  title,
  description,
  buttonText = "Discover More",
  onButtonClick,
  index = 0,
}: ServiceCardProps) {
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
      className="group bg-surface/60 backdrop-blur-sm p-8 md:p-10 rounded-[40px] border border-lotusPink/10 shadow-breathe hover:shadow-glow hover:-translate-y-2 transition-all duration-700"
    >
      <div className="text-antiqueGold mb-6 transition-transform duration-700 group-hover:scale-110">
        {iconMap[icon] || iconMap.lotus}
      </div>
      <h3 className="font-display text-2xl mb-4 text-textDark group-hover:text-terracotta transition-colors duration-500">
        {title}
      </h3>
      <p className="text-sm font-body font-light text-textDark/60 leading-relaxed mb-6">
        {description}
      </p>
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="inline-flex items-center gap-2 text-xs font-body font-medium uppercase tracking-[0.15em] text-antiqueGold hover:text-terracotta transition-colors duration-500 group/btn"
        >
          {buttonText}
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
        </button>
      )}
    </motion.div>
  );
}
