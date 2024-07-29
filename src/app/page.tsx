/* eslint-disable react/jsx-key */
import GradualSpacing from "@/components/magicui/gradual-spacing";
import WordPullUp from "@/components/magicui/word-pull-up";
import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
			<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
				<WordPullUp
					words={["Hi!", " ", "I'm", <span className="text-[hsl(280,100%,70%)]">Nash</span>, "!"]}
					className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
				/>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
					<Link
						className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
						href="https://www.linkedin.com/in/nash-pillai/"
						target="_blank">
						<h3 className="text-2xl font-bold">My Linkedin →</h3>
						<GradualSpacing className="text-lg" text="Keep up with my latest projects." />
					</Link>
					<Link
						className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
						href="https://github.com/nash-pillai/"
						target="_blank">
						<h3 className="text-2xl font-bold">My Github →</h3>
						<GradualSpacing className="text-lg" text="See all my other cool websites." />
					</Link>
					<Link
						className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
						href="mailto:nash.pillai@protonmail.com"
						target="_blank">
						<h3 className="text-2xl font-bold">Contact Me →</h3>
						<GradualSpacing className="text-lg" text="Send me an email." />
					</Link>
					<Link
						className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
						href="/resume"
						target="_blank">
						<h3 className="text-2xl font-bold">My Resume →</h3>
						<GradualSpacing className="text-lg" text="A quick sample of my work." />
					</Link>
				</div>
			</div>
		</main>
	);
}
