import Link from "next/link";
import { Bebas_Neue, DM_Sans } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
	title: "404: Page Not Found",
	description: "This page doesn't exist",
};

export default function NotFound() {
	return (
		<main className={`min-h-screen bg-[#0A0A0A] ${dmSans.className}`}>
			<div className="flex min-h-screen flex-col items-center justify-center px-6">
				{/* Big 404 */}
				<div className="relative">
					<h1
						className={`text-[30vw] font-bold leading-none tracking-tighter text-[#FF0054] md:text-[20vw] ${bebasNeue.className}`}
					>
						404
					</h1>
					{/* Overlapping label */}
					<div className="absolute -bottom-2 right-0 border-[4px] border-white bg-[#0047FF] px-6 py-2 md:-bottom-4 md:px-8 md:py-3">
						<span className={`text-xl font-bold uppercase text-white md:text-3xl ${bebasNeue.className}`}>
							NOT FOUND
						</span>
					</div>
				</div>

				<p className="mt-12 max-w-md text-center text-lg text-[#F5F0E8]/70">
					{"This page doesn't seem to exist. Perhaps you mistyped the URL?"}
				</p>

				<Link
					href="/"
					className={`mt-8 border-[4px] border-[#F5F0E8] bg-[#F5F0E8] px-8 py-3 text-xl font-bold uppercase text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-[#F5F0E8] ${bebasNeue.className}`}
				>
					Back to Homepage
				</Link>
			</div>
		</main>
	);
}
