import { SectionHeader } from "@/components/projects";

const skillGroups = [
	{
		label: "backend",
		color: "text-[#ff8f40]",
		skills: "Python, Java, Kotlin, Docker, SQL, PostgreSQL, Node.js, OpenCV, MongoDB, Git",
	},
	{
		label: "web",
		color: "text-[#59c2ff]",
		skills: "TypeScript, JavaScript, React, Next.js, Redux, Tailwind CSS, Prisma, Stripe",
	},
	{
		label: "devops",
		color: "text-[#aad94c]",
		skills: "Linux, NixOS, Azure, GCP, Bash, CI/CD, Docker",
	},
];

export function Skills() {
	return (
		<section id="skills" className="scroll-mt-12 pb-10">
			<SectionHeader title="skills" />
			<div className="grid gap-3 sm:grid-cols-3">
				{skillGroups.map((group) => (
					<div key={group.label} className="rounded border border-[#565b66]/15 bg-[#0d1117] p-3">
						<div className={`mb-1 text-xs font-bold uppercase ${group.color}`}>{group.label}</div>
						<div className="text-sm text-[#b3b1ad]/80">{group.skills}</div>
					</div>
				))}
			</div>
		</section>
	);
}
