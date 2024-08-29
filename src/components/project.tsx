"use client";

import { useRef, useState } from "react";
import { Word } from "./magicui/text-reveal";
import { clamp, motion, type MotionValue, useTransform } from "framer-motion";
import BoxReveal from "./magicui/box-reveal";

export function Project({
	title,
	index,
	body = [],
	media,
	parentScroll,
}: {
	title: string;
	index: number;
	body?: (JSX.Element | string)[];
	media?: JSX.Element | string;
	parentScroll: MotionValue<number>;
}) {
	const targetRef = useRef<HTMLDivElement | null>(null);

	const scrollYProgress = useTransform(parentScroll, [0, index, index + 1, index + 2], [0, 0, 1, 1]);

	const words = title.split(" ");
	const titleProgress = useTransform(scrollYProgress, (x) => clamp(0, 1, x * 3));

	const [showBox, setShowBox] = useState(false);

	scrollYProgress.on("change", (v) => {
		setShowBox(v > 0.35);
	});

	return (
		<div
			ref={targetRef}
			className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg"
			id={`portfolio${index + 1}`}
		>
			<div ref={targetRef} className="relative z-0 h-[200vh]">
				<div
					className={`sticky top-0 mx-auto flex h-[50%] max-w-6xl flex-col items-center gap-8 bg-transparent px-[1rem] py-[5rem] ${index % 2 ? "md:flex-row-reverse" : "md:flex-row"}`}
				>
					<div className="flex grow flex-col p-2 md:p-4 lg:p-6">
						<p
							ref={targetRef}
							className="mb-4 flex flex-wrap text-2xl font-bold text-white/20 md:text-3xl lg:text-4xl xl:text-5xl"
						>
							{words.map((word, i) => {
								const start = i / words.length;
								const end = start + 1 / words.length;
								return (
									<Word key={i} progress={titleProgress} range={[start, end]}>
										{word}
									</Word>
								);
							})}
						</p>
						{body.map((b, i) => (
							<BoxReveal
								key={i}
								width="100%"
								boxColor="#5046e6"
								duration={0.4}
								offset={i * 0.2}
								className={`my-1 ${!showBox && "opacity-0"}`}
								state={showBox ? "visible" : "hidden"}
							>
								{b}
							</BoxReveal>
						))}
					</div>
					<motion.div
						style={{
							y: useTransform(scrollYProgress, (v) => -3000 * (v - 0.5) ** 3),
							opacity: useTransform(scrollYProgress, (v) => -10 * (v - 0.5) ** 2 + 2),
						}}
						className="max-h-full flex-col"
					>
						{media}
					</motion.div>
				</div>
			</div>
		</div>
	);
}
