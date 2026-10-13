"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CertificationCardProps {
  title: string;
  index?: number;
}

export default function CertificationCard({
  title,
  index = 0,
}: CertificationCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group flex items-start gap-4 p-6 rounded-2xl bg-[#F8F5F1] border-2 border-[#D8C8B6] hover:border-[#2C4A63] hover:shadow-md transition-all duration-700"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2C4A63]/10 flex items-center justify-center text-[#2C4A63] group-hover:bg-[#2C4A63]/20 transition-colors duration-500">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p className="font-body font-medium text-[#261710] leading-relaxed pt-2">
        {title}
      </p>
    </motion.div>
  );
}
