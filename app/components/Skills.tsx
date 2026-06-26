"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "Frontend",
    icon: "🎨",
    color: "#3B82F6",
    colorEnd: "#818CF8",
    bg: "from-blue-950/40 to-indigo-950/20",
    border: "border-blue-800/20",
    skills: [
      { name: "Next.js / React", level: 88 },
      { name: "JavaScript ES6+", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 92 },
    ],
  },
  {
    label: "Backend",
    icon: "⚡",
    color: "#7C3AED",
    colorEnd: "#A78BFA",
    bg: "from-violet-950/40 to-purple-950/20",
    border: "border-violet-800/20",
    skills: [
      { name: "Node.js", level: 84 },
      { name: "Express.js", level: 82 },
      { name: "REST API Design", level: 87 },
      { name: "Baileys / WA API", level: 78 },
    ],
  },
  {
    label: "Database & Tools",
    icon: "🛠️",
    color: "#0891B2",
    colorEnd: "#22D3EE",
    bg: "from-cyan-950/40 to-sky-950/20",
    border: "border-cyan-800/20",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Schema Design", level: 80 },
      { name: "Git / GitHub", level: 88 },
      { name: "n8n Automation", level: 75 },
    ],
  },
];

const tools = [
  { name: "Next.js", abbr: "N", bg: "from-slate-700 to-slate-900" },
  { name: "React", abbr: "R", bg: "from-blue-500 to-cyan-500" },
  { name: "Node.js", abbr: "Nd", bg: "from-green-600 to-emerald-500" },
  { name: "MySQL", abbr: "My", bg: "from-amber-500 to-orange-500" },
  { name: "Tailwind", abbr: "Tw", bg: "from-cyan-500 to-blue-500" },
  { name: "Express", abbr: "Ex", bg: "from-slate-500 to-slate-700" },
  { name: "Git", abbr: "Gt", bg: "from-red-500 to-rose-600" },
  { name: "Vercel", abbr: "V", bg: "from-slate-800 to-black" },
  { name: "n8n", abbr: "n8", bg: "from-pink-500 to-rose-500" },
  { name: "Postman", abbr: "Pm", bg: "from-orange-500 to-amber-600" },
  { name: "VS Code", abbr: "VS", bg: "from-blue-600 to-blue-800" },
  { name: "npm", abbr: "np", bg: "from-red-600 to-red-800" },
];

function Bar({ name, level, color, colorEnd, delay }: { name: string; level: number; color: string; colorEnd: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-5 last:mb-0">
      <div className="flex justify-between mb-2.5">
        <span className="font-mono text-sm text-white/60">{name}</span>
        <span className="font-mono text-sm font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${colorEnd})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 bg-[#F8FAFF]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block font-mono text-xs text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">Skills</span>
          <h2 className="font-display text-5xl font-bold text-[#0A0F1E] leading-tight mb-4">
            What I <span className="gradient-text">Build With</span>
          </h2>
          <p className="font-body text-slate-400 max-w-md mx-auto text-base">
            Technologies I work with every day in production environments.
          </p>
        </motion.div>

        {/* Skill cards — dark glass style */}
        <div className="grid lg:grid-cols-3 gap-6 mb-14">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: ci * 0.12 }}
              className={`rounded-3xl border ${cat.border} bg-gradient-to-br ${cat.bg} bg-[#0D1730] p-9 relative overflow-hidden`}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{ background: `radial-gradient(circle at 80% 20%, ${cat.color}, transparent 60%)` }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl bg-white/5 border border-white/8">
                    {cat.icon}
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-lg">{cat.label}</div>
                    <div className="font-mono text-xs text-white/30 uppercase tracking-wider">{cat.skills.length} skills</div>
                  </div>
                </div>
                {cat.skills.map((s, si) => (
                  <Bar key={s.name} name={s.name} level={s.level} color={cat.color} colorEnd={cat.colorEnd} delay={ci * 0.12 + si * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
          <div className="text-center font-mono text-xs text-slate-400 mb-6 uppercase tracking-widest">Tools & Technologies</div>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 320, damping: 22, delay: 0.5 + i * 0.04 }}
                whileHover={{ y: -5, scale: 1.06 }}
                className="flex items-center gap-2 bg-white border border-slate-100 shadow-sm rounded-2xl px-4 py-2.5 cursor-default hover:border-blue-200 hover:shadow-[0_8px_24px_rgba(37,99,235,0.1)] transition-all"
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-white text-[10px] bg-gradient-to-br ${t.bg}`}>
                  {t.abbr}
                </div>
                <span className="font-mono text-sm text-slate-700">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
