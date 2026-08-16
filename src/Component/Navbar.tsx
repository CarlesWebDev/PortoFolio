import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Tentang", href: "#tentang" },
    { name: "Projek", href: "#projek" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className="bg-[#FBFBFA]/80 backdrop-blur-xl fixed w-full top-0 z-50 border-b border-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <span className="font-semibold text-lg text-[#111111] tracking-tight flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-[#111111] flex items-center justify-center text-sm font-bold text-white">
            CM
          </span>
          <span className="hidden sm:inline">Carles Marvin</span>
        </span>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-sm font-medium text-[#787774] hover:text-[#111111] px-4 py-2 rounded-lg hover:bg-[#F7F6F3] transition-colors"
            >
              {l.name}
            </a>
          ))}
          <a
            href="#kontak"
            className="ml-3 bg-[#111111] text-white hover:bg-[#2b2b2b] text-sm font-semibold py-2.5 px-5 rounded-lg transition-colors active:scale-[0.98]"
          >
            Hubungi saya
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#787774] p-2" aria-label="Toggle menu">
            {isOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-1 border-t border-[#EAEAEA] pt-4 bg-[#FBFBFA]">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="text-[#787774] hover:text-[#111111] font-medium py-3 px-4 rounded-lg hover:bg-[#F7F6F3] transition-colors"
            >
              {l.name}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setIsOpen(false)}
            className="bg-[#111111] text-white font-semibold text-center py-3 rounded-lg mt-2 hover:bg-[#2b2b2b] transition-colors"
          >
            Hubungi saya
          </a>
        </div>
      )}
    </nav>
  );
}