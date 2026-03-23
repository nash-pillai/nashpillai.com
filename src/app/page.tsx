import { JsonLd } from "@/components/jsonLd";
import { getCldImageUrl, getCldVideoUrl } from "next-cloudinary";
import Link from "next/link";
import { env } from "process";
import { type WebSite, type WithContext } from "schema-dts";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { ExternalLink, Github, Linkedin, Mail, FileText, Key, ArrowDown } from "lucide-react";
import { HeroName, HeroTagline, HeroBadge, ScrollArrow } from "@/components/brutalist/HeroSection";
import { ProjectCard, ProjectsGrid, ProjectItem } from "@/components/brutalist/ProjectCard";
import { TimelineContainer, TimelineItem } from "@/components/brutalist/ExperienceTimeline";
import { AwardsGrid, AwardItem } from "@/components/brutalist/AwardBlock";
import { ContactLink, ContactContainer, ContactItem } from "@/components/brutalist/ContactLinks";
import { SlideIn } from "@/components/brutalist/AnimatedSection";
import { SkillsMarquee } from "@/components/brutalist/SkillsMarquee";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-bebas-neue" });
const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dm-sans" });

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
		title: "DEAP LEARNING",
		subtitle: "AI Tutors for Education",
		description: "AI tutors trained for your courses. 300k users, $10k ARR. Built with Next.js.",
		link: "https://deaplearning.com",
		linkLabel: "deaplearning.com",
		media: { type: "video" as const, src: "nashpillai.com/deap1" },
		span: 2 as const,
	},
	{
		title: "PROGRESS IN CONGRESS",
		subtitle: "Congressional Bill Tracker",
		description: "Track bills through Congress. Won Congressional App Challenge, demoed at US Capitol.",
		link: "https://progressincongress.org",
		linkLabel: "progressincongress.org",
		media: { type: "image" as const, src: "nashpillai.com/congress1" },
		span: 1 as const,
	},
	{
		title: "STAPPLET",
		subtitle: "Interactive Statistics",
		description: "Interactive statistics platform. 100k DAU. Found privilege escalation vuln, React reimplementation.",
		link: "https://stapplet.com",
		linkLabel: "stapplet.com",
		span: 1 as const,
	},
	{
		title: "TEDNITIATIVE",
		subtitle: "Environmental Action",
		description: "Stay informed and fight to defend the environment. Built with Next.js and Tailwind.",
		link: "https://tednitiative.org",
		linkLabel: "tednitiative.org",
		media: { type: "image" as const, src: "nashpillai.com/tedi" },
		span: 1 as const,
	},
	{
		title: "JAYBOTS INVENTORY",
		subtitle: "Parts Management System",
		description: "Manage tens of thousands of parts for FTC robotics. Built with Next.js.",
		link: "https://inventory.jaybots.org",
		linkLabel: "inventory.jaybots.org",
		media: { type: "image" as const, src: "nashpillai.com/inventory" },
		span: 1 as const,
	},
];

const experiences = [
	{
		title: "Director of Web Development",
		org: "Ember Learning",
		date: "Aug 2023 - Present",
		points: [
			"AP Exam Simulator: $400k revenue, 160k students",
			"deaplearning.com: AI tutors, 300k users, $10k ARR",
			"Infrastructure: Azure, Railway",
			"emberlearning.org: AI teaching assistants at district scale",
		],
	},
	{
		title: "CTF Team Captain",
		org: "GreyHat @ Georgia Tech",
		date: "Aug 2025 - Present",
		points: [
			"LLM-based CTF solving agent",
			"CSAW 13th North America, corCTF top 10%",
		],
	},
	{
		title: "President",
		org: "Jaybots FTC #16700",
		date: "June 2022 - May 2025",
		points: [
			"World Championship, #1 Judge's Choice",
			"Kalman filters, OpenCV, Kotlin/Java robot control",
			"Inventory management system",
		],
	},
	{
		title: "Independent Contractor",
		org: "Stapplet LLC",
		date: "June 2025 - Present",
		points: [
			"stapplet.com: 100k DAU, found privilege escalation vuln",
			"React reimplementation",
		],
	},
];

const awards = [
	{ title: "IBM Certified Cybersecurity Analyst", short: true },
	{ title: "BSides Atlanta: 1st CTF", detail: "Youngest of 400+", short: false },
	{ title: "AI Atlanta Hackathon", detail: "1st in two tracks", short: true },
	{ title: "2x Lockheed Martin CyberQuest: 2nd", short: true },
	{ title: "FTC World Championship", detail: "Dean's List Finalist", short: false },
	{ title: "3x Control Award", detail: "Best robot code", short: true },
	{ title: "CMIMC: 6th of 96", short: true },
	{ title: "Congressional App Challenge Winner", detail: "Presented at US Capitol", short: false },
	{ title: "Science Olympiad NY State", detail: "1st Robot Tour, 1st Forensics", short: false },
];

