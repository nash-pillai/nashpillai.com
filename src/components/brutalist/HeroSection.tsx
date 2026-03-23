"use client";

import { motion } from "framer-motion";

export function HeroAnimations() {
  return null; // Placeholder for any hero-specific client logic
}

export function HeroName() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 60, scaleY: 0.8 }}
      animate={{ opacity: 1, y: 0, scaleY: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-[16vw] leading-[0.85] font-bold tracking-tighter text-[#0A0A0A] md:text-[14vw] lg:text-[12vw]"
      style={{ fontFamily: "var(--font-bebas)" }}
    >
      NASH
      <br />
      PILLAI
    </motion.h1>
  );
}

export function HeroTagline() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="vertical-text absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold uppercase tracking-[0.3em] text-[#0A0A0A]/60 md:left-8 md:text-base"
      style={{ fontFamily: "var(--font-dm)" }}
    >
      Developer / Security / AI
    </motion.div>
  );
}

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: -3 }}
      transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute -right-2 top-8 z-20 border-[4px] border-[#0A0A0A] bg-[#0047FF] px-4 py-2 text-lg font-bold uppercase text-white md:-right-4 md:top-12 md:px-6 md:py-3 md:text-xl lg:text-2xl"
      style={{ fontFamily: "var(--font-bebas)" }}
    >
      CS @ Georgia Tech
    </motion.div>
  );
}

export function ScrollArrow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="h-12 w-8 border-[3px] border-[#0A0A0A] relative">
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-2 h-3 w-1 -translate-x-1/2 bg-[#0A0A0A]"
        />
      </div>
    </motion.div>
  );
}
