import { ProjectRow } from "@/components/projectRow";

const projects = [
	{
		name: "deaplearning.com",
		description: "AI tutoring platform — 300k users, $10k ARR",
		tech: "Next.js, React, Azure, AI",
		href: "https://deaplearning.com",
		mediaType: "video" as const,
		mediaSrc: "nashpillai.com/deap1",
	},
	{
		name: "emberlearning.org",
		description: "AP Exam Simulator — $400k revenue, 160k students",
		tech: "React, Node.js, Railway",
		href: "https://emberlearning.org",
		mediaType: null,
		mediaSrc: null,
	},
	{
		name: "progressincongress.org",
		description: "Congressional App Challenge Winner — displayed at US Capitol",
		tech: "Next.js, React",
		href: "https://progressincongress.org",
		mediaType: "image" as const,
		mediaSrc: "nashpillai.com/congress1",
	},
	{
		name: "tednitiative.org",
		description: "Nonprofit education platform",
		tech: "Next.js, React, Tailwind",
		href: "https://tednitiative.org",
		mediaType: "image" as const,
		mediaSrc: "nashpillai.com/tedi",
	},
	{
		name: "stapplet.com",
		description: "Statistics tool — 100k DAU, found privilege escalation vuln",
		tech: "React, TypeScript",
		href: "https://stapplet.com",
		mediaType: null,
		mediaSrc: null,
	},
	{
		name: "inventory.jaybots.org",
		description: "FTC team inventory management system",
		tech: "React, PostgreSQL",
		href: "https://inventory.jaybots.org",
		mediaType: "image" as const,
		mediaSrc: "nashpillai.com/inventory",
	},
];

export function Projects() {
	return (
		<section id="projects" className="scroll-mt-12 pb-10">
			<SectionHeader title="projects" />
			<div className="overflow-x-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="border-b border-[#565b66]/20 text-left text-[#565b66]">
							<th className="pb-2 pr-4 font-normal">name</th>
							<th className="pb-2 pr-4 font-normal">description</th>
							<th className="hidden pb-2 pr-4 font-normal md:table-cell">tech</th>
						</tr>
					</thead>
					<tbody>
						{projects.map((project) => (
							<ProjectRow key={project.name} project={project} />
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}

export function SectionHeader({ title }: { title: string }) {
	return (
		<h2 className="mb-4 flex items-center gap-2 text-lg text-[#59c2ff]">
			<span className="text-[#565b66]">#</span> {title}
		</h2>
	);
}
