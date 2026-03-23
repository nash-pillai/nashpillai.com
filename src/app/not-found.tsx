import Link from "next/link";

export const metadata = {
	title: "404: Page Not Found",
	description: "This page doesn't exist",
};

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0e14] px-4">
			<div className="max-w-md text-center">
				<h1 className="mb-2 text-4xl font-bold text-[#ff8f40]">404</h1>
				<p className="mb-1 text-sm text-[#b3b1ad]">
					<span className="text-[#565b66]">$</span> cat ./page
				</p>
				<p className="mb-6 text-sm text-[#565b66]">
					cat: ./page: No such file or directory
				</p>
				<Link
					href="/"
					className="text-sm text-[#59c2ff] hover:underline"
				>
					cd ~
				</Link>
			</div>
		</main>
	);
}
