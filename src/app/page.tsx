import { JsonLd } from "@/components/jsonLd";
import { getCldImageUrl, getCldVideoUrl } from "next-cloudinary";
import Link from "next/link";
import { env } from "@/env";
import { type WebSite, type WithContext } from "schema-dts";
import { ScrollReveal, SlideInRed } from "@/components/scrollReveal";
import { ExternalLink } from "lucide-react";

const jsonLd: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: env.URL,
	name: "Nash Pillai",
	description: "Nash Pillai's personal website",
	image: getCldImageUrl({ src: "nashpillai.com/preview" }),
	sameAs: ["https://www.linkedin.com/in/nash-pillai/", "https://github.com/nash-pillai/"],
};

const projects = [
	{
		name: "deaplearning.com",
		description: "AI tutoring platform. 300k users, $10k ARR. Next.js, Azure.",
		url: "https://deaplearning.com",
		media: { type: "video" as const, src: "nashpillai.com/deap1" },
	},
	{
		name: "progressincongress.org",
		description: "Congressional bill tracker. Won Congressional App Challenge, demoed at US Capitol.",
		url: "https://progressincongress.org",
		media: { type: "image" as const, src: "nashpillai.com/congress1" },
	},
	{
		name: "tednitiative.org",
		description: "Environmental awareness platform. Built with Next.js and Tailwind CSS.",
		url: "https://tednitiative.org",
		media: { type: "image" as const, src: "nashpillai.com/tedi" },
	},
	{
		name: "stapplet.com",
		description: "Interactive statistics learning tool. 100k DAU. React reimplementation.",
		url: "https://stapplet.com",
		media: null,
	},
	{
		name: "inventory.jaybots.org",
		description: "Inventory management system for robotics team. Next.js, Prisma, PostgreSQL.",
		url: "https://inventory.jaybots.org",
		media: { type: "image" as const, src: "nashpillai.com/inventory" },
	},
];

const experience = [
	{
		period: "Aug 2023 -- Present",
		role: "Director of Web Development",
		company: "Ember Learning",
		details: [
			"AP Exam Simulator: $400k revenue, 160k students",
			"deaplearning.com: AI tutors, 300k users, $10k ARR",
			"Infrastructure: Azure, Railway",
			"emberlearning.org: AI TAs at district scale",
		],
	},
	{
		period: "Jun 2025 -- Present",
		role: "Independent Contractor",
		company: "Stapplet LLC",
		details: ["100k DAU, found privilege escalation vulnerability", "React reimplementation"],
	},
	{
		period: "Aug 2025 -- Present",
		role: "CTF Team Captain",
		company: "GreyHat @ Georgia Tech",
		details: ["LLM-based CTF solving agent", "CSAW 13th North America, corCTF top 10%"],
	},
	{
		period: "Jun 2022 -- May 2025",
		role: "President",
		company: "Jaybots FTC #16700",
		details: [
			"World Championship, #1 Judge's Choice",
			"Kalman filters, OpenCV, Kotlin/Java",
			"Inventory management system",
		],
	},
];

const skills = {
	Backend: ["Python", "Java", "Kotlin", "Docker", "SQL", "PostgreSQL", "Node.js", "OpenCV", "MongoDB", "Git"],
	Web: ["TypeScript", "JavaScript", "React", "Next.js", "Redux", "Tailwind CSS", "Prisma", "Stripe"],
	DevOps: ["Linux", "NixOS", "Azure", "GCP", "Bash", "CI/CD", "Docker"],
};

const awards = [
	"BSides Atlanta: 1st CTF, youngest of 400+",
	"Congressional App Challenge Winner -- US Capitol",
	"FTC World Championship, Dean's List Finalist",
	"AI Atlanta Hackathon: 1st in two tracks",
	"CMIMC: 6th of 96",
	"IBM Certified Cybersecurity Analyst",
	"3x Control Award (best robot code)",
	"Science Olympiad NY State: 1st Robot Tour, 1st Forensics",
];

