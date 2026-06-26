"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const roles = [
  "Full-Stack Developer",
  "Next.js Engineer",
  "Node.js Developer",
  "SaaS Builder",
  "MySQL Architect",
];

function useTyping(words: string[], speed = 65, pause = 2200) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting ? speed / 2 : charIdx === current.length ? pause : speed;
    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplay(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setWordIdx((w) => (w + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const stats = [
  { val: "5+", label: "Projects Shipped" },
  { val: "3mo", label: "Intern → Dev" },
  { val: "∞", label: "Lines Written" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });
  const typed = useTyping(roles);

  // Parallax transforms for orbs
  const orb1X = useTransform(springX, (v) => v * 1.2);
  const orb1Y = useTransform(springY, (v) => v * 1.2);
  const orb2X = useTransform(springX, (v) => -v * 0.8);
  const orb2Y = useTransform(springY, (v) => -v * 0.8);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0F1E]">

      {/* Mesh grid background */}
      <div className="absolute inset-0 mesh-grid opacity-100" />

      {/* Deep radial gradient center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(37,99,235,0.12),transparent_70%)]" />

      {/* Animated orbs */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="absolute top-[10%] right-[8%] w-[600px] h-[600px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,#818CF8_0%,#2563EB_40%,transparent_70%)] blur-[80px]" />
      </motion.div>

      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,#7C3AED,transparent_70%)] blur-[70px]" />
      </motion.div>

      {/* Subtle particle dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-400/40"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4 + i * 0.7, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-12">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">

          {/* ── Left ── */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="font-mono text-xs text-white/60 tracking-wide">Open to work · Remote / Full-time</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[72px] lg:text-[88px] font-bold text-white leading-[0.95] tracking-tight mb-6"
            >
              Abdullah<br />
              <span className="gradient-text">Latif</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-blue-500/60" />
              <span className="font-mono text-base text-blue-300/80 min-w-[260px]">
                {typed}<span className="cursor-blink text-blue-400 font-bold">_</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="font-body text-white/50 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Building production-grade apps at{" "}
              <span className="text-white/80 font-semibold">Ecomwhisper</span> — WhatsApp SaaS, AI e-commerce,
              SEO pipelines & real-estate marketplaces. Promoted intern → developer in{" "}
              <span className="text-blue-400 font-semibold">3 months</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68 }}
              className="flex flex-wrap gap-3 mb-16"
            >
              <a href="#projects"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)]"
              >
                <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">View My Work</span>
                <span className="relative group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/15 text-white/80 font-semibold rounded-xl hover:border-blue-500/60 hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                Let&apos;s Talk
              </a>
              <a href="https://github.com/AbdullahLatif58" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/5 border border-white/10 text-white/60 font-semibold rounded-xl hover:border-white/30 hover:text-white transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.82 }}
              className="flex gap-10"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.08 }}
                >
                  <div className="font-display text-3xl font-bold gradient-text">{s.val}</div>
                  <div className="font-mono text-[10px] text-white/30 mt-1 uppercase tracking-widest">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — Avatar card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-[360px] h-[420px]">
              {/* Glowing ring behind card */}
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-violet-600/20 blur-2xl -z-10" />

              {/* Photo frame */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-[#1E2A4A] to-[#0D1730] shadow-[0_20px_80px_rgba(37,99,235,0.2)]">
                <div className="w-full h-full flex flex-col items-center justify-center relative">
                  {/* Background mesh inside card */}
                  <div className="absolute inset-0 mesh-grid opacity-40" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.15),transparent_70%)]" />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-48 h-48 rounded-3xl overflow-hidden mb-5 shadow-[0_8px_40px_rgba(37,99,235,0.45)] border-2 border-white/10">
                      <img
                        src="/Me.jpeg"
                        alt="Abdullah Latif"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <span className="font-display font-bold text-white text-xl mb-1">Abdullah Latif</span>
                    <span className="font-mono text-xs text-blue-400/70 tracking-widest uppercase">Full-Stack Dev</span>
                  </div>
                </div>
              </div>

              {/* Decorative dashed ring */}
              <div className="absolute -inset-3 rounded-[3rem] border border-dashed border-blue-500/15 -z-10" />

              {/* Floating card — building */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-8 bg-[#0D1730] border border-white/10 shadow-2xl rounded-2xl px-4 py-3 min-w-[170px] backdrop-blur-sm"
              >
                <div className="font-mono text-[10px] text-white/30 mb-1 uppercase tracking-wider">Currently building</div>
                <div className="font-semibold text-white text-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  WhatsApp SaaS
                </div>
              </motion.div>

              {/* Floating card — stack */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute -bottom-4 -left-8 bg-[#0D1730] border border-white/10 shadow-2xl rounded-2xl px-4 py-3 backdrop-blur-sm"
              >
                <div className="font-mono text-[10px] text-white/30 mb-2 uppercase tracking-wider">Tech Stack</div>
                <div className="flex gap-1.5">
                  {["N", "Nd", "My", "Tw"].map((t, i) => (
                    <div key={i} className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-[10px]">{t}</div>
                  ))}
                </div>
              </motion.div>

              {/* Floating card — location */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                className="absolute top-1/2 -right-14 -translate-y-1/2 bg-[#0D1730] border border-white/10 shadow-2xl rounded-2xl px-3 py-2.5 backdrop-blur-sm"
              >
                <div className="font-mono text-[10px] text-white/40">📍 Pakistan</div>
                <div className="font-mono text-[10px] text-blue-400 mt-0.5">Remote Ready</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-white/25 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-blue-400/60" />
        </motion.div>
      </motion.div>

    </section>
  );
}
