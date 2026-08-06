import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { SocialDock } from "@/components/site/SocialDock";
import { Contact } from "@/components/site/Contact";
import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects — Abdullah Latif, Full-Stack Developer",
  description:
    "Production work by Abdullah Latif: a WhatsApp marketing SaaS, olive oil e-commerce store, n8n SEO automation pipeline and a real estate marketplace.",
  openGraph: {
    title: "Projects — Abdullah Latif",
    description:
      "SaaS platforms, storefronts and automation pipelines built with Next.js, Node.js and MySQL.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <Nav />
      <SocialDock />
      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-40">
        <Reveal>
          <p className="label-mono">Archive / 2025 — 2026</p>
          <h1 className="display-xl mt-5 text-[clamp(3rem,12vw,10rem)]">Projects</h1>
        </Reveal>
      </section>

      <Marquee />

      <section className="px-5 py-20 md:px-10">
        <div className="border-border border-t">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <article className="border-border group grid gap-6 border-b py-10 md:grid-cols-12 md:gap-8">
                <div className="label-mono md:col-span-1">{p.index}</div>
                <div className="md:col-span-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="md:col-span-7">
                  <h2 className="display-xl text-[clamp(1.6rem,3.2vw,2.6rem)]">{p.title}</h2>
                  <p className="label-mono mt-3">
                    {p.stack.map((s) => `[${s.toUpperCase()}]`).join(" — ")}
                  </p>
                  <p className="mt-4 leading-relaxed text-foreground/75">{p.summary}</p>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="label-mono link-underline mt-5 inline-block text-foreground"
                    >
                      {p.hrefLabel} ↗
                    </a>
                  ) : (
                    <span className="label-mono mt-5 inline-block">{p.hrefLabel}</span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link
            href="/"
            className="label-mono border-border inline-flex items-center gap-3 rounded-full border px-6 py-3 text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <span aria-hidden>←</span> Back home
          </Link>
        </Reveal>
      </section>

      <Contact />
    </main>
  );
}
