import "./globals.css";

import { GeistMono } from "geist/font/mono";
import { type Metadata } from "next";
import RootLayoutClient from "./layoutClient";
import { getCldImageUrl, getCldOgImageUrl } from "next-cloudinary";
import { env } from "@/env";

export const metadata: Metadata = {
	title: "Nash Pillai | Nix-Kernel",
	description: "Nash Pillai - Software Engineer & Systems Architect",
	icons: [{ rel: "icon", url: getCldImageUrl({ src: "nashpillai.com/logo.png", crop: "thumb", gravity: "face" }) }],
	openGraph: {
		type: "website",
		siteName: "Nash Pillai",
		title: "Nash Pillai | Nix-Kernel",
		description: "Nash Pillai - Software Engineer & Systems Architect",
		url: env.URL,
		images: {
			url: getCldOgImageUrl({ src: "nashpillai.com/preview" }),
			width: 1200,
			height: 627,
			alt: "Nix-Kernel Portfolio",
		},
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${GeistMono.variable} font-mono scroll-smooth bg-black text-green-500`}>
			<body>
				<RootLayoutClient>{children}</RootLayoutClient>
			</body>
		</html>
	);
}
