"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  date: string;
  title: string;
  org: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    date: "Aug 2023 -- Present",
    title: "Director of Web Development",
    org: "Ember Learning",
    bullets: [
      "Created AP Exam Simulator generating $400k in revenue, used by 160,000 students.",
      "Led development team for deaplearning.com -- custom AI tutors for AP courses, 300k users, $10k ARR.",
      "Deployed infrastructure on Azure and Railway.",
      "Building emberlearning.org -- AI teaching assistants at school district scale.",
    ],
  },
  {
    date: "Aug 2025 -- Present",
    title: "CTF Team Captain",
    org: "GreyHat @ Georgia Tech",
    bullets: [
      "Led team building LLM-based CTF solving agent with automated self-training.",
      "CSAW 13th in North America, corCTF top 10%.",
    ],
  },
  {
    date: "June 2022 -- May 2025",
    title: "President",
    org: "Jaybots FTC #16700",
    bullets: [
      "Led team to World Championship, won #1 Judge's Choice Award.",
      "Kalman filters, OpenCV, Kotlin/Java robot control systems.",
      "Built custom inventory management system.",
    ],
  },
  {
    date: "June 2025 -- Present",
    title: "Independent Contractor",
    org: "Stapplet LLC",
    bullets: [
      "stapplet.com: 100k DAU. Discovered and reported privilege escalation vulnerability.",
      "React reimplementation of the platform.",
    ],
  },
];

export function ExperienceSection({ cormorantClass }: { cormorantClass: string }) {
  return (
    <section id="experience" className="px-6 py-24 md:px-12 lg:px-24">
      <hr className="section-rule mb-16" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`${cormorantClass} mb-20 text-4xl font-normal text-[#E8E2D6] md:text-5xl`}
      >
        Experience
      </motion.h2>
      <div className="flex flex-col gap-16">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 gap-2 md:grid-cols-[200px_1fr] md:gap-12"
          >
            <div className="text-xs uppercase tracking-[0.15em] text-[#8B7D5C]">
              {exp.date}
            </div>
            <div>
              <h3 className={`${cormorantClass} text-xl italic text-[#E8E2D6] md:text-2xl`}>
                {exp.title}
              </h3>
              <p className="mt-1 text-sm text-[#8B7D5C]">{exp.org}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="text-sm leading-relaxed text-[#E8E2D6]/70">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
