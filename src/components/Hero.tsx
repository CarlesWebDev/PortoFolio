import { useEffect, useState } from "react";
import { useCmsContent } from "../lib/cms";
const fallbackRoles = [
    "Halo Nama Saya Carles Marvin",
    "Seorang Fullstack Web & Mobile Developer.",
    "Membangun Ekosistem Digital Berbasis Web dan Cross-Platform Mobile.",
];
export default function Hero() {
    const { settings } = useCmsContent();
    const roles = settings?.hero_greeting ? [settings.hero_greeting, ...fallbackRoles] : fallbackRoles;
    const [time, setTime] = useState(() => wibTime());
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);
    useEffect(() => {
        const id = setInterval(() => setTime(wibTime()), 1000);
        return () => clearInterval(id);
    }, []);
    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];
            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1));
            setTypingSpeed(isDeleting ? 30 : 80);
            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            }
            else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);
    return (<section className="min-h-[100svh] flex flex-col justify-end pb-[10vh] pt-24">
      <div className="gutter max-w-6xl mx-auto w-full">
        <p className="label-mono text-muted rise">
          {settings?.hero_label || "Carles Marvin · Web Developer · Indonesia"}
        </p>

        <h1 className="font-display leading-[1.1] tracking-tight mt-6 max-w-[20ch]" style={{ fontSize: "var(--text-hero)", minHeight: "3.5em" }}>
          <span className="block rise" style={{ animationDelay: "80ms" }}>
            {text}
            <span className="animate-pulse inline-block w-[4px] bg-white ml-2 align-middle h-[0.9em] -translate-y-1"></span>
          </span>
        </h1>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 rise" style={{ animationDelay: "320ms" }}>
          <p className="label-mono text-muted">
            Terbuka buat ngobrol dan kolaborasi
          </p>
          <p className="label-mono text-muted tabular-nums" aria-hidden="true">
            {time} WIB
          </p>
        </div>

        <div className="mt-6 rise" style={{ animationDelay: "400ms" }}>
          <a href={settings?.hero_cta_link || "#kontak"} className="link-underline font-display text-2xl md:text-3xl text-accent">
            {settings?.hero_cta_text || "Ngobrol yuk"} →
          </a>
        </div>
      </div>
    </section>);
}
function wibTime() {
    return new Intl.DateTimeFormat("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Jakarta",
    }).format(new Date());
}
