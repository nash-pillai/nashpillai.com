"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function TimelineContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="relative"
    >
      {/* Thick vertical timeline line */}
      <div className="absolute left-6 top-0 h-full w-[6px] bg-[#FFE600] md:left-1/2 md:-translate-x-1/2" />
      {children}
    </motion.div>
  );
}

export function TimelineItem({
  children,
  index,
  date,
}: {
  children: ReactNode;
  index: number;
  date: string;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: isEven ? -60 : 60,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={`relative mb-12 flex items-start ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 z-10 h-5 w-5 border-[3px] border-white bg-[#FFE600] md:left-1/2 md:-translate-x-1/2" />

      {/* Date label - rotated on desktop */}
      <div
        className={`hidden md:block absolute ${isEven ? "md:right-[52%] md:pr-12 md:text-right" : "md:left-[52%] md:pl-12"}`}
        style={{ top: 0, zIndex: 20 }}
      >
        <span
          className="inline-block text-sm font-bold uppercase tracking-widest text-[#FFE600]"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          {date}
        </span>
      </div>

      {/* Content */}
      <div
        className={`ml-14 w-full md:ml-0 ${isEven ? "md:mr-[52%] md:pr-12" : "md:ml-[52%] md:pl-12"} md:pt-8`}
      >
        <span
          className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#FFE600] md:hidden"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          {date}
        </span>
        {children}
      </div>
    </motion.div>
  );
}
