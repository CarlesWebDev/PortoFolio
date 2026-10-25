import { useState } from "react";
import { useCmsContent } from "../lib/cms";
const fallbackEmail = "charlesmarvin4321@gmail.com";
const fallbackSocials = [
    { label: "GitHub", href: "https://github.com/CarlesWebDev" },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/carles-marvin-3a01a4336/",
    },
    { label: "Instagram", href: "https://instagram.com/carlsmrvn" },
    { label: "WhatsApp", href: "https://wa.me/6283807362506" },
];
export default function Contact() {
    const [copied, setCopied] = useState(false);
    const { contact } = useCmsContent();
    const email = contact?.email || fallbackEmail;
    const socials = contact?.socials?.length ? contact.socials : fallbackSocials;
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
        catch {
            window.location.href = `mailto:${email}`;
        }
    };
    return (<section id="kontak" className="section-space border-t border-line">
      <div className="gutter max-w-6xl mx-auto">
        <p className="label-mono text-muted mb-6">Kontak</p>
        <h2 className="font-display tracking-tight leading-none max-w-[14ch]" style={{ fontSize: "var(--text-h2)" }}>
          {contact?.sectionTitle || "Ada ide? Ceritain aja."}
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a href={`mailto:${email}`} className="font-display text-2xl md:text-4xl text-accent link-underline break-all">
            {email}
          </a>
          <button onClick={copy} className="label-mono border border-line px-4 py-2 hover:border-fg transition-colors">
            {copied ? "Tersalin ✓" : (contact?.copyLabel || "Salin email")}
          </button>
        </div>

        <p className="label-mono text-muted mt-12">
          Atau  di:{" "}
          {socials.map((s, i) => (<span key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-fg hover:text-accent transition-colors">
                {s.label}
              </a>
              {i < socials.length - 1 ? " · " : ""}
            </span>))}
        </p>
      </div>
    </section>);
}
