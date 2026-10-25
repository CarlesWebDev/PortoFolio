import { Link } from "react-router-dom";
import { useMeta } from "../useMeta";
export default function NotFound() {
    useMeta("404 — Carles Marvin");
    return (<main className="min-h-[100svh] flex flex-col justify-center gutter max-w-6xl mx-auto">
      <p className="label-mono text-muted">404</p>
      <h1 className="font-display tracking-tight leading-[0.95] mt-4" style={{ fontSize: "var(--text-hero)" }}>
        Halaman ini Tidak Tersedia
      </h1>
      <Link to="/" className="link-underline font-display text-2xl text-accent mt-8 self-start">
        Kembali →
      </Link>
    </main>);
}
