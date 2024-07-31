"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface BoxRevealProps {
	children: JSX.Element | string;
	width?: "fit-content" | "100%";
	boxColor?: string;
	duration?: number;
	state?: "visible" | "hidden";
	className?: string;
	offset?: number;
}

export const BoxReveal = ({
	children,
	width = "fit-content",
	boxColor,
	duration,
	state,
	className,
	offset = 0,
}: BoxRevealProps) => {
	const mainControls = useAnimation();
	const slideControls = useAnimation();

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		const newState = state ?? (isInView ? "visible" : "hidden");
		void slideControls.start(newState);
		void mainControls.start(newState);
	}, [isInView, mainControls, slideControls, state]);

	return (
		<div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: duration ? duration : 0.5, delay: 0.25 + offset }}
			>
				{children}
			</motion.div>

			<motion.div
				variants={{
					hidden: { left: 0 },
					visible: { left: "100%" },
				}}
				initial="hidden"
				animate={slideControls}
				transition={{ duration: duration ? duration : 0.5, ease: "easeIn", delay: offset }}
				style={{
					position: "absolute",
					top: 4,
					bottom: 4,
					left: 0,
					right: 0,
					zIndex: 20,
					background: boxColor ? boxColor : "#5046e6",
				}}
			/>
		</div>
	);
};

export default BoxReveal;
