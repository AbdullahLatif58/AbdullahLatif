export default function Footer() {
  return (
    <footer className="bg-[#060B18] py-8 px-6 text-center border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-white text-lg">
          AL<span className="gradient-text">.</span>
        </div>
        <div className="font-mono text-xs text-white/20">
          © 2026 Abdullah Latif · Built with Next.js & Tailwind CSS
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/AbdullahLatif58" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-white/30 hover:text-blue-400 transition-colors">GitHub</a>
          <a href="mailto:latifabdullah337@gmail.com" className="font-mono text-xs text-white/30 hover:text-blue-400 transition-colors">Email</a>
          <a href="https://wa.me/923297874104" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-white/30 hover:text-blue-400 transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
