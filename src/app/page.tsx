import { JsonLd } from "@/components/jsonLd";
import { HeroSection } from "@/components/heroSection";
import { ProjectFolio, type ProjectItem } from "@/components/projectFolio";
import { ExperienceSection } from "@/components/experienceSection";
import { AchievementsSection } from "@/components/achievementsSection";
import { SkillsSection } from "@/components/skillsSection";
import { FooterSection } from "@/components/footerSection";
import { AnimatedSection } from "@/components/animatedSection";
import { getCldImageUrl, getCldVideoUrl } from "next-cloudinary";
import { env } from "@/env";
import { type WebSite, type WithContext } from "schema-dts";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: env.URL,
  name: "Nash Pillai",
  description: "Nash Pillai -- Honors CS @ Georgia Tech. Cybersecurity, AI, and full-stack development.",
  image: getCldImageUrl({ src: "nashpillai.com/preview" }),
  sameAs: [
    "https://www.linkedin.com/in/nash-pillai/",
    "https://github.com/nash-pillai/",
  ],
};

const projects: ProjectItem[] = [
  {
    number: "01",
    name: "DeapLearning",
    description:
      "Custom AI tutors for AP courses. Over 300,000 students across the platform, generating $10k ARR. Built with Next.js, deployed on Azure and Railway.",
    url: "deaplearning.com",
    videoSrc: getCldVideoUrl({ src: "nashpillai.com/deap1" }),
    align: "left",
  },
  {
    number: "02",
    name: "Progress in Congress",
    description:
      "Track bills going through Congress in real-time. Won the Congressional App Challenge and was presented at the US Capitol.",
    url: "progressincongress.org",
    imageSrc: getCldImageUrl({ src: "nashpillai.com/congress1" }),
    align: "right",
  },
  {
    number: "03",
    name: "TEDNitiative",
    description:
      "A platform to stay informed and take action on environmental issues. Built with Next.js and Tailwind CSS.",
    url: "tednitiative.org",
    imageSrc: getCldImageUrl({ src: "nashpillai.com/tedi" }),
    align: "left",
  },
  {
    number: "04",
    name: "Stapplet",
    description:
      "Interactive statistics learning platform with 100k daily active users. Discovered privilege escalation vulnerability. React reimplementation.",
    url: "stapplet.com",
    align: "right",
  },
  {
    number: "05",
    name: "Jaybots Inventory",
    description:
      "Custom inventory management system for an FTC robotics team managing tens of thousands of parts.",
    url: "inventory.jaybots.org",
    imageSrc: getCldImageUrl({ src: "nashpillai.com/inventory" }),
    align: "left",
  },
];

export default function HomePage() {
  return (
    <main className={`${cormorant.variable} grain min-h-screen bg-[#0C0B09]`}>
      <JsonLd data={jsonLd} />
      <HeroSection cormorantClass={cormorant.className} />

      <AnimatedSection>
        <section className="px-6 py-24 md:px-12 lg:px-24">
          <p className="drop-cap max-w-2xl text-sm leading-relaxed text-[#E8E2D6]/70">
            Eight years of programming experience distilled into a focus on cybersecurity
            and artificial intelligence. Currently pursuing Honors Computer Science at Georgia
            Tech with a 4.0 GPA, building products that have reached over half a million users.
            Based in Fishkill, New York. Runs NixOS.
          </p>
        </section>
      </AnimatedSection>

      <ProjectFolio projects={projects} cormorantClass={cormorant.className} />
      <ExperienceSection cormorantClass={cormorant.className} />
      <AchievementsSection cormorantClass={cormorant.className} />
      <SkillsSection cormorantClass={cormorant.className} />
      <FooterSection />
    </main>
  );
}
