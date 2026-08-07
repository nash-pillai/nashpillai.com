"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function ContactLink({
	children,
	href,
	className = "",
	newTab = false,
}: {
	children: ReactNode;
	href: string;
	className?: string;
	newTab?: boolean;
}) {
	const opensInNewTab = newTab || href.startsWith("http") || href.startsWith("mailto:");

	return (
		<motion.a
			href={href}
			target={opensInNewTab ? "_blank" : undefined}
			rel={opensInNewTab ? "noopener noreferrer" : undefined}
			whileHover={{
				backgroundColor: "#F5F0E8",
				color: "#0A0A0A",
				scale: 1.02,
			}}
			transition={{ duration: 0.15 }}
			className={`block border-[4px] border-[#0047FF] px-6 py-4 text-[#F5F0E8] ${className}`}
		>
			{children}
		</motion.a>
	);
}

export function ContactContainer({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-60px" }}
			variants={{
				hidden: {},
				visible: {
					transition: {
						staggerChildren: 0.1,
					},
				},
			}}
			className="flex flex-col gap-4"
		>
			{children}
		</motion.div>
	);
}

export function ContactItem({ children, direction = "left" }: { children: ReactNode; direction?: "left" | "right" }) {
	return (
		<motion.div
			variants={{
				hidden: {
					opacity: 0,
					x: direction === "left" ? -80 : 80,
				},
				visible: {
					opacity: 1,
					x: 0,
					transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
				},
			}}
		>
			{children}
		</motion.div>
	);
}
