"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  {
    icon: Github,
    label: "GitHub",
    href: profile.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: profile.linkedin,
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${profile.email}`,
  },
];

export function SocialDock() {
  return (
    <motion.div
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className="
          flex items-center gap-2
          rounded-full
          border border-black/10
          bg-white/65
          px-2 py-2
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.15)]
          ring-1 ring-black/5
        "
      >
        {links.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            className="
              group
              flex h-11 w-11 items-center justify-center
              rounded-full
              border border-black/10
              bg-black/5
              text-black
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-110
              hover:bg-black/10
              hover:border-black/20
              active:scale-95
            "
          >
            <Icon
              size={18}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:rotate-6"
            />
          </a>
        ))}

        <span className="mx-1 h-6 w-px bg-black/10" />

        <div className="flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 backdrop-blur-xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>

          <span className="label-mono whitespace-nowrap text-black">
            Open for work
          </span>
        </div>
      </div>
    </motion.div>
  );
} 