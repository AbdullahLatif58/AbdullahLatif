"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about", num: "01" },
  { label: "Skills", href: "#skills", num: "02" },
  { label: "Projects", href: "#projects", num: "03" },
  { label: "Experience", href: "#experience", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive("#" + e.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-0" : "py-2"}`}
    >
      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled
            ? "max-w-full bg-[#0A0F1E]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_20px_rgba(0,0,0,0.3)]"
            : "max-w-5xl mt-3 bg-[#0D1730]/70 backdrop-blur-xl rounded-2xl border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-[0_4px_14px_rgba(37,99,235,0.4)] group-hover:scale-105 transition-transform">
              <span className="font-display font-bold text-white text-sm">A</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-sm">Abdullah</span>
              <span className="font-mono text-[9px] text-blue-400/70 tracking-widest uppercase">Latif</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 rounded-xl font-mono text-xs transition-all duration-200 ${
                  active === l.href ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                {active === l.href && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/8 border border-white/10 rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  {l.label}
                </span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/AbdullahLatif58" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10 transition-all text-white/40"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:latifabdullah337@gmail.com"
              className="font-mono text-xs px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all duration-200 shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
            >
              Hire Me ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="flex flex-col gap-1.5">
              <span className={`w-4 h-0.5 bg-white/60 block transition-all duration-200 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-4 h-0.5 bg-white/60 block transition-all duration-200 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`w-4 h-0.5 bg-white/60 block transition-all duration-200 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-3 mt-2 bg-[#0D1730]/95 backdrop-blur-xl rounded-2xl border border-white/8 shadow-2xl overflow-hidden"
          >
            <div className="p-3 space-y-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <span className="font-mono text-xs text-blue-400/60">{l.num}</span>
                  <span className="font-mono text-sm text-white/70">{l.label}</span>
                </a>
              ))}
              <a href="mailto:latifabdullah337@gmail.com"
                className="block text-center font-mono text-sm px-4 py-3 bg-blue-600 text-white rounded-xl mt-2 hover:bg-blue-500 transition-colors">
                Hire Me ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
