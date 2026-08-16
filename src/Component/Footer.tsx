import { GithubLogo, LinkedinLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

export default function Footer() {
  const socials = [
    { Icon: GithubLogo, href: "https://github.com/CarlesWebDev", label: "GitHub" },
    { Icon: LinkedinLogo, href: "https://www.linkedin.com/in/carles-marvin-3a01a4336/", label: "LinkedIn" },
    { Icon: InstagramLogo, href: "https://instagram.com/carlsmrvn", label: "Instagram" },
    { Icon: WhatsappLogo, href: "https://wa.me/6283807362506", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-[#F7F6F3] border-t border-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-[#111111] flex items-center justify-center text-sm font-bold text-white">
              CM
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#111111]">Carles Marvin</p>
              <p className="text-xs text-[#787774]">Full-Stack Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#EAEAEA] bg-white text-[#787774] hover:text-[#111111] hover:border-[#CDCDCA] hover:bg-[#FBFBFA] transition-colors"
              >
                <s.Icon size={20} weight="bold" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#EAEAEA] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#787774]">© {new Date().getFullYear()} Carles Marvin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}