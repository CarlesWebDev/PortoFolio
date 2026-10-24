import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun } from "@phosphor-icons/react";

const links = [
  { name: "Karya", href: "/#karya" },
  { name: "Tentang", href: "/#tentang" },
  { name: "Kontak", href: "/#kontak" },
];

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
      className="w-9 h-9 flex items-center justify-center border border-line text-muted hover:text-accent hover:border-accent transition-colors"
    >
      {theme === "dark" ? <Sun size={16} weight="bold" /> : <Moon size={16} weight="bold" />}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/85 backdrop-blur-md border-b border-line">
      <div className="gutter max-w-6xl mx-auto h-16 flex justify-between items-center">
        <Link to="/" className="font-display text-xl tracking-tight">
          Carles Marvin
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.name}
              to={l.href}
              className="label-mono text-muted hover:text-fg transition-colors"
            >
              {l.name}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden label-mono"
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? "Tutup" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden gutter pb-6 flex flex-col gap-4 border-t border-line pt-4 bg-bg">
          {links.map((l) => (
            <NavLink
              key={l.name}
              to={l.href}
              onClick={() => setOpen(false)}
              className="label-mono text-muted hover:text-fg"
            >
              {l.name}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
