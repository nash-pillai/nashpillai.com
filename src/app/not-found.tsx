import Link from "next/link";
import { TerminalPrompt } from "@/components/TerminalPrompt";
import { TerminalWindow } from "@/components/TerminalWindow";

export const metadata = {
	title: "404: Page Not Found",
	description: "This page doesn't exist",
};

export default function NotFound() {
	return (
		<main className="min-h-screen p-4 sm:p-8 md:p-12 lg:p-24 bg-black text-green-500 font-mono flex items-center justify-center">
			<div className="w-full max-w-2xl">
				<TerminalWindow title="error-handler.sh">
					<TerminalPrompt command="curl -I /dev/null" />
					<div className="py-4 space-y-4">
						<h1 className="text-2xl font-bold text-red-500 uppercase tracking-tighter">
							[ERROR] 404: PAGE_NOT_FOUND
						</h1>
						<p className="text-gray-300">
							The requested resource was not found on this system. 
							The kernel could not resolve the path you provided.
						</p>
						<div className="pt-4 border-t border-gray-800">
							<TerminalPrompt command="cd .." />
							<Link 
								href="/" 
								className="inline-block mt-2 px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all"
							>
								RETURN_TO_ROOT
							</Link>
						</div>
					</div>
				</TerminalWindow>
			</div>
		</main>
	);
}
