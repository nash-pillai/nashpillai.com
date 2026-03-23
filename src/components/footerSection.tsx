"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function FooterSection() {
  return (
    <footer id="contact" className="px-6 py-24 md:px-12 lg:px-24">
      <hr className="section-rule mb-16" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col items-center gap-8 text-center"
      >
        <Link
          href="mailto:nash.pillai@protonmail.com"
          className="text-lg text-[#E8E2D6] transition-colors duration-300 hover:text-[#C45D2C]"
        >
          nash.pillai@protonmail.com
        </Link>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          <Link
            href="https://linkedin.com/in/nash-pillai"
            target="_blank"
            className="text-xs uppercase tracking-[0.2em] text-[#8B7D5C] transition-colors duration-300 hover:text-[#C45D2C]"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/nash-pillai"
            target="_blank"
            className="text-xs uppercase tracking-[0.2em] text-[#8B7D5C] transition-colors duration-300 hover:text-[#C45D2C]"
          >
            GitHub
          </Link>
          <Link
            href="/resume"
            className="text-xs uppercase tracking-[0.2em] text-[#8B7D5C] transition-colors duration-300 hover:text-[#C45D2C]"
          >
            Resume
          </Link>
          <Link
            href="/nash.gpg"
            target="_blank"
            className="text-xs uppercase tracking-[0.2em] text-[#8B7D5C] transition-colors duration-300 hover:text-[#C45D2C]"
          >
            GPG Key
          </Link>
        </div>
        <p className="font-mono text-[10px] tracking-wider text-[#8B7D5C]/50">
          F10A5FFB4E9B82863D31E7E76508E71EC5318FAD
        </p>
      </motion.div>
    </footer>
  );
}