export default function HomePage() {
	return (
		<main className="min-h-screen bg-white text-black">
			<JsonLd data={jsonLd} />

			{/* ===== HERO ===== */}
			<section className="pb-16 pt-24 md:pt-32">
				<div className="swiss-grid items-end">
					<div className="col-span-12 md:col-span-8">
						<ScrollReveal>
							<h1 className="text-[12vw] font-extrabold leading-[0.9] tracking-tight md:text-[6vw]">
								NASH
								<br />
								PILLAI
							</h1>
						</ScrollReveal>
					</div>
					<div className="col-span-12 md:col-span-4">
						<SlideInRed delay={0.3}>
							<div className="h-32 w-full bg-[#E63322] md:h-48" />
						</SlideInRed>
					</div>
					<div className="col-span-12">
						<ScrollReveal delay={0.2}>
							<p className="swiss-label mb-2">Honors CS @ Georgia Tech -- Cybersecurity & AI -- 4.0 GPA -- 2025-2027</p>
							<p className="swiss-label">8 Years Programming -- NixOS User -- Fishkill, NY</p>
						</ScrollReveal>
					</div>
					<div className="col-span-12">
						<hr className="swiss-rule" />
					</div>
					<ScrollReveal delay={0.4} className="col-span-6 md:col-span-3">
						<div className="swiss-label mb-1">Experience</div>
						<div className="text-2xl font-bold">8+ Years</div>
					</ScrollReveal>
					<ScrollReveal delay={0.5} className="col-span-6 md:col-span-3">
						<div className="swiss-label mb-1">Users Impacted</div>
						<div className="text-2xl font-bold">500k+</div>
					</ScrollReveal>
					<ScrollReveal delay={0.6} className="col-span-6 md:col-span-3">
						<div className="swiss-label mb-1">Revenue Generated</div>
						<div className="text-2xl font-bold">$400k+</div>
					</ScrollReveal>
					<ScrollReveal delay={0.7} className="col-span-6 md:col-span-3">
						<div className="swiss-label mb-1">GPA</div>
						<div className="text-2xl font-bold">4.0</div>
					</ScrollReveal>
				</div>
			</section>

			<hr className="swiss-rule mx-auto max-w-[1200px] px-8" />

			{/* ===== 01 SELECTED WORK ===== */}
			<section className="py-24 md:py-32">
				<div className="swiss-grid">
					<SlideInRed className="col-span-12 md:col-span-2">
						<span className="swiss-section-number text-7xl md:text-8xl">01</span>
					</SlideInRed>
					<ScrollReveal className="col-span-12 md:col-span-10" delay={0.1}>
						<h2 className="text-3xl font-bold uppercase tracking-[0.1em] md:text-4xl">Selected Work</h2>
					</ScrollReveal>
					<div className="col-span-12">
						<hr className="swiss-rule" />
					</div>
				</div>
				{projects.map((project, i) => (
					<div key={project.name} className="swiss-grid mt-8 items-start">
						<ScrollReveal className="col-span-12 md:col-span-4" delay={0.1}>
							<div className="swiss-label mb-2">0{i + 1}</div>
							<Link
								href={project.url}
								target="_blank"
								className="group inline-flex items-center gap-2 text-xl font-bold hover:text-[#E63322]"
							>
								{project.name}
								<ExternalLink size={16} className="opacity-0 transition-opacity group-hover:opacity-100" />
							</Link>
						</ScrollReveal>
						<ScrollReveal className="col-span-12 md:col-span-4" delay={0.2}>
							<p className="text-base leading-relaxed text-[#999999]">{project.description}</p>
						</ScrollReveal>
						<ScrollReveal className="col-span-12 md:col-span-4" delay={0.3}>
							{project.media?.type === "video" && (
								<video
									src={getCldVideoUrl({ src: project.media.src })}
									autoPlay
									loop
									muted
									playsInline
									className="w-full"
								/>
							)}
							{project.media?.type === "image" && (
								<img
									src={getCldImageUrl({ src: project.media.src, width: 600 })}
									alt={project.name}
									className="w-full"
								/>
							)}
						</ScrollReveal>
						{i < projects.length - 1 && (
							<div className="col-span-12">
								<hr className="swiss-rule" />
							</div>
						)}
					</div>
				))}
			</section>

			<hr className="swiss-rule mx-auto max-w-[1200px] px-8" />

			{/* ===== 02 EXPERIENCE ===== */}
			<section className="bg-[#F2F2F2] py-24 md:py-32">
				<div className="swiss-grid">
					<SlideInRed className="col-span-12 md:col-span-2">
						<span className="swiss-section-number text-7xl md:text-8xl">02</span>
					</SlideInRed>
					<ScrollReveal className="col-span-12 md:col-span-10" delay={0.1}>
						<h2 className="text-3xl font-bold uppercase tracking-[0.1em] md:text-4xl">Experience</h2>
					</ScrollReveal>
					<div className="col-span-12">
						<hr className="swiss-rule" />
					</div>
				</div>
				{experience.map((exp, i) => (
					<div key={exp.company} className="swiss-grid mt-8">
						<ScrollReveal className="col-span-12 md:col-span-3" delay={0.1}>
							<div className="swiss-label">{exp.period}</div>
						</ScrollReveal>
						<ScrollReveal className="col-span-12 md:col-span-9" delay={0.2}>
							<h3 className="text-xl font-bold">{exp.role}</h3>
							<p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-[#E63322]">
								{exp.company}
							</p>
							<ul className="space-y-1">
								{exp.details.map((detail) => (
									<li key={detail} className="text-sm leading-relaxed text-[#999999]">
										{detail}
									</li>
								))}
							</ul>
						</ScrollReveal>
						{i < experience.length - 1 && (
							<div className="col-span-12">
								<hr className="swiss-rule" />
							</div>
						)}
					</div>
				))}
			</section>

			<hr className="swiss-rule mx-auto max-w-[1200px] px-8" />

			{/* ===== 03 SKILLS ===== */}
			<section className="py-24 md:py-32">
				<div className="swiss-grid">
					<SlideInRed className="col-span-12 md:col-span-2">
						<span className="swiss-section-number text-7xl md:text-8xl">03</span>
					</SlideInRed>
					<ScrollReveal className="col-span-12 md:col-span-10" delay={0.1}>
						<h2 className="text-3xl font-bold uppercase tracking-[0.1em] md:text-4xl">Skills</h2>
					</ScrollReveal>
					<div className="col-span-12">
						<hr className="swiss-rule" />
					</div>
					{Object.entries(skills).map(([category, items], i) => (
						<ScrollReveal key={category} className="col-span-12 md:col-span-4" delay={0.1 * (i + 1)}>
							<h3 className="swiss-label mb-4">{category}</h3>
							<ul className="space-y-1">
								{items.map((skill) => (
									<li key={skill} className="text-base">{skill}</li>
								))}
							</ul>
						</ScrollReveal>
					))}
				</div>
			</section>

			<hr className="swiss-rule mx-auto max-w-[1200px] px-8" />

			{/* ===== 04 AWARDS ===== */}
			<section className="bg-[#F2F2F2] py-24 md:py-32">
				<div className="swiss-grid">
					<SlideInRed className="col-span-12 md:col-span-2">
						<span className="swiss-section-number text-7xl md:text-8xl">04</span>
					</SlideInRed>
					<ScrollReveal className="col-span-12 md:col-span-10" delay={0.1}>
						<h2 className="text-3xl font-bold uppercase tracking-[0.1em] md:text-4xl">Awards</h2>
					</ScrollReveal>
					<div className="col-span-12">
						<hr className="swiss-rule" />
					</div>
					<div className="col-span-12 md:col-span-6">
						{awards.slice(0, 4).map((award, i) => (
							<ScrollReveal key={award} delay={0.1 * (i + 1)}>
								<div className="flex items-start gap-3 py-2">
									<span className="mt-1.5 block h-2 w-2 flex-shrink-0 bg-[#E63322]" />
									<span className="text-base">{award}</span>
								</div>
							</ScrollReveal>
						))}
					</div>
					<div className="col-span-12 md:col-span-6">
						{awards.slice(4).map((award, i) => (
							<ScrollReveal key={award} delay={0.1 * (i + 1)}>
								<div className="flex items-start gap-3 py-2">
									<span className="mt-1.5 block h-2 w-2 flex-shrink-0 bg-[#E63322]" />
									<span className="text-base">{award}</span>
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

			{/* ===== CONTACT ===== */}
			<section className="bg-black py-24 text-white md:py-32">
				<div className="swiss-grid">
					<ScrollReveal className="col-span-12 text-center">
						<div className="swiss-label mb-6 !text-[#999999]">Get in touch</div>
						<Link
							href="mailto:nash.pillai@protonmail.com"
							className="text-2xl font-bold transition-colors hover:text-[#E63322] md:text-4xl"
						>
							nash.pillai@protonmail.com
						</Link>
					</ScrollReveal>
					<div className="col-span-12">
						<div className="mt-12 flex flex-wrap items-center justify-center gap-8">
							<Link
								href="https://linkedin.com/in/nash-pillai"
								target="_blank"
								className="swiss-label !text-white transition-colors hover:!text-[#E63322]"
							>
								LinkedIn
							</Link>
							<Link
								href="https://github.com/nash-pillai"
								target="_blank"
								className="swiss-label !text-white transition-colors hover:!text-[#E63322]"
							>
								GitHub
							</Link>
							<Link
								href="/resume"
								className="swiss-label !text-white transition-colors hover:!text-[#E63322]"
							>
								Resume
							</Link>
							<Link
								href="/nash.gpg"
								className="swiss-label !text-white transition-colors hover:!text-[#E63322]"
							>
								GPG Key
							</Link>
						</div>
					</div>
					<ScrollReveal className="col-span-12 mt-8 text-center" delay={0.2}>
						<p className="font-mono text-xs text-[#999999]">
							F10A5FFB4E9B82863D31E7E76508E71EC5318FAD
						</p>
					</ScrollReveal>
				</div>
			</section>
		</main>
	);
}
