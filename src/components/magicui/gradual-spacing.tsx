"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
	text: string;
	duration?: number;
	initialDelay?: number;
	delayMultiple?: number;
	framerProps?: Variants;
	className?: string;
}

export default function GradualSpacing({
	text,
	duration = 0.1,
	initialDelay = 0,
	delayMultiple = 0.04,
	framerProps = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0 },
	},
	className,
}: GradualSpacingProps) {
	return (
		<div className="flex">
			<AnimatePresence>
				{text.split("").map((char, i) => (
					<motion.div
						key={i}
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={framerProps}
						transition={{ duration, delay: i * delayMultiple + initialDelay }}
						className={cn("drop-shadow-sm", className)}
					>
						{char === " " ? <span>&nbsp;</span> : char}
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}
