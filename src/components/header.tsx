import Link from "next/link";

export function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-[#565b66]/30 bg-[#0a0e14]/95 backdrop-blur-sm">
			<div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2 sm:px-6">
				<div className="flex items-center gap-1 text-sm">
					<span className="text-[#aad94c]">nash</span>
					<span className="text-[#565b66]">@</span>
					<span className="text-[#59c2ff]">nixos</span>
					<span className="text-[#565b66]"> ~ $ </span>
					<span className="cursor-blink text-[#b3b1ad]">_</span>
				</div>
				<nav className="flex items-center gap-4 text-sm text-[#565b66]">
					<Link href="#projects" className="hover:text-[#59c2ff]">
						projects
					</Link>
					<Link href="#experience" className="hover:text-[#59c2ff]">
						experience
					</Link>
					<Link href="#skills" className="hover:text-[#59c2ff]">
						skills
					</Link>
					<Link href="#awards" className="hover:text-[#59c2ff]">
						awards
					</Link>
					<Link href="#contact" className="hover:text-[#59c2ff]">
						contact
					</Link>
					<Link
						href="/resume"
						className="border border-[#565b66]/30 px-2 py-0.5 hover:border-[#59c2ff] hover:text-[#59c2ff]"
					>
						resume
					</Link>
				</nav>
			</div>
		</header>
	);
}
