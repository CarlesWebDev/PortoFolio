import { useState, useEffect } from "react";
import IMG from "./assets/Image.jpg";
import Tabungan from "./assets/Tabungan.png";
import STI from "./assets/STI.png";
import AAP from "./assets/AAP.png";
import TIM from "./assets/TIM.png";
import BLOGFY from "./assets/BLOGFY.jpg";
import SIPASAR from "./assets/SIPASAR.png";
import MobileApps from "./assets/MobileApps.png";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

export default function App() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5 & CSS3", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "JavaScript / TypeScript", level: "Advanced" },
        { name: "React / Next.js", level: "Advanced" },
        { name: "Vue.js", level: "Intermediate" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "PHP / Laravel", level: "Expert" },
        { name: "Node.js / Express", level: "Intermediate" },
        { name: "Java / SpringBoot", level: "Beginner" },
        { name: "Python", level: "Beginner" },
      ],
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MySQL / PostgreSQL", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "Git / GitHub", level: "Advanced" },
      ],
    },
    {
      category: "Mobile",
      skills: [
        { name: "React Native", level: "Intermediate" },
        { name: "Flutter", level: "Beginner" },
      ],
    },
  ];

  const levelColor: Record<string, string> = {
    Expert: "bg-[#fcd535]",
    Advanced: "bg-[#0ecb81]",
    Intermediate: "bg-[#707a8a]",
    Beginner: "bg-[#929aa5]",
  };

  const levelTextColor: Record<string, string> = {
    Expert:
      "text-[#181a20] bg-[#fcd535]/90 dark:text-[#181a20] dark:bg-[#fcd535] border-transparent",
    Advanced: "text-[#0ecb81] bg-[#0ecb81]/10 border-[#0ecb81]/30",
    Intermediate: "text-[#707a8a] bg-[#707a8a]/10 border-[#707a8a]/20",
    Beginner: "text-[#929aa5] bg-[#929aa5]/10 border-[#929aa5]/20",
  };

  const projects = [
    {
      title: "EduSavings",
      desc: "Platform pengelolaan tabungan siswa berbasis web dengan fitur pencatatan transaksi real-time dan dashboard statistik.",
      img: Tabungan,
      tags: ["Laravel 11", "Node.js", "MySQL"],
      code: "https://github.com/CarlesWebDev/Tabungan",
      type: "Web Application",
    },
    {
      title: "Bloggers App",
      desc: "Aplikasi web untuk membuat, membaca, mengedit, dan menghapus artikel blog secara mudah dan interaktif.",
      img: BLOGFY,
      tags: ["Laravel 11", "Bootstrap", "MySQL"],
      code: "https://gitlab.com/oo5832246/blogger",
      type: "Web Platform",
    },
    {
      title: "STI",
      desc: "Website perusahaan penyedia solusi sistem integrasi dan layanan digital untuk transformasi bisnis.",
      img: STI,
      tags: ["React (TSX)", "TailwindCSS", "SpringBoot"],
      code: "#",
      type: "Corporate Website",
    },
    {
      title: "AAP",
      desc: "Solusi pembayaran digital, layanan komunikasi mobile, dan pengembangan sistem bisnis terintegrasi.",
      img: AAP,
      tags: ["React (TSX)", "TailwindCSS", "SpringBoot"],
      code: "#",
      type: "Business Solution",
    },
    {
      title: "TIM",
      desc: "Platform teknologi finansial yang menyediakan sistem terpadu proses pinjaman bagi lembaga keuangan.",
      img: TIM,
      tags: ["React (TSX)", "TailwindCSS", "Zustand"],
      code: "#",
      type: "Fintech Platform",
    },
    {
      title: "Sales App",
      desc: "Aplikasi mobile untuk tim penjualan mengelola prospek dan melacak aktivitas secara real-time.",
      img: MobileApps,
      tags: ["React Native", "Expo", "SpringBoot"],
      code: "#",
      type: "Mobile App",
    },
    {
      title: "SIPASAR",
      desc: "Platform pengaduan sarana prasarana sekolah untuk membantu petugas mengelola keluhan secara efisien.",
      img: SIPASAR,
      tags: ["Laravel 11", "Alpine.js", "TailwindCSS"],
      code: "https://github.com/CarlesWebDev/UKK",
      type: "Management System",
    },
  ];

  const contacts = [
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      label: "Email",
      value: "charlesmarvin4321@gmail.com",
      href: "mailto:charlesmarvin4321@gmail.com",
    },
    {
      icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
      label: "LinkedIn",
      value: "carlesmarvin",
      href: "https://www.linkedin.com/in/carles-marvin-3a01a4336/",
    },
    {
      icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",
      label: "Instagram",
      value: "@carlsmrvn",
      href: "https://instagram.com/carlsmrvn",
    },
    {
      icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
      label: "WhatsApp",
      value: "+62 838-0736-2506",
      href: "https://wa.me/6283807362506",
    },
  ];

  const stats = [
    { value: "3+", label: "Tahun Pengalaman" },
    { value: "20+", label: "Proyek Selesai" },
    { value: "15+", label: "Teknologi Dikuasai" },
  ];

  return (
    <div className="bg-white text-[#181a20] dark:bg-[#0b0e11] dark:text-[#eaecef] antialiased overflow-x-hidden selection:bg-[#fcd535] selection:text-[#181a20] transition-colors duration-300 font-sans">
      <Navbar />

      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgb(112 122 138) 1px, transparent 1px), linear-gradient(90deg, rgb(112 122 138) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative z-10">
          <div className="space-y-7 order-2 lg:order-1 lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f5f5f5] dark:bg-[#1e2329] border border-[#eaecef] dark:border-[#2b3139]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ecb81] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ecb81]"></span>
              </span>
              <span className="text-xs font-medium text-[#707a8a]">
                Tersedia untuk proyek baru
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#fcd535] tracking-widest uppercase">
                Hello, Everyone!
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#181a20] dark:text-white tracking-tight">
                Saya <span className="text-[#fcd535]">Carles Marvin</span>
              </h1>
            </div>

            <p className="text-lg text-[#707a8a] dark:text-[#929aa5] max-w-xl leading-relaxed">
              <span className="font-semibold text-[#181a20] dark:text-[#eaecef]">
                Full-Stack Developer
              </span>{" "}
              dan{" "}
              <span className="font-semibold text-[#181a20] dark:text-[#eaecef]">
                App Developer
              </span>{" "}
              yang bersemangat menciptakan pengalaman digital yang{" "}
              <span className="text-[#fcd535] font-semibold">bermakna</span> dan{" "}
              <span className="text-[#fcd535] font-semibold">berdampak</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#projek"
                className="px-7 py-3 rounded-md bg-[#fcd535] text-[#181a20] font-semibold hover:bg-[#f0b90b] transition-colors text-center"
              >
                Lihat Portfolio
              </a>
              <a
                href="#kontak"
                className="px-7 py-3 rounded-md border border-[#eaecef] dark:border-[#2b3139] bg-transparent dark:bg-[#1e2329] text-[#181a20] dark:text-[#eaecef] hover:border-[#cdd1d6] dark:hover:border-[#3a4048] font-semibold transition-all text-center"
              >
                Hubungi Saya
              </a>
            </div>

            <div className="flex items-center flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-[#eaecef] dark:border-[#2b3139] max-w-xl">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  <div>
                    <p className="text-2xl font-bold text-[#fcd535] font-mono leading-none">
                      {s.value}
                    </p>
                    <p className="text-xs text-[#707a8a] mt-1.5">{s.label}</p>
                  </div>
                  {i < stats.length - 1 && (
                    <span className="w-px h-8 bg-[#eaecef] dark:bg-[#2b3139]"></span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-2 flex justify-center">
            <div className="relative">
              <img
                src={IMG}
                alt="Carles Marvin"
                className="relative rounded-xl w-full max-w-sm h-auto border border-[#eaecef] dark:border-[#2b3139]"
              />
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-[#1e2329] border border-[#eaecef] dark:border-[#2b3139] rounded-lg px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#fcd535] animate-pulse"></div>
                  <span className="text-xs font-medium text-[#181a20] dark:text-[#eaecef]">
                    Full-Stack Dev
                  </span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#fcd535] text-[#181a20] rounded-lg px-3 py-2 shadow-sm">
                <p className="text-xs font-bold leading-none">3+ Tahun</p>
                <p className="text-[10px] font-medium mt-1 opacity-70">
                  Pengalaman
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tentang"
        className="py-16 border-t border-[#eaecef] dark:border-[#2b3139] relative"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <p className="text-sm font-semibold text-[#fcd535] tracking-widest uppercase mb-3">
              Tentang Saya
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#181a20] dark:text-white tracking-tight">
              Menggabungkan kreativitas dengan teknologi
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <p className="text-[#707a8a] dark:text-[#929aa5] leading-relaxed">
                  Perkenalkan, saya{" "}
                  <span className="font-semibold text-[#181a20] dark:text-[#eaecef]">
                    Carles Marvin
                  </span>
                  , seorang{" "}
                  <span className="font-semibold text-[#fcd535]">
                    Full-Stack & App Developer
                  </span>{" "}
                  dengan pengalaman dalam membangun aplikasi web dan mobile yang
                  modern, scalable, dan user-friendly.
                </p>
                <p className="text-[#707a8a] dark:text-[#929aa5] leading-relaxed">
                  Saya berkomitmen untuk memberikan kode yang bersih,
                  maintainable, dan mengikuti best practices terbaru dalam
                  setiap proyek yang saya kerjakan.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-4">
                {[
                  {
                    icon: "💻",
                    title: "Frontend Dev",
                    desc: "Antarmuka responsif & interaktif",
                  },
                  {
                    icon: "🖥️",
                    title: "Backend Dev",
                    desc: "Arsitektur server-side yang scalable",
                  },
                  {
                    icon: "📱",
                    title: "App Development",
                    desc: "Aplikasi mobile cross-platform",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="flex items-center gap-4 p-4 bg-[#fafafa] dark:bg-[#1e2329] rounded-lg border border-[#eaecef] dark:border-[#2b3139] hover:border-[#cdd1d6] dark:hover:border-[#3a4048] transition-all"
                  >
                    <div className="w-10 h-10 rounded-md bg-white dark:bg-[#2b3139] flex items-center justify-center text-lg">
                      {c.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-[#181a20] dark:text-[#eaecef] text-sm">
                        {c.title}
                      </p>
                      <p className="text-[#707a8a] text-xs">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              {skillCategories.map((cat) => (
                <div key={cat.category}>
                  <h3 className="text-xs font-semibold text-[#707a8a] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 rounded-full bg-[#fcd535]"></span>
                    {cat.category}
                  </h3>
                  <div className="bg-[#fafafa] dark:bg-[#1e2329] border border-[#eaecef] dark:border-[#2b3139] rounded-lg divide-y divide-[#eaecef] dark:divide-[#2b3139]">
                    {cat.skills.map((s) => {
                      const pct =
                        s.level === "Expert"
                          ? "100%"
                          : s.level === "Advanced"
                            ? "80%"
                            : s.level === "Intermediate"
                              ? "60%"
                              : "40%";
                      return (
                        <div
                          key={s.name}
                          className="flex items-center justify-between gap-4 px-4 py-3"
                        >
                          <span className="text-sm font-medium text-[#181a20] dark:text-[#eaecef]">
                            {s.name}
                          </span>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide border ${levelTextColor[s.level]}`}
                            >
                              {s.level}
                            </span>
                            <span
                              className={`text-xs font-mono font-semibold w-10 text-right ${
                                s.level === "Expert"
                                  ? "text-[#fcd535]"
                                  : s.level === "Advanced"
                                    ? "text-[#0ecb81]"
                                    : "text-[#707a8a]"
                              }`}
                            >
                              {pct}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projek"
        className="py-16 border-t border-[#eaecef] dark:border-[#2b3139] bg-[#fafafa] dark:bg-[#0b0e11]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <p className="text-sm font-semibold text-[#fcd535] tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#181a20] dark:text-white tracking-tight">
              Projek Unggulan
            </h2>
            <p className="text-[#707a8a] dark:text-[#929aa5] text-lg mt-4">
              Karya terbaik yang menunjukkan kemampuan dan passion saya dalam
              pengembangan web dan mobile.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1e2329] border border-[#eaecef] dark:border-[#2b3139] rounded-xl divide-y divide-[#eaecef] dark:divide-[#2b3139] overflow-hidden">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 hover:bg-[#fafafa] dark:hover:bg-[#2b3139]/40 transition-colors"
              >
                <div className="w-full h-40 sm:w-40 sm:h-28 flex-shrink-0 rounded-lg bg-[#fafafa] dark:bg-[#0b0e11] border border-[#eaecef] dark:border-[#2b3139] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-base font-bold text-[#181a20] dark:text-white group-hover:text-[#fcd535] transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide bg-[#f5f5f5] dark:bg-[#2b3139] text-[#707a8a]">
                      {p.type}
                    </span>
                  </div>
                  <p className="text-[#707a8a] dark:text-[#929aa5] text-sm leading-relaxed mb-2 max-w-2xl">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-[#f5f5f5] dark:bg-[#2b3139] text-[#707a8a] dark:text-[#929aa5] text-xs font-medium px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 sm:ml-4">
                  {p.code !== "#" ? (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#fcd535] hover:text-[#f0b90b] font-semibold text-sm transition-colors whitespace-nowrap"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Lihat Kode
                    </a>
                  ) : (
                    <span className="text-[#929aa5] dark:text-[#707a8a] text-xs flex items-center gap-1.5 whitespace-nowrap">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      Under Company License
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="kontak"
        className="py-16 border-t border-[#eaecef] dark:border-[#2b3139] relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#fcd535] tracking-widest uppercase mb-3">
              Kontak
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#181a20] dark:text-white tracking-tight">
              Mari Berkolaborasi
            </h2>
            <p className="text-[#707a8a] dark:text-[#929aa5] text-lg max-w-xl mx-auto mt-4">
              Saya selalu terbuka untuk mendiskusikan peluang baru dan proyek
              menarik.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1e2329] border border-[#eaecef] dark:border-[#2b3139] rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#fafafa] dark:bg-[#2b3139]/40 border border-[#eaecef] dark:border-[#2b3139] hover:border-[#fcd535]/40 rounded-lg transition-all group"
                >
                  <div className="w-11 h-11 rounded-md bg-white dark:bg-[#1e2329] border border-[#eaecef] dark:border-[#2b3139] group-hover:bg-[#fcd535]/10 group-hover:border-[#fcd535]/40 flex items-center justify-center flex-shrink-0 transition-all">
                    <svg
                      className="w-5 h-5 text-[#707a8a] group-hover:text-[#fcd535] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d={c.icon}
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#707a8a] uppercase tracking-wider mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-sm font-medium text-[#181a20] dark:text-[#eaecef] group-hover:text-[#fcd535] transition-colors truncate">
                      {c.value}
                    </p>
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
