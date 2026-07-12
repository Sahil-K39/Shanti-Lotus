"use client";

import Image from "next/image";
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
  priority,
}: EditorialImageProps) {
  const [imgError, setImgError] = useState(false);

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
        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {!imgError ? (
            <Image
              fill
              src={src}
              alt={alt}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={priority}
              onError={() => setImgError(true)}
              className={`object-cover transition-transform duration-[2000ms] group-hover:scale-105 ${imageClassName}`}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-parchment/20">
              <img src="/shakti-elements/lotus-icon.svg" className="h-16 w-16 opacity-40" alt="" />
            </div>
          )}
        </motion.div>
        
        {/* Soft Inner Shadow / Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deepPlum/40 via-transparent to-transparent pointer-events-none mix-blend-multiply" />
      </div>
    </div>
  );
}
