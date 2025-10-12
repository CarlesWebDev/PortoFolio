import React, { useState } from "react";

// Ikon yang dibutuhkan oleh Navbar
const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Tentang", href: "#tentang" },
    { name: "Projek", href: "#projek" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-end items-center">
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#kontak"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Tombol Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors block text-center py-2 rounded-md bg-gray-800"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#kontak"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-colors text-center"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
