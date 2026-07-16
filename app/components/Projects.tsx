"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "WhatsApp Marketing SaaS",
    tagline: "Bulk WhatsApp campaigns — zero third-party API costs",
    description:
      "Full-featured platform comparable to GoResponde.io & WaSenders. Built on the Baileys library to connect directly to WhatsApp. Multi-session accounts, mass broadcasts, message templates, real-time delivery tracking, automations, and CRUD contact lists.",
    tags: ["Node.js", "Baileys", "Next.js", "MySQL"],
    category: "SaaS Platform",
    accentFrom: "#059669",
    accentTo: "#10B981",
    accentBg: "from-emerald-950/40 to-green-950/20",
    accentBorder: "border-emerald-800/30",
    accentText: "text-emerald-400",
    badge: "Flagship",
    badgeColor: "bg-emerald-500",
    link: null,
    highlights: ["Multi-account inbox", "Mass broadcast engine", "Role-based access", "Real-time delivery tracking"],
    icon: "💬",
  },
  {
    title: "Teknova",
    tagline: "Multi-template e-commerce + voice search + Amazon API",
    description:
      "Final Year Project — a dynamic merchant platform with three fully switchable storefront templates that switch site-wide with zero reload. Voice/microphone search via Web Speech API. Amazon Product API surfaces listings for out-of-stock items.",
    tags: ["Next.js", "Node.js", "MySQL", "Amazon API", "Web Speech API"],
    category: "Final Year Project",
    accentFrom: "#7C3AED",
    accentTo: "#8B5CF6",
    accentBg: "from-violet-950/40 to-purple-950/20",
    accentBorder: "border-violet-800/30",
    accentText: "text-violet-400",
    badge: "FYP",
    badgeColor: "bg-violet-500",
    link: "https://github.com/AbdullahLatif58/Teknova",
    highlights: ["3 switchable themes", "Voice search", "Amazon API fallback", "Merchant dashboard"],
    icon: "🛍️",
  },
  {
    title: "Real Estate Marketplace",
    tagline: "SSR property listings, advanced filters & agent panel",
    description:
      "Full-stack property marketplace with advanced filtering by location, price, type, and bedrooms. Server-side rendered for SEO. Secure agent admin panel. Normalized MySQL schema for listings, agents, inquiries, and saved searches.",
    tags: ["Next.js", "Node.js", "MySQL"],
    category: "Live Client Project",
    accentFrom: "#0284C7",
    accentTo: "#0EA5E9",
    accentBg: "from-sky-950/40 to-blue-950/20",
    accentBorder: "border-sky-800/30",
    accentText: "text-sky-400",
    badge: "Live ↗",
    badgeColor: "bg-sky-500",
    link: "https://realtor-omega-ecru.vercel.app",
    highlights: ["Advanced filters", "SSR for SEO", "Agent admin panel", "Normalized schema"],
    icon: "🏠",
  },
  {
    title: "SEO Automation Pipeline",
    tagline: "Saves 5+ hours of manual agency work per campaign",
    description:
      "End-to-end SEO workflow using n8n automating keyword tracking, competitor analysis, content gap identification, and report generation. Integrates multiple third-party APIs with scheduled runs.",
    tags: ["n8n", "Node.js", "REST APIs"],
    category: "Internal Tool",
    accentFrom: "#DC2626",
    accentTo: "#F87171",
    accentBg: "from-rose-950/40 to-pink-950/20",
    accentBorder: "border-rose-800/30",
    accentText: "text-rose-400",
    badge: "Automation",
    badgeColor: "bg-rose-500",
    link: null,
    highlights: ["5+ hrs saved/campaign", "Keyword tracking", "Competitor analysis", "Auto-reports"],
    icon: "⚙️",
  },
  {
    title: "Golden Grove — Olive Oil",
    tagline: "Premium brand e-commerce storefront",
    description:
      "A clean, elegant e-commerce storefront for a premium olive oil brand. Full product browsing, cart, and checkout experience with a polished, responsive UI crafted for brand storytelling.",
    tags: ["Next.js", "Node.js", "MySQL"],
    category: "Live Client Project",
    accentFrom: "#D97706",
    accentTo: "#F59E0B",
    accentBg: "from-amber-950/40 to-yellow-950/20",
    accentBorder: "border-amber-800/30",
    accentText: "text-amber-400",
    badge: "Live ↗",
    badgeColor: "bg-amber-500",
    link: "https://golden-grove.vercel.app",
    highlights: ["Premium brand design", "Product catalogue", "Cart & checkout", "Fully responsive"],
    icon: "🫒",
  },
];

function TiltCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    setTilt({
      x: ((e.clientY - r.top - r.height / 2) / r.height) * 8,
      y: -((e.clientX - r.left - r.width / 2) / r.width) * 8,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s ease",
      }}
      className="group relative bg-[#0D1730] rounded-3xl border border-white/8 overflow-hidden hover:border-white/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300"
    >
      {/* Top accent */}
      <div className={`h-44 bg-gradient-to-br ${project.accentBg} border-b ${project.accentBorder} flex items-center justify-center relative overflow-hidden`}>
        {/* Glow behind icon */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: `radial-gradient(circle at 50% 60%, ${project.accentFrom}, transparent 65%)` }}
        />
        <div className="text-6xl relative z-10">{project.icon}</div>
        <div className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${project.badgeColor} text-white font-mono text-xs font-semibold`}>
          {project.badge}
        </div>
        <div className="absolute top-4 right-4 font-mono text-xs text-white/30">{project.category}</div>
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-white text-lg mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className={`font-mono text-xs font-semibold mb-3 ${project.accentText}`}>{project.tagline}</p>
        <p className="font-body text-white/50 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-1.5 mb-5">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-center gap-1.5 text-xs text-white/40">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.accentFrom }} />
              {h}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((t) => (
            <span key={t} className="font-mono text-[11px] bg-white/5 border border-white/8 text-white/50 px-2.5 py-1 rounded-lg">{t}</span>
          ))}
        </div>

        {project.link ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 font-mono text-sm font-semibold ${project.accentText} hover:gap-2.5 transition-all`}
          >
            {project.link.includes("github") ? "View on GitHub ↗" : "View Live Site ↗"}
          </a>
        ) : (
          <span className="font-mono text-xs text-white/20 italic">Private / Internal Project</span>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 bg-[#060B18] relative overflow-hidden" ref={ref}>
     
      <div className="absolute inset-0 mesh-grid opacity-30" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block font-mono text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">Projects</span>
          <h2 className="font-display text-5xl font-bold text-white leading-tight mb-4">
            Projects <span className="gradient-text">Shipped</span>
          </h2>
          <p className="font-body text-white/30 max-w-md mx-auto text-base">
            Real applications for real clients — not just tutorials or side projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects.slice(0, 2).map((p, i) => (
            <TiltCard key={p.title} project={p} index={i} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.slice(2).map((p, i) => (
            <TiltCard key={p.title} project={p} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
