"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    role: "Junior Full-Stack Developer",
    company: "Ecomwhisper",
    period: "January 2026 – Present",
    type: "Full-time",
    color: "#3B82F6",
    points: [
      "Design, develop, and deploy full-stack web applications using Next.js (App Router) and Node.js for clients in e-commerce, real estate, and marketing sectors.",
      "Architect MySQL database schemas and build RESTful APIs powering dynamic, data-driven applications with complex querying and relational data management.",
      "Lead end-to-end project delivery — from requirements gathering and UI/UX decisions through to deployment — working directly with agency clients.",
      "Build and maintain reusable component libraries and modular backend services, cutting development time across multiple client projects.",
      "Use Git and GitHub for version control, feature branching, and collaborative code workflows in a professional agency setting.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Ecomwhisper",
    period: "October 2025 – December 2025",
    type: "Internship",
    color: "#64748B",
    points: [
      "Completed a structured 3-month internship embedded within the agency's core development team, contributing to live client projects from day one.",
      "Built and tested full-stack features in Next.js and Node.js under senior developer mentorship, gaining rapid practical experience with production codebases.",
      "Demonstrated consistent technical growth and professional reliability — promoted to full-time Junior Developer role upon internship completion.",
    ],
  },
];

const education = {
  degree: "Bachelor of Science — Computer Science",
  institution: "University of Gujrat",
  location: "Gujrat, Pakistan",
  period: "Graduated May 2026",
  highlight: "Final Year Project: Teknova — Multi-Template E-Commerce Platform with Voice Search & Amazon API Product Suggestion Engine — recognized for technical depth and real-world applicability.",
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 bg-[#F8FAFF]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-xs text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">Experience</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0A0F1E] mb-4">
            Work & Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience timeline */}
          <div className="lg:col-span-2">
            <div className="font-display font-semibold text-[#0A0F1E] text-xl mb-8">Experience</div>
            <div className="relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200" />
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.role + exp.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  className="relative pl-14 mb-10 last:mb-0"
                >
                  <div
                    className="absolute left-0 top-1 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center shadow-md"
                    style={{ background: exp.color }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-blue-100 hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="font-display font-bold text-[#0A0F1E] text-lg">{exp.role}</h3>
                        <div className="font-body font-semibold text-blue-600 text-sm">{exp.company}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-xs text-slate-400">{exp.period}</div>
                        <span className="inline-block mt-1 font-mono text-xs px-2 py-0.5 rounded-full text-white" style={{ background: exp.color }}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed font-body">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education + quick info */}
          <div>
            <div className="font-display font-semibold text-[#0A0F1E] text-xl mb-8">Education</div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-slate-100 rounded-2xl p-6 mb-6 hover:border-blue-100 hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 bg-gradient-to-br from-blue-500 to-violet-600 shadow-[0_4px_14px_rgba(37,99,235,0.3)]">
                🎓
              </div>
              <h3 className="font-display font-bold text-[#0A0F1E] text-lg mb-1">{education.degree}</h3>
              <div className="font-body text-blue-600 font-semibold text-sm mb-0.5">{education.institution}</div>
              <div className="font-mono text-xs text-slate-400 mb-4">{education.location} · {education.period}</div>
              <p className="font-body text-slate-500 text-sm leading-relaxed">{education.highlight}</p>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-[#0A0F1E] rounded-2xl p-6 text-white"
            >
              <div className="font-display font-semibold mb-4 text-lg">Quick Facts</div>
              <div className="space-y-3">
                {[
                  { label: "Open to", val: "Full-time & Remote" },
                  { label: "Availability", val: "Immediately" },
                  { label: "Languages", val: "Urdu, English" },
                  { label: "Time Zone", val: "PKT (UTC+5)" },
                  { label: "Experience", val: "~8 months agency" },
                ].map((f) => (
                  <div key={f.label} className="flex justify-between items-center border-b border-white/8 pb-3 last:border-0 last:pb-0">
                    <span className="font-mono text-xs text-white/30">{f.label}</span>
                    <span className="font-body font-semibold text-sm text-white">{f.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
