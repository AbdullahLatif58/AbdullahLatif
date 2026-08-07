"use client";

import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiN8N,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiDocker,
  SiJest,
} from "react-icons/si";

import {
  MessageCircle,
  Sparkles,
  Code2,
  Database,
} from "lucide-react";

import { about, expertise } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-foreground",
      },
      {
        name: "React.js",
        icon: SiReact,
        color: "text-[#61DAFB]",
      },
      {
        name: "JavaScript ES6+",
        icon: SiJavascript,
        color: "text-[#F7DF1E]",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-[#06B6D4]",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "text-[#E34F26]",
      },
      {
        name: "CSS3",
        icon: SiCss,
        color: "text-[#1572B6]",
      },
    ],
  },

  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-[#339933]",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-foreground",
      },
      {
        name: "REST API Design",
        icon: Code2,
        color: "text-[#6366F1]",
      },
    ],
  },

  {
    title: "Database",
    items: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-[#4479A1]",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-[#47A248]",
      },
      {
        name: "Schema Design",
        icon: Database,
        color: "text-[#F59E0B]",
      },
    ],
  },

  {
    title: "Automation",
    items: [
      {
        name: "n8n",
        icon: SiN8N,
        color: "text-[#EA4B71]",
      },
      {
        name: "Baileys API",
        icon: MessageCircle,
        color: "text-[#25D366]",
      },
      {
        name: "OpenAI API",
        icon: Sparkles,
        color: "text-[#10A37F]",
      },
    ],
  },

  {
    title: "Tools",
    items: [
      {
        name: "Git",
        icon: SiGit,
        color: "text-[#F05032]",
      },
      {
        name: "GitHub Actions",
        icon: SiGithub,
        color: "text-foreground",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-[#FF6C37]",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "text-foreground",
      },
      {
        name: "Jest",
        icon: SiJest,
        color: "text-[#C21325]",
      },
       {
        name: "Docker",
        icon: SiDocker,
        color: "text-[#2496ED]",
      },
    ],
  },
];

export function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <p className="label-mono">About</p>
      </Reveal>

      <div className="mt-8 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="display-xl text-[clamp(2.6rem,7vw,5.5rem)]">
              Web Dev
              <br />
              &amp; App Dev
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-2">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="label-mono border-border border-b pb-2 text-foreground/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          {about.map((paragraph, i) => (
            <Reveal key={paragraph} delay={i * 0.08}>
              <p className="mb-6 text-lg leading-relaxed text-foreground/80 md:text-xl">
                {paragraph}
              </p>
            </Reveal>
          ))}

<div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
  {skillGroups.map((group, index) => (
    <Reveal key={group.title} delay={index * 0.08}>
      <div>
        <p className="label-mono border-border border-b pb-3">
          {group.title}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {group.items.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                title={tech.name}
                className="
                  group
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-border
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-muted/30
                "
              >
                <Icon
                  className={`
                    h-7
                    w-7
                    ${tech.color}
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}