/* eslint-disable react/no-unescaped-entities */
import { JsonLd } from "@/components/jsonLd";
import { ExperienceItem } from "@/components/ExperienceItem";
import { PaperSection } from "@/components/PaperSection";
import Link from "next/link";
import { env } from "@/env";
import { type WebSite, type WithContext } from "schema-dts";
import { getCldImageUrl } from "next-cloudinary";

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
		<main className="paper-container">
			<JsonLd data={jsonLd} />
			
			<header className="mb-12">
				<h1 className="paper-title">Nash Pillai</h1>
				<p className="paper-subtitle">Honors CS @ Georgia Tech</p>
				<div className="paper-contact">
					<span>Fishkill, NY</span>
					<span className="mx-2">·</span>
					<Link href="mailto:nash.pillai@protonmail.com">nash.pillai@protonmail.com</Link>
					<span className="mx-2">·</span>
					<Link href="https://linkedin.com/in/nash-pillai/" target="_blank">LinkedIn</Link>
					<span className="mx-2">·</span>
					<Link href="https://github.com/nash-pillai/" target="_blank">GitHub</Link>
				</div>
			</header>

			<section className="paper-abstract">
				<p className="paper-abstract-title">Abstract</p>
				<p>
					I am a developer and researcher focused on higher-level mathematics and cybersecurity.
					With eight years of programming experience, I have developed large-scale educational platforms 
					impacting hundreds of thousands of students. My work spans from low-level systems programming 
					and reverse engineering to high-level web infrastructure. Currently, I am pursuing my Bachelor of Science 
					in Computer Science at the Georgia Institute of Technology, where I serve as the CTF Team Captain for GreyHat.
				</p>
			</section>

			<PaperSection title="Experience">
				<ExperienceItem 
					title="GreyHat @ Georgia Tech" 
					subtitle="CTF Team Captain" 
					date="February 2026 – Present" 
					location="Atlanta, GA"
				>
					<li>Lead the competitive Capture The Flag (CTF) team in international competitions.</li>
					<li>Direct technical training sessions focused on reverse engineering, binary exploitation, and cryptography.</li>
				</ExperienceItem>

				<ExperienceItem 
					title="Ember Learning" 
					subtitle="Director of Web Development" 
					date="August 2023 – Present"
				>
					<li>Created an AP Exam Simulator for the Ultimate Review Packet, generating $400k in revenue and serving 160k students.</li>
					<li>Led a team of developers to build deaplearning.com, providing custom-trained AI tutors for AP courses, reaching 300k users and $10k ARR.</li>
					<li>Managed cloud infrastructure on Railway and Azure for high-traffic educational services and AI model deployment.</li>
					<li>Built emberlearning.org, implementing AI teaching assistants capable of scaling to entire school districts.</li>
				</ExperienceItem>

				<ExperienceItem 
					title="Stapplet" 
					subtitle="Independent Contractor" 
					date="June 2025 – Present"
				>
					<li>Maintained and optimized an interactive AP Statistics platform with over 100k daily active users.</li>
					<li>Identified and patched a critical privilege escalation vulnerability, securing the platform against unauthorized administrative access.</li>
					<li>Engineered a modern React-based reimplementation of the site's core interactive components.</li>
				</ExperienceItem>

				<ExperienceItem 
					title="John Jay Robotics Club" 
					subtitle="President & Director of Programming" 
					date="June 2022 – May 2025"
				>
					<li>Led the team to its first-ever World Championship qualification in club history.</li>
					<li>Developed a comprehensive inventory management system with administrative controls and automated supplier data scraping.</li>
					<li>Implemented custom I2C drivers and an event loop for real-time robotic control systems.</li>
					<li>Designed computer vision pipelines using OpenCV to enable fully autonomous scoring capabilities.</li>
				</ExperienceItem>

				<ExperienceItem 
					title="The Environmental Defense Initiative" 
					subtitle="Chief Technology Officer" 
					date="July 2024 – October 2025"
				/>
			</PaperSection>

			<PaperSection title="Education">
				<ExperienceItem 
					title="Georgia Institute of Technology" 
					subtitle="Bachelor of Science in Computer Science" 
					date="August 2025 – May 2027" 
					location="Atlanta, GA"
				/>
				<ExperienceItem 
					title="John Jay Senior High School" 
					subtitle="High School Diploma, Computer Science focus" 
					date="September 2021 – June 2025" 
					location="Hopewell Junction, NY"
				/>
			</PaperSection>

			<PaperSection title="Skills & Certifications">
				<div className="paper-item break-inside-avoid">
					<div className="paper-item-header">Technical Proficiencies</div>
					<p className="mt-1">
						Reverse Engineering, Statistics, Data Visualization (D3.js), Cybersecurity Analysis, 
						Cloud Infrastructure (Azure, Railway), Full-stack Development (React, Next.js, Node.js), 
						Computer Vision (OpenCV), Systems Programming.
					</p>
				</div>
				<div className="paper-item break-inside-avoid">
					<div className="paper-item-header">Certifications</div>
					<ul className="paper-list">
						<li>IBM Cybersecurity Analyst Assessment</li>
						<li>Advanced Cybersecurity Concepts and Capstone Project</li>
						<li>Network Security & Database Vulnerabilities</li>
						<li>Operating Systems: Overview, Administration, and Security</li>
						<li>Penetration Testing, Incident Response and Forensics</li>
					</ul>
				</div>
			</PaperSection>

			<PaperSection title="Honors & Awards">
				<ul className="paper-list">
					<li>Congressional App Challenge Winner – Demoed at the US Capitol</li>
					<li>FTC Robotics World Championship Qualifier</li>
					<li>Lockheed Martin CyberQuest Participant</li>
					<li>Carnegie Mellon Coding Competition (CMIMC) Participant</li>
					<li>US National Chemistry Olympiad (USNCO) Participant</li>
				</ul>
			</PaperSection>

			<footer className="paper-fingerprint">
				<p>GPG Fingerprint: F10A 5FFB 4E9B 8286 3D31  E7E7 6508 E71E C531 8FAD</p>
				<div className="mt-2">
					<Link href="/nash.gpg" target="_blank" className="italic hover:not-italic">Download Public Key</Link>
				</div>
			</footer>
		</main>
	);
}
