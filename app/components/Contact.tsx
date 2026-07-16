"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("latifabdullah337@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactItems = [
    { icon: "📧", label: "Email", val: "latifabdullah337@gmail.com", href: "mailto:latifabdullah337@gmail.com", action: "Send Email" },
    { icon: "📱", label: "WhatsApp", val: "+92 329 787 4104", href: "https://wa.me/923297874104", action: "WhatsApp Me" },
    { icon: "💻", label: "GitHub", val: "github.com/AbdullahLatif58", href: "https://github.com/AbdullahLatif58", action: "View GitHub" },
    { icon: "📍", label: "Location", val: "Wazirabad, Punjab, Pakistan", href: "#", action: "Open to Remote" },
  ];

  return (
    <section id="contact" className="py-28 bg-[#0A0F1E] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 mesh-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">Contact</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="font-body text-white/40 max-w-lg mx-auto text-lg">
            I&apos;m actively looking for full-time or remote opportunities. If you need a reliable developer who can build and ship — let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="grid grid-cols-1 gap-3 mb-6">
              {contactItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 bg-white/4 border border-white/8 rounded-2xl px-5 py-4 hover:bg-white/8 hover:border-blue-500/30 transition-all group"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-white/30 mb-0.5">{item.label}</div>
                    <div className="font-body text-white/70 font-medium text-sm">{item.val}</div>
                  </div>
                  <div className="font-mono text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.action} →
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              onClick={copyEmail}
              className="w-full py-3 border border-dashed border-blue-500/30 text-blue-400 font-mono text-sm rounded-xl hover:bg-blue-500/8 hover:border-blue-400/50 transition-all"
            >
              {copied ? "✓ Copied to clipboard!" : "Click to copy email address"}
            </motion.button>
          </div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl p-8 text-white overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1D4ED8 0%, #7C3AED 100%)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
            <div className="relative z-10">
              <div className="text-3xl mb-4">👋</div>
              <h3 className="font-display font-bold text-2xl mb-3">Ready to hire?</h3>
              <p className="font-body text-blue-100/80 mb-6 leading-relaxed">
                I&apos;m available immediately for full-time, part-time, or freelance remote work. I bring agency-grade speed, production-quality code, and direct communication.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Available for immediate start",
                  "Open to full-time or contract",
                  "Remote-friendly (PKT, UTC+5)",
                  "Fluent in English & Urdu",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-blue-100/70 font-body">
                    <span className="w-4 h-4 bg-white/15 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="mailto:latifabdullah337@gmail.com"
                className="block text-center bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors font-body"
              >
                Send me an email →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
