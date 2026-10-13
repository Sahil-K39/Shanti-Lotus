"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { homepageExperiences } from "@/lib/brand";

export default function CollectionGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 md:gap-x-10">
      {homepageExperiences.map((item, index) => {
        const isCenter = index % 3 === 1;
        const isLarge = index === 0 || index === 3;
        
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            className={`group flex flex-col ${isCenter ? 'md:mt-12 lg:mt-20' : ''}`}
          >
            <Link href={item.href} className={`relative block w-full overflow-hidden ${isLarge ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.04]"
              />
            </Link>
            
            <div className="pt-8 text-center space-y-3">
              <h3 className="font-display text-xl md:text-2xl tracking-[0.18em] text-[#261710] uppercase font-medium">
                {item.title}
              </h3>
              <div className="h-0.5 w-10 bg-[#8C6527]/40 mx-auto" />
              <p className="text-sm font-normal text-[#33231A] leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
              <div className="pt-2">
                <Link 
                  href={item.href}
                  className="inline-block text-[11px] uppercase tracking-[0.2em] font-bold text-[#261710] hover:text-[#8C6527] transition-colors border-b-2 border-[#261710] hover:border-[#8C6527] pb-1"
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
