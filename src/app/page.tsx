import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
			<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
				<h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
					Hi! I&apos;m <span className="text-[hsl(280,100%,70%)]">Nash</span>!
				</h1>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
					<Link
						className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
						href="https://www.linkedin.com/in/nash-pillai/"
						target="_blank">
						<h3 className="text-2xl font-bold">My Linkedin →</h3>
						<div className="text-lg">Keep up with my latest projects.</div>
					</Link>
					<Link
						className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
						href="https://github.com/nash-pillai/"
						target="_blank">
						<h3 className="text-2xl font-bold">My Github →</h3>
						<div className="text-lg">See all my other cool websites.</div>
					</Link>
					<Link
						className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
						href="mailto:nash.pillai@protonmail.com"
						target="_blank">
						<h3 className="text-2xl font-bold">Contact Me →</h3>
						<div className="text-lg">Send me an email.</div>
					</Link>
					<Link
						className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
						href="/resume"
						target="_blank">
						<h3 className="text-2xl font-bold">My Resume →</h3>
						<div className="text-lg">A quick sample of my work.</div>
					</Link>
				</div>
			</div>
		</main>
	);
}
