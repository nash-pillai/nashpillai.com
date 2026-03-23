"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function ProjectCard({
  children,
  className = "",
  span = 1,
}: {
  children: ReactNode;
  className?: string;
  span?: 1 | 2;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "8px 8px 0 rgba(255, 255, 255, 0.3)",
        x: -3,
        y: -3,
      }}
      transition={{ duration: 0.2 }}
      className={`border-[4px] border-white bg-[#0A0A0A] p-6 transition-colors ${span === 2 ? "md:col-span-2" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ProjectsGrid({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {children}
    </motion.div>
  );
}

export function ProjectItem({
  children,
  className = "",
  direction = "bottom",
}: {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "bottom";
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
          y: direction === "bottom" ? 40 : 0,
          rotate: direction === "left" ? -3 : direction === "right" ? 3 : 0,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
