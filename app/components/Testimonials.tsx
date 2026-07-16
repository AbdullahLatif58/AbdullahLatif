"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Testimonials hidden until you have real quotes — section replaced with a clean CTA banner
export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-[#F8FAFF]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0A0F1E] to-[#1E2A4A] rounded-3xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 mesh-grid opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(37,99,235,0.15),transparent_60%)]" />
          <div className="relative z-10">
            <div className="font-mono text-xs text-blue-400/70 mb-4 tracking-widest uppercase">05 · Recognition</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              FYP Recognized for<br /><span className="gradient-text">Technical Depth</span>
            </h2>
            <p className="font-body text-white/40 max-w-xl mx-auto mb-8 text-lg">
              Teknova — my Final Year Project — was recognized by the University of Gujrat for its real-world applicability and technical sophistication.
            </p>
            <a
              href="https://github.com/AbdullahLatif58/Teknova"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 font-body"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              View Teknova on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
