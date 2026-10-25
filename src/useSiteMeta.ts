import { useEffect } from "react";
import type { CmsContent } from "./lib/cms";
export function useSiteMeta(settings: CmsContent["settings"]) {
    useEffect(() => {
        if (!settings)
            return;
        if (settings.site_title)
            document.title = settings.site_title;
        if (settings.meta_description) {
            let desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
            if (!desc) {
                desc = document.createElement("meta");
                desc.name = "description";
                document.head.appendChild(desc);
            }
            desc.content = settings.meta_description;
        }
        const setIcon = (selector: string, href: string, type: string) => {
            let link = document.querySelector<HTMLLinkElement>(selector);
            if (!link) {
                link = document.createElement("link");
                link.rel = "icon";
                link.type = type;
                document.head.appendChild(link);
            }
            link.href = href;
        };
        if (settings.favicon_url)
            setIcon('link[rel="icon"]', settings.favicon_url, "image/png");
        const setOg = (property: string, content: string) => {
            let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute("property", property);
                document.head.appendChild(tag);
            }
            tag.content = content;
        };
        if (settings.site_title)
            setOg("og:title", settings.site_title);
        if (settings.meta_description)
            setOg("og:description", settings.meta_description);
        if (settings.og_image_url) {
            setOg("og:image", settings.og_image_url);
            setOg("og:image:width", "1200");
            setOg("og:image:height", "630");
        }
    }, [settings]);
}
