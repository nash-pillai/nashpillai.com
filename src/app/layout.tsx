import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { Manrope } from "next/font/google";
import { type Metadata } from "next";
import RootLayoutClient from "./layoutClient";
import { getCldImageUrl, getCldOgImageUrl } from "next-cloudinary";
import { env } from "@/env";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export const metadata: Metadata = {
	title: "Nash Pillai",
	description: "Honors CS @ Georgia Tech. 8 years programming. Cybersecurity & AI.",
	icons: [{ rel: "icon", url: getCldImageUrl({ src: "nashpillai.com/logo.png", crop: "thumb", gravity: "face" }) }],
	openGraph: {
		type: "website",
		siteName: "Nash Pillai",
		title: "Nash Pillai",
		description: "Honors CS @ Georgia Tech. 8 years programming. Cybersecurity & AI.",
		url: env.URL,
		images: {
			url: getCldOgImageUrl({ src: "nashpillai.com/preview" }),
			width: 1200,
			height: 627,
			alt: "Nash Pillai portfolio",
		},
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${GeistSans.variable} ${manrope.variable} scroll-smooth`}>
			<body className={manrope.className}>
				<RootLayoutClient>{children}</RootLayoutClient>
			</body>
		</html>
	);
}
