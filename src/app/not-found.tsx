import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
	weight: ["300", "400"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "404 -- Nash Pillai",
	description: "This page does not exist.",
};

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-[#0C0B09] px-6">
			<h1 className={`${cormorant.className} mb-4 text-[8vw] font-light italic leading-none text-[#E8E2D6]`}>
				404
			</h1>
			<p className="mb-8 text-sm text-[#8B7D5C]">This page does not exist.</p>
			<Link
				href="/"
				className="text-xs uppercase tracking-[0.25em] text-[#8B7D5C] transition-colors duration-300 hover:text-[#C45D2C]"
			>
				Return home
			</Link>
		</main>
	);
}
