import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { SocialDock } from "@/components/site/SocialDock";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Work } from "@/components/site/Work";
import { Achievements } from "@/components/site/Achievements";
import { Contact } from "@/components/site/Contact";
import { BigMarquee, Marquee } from "@/components/site/Marquee";
import { expertise } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Abdullah Latif — Full-Stack Developer, Next.js & Node.js",
  description:
    "Portfolio of Abdullah Latif, a full-stack developer in Lahore building SaaS platforms, e-commerce stores and automation pipelines with Next.js, Node.js and MySQL.",
  openGraph: {
    title: "Abdullah Latif — Full-Stack Developer",
    description:
      "Production web apps built end to end with Next.js, Node.js, MySQL and MongoDB. Open for freelance and full-time work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Index() {
  return (
    <main>
      <Nav />
      <SocialDock />
      <Hero />
      <Marquee />
      <BigMarquee words={expertise} />
      <Marquee reverse />
      <About />
      <Work />
      <Achievements />
      <Contact />
    </main>
  );
}
