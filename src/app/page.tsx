import { JsonLd } from "@/components/jsonLd";
import { TerminalSection } from "@/components/TerminalSection";
import { TerminalWindow } from "@/components/TerminalWindow";
import Link from "next/link";
import { env } from "@/env";
import { type WebSite, type WithContext } from "schema-dts";
import { Mail, Github, Linkedin, MapPin, Key } from "lucide-react";
import { getCldImageUrl } from "next-cloudinary";

const jsonLd: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: env.URL,
	name: "Nash Pillai",
	description: "Nash Pillai - Software Engineer & Systems Architect",
	image: getCldImageUrl({ src: "nashpillai.com/preview" }),
	sameAs: ["https://www.linkedin.com/in/nash-pillai/", "https://github.com/nash-pillai/"],
};

export default function HomePage() {
	return (
		<main className="min-h-screen p-4 sm:p-8 md:p-12 lg:p-24 bg-black text-green-500 selection:bg-green-500 selection:text-black font-mono">
			<JsonLd data={jsonLd} />

			<div className="max-w-5xl mx-auto space-y-12">
				{/* Header Section */}
				<header className="mb-16">
					<div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
						<h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter">
							NASH PILLAI<span className="terminal-cursor ml-2"></span>
						</h1>
						<div className="text-cyan-400 text-lg sm:text-xl font-bold pb-1 uppercase tracking-[0.2em]">
							[Honors CS @ Georgia Tech]
						</div>
					</div>

					<div className="flex flex-wrap gap-4 text-sm sm:text-base border-y border-gray-800 py-6">
						<div className="flex items-center gap-2 px-3 py-1 border border-gray-800 hover:border-green-500 transition-colors">
							<MapPin size={16} className="text-cyan-400" />
							<span>Fishkill, NY</span>
						</div>
						<Link
							href="mailto:nash.pillai@protonmail.com"
							className="flex items-center gap-2 px-3 py-1 border border-gray-800 hover:border-green-500 hover:text-white transition-colors"
						>
							<Mail size={16} className="text-cyan-400" />
							<span>nash.pillai@protonmail.com</span>
						</Link>
						<Link
							href="https://github.com/nash-pillai/"
							target="_blank"
							className="flex items-center gap-2 px-3 py-1 border border-gray-800 hover:border-green-500 hover:text-white transition-colors"
						>
							<Github size={16} className="text-cyan-400" />
							<span>github.com/nash-pillai</span>
						</Link>
						<Link
							href="https://www.linkedin.com/in/nash-pillai/"
							target="_blank"
							className="flex items-center gap-2 px-3 py-1 border border-gray-800 hover:border-green-500 hover:text-white transition-colors"
						>
							<Linkedin size={16} className="text-cyan-400" />
							<span>linkedin.com/in/nash-pillai</span>
						</Link>
					</div>
				</header>

				<TerminalWindow title="kernel-config.nix">
					<TerminalSection title="Introduction" command="whoami" dir="/etc">
						<p className="text-gray-300 leading-relaxed max-w-3xl">
							Hello, I&apos;m Nash. I used to use Arch, btw, but now I use NixOS as my primary operating system.
							I have 8 years of programming experience and am particularly passionate about higher-level
							mathematics, cybersecurity, and systems architecture. Currently pursuing Honors Computer
							Science at Georgia Tech with concentrations in AI and Cybersecurity.
						</p>
					</TerminalSection>

					<TerminalSection title="Experience" command="ls -l /var/log/experience" dir="/var/log">
						<div className="space-y-8">
							<ExperienceItem
								title="Director of Web Development"
								company="Ember Learning"
								period="Aug 2023 – Present"
								bullets={[
									"Created AP Exam Simulator generating $400k revenue for 160k students",
									"Led dev team for deaplearning.com (AI tutors), scaling to 300k users",
									"Maintained server, database, and AI infrastructure on Azure/Railway",
									"Integrated telemetry (Sentry, Posthog) and ran A/B testing for retention",
								]}
							/>
							<ExperienceItem
								title="CTF Team Captain"
								company="GreyHat (Cybersecurity Club)"
								period="Aug 2025 – Present"
								bullets={[
									"Built LLM-based CTF solving agent with automated self-training",
									"Competed in CSAW (13th in NA), corCTF (top 10%), and Buckeye CTF",
									"Organized talks and workshops for 100+ active members",
								]}
							/>
							<ExperienceItem
								title="President & Programming Leader"
								company="John Jay Robotics (Jaybots FTC #16700)"
								period="June 2022 – May 2025"
								bullets={[
									"Led team to World Championships, winning #1 Judge&apos;s Choice",
									"Implemented Kalman filters for sensor fusion and noise minimization",
									"Engineered production-grade robot control software in Kotlin/Java",
								]}
							/>
						</div>
					</TerminalSection>

					<TerminalSection title="Projects" command="cat /etc/projects.conf" dir="/etc">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<ProjectBox
								title="deaplearning.com"
								desc="AI tutors trained for specific courses, impacting 200k+ students."
								href="https://deaplearning.com/"
							/>
							<ProjectBox
								title="progressincongress.org"
								desc="Congressional bill tracker. Won Congressional App Challenge."
								href="https://progressincongress.org/"
							/>
							<ProjectBox
								title="stapplet.com"
								desc="Interactive statistics platform for 100k+ daily active users."
								href="https://stapplet.com/"
							/>
							<ProjectBox
								title="inventory.jaybots.org"
								desc="Full-stack inventory and parts management system for robotics."
								href="https://inventory.jaybots.org/"
							/>
						</div>
					</TerminalSection>

					<TerminalSection title="Awards" command="ls /usr/share/awards" dir="/usr/share">
						<ul className="list-none space-y-2 text-gray-300">
							<li><span className="text-cyan-400">»</span> <span className="text-white font-bold">IBM Certified</span> Cybersecurity Analyst</li>
							<li><span className="text-cyan-400">»</span> <span className="text-white font-bold">BSides Atlanta</span> 1st Place CTF (Youngest attendee)</li>
							<li><span className="text-cyan-400">»</span> <span className="text-white font-bold">AI Atlanta Hackathon</span> 1st Place (PrizePicks & Matt Steele)</li>
							<li><span className="text-cyan-400">»</span> <span className="text-white font-bold">Congressional App Challenge</span> Winner</li>
							<li><span className="text-cyan-400">»</span> <span className="text-white font-bold">CMIMC</span> 6th place overall coding competition</li>
						</ul>
					</TerminalSection>

					<TerminalSection title="Security" command="gpg --list-keys" dir="/home/nash/.gnupg">
						<div className="p-4 bg-gray-900 border border-dashed border-gray-700 font-mono text-xs sm:text-sm">
							<div className="flex items-center gap-2 mb-2 text-cyan-400 font-bold">
								<Key size={14} />
								<span>pub   rsa4096 2021-08-15 [SC] [expires: 2025-08-14]</span>
							</div>
							<div className="text-white font-bold break-all mb-4">
								F10A 5FFB 4E9B 8286 3D31  E7E7 6508 E71E C531 8FAD
							</div>
							<div className="text-gray-500">
								uid           [ultimate] Nash Pillai &lt;nash.pillai@protonmail.com&gt;
							</div>
						</div>
					</TerminalSection>

					<div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-600 text-[10px] uppercase tracking-[0.3em]">
						[END OF SYSTEM LOG]
					</div>
				</TerminalWindow>
			</div>
		</main>
	);
}

function ExperienceItem({ title, company, period, bullets }: { title: string; company: string; period: string; bullets: string[] }) {
	return (
		<div className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-green-500">
			<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
				<h3 className="text-white font-bold text-lg">{title}</h3>
				<span className="text-gray-500 text-sm whitespace-nowrap">{period}</span>
			</div>
			<div className="text-cyan-400 font-bold text-sm mb-3 uppercase tracking-wider">{company}</div>
			<ul className="list-none space-y-1 text-gray-300 text-sm">
				{bullets.map((bullet, i) => (
					<li key={i} className="flex gap-2">
						<span className="text-green-900">-</span>
						<span>{bullet}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

function ProjectBox({ title, desc, href }: { title: string; desc: string; href: string }) {
	return (
		<Link 
			href={href} 
			target="_blank"
			className="group block p-4 border border-gray-800 bg-gray-900/50 hover:border-cyan-400 transition-all duration-300"
		>
			<div className="text-white font-bold mb-1 group-hover:text-cyan-400 flex items-center justify-between">
				<span>{title}</span>
				<span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">GO_TO →</span>
			</div>
			<p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
		</Link>
	);
}
