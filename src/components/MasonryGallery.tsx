"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/gallery";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";

export default function MasonryGallery() {
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  return (
    <section className="relative z-10 px-4 py-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="font-display text-4xl text-lightGold md:text-5xl tracking-widest">SACRED GALLERY</h2>
          <div className="gold-line mx-auto my-8 max-w-md" />
        </div>
        
        <div className="columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-4">
          {galleryImages.map((src, i) => (
            <div key={src} className="mb-6 break-inside-avoid overflow-hidden rounded-2xl glass-panel group relative">
              <Image 
                src={src} 
                alt={`Gallery visual ${i}`}
                width={800} 
                height={1000} 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={`w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110 ${loaded[src] ? 'opacity-100 blur-0' : 'opacity-0 blur-md'}`}
                onLoad={() => setLoaded(prev => ({ ...prev, [src]: true }))}
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="absolute inset-0 bg-ink/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay pointer-events-none" />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
