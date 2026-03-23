import { SectionHeader } from "@/components/projects";

const awards = [
	{ prefix: "CTF", color: "text-[#ff8f40]", text: "BSides Atlanta: 1st place CTF, youngest of 400+" },
	{ prefix: "APP", color: "text-[#59c2ff]", text: "Congressional App Challenge Winner -- displayed at US Capitol" },
	{ prefix: "FTC", color: "text-[#aad94c]", text: "World Championship, Dean's List Finalist" },
	{ prefix: "AI", color: "text-[#d2a6ff]", text: "AI Atlanta Hackathon: 1st place in two tracks" },
	{ prefix: "MATH", color: "text-[#d2a6ff]", text: "CMIMC: 6th of 96 teams" },
	{ prefix: "CERT", color: "text-[#ff8f40]", text: "IBM Certified Cybersecurity Analyst" },
	{ prefix: "FTC", color: "text-[#aad94c]", text: "3x Control Award (best robot code)" },
	{ prefix: "SCI", color: "text-[#59c2ff]", text: "Science Olympiad NY State: 1st Robot Tour, 1st Forensics" },
];

export function Awards() {
	return (
		<section id="awards" className="scroll-mt-12 pb-10">
			<SectionHeader title="awards" />
			<ul className="space-y-1 text-sm">
				{awards.map((award) => (
					<li key={award.text}>
						<span className={`mr-2 inline-block w-10 text-right text-xs font-bold ${award.color}`}>
							[{award.prefix}]
						</span>
						<span className="text-[#b3b1ad]/80">{award.text}</span>
					</li>
				))}
			</ul>
		</section>
	);
}
