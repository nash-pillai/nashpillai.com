import Link from "next/link";

export const metadata = {
	title: "404: Page Not Found",
	description: "This page doesn't exist",
};

export default function NotFound() {
	return (
		<main className="flex min-h-screen items-center bg-white text-black">
			<div className="swiss-grid">
				<div className="col-span-12 md:col-span-2">
					<span className="swiss-section-number text-7xl md:text-8xl">404</span>
				</div>
				<div className="col-span-12 md:col-span-10">
					<h1 className="text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
						Page Not Found
					</h1>
					<p className="swiss-label mt-4">
						This page does not exist. Perhaps you mistyped the URL.
					</p>
					<Link
						href="/"
						className="mt-8 inline-block border border-black px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] transition-colors hover:bg-black hover:text-white"
					>
						Back to Homepage
					</Link>
				</div>
			</div>
		</main>
	);
}
