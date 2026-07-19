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
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


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
    Expert: "bg-cyan-500 dark:bg-cyan-500",
    Advanced: "bg-sky-500 dark:bg-sky-500",
    Intermediate: "bg-slate-400 dark:bg-slate-500",
    Beginner: "bg-slate-300 dark:bg-slate-600",
  };

  const levelTextColor: Record<string, string> = {
    Expert:
      "text-cyan-600 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30",
    Advanced:
      "text-sky-600 dark:text-sky-300 bg-sky-100 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/30",
    Intermediate:
      "text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-500/10 border-slate-200 dark:border-slate-500/30",
    Beginner:
      "text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-500/10 border-slate-200 dark:border-slate-500/30",
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
    <div className="bg-slate-100 text-slate-800 dark:bg-slate-950 dark:text-slate-300 antialiased overflow-x-hidden selection:bg-cyan-500 selection:text-white transition-colors duration-300">
      <Navbar />

      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-300/30 dark:bg-cyan-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-300/30 dark:bg-sky-600/10 rounded-full blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.015]"
            style={{
              backgroundImage:
                "linear-gradient(rgb(15 23 42) 1px, transparent 1px), linear-gradient(90deg, rgb(15 23 42) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative z-10">
          <div className="space-y-7 order-2 lg:order-1 lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                Tersedia untuk proyek baru
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 tracking-widest uppercase">
                Hello, World!
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-900 dark:text-white tracking-tight">
                Saya{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-600 dark:from-cyan-400 dark:to-sky-500">
                  Carles Marvin
                </span>
              </h1>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-slate-200">
                Full-Stack Developer
              </span>{" "}
              dan{" "}
              <span className="font-semibold text-slate-900 dark:text-slate-200">
                App Developer
              </span>{" "}
              yang bersemangat menciptakan pengalaman digital yang{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                bermakna
              </span>{" "}
              dan{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                berdampak
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#projek"
                className="px-7 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold hover:from-cyan-400 hover:to-sky-500 transition-all text-center shadow-lg shadow-cyan-500/25"
              >
                Lihat Portfolio
              </a>
              <a
                href="#kontak"
                className="px-7 py-3 rounded-lg border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5 font-semibold transition-all text-center"
              >
                Hubungi Saya
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 max-w-md">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border-l border-slate-300 dark:border-white/10 pl-4"
                >
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    {s.value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-300/20 to-sky-300/20 dark:from-cyan-500/20 dark:to-sky-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative">
                <img
                  src={IMG}
                  alt="Carles Marvin"
                  className="relative rounded-2xl w-full max-w-sm h-auto border border-slate-200 dark:border-white/10 shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></div>
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Full-Stack Dev
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tentang"
        className="py-24 border-t border-slate-200 dark:border-white/5 relative"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-3">
              Tentang Saya
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Menggabungkan kreativitas dengan teknologi
            </h2>
            <div className="w-12 h-0.5 bg-cyan-500 dark:bg-cyan-500 mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Perkenalkan, saya{" "}
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                    Carles Marvin
                  </span>
                  , seorang{" "}
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                    Full-Stack & App Developer
                  </span>{" "}
                  dengan pengalaman dalam membangun aplikasi web dan mobile yang
                  modern, scalable, dan user-friendly.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
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
                    className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-white/[0.02] rounded-xl border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-white/5 flex items-center justify-center text-lg">
                      {c.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-200 text-sm">
                        {c.title}
                      </p>
                      <p className="text-slate-500 dark:text-slate-500 text-xs">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              {skillCategories.map((cat) => (
                <div key={cat.category}>
                  <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 rounded-full bg-gradient-to-b from-cyan-500 to-sky-600 dark:from-cyan-400 dark:to-sky-500"></span>
                    {cat.category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.skills.map((s) => (
                      <div
                        key={s.name}
                        className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-lg p-4 hover:border-slate-300 dark:hover:border-white/10 transition-all"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {s.name}
                          </span>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide border ${levelTextColor[s.level]}`}
                          >
                            {s.level}
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-white/5 rounded-full h-1">
                          <div
                            className={`h-1 rounded-full transition-all duration-700 ${levelColor[s.level]}`}
                            style={{
                              width:
                                s.level === "Expert"
                                  ? "100%"
                                  : s.level === "Advanced"
                                    ? "80%"
                                    : s.level === "Intermediate"
                                      ? "60%"
                                      : "40%",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projek"
        className="py-24 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900/50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Projek Unggulan
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mt-4">
              Karya terbaik yang menunjukkan kemampuan dan passion saya dalam
              pengembangan web dan mobile.
            </p>
            <div className="w-12 h-0.5 bg-cyan-500 dark:bg-cyan-500 mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-white/15 transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full h-52 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-white/5 flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 dark:from-cyan-500/5 to-transparent"></div>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="relative w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {p.type}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.code !== "#" ? (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 font-semibold text-sm transition-colors mt-auto"
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
                    <span className="text-slate-400 dark:text-slate-600 text-xs mt-auto flex items-center gap-1.5">
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
        className="py-24 border-t border-slate-200 dark:border-white/5 relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-300/20 dark:bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-3">
              Kontak
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Mari Berkolaborasi
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto mt-4">
              Saya selalu terbuka untuk mendiskusikan peluang baru dan proyek
              menarik.
            </p>
            <div className="w-12 h-0.5 bg-cyan-500 dark:bg-cyan-500 mx-auto mt-6"></div>
          </div>

          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-lg shadow-slate-200/50 dark:shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 hover:bg-slate-100 dark:hover:bg-white/[0.04] rounded-xl transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-slate-200 dark:bg-white/5 border border-slate-200 dark:border-white/5 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/10 group-hover:border-cyan-200 dark:group-hover:border-cyan-500/30 flex items-center justify-center flex-shrink-0 transition-all">
                    <svg
                      className="w-5 h-5 text-slate-500 group-hover:text-cyan-600 dark:text-slate-400 dark:group-hover:text-cyan-400 transition-colors"
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
                    <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors truncate">
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
