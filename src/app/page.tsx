/* eslint-disable react/jsx-key */
import GradualSpacing from "@/components/magicui/gradual-spacing";
import WordPullUp from "@/components/magicui/word-pull-up";
import { Project } from "@/components/project";
import { ChevronDown, LinkIcon } from "lucide-react";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import Link from "next/link";

const ProjectLink = (url: string) => (
	<Link href={`https://${url}/`} className="flex items-center hover:underline" target="_blank">
		<LinkIcon height={18} />
		{url}
	</Link>
);
const projects = [
	{
		title: "Imagine an site that lets you track bills going through Congress.",
		body: [
			ProjectLink("progressincongress.org"),
			"Won the Congressional App Challenge and was demoed at the US Capitol",
			"Built with Next.js and TailwindCSS",
		],
		media: <img src={getCldImageUrl({ src: `nashpillai.com/congress${1}` })} />,
		gradient: "from-[#15162c] to-[#2e026d]",
	},
	{
		title: "Imagine an site that lets you manage tens of thousands of parts.",
		body: [ProjectLink("inventory.jaybots.org"), "Built with Next.js and TailwindCSS"],
		gradient: "from-[#2e026d] to-[#15162c]",
	},
	{
		title: "Imagine an site where you can talk to AI tutors trained specifically for your courses",
		body: [ProjectLink("deaplearning.com"), "Over 200k students impacted", "Built with Next.js and TailwindCSS"],
		gradient: "from-[#15162c] to-[#2e026d]",
		media: <video src={getCldImageUrl({ src: "nashpillai.com/deap1" })} autoPlay className="rounded-lg" />,
	},
	{
		title: "Imagine an site where you can stay informed and fight to defend the environment",
		body: [ProjectLink("tedinitiative.org"), "Built with Next.js and TailwindCSS"],
		gradient: "from-[#2e026d] to-[#15162c]",
	},
	{
		title: "Imagine an site where you can learn statistics interactively",
		body: [
			ProjectLink("stapplet.com"),
			"Over 100k students impacted",
			"Improved by me to have more customizability and more accurate graphs",
		],
		gradient: "from-[#15162c] to-[#2e026d]",
	},
];

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center text-white">
			<section className="w-full bg-gradient-to-b from-[#2e026d] to-[#15162c]">
				<div className="container flex h-screen flex-col items-center justify-center gap-12 px-4 py-16">
					<WordPullUp
						words={["Hi!", " ", "I'm", <span className="text-[hsl(280,100%,70%)]">Nash</span>, "!"]}
						className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
					/>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
						<Link
							className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
							href="https://www.linkedin.com/in/nash-pillai/"
							target="_blank"
							data-aos="fade-right"
						>
							<h3 className="text-2xl font-bold">My Linkedin →</h3>
							<GradualSpacing initialDelay={1} className="text-lg" text="Keep up with my latest projects." />
						</Link>
						<Link
							className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
							href="https://github.com/nash-pillai/"
							target="_blank"
							data-aos="fade-left"
						>
							<h3 className="text-2xl font-bold">My Github →</h3>
							<GradualSpacing initialDelay={1} className="text-lg" text="See all my other cool websites." />
						</Link>
						<Link
							className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
							href="mailto:nash.pillai@protonmail.com"
							target="_blank"
							data-aos="fade-right"
						>
							<h3 className="text-2xl font-bold">Contact Me →</h3>
							<GradualSpacing initialDelay={1} className="text-lg" text="Send me an email." />
						</Link>
						<Link
							className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
							href="/resume"
							target="_blank"
							data-aos="fade-left"
						>
							<h3 className="text-2xl font-bold">My Resume →</h3>
							<GradualSpacing initialDelay={1} className="text-lg" text="A quick sample of my work." />
						</Link>
					</div>
					<Link href="#portfolio1" data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1000">
						<div className="group flex max-w-xl flex-col gap-4 rounded-xl bg-white/0 p-4 text-white transition duration-300 ease-in-out hover:bg-white/5">
							<h3 className="text-2xl font-bold">{"Take a tour of what I've made"}</h3>
							<div className="m-auto text-lg transition-transform duration-700 ease-in-out group-hover:translate-y-3">
								<ChevronDown size={32} />
							</div>
						</div>
					</Link>
				</div>
			</section>
			{projects.map((project, index) => (
				<section key={index} className={`w-full bg-gradient-to-b ${project.gradient}`}>
					<Project title={project.title} index={index} body={project.body} media={project.media} />
				</section>
			))}
		</main>
	);
}
