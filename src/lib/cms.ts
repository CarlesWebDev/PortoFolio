import { useEffect, useState } from "react";
import { projects as fallbackProjects, type Project } from "../data/projects";
import { certificates as fallbackCertificates, type Certificate } from "../data/certificates";
const URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const enabled = Boolean(URL && KEY && !URL.includes("YOUR-PROJECT"));
type CmsProject = {
    id: string;
    title: string;
    slug: string;
    category: string | null;
    year: number | null;
    summary: string | null;
    live_url: string | null;
    repo_url: string | null;
    tech_stack: string[] | null;
    cs_problem: string | null;
    cs_role: string | null;
    cs_result: string | null;
    sort_order: number;
    thumbnail?: {
        url: string;
    } | null;
};
type CmsAchievement = {
    id: string;
    title: string;
    issuer: string | null;
    year: number | null;
    credential_url: string | null;
    sort_order: number;
};
type CmsNow = {
    coding: string | null;
    learning: string | null;
    listening: string | null;
    updated_at: string;
};
type CmsSettings = {
    site_title: string | null;
    meta_description: string | null;
    hero_greeting: string | null;
    hero_label: string | null;
    hero_cta_text: string | null;
    hero_cta_link: string | null;
    footer_text: string | null;
    favicon?: {
        url: string;
    } | null;
    og_image?: {
        url: string;
    } | null;
};
type CmsAbout = {
    headline: string | null;
    body: string | null;
    photo?: {
        url: string;
    } | null;
};
type CmsContact = {
    section_title: string | null;
    email: string | null;
    copy_button_label: string | null;
};
type CmsSocial = {
    platform: string;
    url: string;
    visible: boolean;
};
async function rest<T>(path: string): Promise<T[]> {
    const res = await fetch(`${URL}/rest/v1/${path}`, {
        headers: { apikey: KEY!, Authorization: `Bearer ${KEY}` },
    });
    if (!res.ok)
        throw new Error(`Supabase REST ${res.status}`);
    return res.json();
}
function mergeProjects(cms: CmsProject[]): Project[] {
    return cms.map((p, i) => {
        const local = fallbackProjects.find((f) => f.slug === p.slug);
        return {
            slug: p.slug,
            summary: p.summary ?? undefined,
            number: (i + 1).toString().padStart(2, "0"),
            name: p.title,
            year: p.year?.toString() ?? local?.year ?? "",
            category: p.category ?? local?.category ?? "",
            problem: p.cs_problem ?? local?.problem ?? "",
            role: p.cs_role ?? local?.role ?? "",
            result: p.cs_result ?? local?.result ?? "",
            stack: p.tech_stack ?? local?.stack ?? [],
            image: local?.image ?? p.thumbnail?.url ?? undefined,
            repo: p.repo_url ?? local?.repo,
            live: p.live_url ?? local?.live,
        };
    });
}
function mergeCertificates(cms: CmsAchievement[]): Certificate[] {
    return cms.map((c) => {
        const local = fallbackCertificates.find((f) => f.name === c.title || f.issuer.toLowerCase() === (c.issuer ?? "").toLowerCase());
        return {
            slug: local?.slug ?? c.id.slice(0, 8),
            name: c.title,
            issuer: c.issuer ?? local?.issuer ?? "",
            year: c.year?.toString() ?? local?.year ?? "",
            url: c.credential_url ?? local?.url,
            image: local?.image ?? "",
        };
    });
}
const SOCIAL_LABELS: Record<string, string> = {
    github: "GitHub",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
};
function mergeSocials(cms: CmsSocial[]) {
    return cms
        .filter((s) => s.url && s.url.trim() && s.url.trim() !== " ")
        .map((s) => {
        const value = s.url.trim();
        const href = s.platform === "whatsapp" && !value.startsWith("http") ? `https://wa.me/${value}` : value;
        return { label: SOCIAL_LABELS[s.platform] ?? s.platform, href };
    });
}
export type CmsContent = {
    projects: Project[];
    certificates: Certificate[];
    now: {
        items: {
            label: string;
            text: string;
        }[];
        updated: string;
    } | null;
    about: {
        headline: string;
        body: string;
        photoUrl?: string | null;
    } | null;
    contact: {
        sectionTitle: string;
        email: string;
        copyLabel: string;
        socials: {
            label: string;
            href: string;
        }[];
    } | null;
    settings: (CmsSettings & {
        favicon_url?: string | null;
        og_image_url?: string | null;
    }) | null;
};
const fallback: CmsContent = {
    projects: fallbackProjects,
    certificates: fallbackCertificates,
    now: null,
    about: null,
    contact: null,
    settings: null,
};
export function useCmsContent(): CmsContent {
    const [content, setContent] = useState<CmsContent>(fallback);
    useEffect(() => {
        if (!enabled)
            return;
        let cancelled = false;
        (async () => {
            try {
                const [p, a, n, ab, ct, sc, st] = await Promise.all([
                    rest<CmsProject>("projects?status=eq.published&order=sort_order.asc&select=*,thumbnail:media(url)"),
                    rest<CmsAchievement>("achievements?status=eq.published&order=sort_order.asc"),
                    rest<CmsNow>("now_status?id=eq.1"),
                    rest<CmsAbout>("about?id=eq.1&select=*,photo:media(url)"),
                    rest<CmsContact>("contact?id=eq.1"),
                    rest<CmsSocial>("social_links?visible=eq.true&order=sort_order.asc"),
                    rest<CmsSettings>("site_settings?id=eq.1&select=*,favicon:media!site_settings_favicon_id_fkey(url),og_image:media!site_settings_og_image_id_fkey(url)"),
                ]);
                if (cancelled)
                    return;
                const nowRow = n[0];
                const aboutRow = ab[0];
                const contactRow = ct[0];
                const settingsRow = st[0];
                setContent({
                    projects: p.length ? mergeProjects(p) : fallbackProjects,
                    certificates: a.length ? mergeCertificates(a) : fallbackCertificates,
                    now: nowRow
                        ? {
                            items: [
                                { label: "Lagi Ngoding", text: nowRow.coding ?? "-" },
                                { label: "Lagi belajar", text: nowRow.learning ?? "-" },
                                { label: "Lagi dengerin Lagu", text: nowRow.listening ?? "-" },
                            ],
                            updated: new Intl.DateTimeFormat("id-ID", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            }).format(new Date(nowRow.updated_at)),
                        }
                        : null,
                    about: aboutRow && (aboutRow.headline || aboutRow.body)
                        ? {
                            headline: aboutRow.headline ?? "",
                            body: aboutRow.body ?? "",
                            photoUrl: aboutRow.photo?.url ?? null,
                        }
                        : null,
                    contact: contactRow
                        ? {
                            sectionTitle: contactRow.section_title ?? "",
                            email: contactRow.email ?? "",
                            copyLabel: contactRow.copy_button_label ?? "Salin email",
                            socials: mergeSocials(sc),
                        }
                        : null,
                    settings: settingsRow
                        ? {
                            ...settingsRow,
                            favicon_url: settingsRow.favicon?.url ?? null,
                            og_image_url: settingsRow.og_image?.url ?? null,
                        }
                        : null,
                });
            }
            catch {
            }
        })();
        return () => {
            cancelled = true;
        };
    }, []);
    return content;
}
