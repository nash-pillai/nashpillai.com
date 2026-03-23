import { SectionHeader } from "@/components/projects";

const experiences = [
	{
		date: "Aug 2023 - Present",
		title: "Director of Web Development",
		org: "Ember Learning",
		bullets: [
			"AP Exam Simulator: $400k revenue, 160k students",
			"deaplearning.com: AI tutors, 300k users, $10k ARR",
			"Infrastructure: Azure, Railway",
			"emberlearning.org: AI TAs at district scale",
		],
	},
	{
		date: "Jun 2025 - Present",
		title: "Independent Contractor",
		org: "Stapplet LLC",
		bullets: [
			"100k DAU, found privilege escalation vulnerability",
			"React reimplementation of core platform",
		],
	},
	{
		date: "Aug 2025 - Present",
		title: "CTF Team Captain",
		org: "GreyHat @ Georgia Tech",
		bullets: [
			"LLM-based CTF solving agent",
			"CSAW 13th North America, corCTF top 10%",
		],
	},
	{
		date: "Jun 2022 - May 2025",
		title: "President",
		org: "Jaybots FTC #16700",
		bullets: [
			"World Championship, #1 Judge's Choice",
			"Kalman filters, OpenCV, Kotlin/Java",
			"Built inventory management system",
		],
	},
];

export function Experience() {
	return (
		<section id="experience" className="scroll-mt-12 pb-10">
			<SectionHeader title="experience" />
			<div className="space-y-5">
				{experiences.map((exp) => (
					<div key={exp.title + exp.org}>
						<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
							<span className="shrink-0 text-sm text-[#d2a6ff]">{exp.date}</span>
							<div>
								<span className="text-sm font-bold text-[#b3b1ad]">{exp.title}</span>
								<span className="text-sm text-[#565b66]"> @ </span>
								<span className="text-sm text-[#59c2ff]">{exp.org}</span>
							</div>
						</div>
						<ul className="mt-1 list-none space-y-0.5 pl-4 text-sm text-[#b3b1ad]/80">
							{exp.bullets.map((b) => (
								<li key={b} className="before:mr-2 before:text-[#565b66] before:content-['-']">
									{b}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
