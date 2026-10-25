import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCmsContent } from "../lib/cms";
import type { Project } from "../data/projects";
import type { Certificate } from "../data/certificates";
export default function SelectedWork() {
    const { projects, certificates } = useCmsContent();
    return (<>
      <section id="karya" className="section-space border-t border-line">
        <div className="gutter max-w-6xl mx-auto">
          <p className="label-mono text-muted mb-6">Karya terpilih</p>
          <h2 className="font-display tracking-tight leading-none" style={{ fontSize: "var(--text-h2)" }}>
            Yang pernah saya bikin
          </h2>
        </div>

        <CursorPreview projects={projects} certificates={certificates}/>

        <div className="gutter max-w-6xl mx-auto mt-12">
          <ul id="karya-list" className="border-t border-line">
            {projects.map((p) => (<li key={p.slug} data-slug={p.slug} className="border-b border-line">
                <Link to={`/karya/${p.slug}`} className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-4 items-baseline gap-2 sm:gap-3 py-5 sm:py-6 md:py-8 transition-colors hover:text-accent focus-visible:text-accent">
                  <span className="label-mono text-muted group-hover:text-accent">
                    {p.number}
                  </span>
                  <span className="font-display leading-none tracking-tight truncate col-span-2" style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}>
                    {p.name}
                  </span>
                  <span className="label-mono text-muted text-right group-hover:text-accent">
                    <span className="hidden sm:inline">{p.category} · </span>
                    {p.year}
                  </span>
                  <MobileThumb item={p}/>
                </Link>
              </li>))}
          </ul>
        </div>
      </section>

      <section id="sertifikat" className="section-space border-t border-line mt-24">
        <div className="gutter max-w-6xl mx-auto">
          <p className="label-mono text-muted mb-6">Sertifikat & Lisensi</p>
          <h2 className="font-display tracking-tight leading-none" style={{ fontSize: "var(--text-h2)" }}>
            Pencapaian saya
          </h2>
        </div>

        <div className="gutter max-w-6xl mx-auto mt-12">
          <ul id="sertifikat-list" className="border-t border-line">
            {certificates.map((c, i) => (<li key={c.slug} data-slug={c.slug} className="border-b border-line">
                <a href={c.url || `#sertifikat`} target={c.url ? "_blank" : undefined} rel={c.url ? "noopener noreferrer" : undefined} className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-4 items-baseline gap-2 sm:gap-3 py-5 sm:py-6 md:py-8 transition-colors hover:text-accent focus-visible:text-accent">
                  <span className="label-mono text-muted group-hover:text-accent">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="font-display leading-none tracking-tight truncate col-span-2" style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}>
                    {c.name}
                  </span>
                  <span className="label-mono text-muted text-right group-hover:text-accent">
                    <span className="hidden sm:inline">{c.issuer || "Sertifikat"} · </span>
                    {c.year}
                  </span>
                  <MobileThumb item={c}/>
                </a>
              </li>))}
          </ul>
        </div>
      </section>
    </>);
}
function MobileThumb({ item }: {
    item: Project | Certificate;
}) {
    return (<div className="col-span-full mt-3 md:hidden">
      {item.image ? (<img src={item.image} alt={`Tampilan ${item.name}`} loading="lazy" className="w-full aspect-[3/2] object-cover border border-line"/>) : (<div className="w-full aspect-[3/2] border border-line flex items-center justify-center">
          <span className="label-mono text-muted">Screenshot menyusul</span>
        </div>)}
    </div>);
}
function CursorPreview({ projects, certificates, }: {
    projects: Project[];
    certificates: Certificate[];
}) {
    const frame = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0, raf: 0 });
    const [active, setActive] = useState<Project | Certificate | null>(null);
    useEffect(() => {
        const fine = window.matchMedia("(pointer: fine)").matches;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!fine || reduced)
            return;
        const el = frame.current;
        if (!el)
            return;
        const loop = () => {
            const p = pos.current;
            p.x += (p.tx - p.x) * 0.12;
            p.y += (p.ty - p.y) * 0.12;
            el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
            p.raf = requestAnimationFrame(loop);
        };
        const onMove = (e: MouseEvent) => {
            pos.current.tx = e.clientX + 24;
            pos.current.ty = e.clientY + 24;
        };
        window.addEventListener("mousemove", onMove);
        pos.current.raf = requestAnimationFrame(loop);
        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(pos.current.raf);
        };
    }, []);
    useEffect(() => {
        const onOver = (e: MouseEvent) => {
            const slug = (e.target as HTMLElement)
                .closest("[data-slug]")
                ?.getAttribute("data-slug");
            const nextProject = slug ? projects.find((p) => p.slug === slug) : null;
            const nextCert = slug ? certificates.find((c) => c.slug === slug) : null;
            const next = nextProject ?? nextCert ?? null;
            setActive(next?.image ? next : null);
        };
        document.addEventListener("mouseover", onOver);
        return () => document.removeEventListener("mouseover", onOver);
    }, [projects, certificates]);
    return (<div ref={frame} className="fixed top-0 left-0 z-40 pointer-events-none hidden md:block" aria-hidden="true">
      <div className="w-[360px] aspect-[4/3] border border-line bg-bg overflow-hidden transition-[opacity,scale] duration-300 origin-center" style={{
            opacity: active ? 1 : 0,
            scale: active ? "1" : "0.92",
        }}>
        {active?.image && (<img ref={imgRef} src={active.image} alt="" className="w-full h-full object-cover"/>)}
      </div>
    </div>);
}
