/* eslint-disable react/jsx-key */
import { JsonLd } from "@/components/jsonLd";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import WordPullUp from "@/components/magicui/word-pull-up";
import { ChevronDown } from "lucide-react";
import { getCldImageUrl } from "next-cloudinary";
import Link from "next/link";
import { env } from "process";
import { type WebSite, type WithContext } from "schema-dts";
import ProjectsList from "@/components/projectsList";

const jsonLd: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: env.URL,
	name: "Nash Pillai",
	description: "Nash Pillai's personal website",
	image: getCldImageUrl({ src: "nashpillai.com/preview" }),
	sameAs: ["https://www.linkedin.com/in/nash-pillai/", "https://github.com/nash-pillai/"],
};

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center text-white">
			<JsonLd data={jsonLd} />
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
			<ProjectsList />
			<section className="w-full bg-gradient-to-b from-[#2e026d] to-[#15162c]">
				<div className="container flex h-screen flex-col items-center justify-center gap-12 px-4 py-16">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
						<Link
							className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
							href="/nash.gpg"
							target="_blank"
							data-aos="fade-up"
						>
							<h3 className="text-2xl font-bold">My GPG public key →</h3>
							<div className="break-all text-lg">F10A5FFB4E9B82863D31E7E76508E71EC5318FAD</div>
						</Link>
						<Link
							className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
							data-aos="fade-up"
							href="/about"
							target="_blank"
						>
							<h3 className="text-2xl font-bold">My Darknet Site →</h3>
							<div className="text-lg">Onion v3 address</div>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
