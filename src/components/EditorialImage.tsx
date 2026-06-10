"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  variant?: "pebble" | "organic-1" | "organic-2" | "rounded" | "sharp";
  withBorder?: boolean;
  priority?: boolean;
}

export default function EditorialImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  variant = "rounded",
  withBorder = false,
}: EditorialImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Determine the mask class based on the variant
  const maskClass = 
    variant === "pebble" ? "pebble-mask" :
    variant === "organic-1" ? "organic-mask-1" :
    variant === "organic-2" ? "organic-mask-2" :
    variant === "rounded" ? "rounded-[32px]" :
    "rounded-none";

  return (
    <div className={`relative group ${className}`}>
      {/* Optional offset gold border frame */}
      {withBorder && (
        <div 
          className={`absolute inset-0 translate-x-3 translate-y-3 border border-antiqueGold/40 z-0 transition-transform duration-1200 group-hover:translate-x-4 group-hover:translate-y-4 ${maskClass}`}
        />
      )}
      
      {/* Main Image Container */}
      <div 
        className={`relative w-full h-full overflow-hidden z-10 bg-surfaceDark/10 ${maskClass}`}
      >
        <motion.img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            scale: isLoaded ? 1 : 1.05 
          }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          className={`w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 ${imageClassName}`}
        />
        
        {/* Soft Inner Shadow / Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deepPlum/40 via-transparent to-transparent pointer-events-none mix-blend-multiply" />
      </div>
    </div>
  );
}
