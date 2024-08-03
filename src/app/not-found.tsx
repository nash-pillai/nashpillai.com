import Link from "next/link";

export const metadata = {
	title: "404: Page Not Found",
	description: "This page doesn't exist",
};

export default function NotFound() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]">
			<div className="relative mx-auto max-w-6xl px-4 sm:px-6">
				<div className="pb-12 pt-32 md:pb-20 md:pt-40">
					<div className="mb-12 flex grow flex-col items-center lg:mb-0 lg:mt-20 lg:items-start">
						<h1 className="mb-8 text-center text-5xl font-extrabold tracking-tight text-white lg:text-left">
							404: Page Not Found
						</h1>
						<p>{"This page doesn't seem to exist. Perhaps you mistyped the URL?"}</p>
						<Link href="/" className="my-4 rounded-md bg-purple-700 px-2 py-1 hover:bg-purple-600">
							Back to the homepage!
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
