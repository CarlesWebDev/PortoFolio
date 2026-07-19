import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const links = [
    { name: "Tentang", href: "#tentang" },
    { name: "Projek", href: "#projek" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className="bg-slate-950/70 backdrop-blur-xl fixed w-full top-0 z-50 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg text-white tracking-tight flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center text-sm text-white shadow-lg shadow-cyan-500/20">
            CM
          </span>
          <span className="hidden sm:inline">
            Carles<span className="text-cyan-400">Marvin</span>
          </span>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-sm font-medium text-slate-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all"
            >
              {l.name}
            </a>
          ))}
          <a
            href="#kontak"
            className="ml-3 bg-white text-slate-900 hover:bg-slate-200 text-sm font-semibold py-2.5 px-5 rounded-lg transition-all"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-1 border-t border-white/5 pt-4 bg-slate-950">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
            >
              {l.name}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setIsOpen(false)}
            className="bg-white text-slate-900 font-semibold text-center py-3 rounded-lg mt-2"
          >
            Hubungi Saya
          </a>
        </div>
      )}
    </nav>
  );
}