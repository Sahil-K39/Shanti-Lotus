"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-parchment">
      {/* Soft warm glow top-left */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] h-[60vw] w-[60vw] max-h-[800px] max-w-[800px] rounded-full bg-[#D8C8B6]/30 blur-[120px] md:blur-[160px]"
      />

      {/* Soft gold glow center-right */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[10%] h-[50vw] w-[50vw] max-h-[700px] max-w-[700px] rounded-full bg-[#E2C5BF]/20 blur-[100px] md:blur-[140px]"
      />

      {/* Subtle sage glow bottom */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.04, 0.96, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[20%] left-[20%] h-[70vw] w-[70vw] max-h-[900px] max-w-[900px] rounded-full bg-[#6F8F7A]/8 blur-[130px] md:blur-[180px]"
      />
    </div>
  );
}
