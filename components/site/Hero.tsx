"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { heroTags, profile } from "@/data/portfolio";

const portraitAsset = "/images/Me.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "108%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] px-5 pt-28 pb-10 md:px-10 md:pt-32">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h1 className="display-xl text-[clamp(3.2rem,12.5vw,11rem)]">
            <Line delay={0.05}>Software</Line>
            <Line delay={0.15}>Developer</Line>
          </h1>

          <motion.div
            className="mt-7 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
          >
            {heroTags.map((tag) => (
              <Link
                key={tag}
                href="/projects"
                className="label-mono rounded-full border border-border px-4 py-1.5 text-foreground/70 transition-colors hover:border-foreground hover:text-foreground"
              >
                {tag}
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:items-end lg:text-right">
          <motion.span
            className="label-mono inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-live" />
            Open for work
          </motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.55 }}
          >
            <p className="label-mono">01/</p>
            <p className="label-mono mt-2 leading-relaxed">
              {profile.origin} <span className="text-foreground">{profile.originAccent}</span>
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mt-12 grid items-end gap-10 lg:mt-16 lg:grid-cols-12">
        <motion.div
          className="corner-frame overflow-hidden lg:col-span-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease }}
        >
          <motion.img
            src={portraitAsset}
            alt="Abdullah Latif, full-stack developer, on a rooftop in Lahore"
            width={1206}
            height={1907}
            className="aspect-[4/5] w-full object-cover object-top grayscale-[25%]"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, delay: 0.35, ease }}
          />
        </motion.div>

        <motion.div
          className="lg:col-span-6 lg:text-right"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease }}
        >
          <p className="label-mono leading-relaxed">
            {profile.tagline}
            <br />
            {profile.taglineTwo}
          </p>
          <p className="label-mono mt-4 leading-relaxed">
            Open for freelance / full-time
            <br />
            Based in {profile.location}
          </p>

          <h2 className="display-xl mt-8 text-[clamp(2.6rem,9vw,7.5rem)]">
            <span className="block">{profile.first}</span>
            <span className="block">{profile.last}</span>
          </h2>

          <p className="label-mono mt-5">2026 Portfolio</p>

          <a
            href="#projects"
            className="label-mono mt-6 inline-flex items-center gap-3 rounded-full border border-border px-5 py-2.5 text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Selected work <span aria-hidden>↘</span>
          </a>
        </motion.div>
      </div>

      <div className="mt-14 flex items-start gap-6 rule-top pt-5">
        <span aria-hidden className="text-lg">
          →
        </span>
        <p className="label-mono leading-relaxed">
          I&apos;m based in
          <br />
          Lahore, Pakistan,
          <br />
          Passionate about systems &amp; UI
        </p>
        <p className="label-mono ml-auto hidden sm:block">Design &amp; code by {profile.first}</p>
      </div>
    </section>
  );
}
