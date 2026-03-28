import Link from "next/link";

export const metadata = {
	title: "404: Page Not Found",
	description: "This page doesn't exist",
};

export default function NotFound() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center px-6 selection:bg-zinc-800 selection:text-zinc-200 bg-zinc-950 text-zinc-100">
			<div className="space-y-6 text-center">
				<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-mono text-zinc-500 uppercase tracking-widest">
					404
				</h1>
				<div className="space-y-2">
					<p className="text-lg text-zinc-400">Page Not Found</p>
					<p className="text-sm text-zinc-500 font-mono tracking-tight">
						THE REQUESTED RESOURCE COULD NOT BE LOCATED.
					</p>
				</div>
				<div className="pt-8">
					<Link
						href="/"
						className="inline-flex items-center px-6 py-3 bg-zinc-100 text-zinc-950 font-medium text-sm rounded-lg hover:bg-white transition-all transform active:scale-95 shadow-lg shadow-black/20"
					>
						Return Home
					</Link>
				</div>
			</div>
			
			<div className="absolute bottom-12 text-[10px] font-mono text-zinc-800 uppercase tracking-[0.2em] select-none">
				Error: 0xDEADBEEF
			</div>
		</main>
	);
}
