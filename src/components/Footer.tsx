import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="gutter max-w-6xl mx-auto py-16">
        <Link
          to="/"
          className="font-display leading-none tracking-tight block hover:opacity-80 transition-opacity"
          style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}
        >
          Carles Marvin
        </Link>

        <div className="mt-16 flex flex-col md:flex-row justify-between gap-10 md:gap-4 border-t border-line/20 pt-8">
          <div className="flex flex-col gap-2">
            <p className="label-mono text-muted">
              Tangerang Selatan, Indonesia
            </p>
            <a
              href="mailto:charlesmarvin4321@gmail.com"
              className="label-mono transition-colors "
            >
              charlesmarvin4321@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2 md:text-right">
            <p className="label-mono text-muted">
              © {new Date().getFullYear()} Carles Marvin
            </p>
            <p className="label-mono text-muted text-xs">
              Built with React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
