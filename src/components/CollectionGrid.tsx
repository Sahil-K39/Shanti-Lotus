"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { homepageExperiences } from "@/lib/brand";

export default function CollectionGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 md:gap-x-12">
      {homepageExperiences.map((item, index) => {
        // Create a masonry effect by varying the aspect ratio slightly and offsetting some items
        const isCenter = index % 3 === 1;
        const isLarge = index === 0 || index === 3;
        
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className={`group flex flex-col ${isCenter ? 'md:mt-12 lg:mt-24' : ''}`}
          >
            <Link href={item.href} className={`relative block w-full overflow-hidden bg-parchment ${isLarge ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-700 pointer-events-none" />
            </Link>
            
            <div className="pt-8 text-center space-y-4">
              <h3 className="font-display text-2xl tracking-[0.2em] text-ink uppercase font-light">
                {item.title}
              </h3>
              <div className="h-px w-12 bg-ink/20 mx-auto" />
              <p className="text-sm font-light text-ink/70 leading-relaxed max-w-sm mx-auto px-4">
                {item.description}
              </p>
              <div className="pt-2">
                <Link 
                  href={item.href}
                  className="inline-block text-[10px] uppercase tracking-[0.25em] text-ink hover:text-lightGold transition-colors border-b border-transparent hover:border-lightGold pb-1"
                >
                  {item.cta}
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
