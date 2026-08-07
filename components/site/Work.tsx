"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { projects } from "@/data/portfolio";
import { Reveal } from "./Reveal";

function ProjectCard({ p, i, total }: { p: (typeof projects)[number]; i: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // card shrinks + fades as the next one slides over it
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0.4]);
  // image parallax inside its frame
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `calc(6rem + ${i * 1.5}rem)`, zIndex: i + 1 }}
    >
      <motion.article
        style={{ scale, opacity }}
        className="group bg-background border-border grid gap-6 border-t pt-8 lg:grid-cols-12 lg:gap-10"
      >
        <div className={`overflow-hidden lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
          <motion.img
            src={p.image}
            alt={p.title}
            width={1200}
            height={900}
            loading="lazy"
            style={{ y: imgY }}
            className="aspect-[4/3] w-full scale-[1.18] object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.24]"
          />
        </div>

        <div className="flex flex-col lg:col-span-5">
          <div className="label-mono flex items-center justify-between">
            <span>
              {p.index} / {String(total).padStart(2, "0")}
            </span>
            <span>{p.year}</span>
          </div>
          <h3 className="display-xl mt-4 text-[clamp(1.7rem,3.4vw,2.8rem)]">{p.title}</h3>
          <p className="label-mono mt-4">{p.stack.map((s) => `[${s.toUpperCase()}]`).join(" — ")}</p>
          <p className="mt-5 leading-relaxed text-foreground/75">{p.summary}</p>
          <ul className="mt-5 space-y-3">
            {p.bullets.map((b) => (
              <li key={b} className="border-border border-t pt-3 text-sm text-foreground/65">
                {b}
              </li>
            ))}
          </ul>
          {p.href ? (
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="label-mono link-underline mt-6 self-start text-foreground"
            >
              {p.hrefLabel} ↗
            </a>
          ) : (
            <span className="label-mono mt-6">{p.hrefLabel}</span>
          )}
        </div>
      </motion.article>
    </div>
  );
}

export function Work() {
  return (
    <section id="projects" className="px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="label-mono">Selected Projects</p>
          <h2 className="display-xl mt-4 text-[clamp(2.6rem,7vw,5.5rem)]">
            Featured
            <br />
            Work
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:self-end">
          <p className="text-lg leading-relaxed text-foreground/70">
            Production applications shipped for live agency clients — SaaS platforms, storefronts,
            automation pipelines and marketplaces. Every one built end to end.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 space-y-16 md:space-y-24">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} p={p} i={i} total={projects.length} />
        ))}
      </div>

      <Reveal className="mt-16">
        <Link
  href="/projects"
  className="label-mono inline-flex items-center gap-3 rounded-full border border-foreground bg-foreground px-6 py-3 text-background transition-colors duration-300 hover:bg-background hover:text-foreground"
>
  View all <span aria-hidden>→</span>
</Link>
      </Reveal>
    </section>
  );
}