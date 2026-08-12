"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen"
      >
        <source src="/media/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(63,48,38,0.7),transparent_80%)] pointer-events-none" />
      
      {/* Lotus Green Blob */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] h-[60vw] w-[60vw] max-h-[800px] max-w-[800px] rounded-full bg-lotusGreen/15 blur-[120px] md:blur-[160px]"
      />

      {/* Gold Blob */}
      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 100, -60, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[10%] h-[50vw] w-[50vw] max-h-[700px] max-w-[700px] rounded-full bg-antiqueGold/15 blur-[100px] md:blur-[140px]"
      />

      {/* Sacred Turquoise Blob */}
      <motion.div
        animate={{
          x: [0, 120, -100, 0],
          y: [0, -120, 80, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[20%] left-[20%] h-[70vw] w-[70vw] max-h-[900px] max-w-[900px] rounded-full bg-sacredTurquoise/10 blur-[130px] md:blur-[180px]"
      />
    </div>
  );
}
