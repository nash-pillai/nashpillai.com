import { JsonLd } from "@/components/jsonLd";
import { getCldImageUrl } from "next-cloudinary";
import { env } from "@/env";
import { type WebSite, type WithContext } from "schema-dts";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Awards } from "@/components/awards";
import { Contact } from "@/components/contact";

const jsonLd: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: env.URL,
	name: "Nash Pillai",
	description: "Nash Pillai's personal website",
	image: getCldImageUrl({ src: "nashpillai.com/preview" }),
	sameAs: ["https://www.linkedin.com/in/nash-pillai/", "https://github.com/nash-pillai/"],
};

export default function HomePage() {
	return (
		<>
			<JsonLd data={jsonLd} />
			<Header />
			<main className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
				<Hero />
				<Projects />
				<Experience />
				<Skills />
				<Awards />
				<Contact />
			</main>
		</>
	);
}
