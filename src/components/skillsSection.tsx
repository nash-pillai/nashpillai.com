"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Backend",
    skills: "Python, Java, Kotlin, Docker, SQL, PostgreSQL, Node.js, OpenCV, MongoDB, Git",
  },
  {
    label: "Web",
    skills: "TypeScript, JavaScript, React, Next.js, Redux, Tailwind CSS, Prisma, Stripe",
  },
  {
    label: "DevOps",
    skills: "Linux, NixOS, Azure, GCP, Bash, CI/CD, Docker",
  },
];

export function SkillsSection({ cormorantClass }: { cormorantClass: string }) {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24">
      <hr className="section-rule mb-16" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`${cormorantClass} mb-16 text-4xl font-normal text-[#E8E2D6] md:text-5xl`}
      >
        Capabilities
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16"
      >
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 text-xs uppercase tracking-[0.2em] text-[#8B7D5C]">
              {group.label}
            </h3>
            <p className="text-sm leading-relaxed text-[#E8E2D6]/70">{group.skills}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
