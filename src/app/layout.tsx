import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import RootLayoutClient from "./layoutClient";

export const metadata: Metadata = {
	title: "Nash Pillai",
	description: "What a cool guy",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${GeistSans.variable} scroll-smooth dark:bg-stone-900 dark:text-gray-100`}>
			<body>
				<RootLayoutClient>{children}</RootLayoutClient>
			</body>
		</html>
	);
}
