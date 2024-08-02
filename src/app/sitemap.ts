import { env } from "@/env";
import { type MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [{ url: env.URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