const backendSkills = ["Python", "Java", "Kotlin", "Docker", "SQL", "PostgreSQL", "Node.js", "OpenCV", "MongoDB", "Git"];
const webSkills = ["TypeScript", "JavaScript", "React", "Next.js", "Redux", "Tailwind CSS", "Prisma", "Stripe"];
const devopsSkills = ["Linux", "NixOS", "Azure", "GCP", "Bash", "CI/CD", "Docker"];

export default function HomePage() {
	return (
		<main className={`${bebasNeue.variable} ${dmSans.variable}`} style={{ fontFamily: "var(--font-dm-sans)" }}>
			<JsonLd data={jsonLd} />

			{/* ===== SECTION 1: HERO ===== */}
			<section className="relative min-h-screen overflow-hidden bg-[#F5F0E8] grid-bg">
				{/* Decorative corner blocks */}
				<div className="absolute right-0 top-0 h-32 w-32 border-b-[6px] border-l-[6px] border-[#0A0A0A] bg-[#0047FF] md:h-48 md:w-48" />
				<div className="absolute bottom-0 left-0 h-24 w-24 border-r-[6px] border-t-[6px] border-[#0A0A0A] bg-[#FF0054] md:h-36 md:w-36" />

				<div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 md:px-12">
					{/* Rotated tagline on left edge */}
					<HeroTagline />

					{/* Main content block with thick border */}
					<div className="relative border-[6px] border-[#0A0A0A] bg-[#F5F0E8] p-8 md:p-12 lg:p-16">
						{/* The big name */}
						<HeroName />

						{/* Georgia Tech badge - overlapping */}
						<HeroBadge />

						{/* Bio line */}
						<SlideIn direction="bottom" delay={0.8}>
							<div className="mt-8 max-w-2xl border-t-[4px] border-[#0A0A0A] pt-6">
								<p className="text-lg text-[#0A0A0A]/80 md:text-xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
									Honors CS @ Georgia Tech. B.S. Computer Science, Cybersecurity &amp; AI concentrations.
									4.0 GPA. 8 years programming. NixOS user.
								</p>
								<div className="mt-4 flex flex-wrap gap-3">
									{["Fishkill, NY"].map((tag) => (
										<span
											key={tag}
											className="border-[3px] border-[#0A0A0A] px-3 py-1 text-sm font-bold uppercase tracking-wider text-[#0A0A0A]"
											style={{ fontFamily: "var(--font-bebas-neue)" }}
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</SlideIn>

						{/* Quick links row */}
						<SlideIn direction="right" delay={1}>
							<div className="mt-8 flex flex-wrap gap-4">
								<Link
									href="https://linkedin.com/in/nash-pillai"
									target="_blank"
									className="invert-hover flex items-center gap-2 border-[3px] border-[#0A0A0A] bg-[#0A0A0A] px-4 py-2 font-bold uppercase text-[#F5F0E8] hover:bg-[#F5F0E8] hover:text-[#0A0A0A]"
									style={{ fontFamily: "var(--font-bebas-neue)" }}
								>
									<Linkedin size={18} /> LinkedIn
								</Link>
								<Link
									href="https://github.com/nash-pillai"
									target="_blank"
									className="invert-hover flex items-center gap-2 border-[3px] border-[#0A0A0A] bg-[#0A0A0A] px-4 py-2 font-bold uppercase text-[#F5F0E8] hover:bg-[#F5F0E8] hover:text-[#0A0A0A]"
									style={{ fontFamily: "var(--font-bebas-neue)" }}
								>
									<Github size={18} /> GitHub
								</Link>
								<Link
									href="mailto:nash.pillai@protonmail.com"
									className="invert-hover flex items-center gap-2 border-[3px] border-[#0A0A0A] bg-[#0047FF] px-4 py-2 font-bold uppercase text-white hover:bg-[#F5F0E8] hover:text-[#0047FF]"
									style={{ fontFamily: "var(--font-bebas-neue)" }}
								>
									<Mail size={18} /> Email
								</Link>
							</div>
						</SlideIn>
					</div>

					{/* Scroll indicator */}
					<ScrollArrow />
				</div>
			</section>

			{/* ===== SECTION 2: PROJECTS ===== */}
			<section className="relative overflow-hidden bg-[#0A0A0A] stripe-pattern-light py-24 md:py-32">
				<div className="mx-auto max-w-7xl px-6 md:px-12">
					{/* Section header */}
					<SlideIn direction="left" rotate={-3}>
						<div className="mb-16 inline-block border-[6px] border-white bg-[#FF0054] px-8 py-4">
							<h2
								className="text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
								style={{ fontFamily: "var(--font-bebas-neue)" }}
							>
								PROJECTS
							</h2>
						</div>
					</SlideIn>

					<ProjectsGrid>
						{projects.map((project, i) => (
							<ProjectItem
								key={project.title}
								direction={i % 3 === 0 ? "left" : i % 3 === 1 ? "right" : "bottom"}
								className={project.span === 2 ? "md:col-span-2" : ""}
							>
								<ProjectCard span={project.span}>
									<div className="flex flex-col gap-4">
										{/* Project image/video */}
										{project.media && (
											<div className="relative -mx-6 -mt-6 mb-2 overflow-hidden border-b-[4px] border-white">
												{project.media.type === "video" ? (
													<video
														src={getCldVideoUrl({ src: project.media.src })}
														autoPlay
														loop
														muted
														playsInline
														className="w-full object-cover"
														style={{ maxHeight: "300px" }}
													/>
												) : (
													<img
														src={getCldImageUrl({ src: project.media.src })}
														alt={project.title}
														className="w-full object-cover"
														style={{ maxHeight: "300px" }}
													/>
												)}
												{/* Title overlapping the image */}
												<div className="absolute bottom-0 left-0 bg-[#0A0A0A]/90 px-4 py-2">
													<h3
														className="text-2xl font-bold text-[#FF0054] md:text-3xl"
														style={{ fontFamily: "var(--font-bebas-neue)" }}
													>
														{project.title}
													</h3>
												</div>
											</div>
										)}
										{!project.media && (
											<h3
												className="text-2xl font-bold text-[#FF0054] md:text-3xl"
												style={{ fontFamily: "var(--font-bebas-neue)" }}
											>
												{project.title}
											</h3>
										)}
										<p className="text-sm uppercase tracking-widest text-white/60">{project.subtitle}</p>
										<p className="text-base text-white/80" style={{ fontFamily: "var(--font-dm-sans)" }}>
											{project.description}
										</p>
										<Link
											href={project.link}
											target="_blank"
											className="invert-hover mt-2 inline-flex items-center gap-2 self-start border-[3px] border-[#FF0054] px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#FF0054] hover:bg-[#FF0054] hover:text-white"
											style={{ fontFamily: "var(--font-bebas-neue)" }}
										>
											<ExternalLink size={14} /> {project.linkLabel}
										</Link>
									</div>
								</ProjectCard>
							</ProjectItem>
						))}
					</ProjectsGrid>
				</div>
			</section>

			{/* ===== SECTION 3: EXPERIENCE ===== */}
			<section className="relative overflow-hidden bg-[#0047FF] dot-pattern-light py-24 md:py-32">
				{/* Decorative rotated text */}
				<div
					className="absolute -right-16 top-1/4 hidden -rotate-90 text-[10vw] font-bold leading-none tracking-tighter text-white/5 lg:block"
					style={{ fontFamily: "var(--font-bebas-neue)" }}
				>
					EXPERIENCE
				</div>

				<div className="mx-auto max-w-5xl px-6 md:px-12">
					<SlideIn direction="right" rotate={2}>
						<div className="mb-16 inline-block border-[6px] border-white bg-[#FFE600] px-8 py-4">
							<h2
								className="text-5xl font-bold tracking-tight text-[#0A0A0A] md:text-7xl lg:text-8xl"
								style={{ fontFamily: "var(--font-bebas-neue)" }}
							>
								EXPERIENCE
							</h2>
						</div>
					</SlideIn>

					<TimelineContainer>
						{experiences.map((exp, i) => (
							<TimelineItem key={exp.title + exp.org} index={i} date={exp.date}>
								<div className="border-[4px] border-white bg-[#0A0A0A]/20 p-6 backdrop-blur-sm">
									<h3
										className="text-2xl font-bold text-white md:text-3xl"
										style={{ fontFamily: "var(--font-bebas-neue)" }}
									>
										{exp.title}
									</h3>
									<p
										className="mt-1 text-lg font-bold text-[#FFE600]"
										style={{ fontFamily: "var(--font-bebas-neue)" }}
									>
										{exp.org}
									</p>
									<ul className="mt-3 space-y-1">
										{exp.points.map((point) => (
											<li key={point} className="flex items-start gap-2 text-sm text-white/90" style={{ fontFamily: "var(--font-dm-sans)" }}>
												<span className="mt-1 h-2 w-2 flex-shrink-0 bg-[#FFE600]" />
												{point}
											</li>
										))}
									</ul>
								</div>
							</TimelineItem>
						))}
					</TimelineContainer>
				</div>
			</section>

			{/* ===== SKILLS MARQUEE BREAK ===== */}
			<SkillsMarquee skills={[...backendSkills, ...webSkills, ...devopsSkills]} direction="left" />

			{/* ===== SECTION 4: AWARDS & SKILLS ===== */}
			<section className="relative overflow-hidden bg-[#FF0054] py-24 md:py-32">
				{/* Dot pattern overlay */}
				<div className="absolute inset-0 dot-pattern" style={{ opacity: 0.3 }} />

				<div className="relative mx-auto max-w-7xl px-6 md:px-12">
					{/* Skills subsection */}
					<SlideIn direction="left">
						<div className="mb-12 inline-block border-[6px] border-[#0A0A0A] bg-white px-8 py-4">
							<h2
								className="text-5xl font-bold tracking-tight text-[#0A0A0A] md:text-7xl lg:text-8xl"
								style={{ fontFamily: "var(--font-bebas-neue)" }}
							>
								SKILLS
							</h2>
						</div>
					</SlideIn>

					<div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
						<SlideIn direction="left" delay={0.1}>
							<div className="border-[4px] border-[#0A0A0A] bg-white p-6">
								<h3
									className="mb-4 text-xl font-bold uppercase text-[#0A0A0A]"
									style={{ fontFamily: "var(--font-bebas-neue)" }}
								>
									Backend
								</h3>
								<div className="flex flex-wrap gap-2">
									{backendSkills.map((skill) => (
										<span
											key={skill}
											className="border-[2px] border-[#0A0A0A] bg-[#FF0054] px-3 py-1 text-xs font-bold uppercase text-white"
											style={{ fontFamily: "var(--font-bebas-neue)" }}
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</SlideIn>
						<SlideIn direction="bottom" delay={0.2}>
							<div className="border-[4px] border-[#0A0A0A] bg-white p-6">
								<h3
									className="mb-4 text-xl font-bold uppercase text-[#0A0A0A]"
									style={{ fontFamily: "var(--font-bebas-neue)" }}
								>
									Web
								</h3>
								<div className="flex flex-wrap gap-2">
									{webSkills.map((skill) => (
										<span
											key={skill}
											className="border-[2px] border-[#0A0A0A] bg-[#0047FF] px-3 py-1 text-xs font-bold uppercase text-white"
											style={{ fontFamily: "var(--font-bebas-neue)" }}
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</SlideIn>
						<SlideIn direction="right" delay={0.3}>
							<div className="border-[4px] border-[#0A0A0A] bg-white p-6">
								<h3
									className="mb-4 text-xl font-bold uppercase text-[#0A0A0A]"
									style={{ fontFamily: "var(--font-bebas-neue)" }}
								>
									DevOps
								</h3>
								<div className="flex flex-wrap gap-2">
									{devopsSkills.map((skill) => (
										<span
											key={skill}
											className="border-[2px] border-[#0A0A0A] bg-[#0A0A0A] px-3 py-1 text-xs font-bold uppercase text-white"
											style={{ fontFamily: "var(--font-bebas-neue)" }}
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</SlideIn>
					</div>

					{/* Awards subsection */}
					<SlideIn direction="right" rotate={-2}>
						<div className="mb-12 inline-block border-[6px] border-[#0A0A0A] bg-[#FFE600] px-8 py-4">
							<h2
								className="text-5xl font-bold tracking-tight text-[#0A0A0A] md:text-7xl lg:text-8xl"
								style={{ fontFamily: "var(--font-bebas-neue)" }}
							>
								AWARDS
							</h2>
						</div>
					</SlideIn>

					<AwardsGrid>
						{awards.map((award, i) => (
							<AwardItem key={award.title} index={i} size={award.short ? "normal" : "large"}>
								<div className="flex items-start gap-3">
									<span
										className="flex-shrink-0 text-3xl font-bold leading-none text-[#FF0054]"
										style={{ fontFamily: "var(--font-bebas-neue)" }}
									>
										{String(i + 1).padStart(2, "0")}
									</span>
									<div>
										<h4
											className="text-base font-bold uppercase leading-tight"
											style={{ fontFamily: "var(--font-bebas-neue)" }}
										>
											{award.title}
										</h4>
										{award.detail && (
											<p className="mt-1 text-xs text-[#0A0A0A]/70" style={{ fontFamily: "var(--font-dm-sans)" }}>
												{award.detail}
											</p>
										)}
									</div>
								</div>
							</AwardItem>
						))}
					</AwardsGrid>
				</div>
			</section>

			{/* ===== SKILLS MARQUEE BREAK (reverse) ===== */}
			<SkillsMarquee skills={[...webSkills, ...backendSkills, ...devopsSkills]} direction="right" />

			{/* ===== SECTION 5: CONTACT ===== */}
			<section className="relative overflow-hidden bg-[#0A0A0A] grid-bg-light py-24 md:py-32">
				<div className="mx-auto max-w-5xl px-6 md:px-12">
					<SlideIn direction="bottom">
						<h2
							className="mb-4 text-6xl font-bold tracking-tight text-[#F5F0E8] md:text-8xl lg:text-[10vw]"
							style={{ fontFamily: "var(--font-bebas-neue)" }}
						>
							LET&apos;S TALK
						</h2>
					</SlideIn>

					<SlideIn direction="left" delay={0.2}>
						<p className="mb-12 max-w-xl text-lg text-[#F5F0E8]/70" style={{ fontFamily: "var(--font-dm-sans)" }}>
							Always open to interesting projects, collaborations, and conversations about security, AI, or web development.
						</p>
					</SlideIn>

					<ContactContainer>
						<ContactItem direction="left">
							<ContactLink href="mailto:nash.pillai@protonmail.com" className="flex items-center gap-4">
								<Mail size={24} className="flex-shrink-0" />
								<div>
									<div className="text-xs uppercase tracking-widest opacity-60">Email</div>
									<div
										className="text-2xl font-bold md:text-3xl"
										style={{ fontFamily: "var(--font-bebas-neue)" }}
									>
										nash.pillai@protonmail.com
									</div>
								</div>
							</ContactLink>
						</ContactItem>

						<ContactItem direction="right">
							<ContactLink href="https://linkedin.com/in/nash-pillai" className="flex items-center gap-4">
								<Linkedin size={24} className="flex-shrink-0" />
								<div>
									<div className="text-xs uppercase tracking-widest opacity-60">LinkedIn</div>
									<div
										className="text-2xl font-bold md:text-3xl"
										style={{ fontFamily: "var(--font-bebas-neue)" }}
									>
										linkedin.com/in/nash-pillai
									</div>
								</div>
							</ContactLink>
						</ContactItem>

						<ContactItem direction="left">
							<ContactLink href="https://github.com/nash-pillai" className="flex items-center gap-4">
								<Github size={24} className="flex-shrink-0" />
								<div>
									<div className="text-xs uppercase tracking-widest opacity-60">GitHub</div>
									<div
										className="text-2xl font-bold md:text-3xl"
										style={{ fontFamily: "var(--font-bebas-neue)" }}
									>
										github.com/nash-pillai
									</div>
								</div>
							</ContactLink>
						</ContactItem>

						<ContactItem direction="right">
							<ContactLink href="/resume" className="flex items-center gap-4">
								<FileText size={24} className="flex-shrink-0" />
								<div>
									<div className="text-xs uppercase tracking-widest opacity-60">Resume</div>
									<div
										className="text-2xl font-bold md:text-3xl"
										style={{ fontFamily: "var(--font-bebas-neue)" }}
									>
										View Resume
									</div>
								</div>
							</ContactLink>
						</ContactItem>

						<ContactItem direction="left">
							<ContactLink href="/nash.gpg" className="flex items-center gap-4">
								<Key size={24} className="flex-shrink-0" />
								<div>
									<div className="text-xs uppercase tracking-widest opacity-60">GPG Key</div>
									<div
										className="break-all text-sm font-mono text-[#0047FF] md:text-base"
									>
										F10A5FFB4E9B82863D31E7E76508E71EC5318FAD
									</div>
								</div>
							</ContactLink>
						</ContactItem>
					</ContactContainer>

					{/* Hidden rickroll link */}
					<SlideIn direction="bottom" delay={0.6}>
						<div className="mt-16 text-center">
							<Link
								href="/about"
								className="text-xs uppercase tracking-widest text-[#F5F0E8]/20 transition-colors hover:text-[#FF0054]"
								style={{ fontFamily: "var(--font-bebas-neue)" }}
							>
								secret darknet portal
							</Link>
						</div>
					</SlideIn>

					{/* Footer */}
					<div className="mt-24 border-t-[4px] border-[#F5F0E8]/10 pt-8 text-center">
						<p className="text-sm text-[#F5F0E8]/30" style={{ fontFamily: "var(--font-dm-sans)" }}>
							Nash Pillai
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
