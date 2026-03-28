import Link from "next/link";

export const metadata = {
	title: "404: Page Not Found",
	description: "This page doesn't exist",
};

export default function NotFound() {
	return (
		<main className="paper-container">
			<h1 className="paper-title">404: Page Not Found</h1>
			<div className="paper-abstract">
				<p className="text-center">
					{"The requested document could not be found in our archives. Perhaps the URL was mistyped or the page has been moved."}
				</p>
			</div>
			<div className="text-center">
				<Link href="/" className="italic underline decoration-dotted underline-offset-4 hover:decoration-solid">
					Return to the main repository
				</Link>
			</div>
		</main>
	);
}
