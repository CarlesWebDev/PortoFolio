import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Tentang", href: "#tentang" },
    { name: "Projek", href: "#projek" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className="bg-white/80 dark:bg-[#0b0e11]/80 backdrop-blur-xl fixed w-full top-0 z-50 border-b border-[#eaecef] dark:border-[#2b3139]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg text-[#181a20] dark:text-white tracking-tight flex items-center gap-2">
          <span className="w-8 h-8 rounded-md bg-[#fcd535] flex items-center justify-center text-sm font-bold text-[#181a20]">
            CM
          </span>
          <span className="hidden sm:inline">
            Carles<span className="text-[#fcd535]">Marvin</span>
          </span>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-sm font-medium text-[#707a8a] hover:text-[#181a20] dark:hover:text-white px-4 py-2 rounded-md hover:bg-[#f5f5f5] dark:hover:bg-[#1e2329] transition-colors"
            >
              {l.name}
            </a>
          ))}
          <a
            href="#kontak"
            className="ml-3 bg-[#fcd535] text-[#181a20] hover:bg-[#f0b90b] text-sm font-semibold py-2.5 px-5 rounded-md transition-colors"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#707a8a] dark:text-[#929aa5] p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
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
        <div className="md:hidden px-6 pb-6 flex flex-col gap-1 border-t border-[#eaecef] dark:border-[#2b3139] pt-4 bg-white dark:bg-[#0b0e11]">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="text-[#707a8a] hover:text-[#181a20] dark:hover:text-white font-medium py-3 px-4 rounded-md hover:bg-[#f5f5f5] dark:hover:bg-[#1e2329] transition-colors"
            >
              {l.name}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setIsOpen(false)}
            className="bg-[#fcd535] text-[#181a20] font-semibold text-center py-3 rounded-md mt-2 hover:bg-[#f0b90b] transition-colors"
          >
            Hubungi Saya
          </a>
        </div>
      )}
    </nav>
  );
}