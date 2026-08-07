"use client";

import { motion } from "framer-motion";

export function SkillsMarquee({ skills, direction = "left" }: { skills: string[]; direction?: "left" | "right" }) {
  const doubled = [...skills, ...skills];

  return (
    <div className="overflow-hidden border-y-[4px] border-[#0A0A0A] bg-white py-3">
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="text-lg font-bold uppercase text-[#0A0A0A]"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            {skill}
            <span className="mx-4 text-[#FF0054]">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
