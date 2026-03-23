import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { type Metadata } from "next";
import RootLayoutClient from "./layoutClient";
import { getCldImageUrl, getCldOgImageUrl } from "next-cloudinary";
import { env } from "@/env";

export const metadata: Metadata = {
	title: "Nash Pillai",
	description: "Honors CS @ Georgia Tech. Cybersecurity, AI, and web development.",
	icons: [{ rel: "icon", url: getCldImageUrl({ src: "nashpillai.com/logo.png", crop: "thumb", gravity: "face" }) }],
	openGraph: {
		type: "website",
		siteName: "Nash Pillai",
		title: "Nash Pillai",
		description: "Honors CS @ Georgia Tech. Cybersecurity, AI, and web development.",
		url: env.URL,
		images: {
			url: getCldOgImageUrl({ src: "nashpillai.com/preview" }),
			width: 1200,
			height: 627,
			alt: "Nash Pillai's portfolio",
		},
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
			<body className="bg-[#0a0e14] font-mono text-[#b3b1ad]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
				<RootLayoutClient>{children}</RootLayoutClient>
			</body>
		</html>
	);
}
