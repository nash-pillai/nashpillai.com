import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import RootLayoutClient from "./layoutClient";
import { getCldImageUrl, getCldOgImageUrl } from "next-cloudinary";
import { env } from "@/env";

export const metadata: Metadata = {
	title: "Nash Pillai",
	description: "Honors CS @ Georgia Tech. Cybersecurity, AI, and full-stack development.",
	icons: [{ rel: "icon", url: getCldImageUrl({ src: "nashpillai.com/logo.png", crop: "thumb", gravity: "face" }) }],
	openGraph: {
		type: "website",
		siteName: "Nash Pillai",
		title: "Nash Pillai",
		description: "Honors CS @ Georgia Tech. Cybersecurity, AI, and full-stack development.",
		url: env.URL,
		images: {
			url: getCldOgImageUrl({ src: "nashpillai.com/preview" }),
			width: 1200,
			height: 627,
			alt: "Nash Pillai",
		},
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${GeistSans.variable} bg-[#0C0B09] text-[#E8E2D6]`}>
			<body>
				<RootLayoutClient>{children}</RootLayoutClient>
			</body>
		</html>
	);
}
