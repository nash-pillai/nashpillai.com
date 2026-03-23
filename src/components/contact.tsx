import Link from "next/link";
import { SectionHeader } from "@/components/projects";

export function Contact() {
	return (
		<section id="contact" className="scroll-mt-12 pb-4">
			<SectionHeader title="contact" />
			<div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
				<a
					href="mailto:nash.pillai@protonmail.com"
					className="text-[#59c2ff] hover:underline"
				>
					nash.pillai@protonmail.com
				</a>
				<a
					href="https://linkedin.com/in/nash-pillai"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#59c2ff] hover:underline"
				>
					linkedin
				</a>
				<a
					href="https://github.com/nash-pillai"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#59c2ff] hover:underline"
				>
					github
				</a>
				<Link href="/resume" className="text-[#59c2ff] hover:underline">
					resume
				</Link>
				<Link href="/about" className="text-[#565b66] hover:text-[#59c2ff]">
					about
				</Link>
			</div>
			<div className="mt-4">
				<a
					href="/nash.gpg"
					className="group text-sm text-[#565b66] hover:text-[#b3b1ad]"
				>
					<span className="text-[#aad94c]">gpg</span>{" "}
					<span className="font-mono text-xs tracking-wider">
						F10A 5FFB 4E9B 8286 3D31 E7E7 6508 E71E C531 8FAD
					</span>
				</a>
			</div>
			<div className="mt-6 border-t border-[#565b66]/15 pt-4 text-xs text-[#565b66]">
				<span className="text-[#565b66]/50">EOF</span>
			</div>
		</section>
	);
}
