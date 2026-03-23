export function Hero() {
	return (
		<section className="pb-8 pt-12">
			<h1 className="text-2xl font-bold text-[#b3b1ad]">Nash Pillai</h1>
			<p className="mt-1 text-sm text-[#565b66]">
				Honors CS @ Georgia Tech{" "}
				<span className="text-[#d2a6ff]">(Cybersecurity & AI, 4.0 GPA)</span>
				{" // "}8 years programming{" // "}NixOS & GrapheneOS{" // "}Fishkill, NY
			</p>
			<hr className="my-4 border-[#565b66]/20" />
			<div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
				<Stat label="projects" value="5" />
				<Stat label="users_impacted" value="460k+" />
				<Stat label="gpa" value="4.0" />
				<Stat label="ctf_rank" value="top_10%" />
				<Stat label="revenue_generated" value="$410k+" />
			</div>
		</section>
	);
}

function Stat({ label, value }: { label: string; value: string }) {
	return (
		<span>
			<span className="text-[#565b66]">{label}:</span>{" "}
			<span className="text-[#aad94c]">{value}</span>
		</span>
	);
}
