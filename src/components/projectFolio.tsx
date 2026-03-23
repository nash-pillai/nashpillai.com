"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  number: string;
  name: string;
  description: string;
  url?: string;
  imageSrc?: string;
  videoSrc?: string;
  align: "left" | "right";
}

function ProjectEntry({ project, cormorantClass }: { project: ProjectItem; cormorantClass: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16 ${
        project.align === "right" ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""
      }`}
    >
      {/* Text */}
      <div className="flex flex-col gap-4">
        <span className={`${cormorantClass} text-[5rem] font-light leading-none text-[#E8E2D6]/10`}>
          {project.number}
        </span>
        <h3 className={`${cormorantClass} -mt-8 text-3xl italic text-[#E8E2D6] md:text-4xl`}>
          {project.name}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-[#8B7D5C]">
          {project.description}
        </p>
        {project.url && (
          <Link
            href={`https://${project.url}`}
            target="_blank"
            className="group mt-2 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#8B7D5C] transition-colors duration-300 hover:text-[#C45D2C]"
          >
            {project.url}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>

      {/* Media */}
      {(project.imageSrc ?? project.videoSrc) && (
        <div className="overflow-hidden">
          <motion.div style={{ y: imageY }}>
            {project.videoSrc ? (
              <video
                src={project.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="editorial-image w-full"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.imageSrc}
                alt={project.name}
                className="editorial-image w-full"
              />
            )}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

export function ProjectFolio({
  projects,
  cormorantClass,
}: {
  projects: ProjectItem[];
  cormorantClass: string;
}) {
  return (
    <section id="projects" className="px-6 py-24 md:px-12 lg:px-24">
      <hr className="section-rule mb-16" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`${cormorantClass} mb-20 text-4xl font-normal text-[#E8E2D6] md:text-5xl`}
      >
        Selected Work
      </motion.h2>
      <div className="flex flex-col gap-32">
        {projects.map((project) => (
          <ProjectEntry key={project.number} project={project} cormorantClass={cormorantClass} />
        ))}
      </div>
    </section>
  );
}

export type { ProjectItem };
