import { JsonLd } from "@/components/jsonLd";
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";
import { EducationItem } from "@/components/EducationItem";
import { AchievementItem } from "@/components/AchievementItem";
import { GpgKey } from "@/components/GpgKey";
import { getCldImageUrl } from "next-cloudinary";
import Link from "next/link";
import { env } from "process";
import { type WebSite, type WithContext } from "schema-dts";

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
		<main className="max-w-4xl mx-auto px-6 py-20 md:py-32 selection:bg-zinc-800 selection:text-zinc-200">
			<JsonLd data={jsonLd} />
			
			<header className="mb-24 md:mb-32">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
					<div className="space-y-4">
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
							Nash Pillai
						</h1>
						<div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono text-zinc-500 uppercase tracking-widest">
							<span>Fishkill, NY</span>
							<span className="hidden md:inline h-1 w-1 rounded-full bg-zinc-800" />
							<span>US Citizen</span>
						</div>
					</div>
					
					<nav className="flex items-center gap-6">
						{[
							{ label: "Email", url: "mailto:nash.pillai@protonmail.com" },
							{ label: "GitHub", url: "https://github.com/nash-pillai" },
							{ label: "LinkedIn", url: "https://www.linkedin.com/in/nash-pillai" },
						].map((link) => (
							<a
								key={link.label}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm font-medium text-zinc-400 hover:text-white transition-colors underline underline-offset-8 decoration-zinc-800 hover:decoration-zinc-500"
							>
								{link.label}
							</a>
						))}
					</nav>
				</div>
				
				<GpgKey fingerprint="F10A 5FFB 4E9B 8286 3D31  E7E7 6508 E71E C531 8FAD" />
			</header>

			<Section title="Experience">
				<ExperienceItem
					company="Ember Learning"
					role="Director of Web Development"
					period="Aug 2023 – Present"
					description={[
						"Created an AP Exam Simulator for the Ultimate Review Packet that generated $400k and was used by 160k students",
						"Led dev team to design and ship the frontend and backend of deaplearning.com, scaling to 300k users",
						"Deployed and maintained server, database, AI infrastructure, and networking on Azure and Railway",
						"Integrated telemetry and observability using Sentry and Posthog; ran A/B testing for user retention",
					]}
					links={[{ label: "deaplearning.com", url: "https://deaplearning.com" }, { label: "emberlearning.org", url: "https://emberlearning.org" }]}
				/>
				
				<ExperienceItem
					company="GreyHat (Cybersecurity Club)"
					role="CTF Team Captain & Sponsorship Manager"
					period="Aug 2025 – Present"
					description={[
						"Led team that built an LLM-based CTF solving agent, with automated self-training based on writeups",
						"Competed in multiple CTFs, including CSAW (13th in North America), corCTF (top 10%), and Buckeye CTF",
						"Gave multiple talks and ran workshops for the club on exploitation and security automation",
					]}
				/>
				
				<ExperienceItem
					company="John Jay Robotics (FTC #16700)"
					role="President & Programming Leader"
					period="June 2022 – May 2025"
					description={[
						"Led team to qualify and compete at World Championship for the first time in club history",
						"Implemented Kalman filters to combine multiple sensor sources and minimize noise in autonomous flight",
						"Built a full inventory management system with user management and automated part tracking",
						"Engineered production-grade robot control software in Kotlin and Java with custom drivers",
					]}
				/>
				
				<ExperienceItem
					company="Stapplet LLC"
					role="Independent Contractor"
					period="June 2025 – Present"
					description={[
						"Found and fixed a privilege escalation vulnerability allowing any student to become admin",
						"Fixed numerous issues in the existing AP Statistics interactive website with 100k daily active users",
						"Created modern React-based reimplementation of the website using Next.js and Tailwind",
					]}
					links={[{ label: "stapplet.com", url: "https://stapplet.com" }, { label: "nashpillai.stapplet.com", url: "https://stapplet.nashpillai.com" }]}
				/>
			</Section>

			<Section title="Education">
				<EducationItem
					school="Georgia Institute of Technology"
					degree="B.S. Computer Science (Honors)"
					period="2025 – 2027"
					gpa="4.0"
					details={[
						"Concentrations: Cybersecurity & AI",
						"Coursework: Data Structures and Algorithms, Design and Analysis of Algorithms, Linear Algebra",
					]}
				/>
				<EducationItem
					school="John Jay High School"
					degree="Ranked 3rd of 500"
					period="2021 – 2025"
					gpa="103.6"
					details={[
						"Reported critical security vulnerabilities in district CDN and student information systems",
						"Identified and reported student info exposed without proper anonymization",
					]}
				/>
			</Section>

			<Section title="Certifications & Awards">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
					{[
						{ title: "IBM Certified Cybersecurity Analyst" },
						{ title: "BSides Atlanta CTF, 1st Place", description: "Youngest attendee (400+ participants)" },
						{ title: "AI Atlanta Hackathon, 1st Place", description: "Winner in PrizePicks and Matt Steele tracks" },
						{ title: "Congressional App Challenge Winner", description: "Presented at the US Capitol" },
						{ title: "Lockheed Martin CyberQuest, 2nd Place" },
						{ title: "FTC Robotics World Championship", description: "Dean's List Finalist" },
						{ title: "CMIMC Coding Competition, 6th Place", description: "Top decile finish overall" },
						{ title: "Science Olympiad NY State, 1st Place", description: "Robot Tour & Forensics" },
					].map((award, i) => (
						<AchievementItem key={i} title={award.title} description={award.description} />
					))}
				</div>
			</Section>
			
			<footer className="mt-32 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
				<div className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
					© {new Date().getFullYear()} Nash Pillai
				</div>
				<div className="flex gap-8">
					<a href="/nash.gpg" className="text-xs font-mono text-zinc-600 hover:text-zinc-400 transition-colors uppercase tracking-widest">
						GPG KEY
					</a>
					<a href="https://github.com/nash-pillai/nashpillai.com" className="text-xs font-mono text-zinc-600 hover:text-zinc-400 transition-colors uppercase tracking-widest">
						Source
					</a>
				</div>
			</footer>
		</main>
	);
}
