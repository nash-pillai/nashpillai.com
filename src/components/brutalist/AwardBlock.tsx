"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function AwardsGrid({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.06,
          },
        },
      }}
      className="flex flex-wrap justify-center gap-4"
    >
      {children}
    </motion.div>
  );
}

export function AwardItem({
  children,
  index,
  size = "normal",
}: {
  children: ReactNode;
  index: number;
  size?: "normal" | "large";
}) {
  const rotations = [1, -2, 1.5, -1, 2, -1.5, 0.5, -2.5, 1];
  const rotation = rotations[index % rotations.length] ?? 0;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, rotate: rotation * 2 },
        visible: {
          opacity: 1,
          y: 0,
          rotate: rotation,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ rotate: 0, scale: 1.08 }}
      className={`border-[4px] border-[#0A0A0A] bg-white p-4 text-[#0A0A0A] ${size === "large" ? "min-w-[200px] p-6" : "min-w-[160px]"}`}
    >
      {children}
    </motion.div>
  );
}
