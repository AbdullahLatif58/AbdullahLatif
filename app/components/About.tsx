"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { icon: "🚀", title: "Production First", desc: "Every project I've built has shipped to real clients with real traffic — not just portfolio demos." },
  { icon: "⚡", title: "Fast Learner", desc: "Promoted from intern to junior developer in just 3 months by consistently delivering high-quality work." },
  { icon: "🏗️", title: "Architecture Minded", desc: "I don't just write code — I design schemas, plan APIs, and think about scalability from day one." },
  { icon: "🤝", title: "Client Focused", desc: "I gather requirements directly from clients and translate business needs into clean, working code." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 bg-[#F8FAFF] relative overflow-hidden" ref={ref}>
      {/* Subtle top gradient bridge from dark hero */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-xs text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">About Me</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0A0F1E] mb-5 leading-tight">
            Who I Am
          </h2>
          <p className="font-body text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            A full-stack developer based in Wazirabad, Pakistan — passionate about building software that solves real problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-body text-slate-600 text-lg leading-relaxed mb-6">
              I&apos;m a Junior Full-Stack Developer at <span className="text-blue-600 font-semibold">Ecomwhisper</span>, where I&apos;ve spent the past several months building production-grade applications for clients across e-commerce, real estate, and digital marketing.
            </p>
            <p className="font-body text-slate-600 text-lg leading-relaxed mb-6">
              I work end-to-end: designing database schemas, building RESTful APIs in Node.js, and crafting responsive, performant frontends in Next.js with Tailwind CSS. I care about clean code, good architecture, and shipping things that actually work.
            </p>
            <p className="font-body text-slate-600 text-lg leading-relaxed mb-8">
              I hold a <span className="font-semibold text-slate-800">BS in Computer Science</span> from the University of Gujrat (graduated May 2026), where my final year project — a multi-template e-commerce platform with voice search & Amazon API integration — was recognized for its technical depth.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["Next.js", "Node.js", "MySQL", "TypeScript", "REST APIs", "n8n"].map((tag) => (
                <span key={tag} className="font-mono text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg hover:border-blue-300 hover:text-blue-700 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Highlights grid */}
          <div className="grid grid-cols-2 gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-white border border-slate-100 rounded-2xl p-7 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all group card-lift"
              >
                <div className="text-3xl mb-4">{h.icon}</div>
                <div className="font-display font-bold text-slate-900 text-base mb-2.5 group-hover:text-blue-600 transition-colors">{h.title}</div>
                <div className="font-body text-sm text-slate-500 leading-relaxed">{h.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact info strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 pt-8 border-t border-slate-200"
        >
          {[
            { label: "Email", val: "latifabdullah337@gmail.com", href: "mailto:latifabdullah337@gmail.com" },
            { label: "Phone", val: "+92 329 787 4104", href: "tel:+923297874104" },
            { label: "Location", val: "Wazirabad, Punjab, Pakistan", href: "#" },
            { label: "GitHub", val: "github.com/AbdullahLatif58", href: "https://github.com/AbdullahLatif58" },
          ].map((item) => (
            <a key={item.label} href={item.href} className="text-center group">
              <div className="font-mono text-[10px] text-slate-400 mb-1 uppercase tracking-wider">{item.label}</div>
              <div className="font-body text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">{item.val}</div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
