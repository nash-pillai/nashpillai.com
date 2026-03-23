"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.25, 0.1, 0.25, 1] as const;

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function HeroSection({ cormorantClass }: { cormorantClass: string }) {
  return (
    <section className="relative flex h-screen flex-col justify-between px-6 pb-12 pt-24 md:px-12 lg:px-24">
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease }}
          className={`${cormorantClass} text-[12vw] font-light italic leading-[0.9] tracking-tight text-[#E8E2D6] md:text-[8vw]`}
        >
          Nash
          <br />
          Pillai
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease }}
          className="small-caps mt-6 text-sm tracking-[0.2em] text-[#8B7D5C]"
        >
          Honors Computer Science &middot; Georgia Tech &middot; Cybersecurity &amp; AI
        </motion.p>
      </div>

      <div>
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.8, ease }}
          className="section-rule mb-8 origin-left"
        />
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
          className="flex flex-wrap gap-x-10 gap-y-3"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.25em] text-[#8B7D5C] transition-colors duration-300 hover:text-[#C45D2C]"
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}
