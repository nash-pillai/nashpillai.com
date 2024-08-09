"use client";

import { Project } from "@/components/project";
import { LinkIcon } from "lucide-react";
import { getCldImageUrl, getCldVideoUrl } from "next-cloudinary";
import { animate, clamp, motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

const ProjectLink = (url: string) => (
	<Link href={`https://${url}/`} className="flex items-center hover:underline" target="_blank">
		<LinkIcon height={18} />
		{url}
	</Link>
);
const projects = [
	{
		title: "Imagine an site where you can talk to AI tutors trained specifically for your courses",
		body: [ProjectLink("deaplearning.com"), "Over 200k students impacted", "Built with Next.js and TailwindCSS"],
		gradient: ["#15162c", "#2e026d"] as [string, string],
		media: <video src={getCldVideoUrl({ src: "nashpillai.com/deap1" })} autoPlay loop muted className="rounded-lg" />,
	},
	{
		title: "Imagine an site that lets you track bills going through Congress.",
		body: [
			ProjectLink("progressincongress.org"),
			"Won the Congressional App Challenge and was demoed at the US Capitol",
			"Built with Next.js and TailwindCSS",
		],
		media: <img src={getCldImageUrl({ src: `nashpillai.com/congress${1}` })} />,
		gradient: ["#0000FF", "#FF0088"] as [string, string],
	},

	{
		title: "Imagine an site where you can stay informed and fight to defend the environment",
		body: [ProjectLink("tednitiative.org"), "Built with Next.js and TailwindCSS"],
		media: <img src={getCldImageUrl({ src: `nashpillai.com/tedi` })} />,
		gradient: ["hsl(149, 100%, 19%)", "#81b141"] as [string, string],
	},
	{
		title: "Imagine an site where you can learn statistics interactively",
		body: [
			ProjectLink("stapplet.com"),
			"Over 50k students impacted",
			"Improved by me to have more customizability and more accurate graphs",
		],
		gradient: ["#DD0088", "#993333"] as [string, string],
	},
	{
		title: "Imagine an site that lets you manage tens of thousands of parts.",
		body: [ProjectLink("inventory.jaybots.org"), "Built with Next.js and TailwindCSS"],
		gradient: ["#15162c", "#2e026d"] as [string, string],
	},
];
const gradientPos = (i: number) => `${clamp(0, projects.length * 200, i * 200 + 50)}vh`;
export default function ProjectsList() {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({ target: targetRef });
	const scaledProgress = useTransform(scrollYProgress, [0, 1], [0, projects.length - 0.01]);
	scaledProgress.on("change", (v) => {
		const num = Math.floor(v);
		console.log(v, num);
		void animate(startColor, projects[num]!.gradient[0], { duration: 0.3 });
		void animate(endColor, projects[num]!.gradient[1], { duration: 0.3 });
		setCurrentProject(num);
	});

	const startColor = useMotionValue(projects[0]!.gradient[0]);
	const endColor = useMotionValue(projects[0]!.gradient[1]);
	const [currentProject, setCurrentProject] = useState(0);
	const background = useMotionTemplate`linear-gradient(to bottom, #15162c, ${startColor} ${gradientPos(currentProject)}, ${endColor} ${gradientPos(currentProject + 1)}, #2e026d)`;

	return (
		<section ref={targetRef} className="w-full">
			<motion.div
				className="absolute w-screen"
				style={{ background, height: `${projects.length * 200}vh` }}
			></motion.div>
			{projects.map((project, i) => (
				<Project
					key={project.title}
					title={project.title}
					index={i}
					body={project.body}
					media={project.media}
					parentScroll={scaledProgress}
				/>
			))}
		</section>
	);
}
