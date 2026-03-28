import { BentoCard, BentoGrid } from "@/components/bento-grid";
import { JsonLd } from "@/components/jsonLd";
import { env } from "@/env";
import { getCldImageUrl, getCldVideoUrl } from "next-cloudinary";
import { 
  Code2, 
  Cpu, 
  ExternalLink, 
  Github, 
  Globe, 
  GraduationCap, 
  Key, 
  Linkedin, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Trophy 
} from "lucide-react";
import Link from "next/link";
import { type WebSite, type WithContext } from "schema-dts";

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: env.URL,
  name: "Nash Pillai",
  description: "Nash Pillai's personal portfolio website",
  image: getCldImageUrl({ src: "nashpillai.com/preview" }),
  sameAs: ["https://www.linkedin.com/in/nash-pillai/", "https://github.com/nash-pillai/"],
};

const features = [
  {
    Icon: Cpu,
    name: "Ember Learning",
    description: "Director of Web Development. Built AI tutors scaling to 300k users and generating $400k.",
    href: "https://deaplearning.com",
    cta: "Visit Deap Learning",
    className: "col-span-3 lg:col-span-2",
    background: (
      <video
        src={getCldVideoUrl({ src: "nashpillai.com/deap1" })}
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-40"
      />
    ),
  },
  {
    Icon: Trophy,
    name: "Awards & Achievements",
    description: "1st at BSides Atlanta CTF, AI Atlanta Hackathon winner, and Congressional App Challenge winner.",
    href: "#awards",
    cta: "See more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent transition-opacity duration-300 group-hover:opacity-20" />
    ),
  },
  {
    Icon: GraduationCap,
    name: "Education",
    description: "Georgia Tech B.S. CS (Honors). Concentration in AI & Cybersecurity. 4.0 GPA.",
    href: "#education",
    cta: "View details",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent transition-opacity duration-300 group-hover:opacity-20" />
    ),
  },
  {
    Icon: ShieldCheck,
    name: "Cybersecurity",
    description: "CTF Team Captain @ GreyHat. LLM-based CTF solving agent. IBM Certified Analyst.",
    href: "https://github.com/nash-pillai",
    cta: "Github Profile",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-20" />
    ),
  },
  {
    Icon: Code2,
    name: "Skills",
    description: "TypeScript, React, Next.js, Python, Java, Docker, NixOS, Azure, GCP, Linux.",
    href: "#skills",
    cta: "Full stack",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-5 transition-opacity duration-300 group-hover:opacity-10">
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="h-12 w-12 rounded bg-white" />
          ))}
        </div>
      </div>
    ),
  },
  {
    Icon: Key,
    name: "GPG Fingerprint",
    description: "F10A 5FFB 4E9B 8286 3D31  E7E7 6508 E71E C531 8FAD",
    href: "/nash.gpg",
    cta: "Download Key",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(245,158,11,0.05)_10px,rgba(245,158,11,0.05)_20px)] transition-opacity duration-300 group-hover:opacity-20" />
    ),
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500/30">
      <JsonLd data={jsonLd} />
      
      <div className="container mx-auto px-4 py-20 lg:py-32">
        {/* Hero Section */}
        <div className="mb-16 flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-500 ring-1 ring-inset ring-amber-500/20">
            <MapPin className="h-3 w-3" />
            Fishkill, NY
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Nash <span className="text-amber-500">Pillai</span>
          </h1>
          <p className="max-w-2xl text-lg text-stone-400 sm:text-xl">
            Computer Science student at Georgia Tech. Building AI-powered educational tools and breaking things for better security.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="mailto:nash.pillai@protonmail.com"
              className="flex items-center gap-2 rounded-lg bg-stone-100 px-4 py-2 text-stone-900 transition-colors hover:bg-stone-200"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
            <Link 
              href="https://github.com/nash-pillai/"
              target="_blank"
              className="flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 ring-1 ring-stone-800 transition-colors hover:bg-stone-800"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link 
              href="https://www.linkedin.com/in/nash-pillai/"
              target="_blank"
              className="flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 ring-1 ring-stone-800 transition-colors hover:bg-stone-800"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>

        {/* Projects Detail / More Info */}
        <div className="mt-32 space-y-32">
          <section id="projects" className="space-y-12">
            <h2 className="text-3xl font-bold tracking-tight">Selected Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Deap Learning",
                  desc: "AI tutors for AP courses, scaling to 300k users.",
                  link: "https://deaplearning.com",
                  img: "nashpillai.com/deap1"
                },
                {
                  title: "Progress in Congress",
                  desc: "Tracking bills through Congress. Congressional App Challenge winner.",
                  link: "https://progressincongress.org",
                  img: "nashpillai.com/congress1"
                },
                {
                  title: "Stapplet",
                  desc: "Interactive statistics learning platform used by 100k+ students.",
                  link: "https://stapplet.com",
                  img: "nashpillai.com/tedi" // Placeholder if no specific image
                }
              ].map((p) => (
                <Link 
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  className="group relative block overflow-hidden rounded-2xl bg-stone-900 ring-1 ring-stone-800 transition-all hover:ring-amber-500/50"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={getCldImageUrl({ src: p.img })} 
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold text-stone-100">{p.title}</h3>
                      <ExternalLink className="h-4 w-4 text-stone-500 group-hover:text-amber-500" />
                    </div>
                    <p className="text-sm text-stone-400">{p.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <div className="grid gap-16 lg:grid-cols-2">
            <section id="experience" className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
              <div className="space-y-8">
                {[
                  {
                    role: "Director of Web Development",
                    company: "Ember Learning",
                    period: "2023 - Present",
                    bullets: [
                      "Created AP Exam Simulator generating $400k for 160k students",
                      "Scaled deaplearning.com to 300k users",
                      "Maintained AI infrastructure on Azure and Railway"
                    ]
                  },
                  {
                    role: "President & Programming Leader",
                    company: "John Jay Robotics",
                    period: "2022 - 2025",
                    bullets: [
                      "Qualified for World Championships, winning #1 Judge's Choice",
                      "Implemented Kalman filters for sensor data fusion",
                      "Built full inventory management system"
                    ]
                  }
                ].map((exp) => (
                  <div key={exp.company} className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-amber-500">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <div className="mb-4 text-stone-400">{exp.company} • {exp.period}</div>
                    <ul className="space-y-2 text-stone-400">
                      {exp.bullets.map((b, i) => <li key={i}>• {b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="awards" className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">Achievements</h2>
              <div className="grid gap-4">
                {[
                  "Youngest BSides Atlanta CTF winner",
                  "AI Atlanta Hackathon 1st Place",
                  "2× Lockheed Martin CyberQuest 2nd Place",
                  "FTC Robotics Dean's List Finalist",
                  "Congressional App Challenge Winner"
                ].map((award) => (
                  <div key={award} className="flex items-center gap-4 rounded-xl bg-stone-900 p-4 ring-1 ring-stone-800">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-stone-200">{award}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <footer className="border-t border-stone-900 py-12">
        <div className="container mx-auto px-4 text-center text-stone-500">
          <p>© {new Date().getFullYear()} Nash Pillai. GPG: F10A 5FFB 4E9B 8286 3D31  E7E7 6508 E71E C531 8FAD</p>
        </div>
      </footer>
    </main>
  );
}
