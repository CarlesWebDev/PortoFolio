import { useState } from "react";
import IMG from "./assets/Image.jpg";
import Tabungan from "./assets/Tabungan.png";
import STI from "./assets/STI.png";
import AAP from "./assets/AAP.png";
import TIM from "./assets/TIM.png";
import BLOGFY from "./assets/BLOGFY.jpg";
import SIPASAR from "./assets/SIPASAR.png";
import MobileApps from "./assets/MobileApps.png";
import Footer from "./Component/Footer";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Tentang", href: "#tentang" },
    { name: "Projek", href: "#projek" },
    { name: "Kontak", href: "#kontak" },
  ];
  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg text-[#4169E1] tracking-tight">Carles Marvin</span>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="text-gray-500 hover:text-[#4169E1] font-medium transition-colors">
              {l.name}
            </a>
          ))}
          <a href="#kontak" className="bg-[#4169E1] hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition-all hover:scale-105">
            Hubungi Saya
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2">
          {links.map((l) => (
            <a key={l.name} href={l.href} onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-[#4169E1] text-center py-2 rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-100 transition-colors">
              {l.name}
            </a>
          ))}
          <a href="#kontak" onClick={() => setIsOpen(false)}
            className="bg-[#4169E1] hover:bg-blue-700 text-white font-semibold text-center py-2 rounded-lg transition-all">
            Hubungi Saya
          </a>
        </div>
      )}
    </nav>
  );
}


// function Footer() {
//   return (
//     <footer className="bg-white border-t border-gray-100 py-8">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
//         <span className="font-bold text-[#4169E1]">Carles Marvin</span>
//         <p className="text-sm text-gray-400">© 2026 Carles Marvin. All rights reserved.</p>
//         <div className="flex gap-4">
//           {[
//             { href: "https://www.linkedin.com/in/carles-marvin-3a01a4336/", label: "LinkedIn" },
//             { href: "https://instagram.com/carlsmrvn", label: "Instagram" },
//             { href: "https://wa.me/6283807362506", label: "WhatsApp" },
//           ].map((s) => (
//             <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
//               className="text-sm text-gray-400 hover:text-[#4169E1] transition-colors">{s.label}</a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }

<Footer />


