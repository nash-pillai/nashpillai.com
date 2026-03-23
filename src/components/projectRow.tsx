"use client";

import { useState } from "react";
import { getCldImageUrl, getCldVideoUrl } from "next-cloudinary";

interface Project {
	name: string;
	description: string;
	tech: string;
	href: string;
	mediaType: "image" | "video" | null;
	mediaSrc: string | null;
}

export function ProjectRow({ project }: { project: Project }) {
	const [hovered, setHovered] = useState(false);

	const mediaUrl =
		project.mediaSrc && project.mediaType === "image"
			? getCldImageUrl({ src: project.mediaSrc, width: 600, height: 340, crop: "fill" })
			: project.mediaSrc && project.mediaType === "video"
				? getCldVideoUrl({ src: project.mediaSrc, width: 600, height: 340 }).replace(/\.webm$/, ".jpg")
				: null;

	return (
		<tr
			className="group relative border-b border-[#565b66]/10 transition-colors hover:bg-[#0d1117]"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<td className="py-2 pr-4">
				<a
					href={project.href}
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#59c2ff] hover:underline"
				>
					{project.name}
				</a>
			</td>
			<td className="py-2 pr-4 text-[#b3b1ad]">{project.description}</td>
			<td className="hidden py-2 pr-4 text-[#565b66] md:table-cell">{project.tech}</td>
			{mediaUrl && hovered && (
				<td className="pointer-events-none absolute bottom-full right-0 z-10 mb-2">
					<div className="overflow-hidden rounded border border-[#565b66]/20 shadow-xl">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={mediaUrl}
							alt={project.name}
							width={300}
							height={170}
							className="block animate-[fadeIn_0.15s_ease-in] bg-[#0d1117]"
							style={{ animationFillMode: "both" }}
						/>
					</div>
				</td>
			)}
		</tr>
	);
}
