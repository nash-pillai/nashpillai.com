"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className = "",
  rotate = 0,
}: {
  children: ReactNode;
  direction?: "left" | "right" | "bottom" | "top";
  delay?: number;
  className?: string;
  rotate?: number;
}) {
  const directionMap = {
    left: { x: -120, y: 0 },
    right: { x: 120, y: 0 },
    bottom: { x: 0, y: 80 },
    top: { x: 0, y: -80 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: directionMap[direction].x,
        y: directionMap[direction].y,
        rotate: rotate,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  direction = "bottom",
}: {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "bottom";
}) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
      y: direction === "bottom" ? 40 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

export function HoverCard({
  children,
  className = "",
  shadowColor = "#000",
}: {
  children: ReactNode;
  className?: string;
  shadowColor?: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: `8px 8px 0 ${shadowColor}`,
        x: -2,
        y: -2,
      }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HoverRotate({
  children,
  className = "",
  initialRotate = 0,
}: {
  children: ReactNode;
  className?: string;
  initialRotate?: number;
}) {
  return (
    <motion.div
      style={{ rotate: initialRotate }}
      whileHover={{
        rotate: 0,
        scale: 1.05,
      }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