export default function App() {
  const skills = [
    { name: "Laravel", level: "Expert" },
    { name: "PHP", level: "Advanced" },
    { name: "MySQL", level: "Advanced" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "HTML5", level: "Expert" },
    { name: "CSS3", level: "Expert" },
    { name: "Bootstrap", level: "Expert" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "VueJS", level: "Intermediate" },
    { name: "NodeJS", level: "Intermediate" },
    { name: "Express", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "SpringBoot", level: "Beginner" },
    { name: "NextJS", level: "Beginner" },
    { name: "Docker", level: "Beginner" },
    { name: "MongoDB", level: "Beginner" },
    { name: "PostgreSQL", level: "Beginner" },
    { name: "Python", level: "Beginner" },
  ];

  const levelBar: Record<string, string> = {
    Expert: "w-full bg-[#4169E1]",
    Advanced: "w-4/5 bg-blue-400",
    Intermediate: "w-2/3 bg-blue-300",
    Beginner: "w-1/3 bg-blue-200",
  };

  const projects = [
    {
      title: "EduSavings",
      desc: "Platform pengelolaan tabungan siswa berbasis web dengan fitur pencatatan transaksi real-time, manajemen akun, dan dashboard statistik interaktif.",
      img: Tabungan,
      tags: ["Laravel 11", "Node.js", "MySQL"],
      code: "https://github.com/CarlesWebDev/Tabungan",
      type: "Web Application",
    },
    {
      title: "Bloggers App",
      desc: "Aplikasi berbasis web yang memungkinkan pengguna untuk membuat, membaca, mengedit, dan menghapus artikel blog secara mudah dan interaktif.",
      img: BLOGFY,
      tags: ["Bootstrap", "Laravel 11", "MySQL"],
      code: "https://gitlab.com/oo5832246/blogger",
      type: "Web Platform",
    },
    {
      title: "STI",
      desc: "Perusahaan penyedia solusi sistem integrasi dan layanan digital yang membantu bisnis bertransformasi melalui teknologi dan managed IT services.",
      img: STI,
      tags: ["React.Js(Tsx)", "TailwindCSS", "SpringBoot", "Zustand"],
      code: "#",
      type: "Corporate Website",
    },
    {
      title: "AAP",
      desc: "Perusahaan teknologi yang menyediakan solusi pembayaran digital, layanan komunikasi mobile, dan pengembangan sistem bisnis terintegrasi.",
      img: AAP,
      tags: ["React.Js(Tsx)", "TailwindCSS", "SpringBoot", "Zustand"],
      code: "#",
      type: "Business Solution",
    },
    {
      title: "TIM",
      desc: "Perusahaan teknologi finansial yang menyediakan sistem terpadu proses pinjaman bagi lembaga keuangan dan mikrofinansial.",
      img: TIM,
      tags: ["React.Js(Tsx)", "TailwindCSS", "SpringBoot", "Zustand"],
      code: "#",
      type: "Fintech Platform",
    },
    {
      title: "Sales App",
      desc: "Aplikasi mobile untuk tim penjualan yang memungkinkan mereka mengelola prospek, melacak aktivitas penjualan, dan mengakses data pelanggan secara real-time.",
      img: MobileApps,
      tags: ["React Native", "Expo", "NativeWind", "SpringBoot"],
      code: "#",
      type: "Mobile App",
    },
    {
      title: "SIPASAR",
      desc: "Platform Pengaduan Sarana Prasarana Sekolah yang membantu petugas mengelola dan menyelesaikan keluhan terkait sarana dan prasarana sekolah.",
      img: SIPASAR,
      tags: ["Laravel 11", "Alpine.js", "TailwindCSS", "MySQL"],
      code: "https://github.com/CarlesWebDev/UKK",
      type: "Management System",
    },
  ];

  const contacts = [
    { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email", value: "charlesmarvin4321@gmail.com", href: "mailto:charlesmarvin4321@gmail.com" },
    { icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z", label: "LinkedIn", value: "carlesmarvin", href: "https://www.linkedin.com/in/carles-marvin-3a01a4336/" },
    { icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z", label: "Instagram", value: "@carlsmrvn", href: "https://instagram.com/carlsmrvn" },
    { icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z", label: "WhatsApp", value: "+62 838-0736-2506", href: "https://wa.me/6283807362506" },
  ];

  return (
    <div className="bg-[#faf8ff] text-gray-900 antialiased overflow-x-hidden">
      <Navbar />

      <section id="hero" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
          <div className="space-y-8 order-2 lg:order-1">
            <p className="text-sm font-bold text-[#4169E1] tracking-widest uppercase">Hello, World!</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Saya{" "}
              <span className="text-[#4169E1]">Carles</span>
              <br />
              <span className="text-[#4169E1]">Marvin</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              <span className="text-gray-900 font-semibold">Full-Stack Developer</span> and{" "}
              <span className="text-gray-900 font-semibold">App Developer</span> yang bersemangat menciptakan
              pengalaman digital yang <span className="text-[#4169E1]">bermakna</span> dan{" "}
              <span className="text-[#4169E1]">berdampak</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projek" className="px-8 py-3 rounded-lg bg-[#4169E1] text-white font-semibold hover:bg-blue-700 active:scale-95 transition-all text-center shadow-md shadow-blue-200">
                Lihat Portfolio
              </a>
              <a href="#kontak" className="px-8 py-3 rounded-lg border border-gray-200 text-gray-700 hover:border-[#4169E1] hover:text-[#4169E1] font-semibold active:scale-95 transition-all text-center bg-white">
                Hubungi Saya →
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4169E1] to-blue-300 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
              <img
                src={IMG}
                alt="Carles Marvin"
                className="relative rounded-2xl w-full max-w-sm h-auto border-2 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>


      <section id="tentang" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tentang <span className="text-[#4169E1]">Saya</span>
            </h2>
            <div className="w-16 h-1 bg-[#4169E1] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Perkenalkan, saya{" "}
                <span className="text-[#4169E1] font-semibold">Carles Marvin</span>, seorang{" "}
                <span className="font-semibold text-[#4169E1]">Full-Stack Developer dan App Developer</span>{" "}
                dengan pengalaman lebih dari 2 tahun dalam membangun aplikasi web dan mobile yang modern dan scalable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dengan pendekatan terstruktur dan perhatian terhadap detail, saya berkomitmen untuk memberikan kode yang
                bersih, maintainable, dan mengikuti best practices terbaru.
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-4">
                {[
                  { icon: "💻", title: "Frontend Dev", desc: "Antarmuka responsif & interaktif" },
                  { icon: "🖥️", title: "Backend Dev", desc: "Arsitektur server-side yang scalable" },
                  { icon: "📱", title: "App Development", desc: "Aplikasi mobile cross-platform" },
                ].map((c) => (
                  <div key={c.title} className="flex items-center gap-4 p-4 bg-[#faf8ff] rounded-xl border border-gray-100 hover:border-[#4169E1]/40 transition-colors">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{c.title}</p>
                      <p className="text-gray-500 text-xs">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="lg:col-span-3 bg-[#faf8ff] rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#4169E1] mb-5 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Teknologi yang Dikuasai
              </h3>

              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Web Development</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {skills.map((s) => (
                  <div key={s.name} className="bg-white border border-gray-100 rounded-lg p-3 hover:border-[#4169E1]/40 transition-all hover:scale-[1.02]">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-gray-800">{s.name}</span>
                      <span className="text-xs bg-blue-50 text-[#4169E1] px-2 py-0.5 rounded-full">{s.level}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div className={`h-1.5 rounded-full transition-all duration-500 ${levelBar[s.level]}`} />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">App Development</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="bg-white border border-gray-100 rounded-lg p-3 hover:border-[#4169E1]/40 transition-all hover:scale-[1.02]">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-gray-800">React Native</span>
                    <span className="text-xs bg-blue-50 text-[#4169E1] px-2 py-0.5 rounded-full">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full w-2/3 bg-blue-300 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJEK ── */}
      <section id="projek" className="py-24 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Projek <span className="text-[#4169E1]">Unggulan</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Karya terbaik yang menunjukkan kemampuan dan passion saya dalam pengembangan web dan mobile.
            </p>
            <div className="w-16 h-1 bg-[#4169E1] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#4169E1]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative overflow-hidden h-48">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <span className="absolute top-3 right-3 bg-[#4169E1] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {p.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#4169E1] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="bg-blue-50 text-[#4169E1] text-xs font-medium px-2.5 py-1 rounded-full border border-blue-100">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.code !== "#" ? (
                    <a href={p.code} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#4169E1] hover:text-blue-700 font-semibold text-sm transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      View Code
                    </a>
                  ) : (
                    <span className="text-gray-400 text-xs italic">Under Company License</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KONTAK ── */}
      <section id="kontak" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mari <span className="text-[#4169E1]">Berkolaborasi</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Saya selalu terbuka untuk mendiskusikan peluang baru dan proyek menarik.
            </p>
            <div className="w-16 h-1 bg-[#4169E1] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="bg-[#faf8ff] border border-gray-100 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contacts.map((c) => (
                <a key={c.label} href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white border border-gray-100 hover:border-[#4169E1] hover:shadow-md rounded-xl transition-all group hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-full bg-blue-50 group-hover:bg-[#4169E1] flex items-center justify-center flex-shrink-0 transition-colors border border-blue-100 group-hover:border-[#4169E1]">
                    <svg className="w-5 h-5 text-[#4169E1] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={c.icon} />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{c.label}</p>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-[#4169E1] transition-colors truncate">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}