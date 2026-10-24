import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useMeta } from "../useMeta";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const index = projects.indexOf(project!);

  useMeta(
    project
      ? `${project.name} — Carles Marvin`
      : "Project tidak ditemukan — Carles Marvin"
  );

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="section-space gutter max-w-6xl mx-auto">
          <h1 className="font-display" style={{ fontSize: "var(--text-h2)" }}>
            Project ini nggak ada.
          </h1>
          <Link to="/#karya" className="link-underline text-accent mt-6 inline-block">
            ← Lihat semua karya
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <article className="pt-32 pb-8">
          <div className="gutter max-w-6xl mx-auto">
            <Link to="/#karya" className="label-mono text-muted hover:text-fg transition-colors">
              ← Kembali
            </Link>

            <p className="label-mono text-muted mt-10">
              {project.number} · {project.year} · {project.category}
            </p>
            <h1
              className="font-display tracking-tight leading-none mt-4"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {project.name}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
              <div className="md:col-span-4 space-y-8">
                {[
                  ["Masalah", project.problem],
                  ["Yang saya kerjakan", project.role],
                  ["Hasil", project.result],
                ].map(([label, text]) => (
                  <div key={label}>
                    <p className="label-mono text-accent mb-2">{label}</p>
                    <p className="text-muted max-w-[45ch]">{text}</p>
                  </div>
                ))}
                <div>
                  <p className="label-mono text-accent mb-2">Stack</p>
                  <p className="label-mono text-muted">
                    {project.stack.join(" · ")}
                  </p>
                </div>
                {(project.live || project.repo) && (
                  <div className="flex gap-6">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-fg label-mono"
                      >
                        Lihat live →
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-fg label-mono"
                      >
                        Lihat kode →
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="md:col-span-8">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Tampilan ${project.name}`}
                    className="w-full aspect-[4/3] object-cover border border-line"
                  />
                ) : (
                  <div className="w-full aspect-[4/3] border border-line flex items-center justify-center">
                    <span className="label-mono text-muted text-center px-4">
                      {/* Screenshot menyusul — tambahkan di src/assets lalu isi field `image` di src/data/projects.ts */}
                      Image Not Found
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>

        <div className="gutter max-w-6xl mx-auto border-t border-line py-10 flex justify-between">
          {index > 0 ? (
            <Link
              to={`/karya/${projects[index - 1].slug}`}
              className="label-mono hover:text-accent transition-colors"
            >
              ← {projects[index - 1].name}
            </Link>
          ) : (
            <span />
          )}
          {index < projects.length - 1 && (
            <Link
              to={`/karya/${projects[index + 1].slug}`}
              className="label-mono hover:text-accent transition-colors"
            >
              {projects[index + 1].name} →
            </Link>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
