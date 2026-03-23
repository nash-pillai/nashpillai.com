"use client";

import { motion } from "framer-motion";

const achievements = [
  "BSides Atlanta -- 1st place CTF, youngest competitor of 400+",
  "Congressional App Challenge Winner -- presented at the US Capitol",
  "FTC World Championship, Dean's List Finalist",
  "AI Atlanta Hackathon -- 1st place in two tracks",
  "CMIMC -- 6th of 96 teams",
  "IBM Certified Cybersecurity Analyst",
  "3x Control Award (best robot code)",
  "Science Olympiad NY State -- 1st Robot Tour, 1st Forensics",
];

export function AchievementsSection({ cormorantClass }: { cormorantClass: string }) {
  return (
    <section id="achievements" className="px-6 py-24 md:px-12 lg:px-24">
      <hr className="section-rule mb-16" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`${cormorantClass} mb-16 text-4xl font-normal text-[#E8E2D6] md:text-5xl`}
      >
        Selected Achievements
      </motion.h2>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex max-w-2xl flex-col gap-3"
      >
        {achievements.map((a, i) => (
          <li key={i} className="text-sm leading-relaxed text-[#E8E2D6]/70">
            <span className="mr-3 text-[#8B7D5C]">&middot;</span>
            {a}
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
