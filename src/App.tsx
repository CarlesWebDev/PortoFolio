"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Code,
  Terminal,
  DeviceMobile,
  LinkedinLogo,
  InstagramLogo,
  WhatsappLogo,
  EnvelopeSimple,
  ArrowUpRight,
  LockSimple,
} from "@phosphor-icons/react";
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

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

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
        { name: "Node.js / Express", level: "Beginner" },
        { name: "Java / SpringBoot", level: "Beginner" },
        { name: "Python", level: "Beginner" },
      ],
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MySQL / PostgreSQL", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Docker", level: "Beginner" },
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

  const levelStyle: Record<string, string> = {
    Expert: "text-[#1F6C9F] bg-[#E1F3FE]",
    Advanced: "text-[#346538] bg-[#EDF3EC]",
    Intermediate: "text-[#956400] bg-[#FBF3DB]",
    Beginner: "text-[#787774] bg-[#F7F6F3]",
  };

  const projects = [
    {
      title: "EduSavings",
      desc: "Platform pengelolaan tabungan siswa dengan pencatatan transaksi real-time dan dashboard statistik.",
      img: Tabungan,
      tags: ["Laravel 11", "Node.js", "MySQL"],
      code: "https://github.com/CarlesWebDev/Tabungan",
      type: "Web Application",
    },
    {
      title: "Bloggers App",
      desc: "Aplikasi web untuk membuat, membaca, mengedit, dan menghapus artikel blog secara interaktif.",
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
      Icon: EnvelopeSimple,
      label: "Email",
      value: "charlesmarvin4321@gmail.com",
      href: "mailto:charlesmarvin4321@gmail.com",
    },
    {
      Icon: LinkedinLogo,
      label: "LinkedIn",
      value: "carlesmarvin",
      href: "https://www.linkedin.com/in/carles-marvin-3a01a4336/",
    },
    {
      Icon: InstagramLogo,
      label: "Instagram",
      value: "@carlsmrvn",
      href: "https://instagram.com/carlsmrvn",
    },
    {
      Icon: WhatsappLogo,
      label: "WhatsApp",
      value: "+62 838-0736-2506",
      href: "https://wa.me/6283807362506",
    },
  ];

  const School = [
    { title: "SDN Pakulonan 02", label: "SDN Pakulonan 02" },
    { title: "SMP Yuppentek 2", label: "SMP Yuppentek 2" },
    { title: "SMKN 4 Tangerang", label: "SMKN 4 Tangerang" },
    { title: "Universitas Pamulang", label: "Universitas Pamulang" },
  ];

  const stats = [
    { value: "3+", label: "Tahun pengalaman" },
    { value: "20+", label: "Proyek selesai" },
    { value: "15+", label: "Teknologi dikuasai" },
  ];

  const focusAreas = [
    {
      title: "Frontend development",
      desc: "Antarmuka responsif dan interaktif",
      Icon: Code,
    },
    {
      title: "Backend development",
      desc: "Arsitektur server-side yang scalable",
      Icon: Terminal,
    },
    {
      title: "App development",
      desc: "Aplikasi mobile cross-platform",
      Icon: DeviceMobile,
    },
  ];

  return (
    <div
      className="bg-[#FBFBFA] text-[#2F3437] antialiased overflow-x-hidden selection:bg-[#E1F3FE] selection:text-[#1F6C9F]"
      style={{
        fontFamily: "'Cabinet Grotesk', 'Geist', system-ui, sans-serif",
      }}
    >
      <Navbar />

      <section
        id="hero"
        className="relative min-h-[100dvh] flex items-center pt-20 pb-16 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative z-10">
          <Reveal className="space-y-7 order-2 lg:order-1 lg:col-span-3">
            <div className="font-bold uppercase text-sm tracking-wider text-[#787774]">
              Halo, perkenalkan
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-semibold leading-[1.1] tracking-tight text-[#111111]">
              Carles Marvin
            </h1>

            <p className="text-lg text-[#787774] max-w-lg leading-relaxed">
              Full-Stack Developer yang fokus pada kode bersih, performa, dan
              pengalaman pengguna yang jelas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#projek"
                className="px-7 py-3 rounded-xl bg-[#111111] text-white font-semibold hover:bg-[#2b2b2b] transition-colors text-center active:scale-[0.98] focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] outline-none"
              >
                Lihat portfolio
              </a>
              <a
                href="#kontak"
                className="px-7 py-3 rounded-xl border border-[#EAEAEA] bg-white text-[#2F3437] hover:border-[#CDCDCA] hover:bg-gray-50 font-semibold transition-all text-center active:scale-[0.98] focus:ring-2 focus:ring-offset-2 focus:ring-[#EAEAEA] outline-none"
              >
                Hubungi saya
              </a>
            </div>

            <div className="flex items-center flex-wrap gap-x-8 gap-y-5 pt-8 border-t border-[#EAEAEA] max-w-lg">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#111111] leading-none tracking-tight">
                      {s.value}
                    </span>
                    <span className="text-sm font-medium text-[#787774] mt-2">
                      {s.label}
                    </span>
                  </div>
                  {i < stats.length - 1 && (
                    <span
                      className="w-px h-10 bg-[#EAEAEA]"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="order-1 lg:order-2 lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-[#EAEAEA] rounded-2xl transform translate-x-3 translate-y-3 -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img
                src={IMG}
                alt="Foto Profil Carles Marvin"
                loading="eager"
                width="384"
                height="384"
                className="rounded-2xl w-full max-w-sm aspect-square object-cover border border-[#EAEAEA] bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1 relative z-10"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="tentang" className="py-24 border-t border-[#EAEAEA]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold text-[#787774] tracking-[0.15em] uppercase mb-3">
              Tentang saya
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-tight">
              Menggabungkan kreativitas dengan rekayasa perangkat lunak
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <Reveal delay={0.05} className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <p className="text-[#787774] leading-relaxed">
                  Carles Marvin adalah Full-Stack dan App Developer dengan
                  pengalaman membangun aplikasi web dan mobile yang modern,
                  scalable, dan mudah digunakan.
                </p>
                <p className="text-[#787774] leading-relaxed">
                  Berkomitmen memberikan kode yang bersih dan mudah dirawat di
                  setiap proyek.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-4">
                {focusAreas.map((c) => (
                  <div
                    key={c.title}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#EAEAEA] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#F7F6F3] flex items-center justify-center flex-shrink-0">
                      <c.Icon
                        size={20}
                        weight="bold"
                        className="text-[#2F3437]"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2F3437] text-sm">
                        {c.title}
                      </p>
                      <p className="text-[#787774] text-xs">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="uppercase font-extrabold mt-20 text-center md:text-left">My Journey</div>
              <div className="pt-4 items-cente grid place-items-center md:place-items-start">
                <div className="flex flex-col gap-4 text-center md:text-left">
                  {School.map((s, i) => (
                    <div key={s.title} className="relative flex gap-4">
                      <div className="relative flex flex-col items-center w-3">
                        <div className="w-3 h-3 rounded-full bg-[#2F3437] shrink-0 mt-4" />
                        {i !== School.length - 1 && (
                          <div className="w-[2px] flex-1 bg-[#EAEAEA] mt-1" />
                        )}
                      </div>

                      <div className="flex-1 p-4 mb-1">
                        <p className="font-semibold text-[#2F3437]">
                          {s.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-3 space-y-8">
              {skillCategories.map((cat) => (
                <div key={cat.category}>
                  <h3 className="text-sm font-semibold text-[#2F3437] mb-4">
                    {cat.category}
                  </h3>
                  <div className="bg-white border border-[#EAEAEA] rounded-xl divide-y divide-[#EAEAEA]">
                    {cat.skills.map((s) => (
                      <div
                        key={s.name}
                        className="flex items-center justify-between gap-4 px-4 py-3"
                      >
                        <span className="text-sm font-medium text-[#2F3437]">
                          {s.name}
                        </span>
                        <span
                          className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${levelStyle[s.level]}`}
                        >
                          {s.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="projek"
        className="py-24 border-t border-[#EAEAEA] bg-[#F7F6F3]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-tight">
              Projek unggulan
            </h2>
            <p className="text-[#787774] text-lg mt-4">
              Karya yang menunjukkan kemampuan dan minat saya dalam pengembangan
              web dan mobile.
            </p>
          </Reveal>

          <Reveal
            delay={0.05}
            className="bg-white border border-[#EAEAEA] rounded-2xl divide-y divide-[#EAEAEA] overflow-hidden"
          >
            {projects.map((p) => (
              <div
                key={p.title}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 hover:bg-[#FBFBFA] transition-colors"
              >
                <div className="w-full h-40 sm:w-40 sm:h-28 flex-shrink-0 rounded-xl bg-[#F7F6F3] border border-[#EAEAEA] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-base font-semibold text-[#111111]">
                      {p.title}
                    </h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F7F6F3] text-[#787774] border border-[#EAEAEA]">
                      {p.type}
                    </span>
                  </div>
                  <p className="text-[#787774] text-sm leading-relaxed mb-2 max-w-2xl">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-[#F7F6F3] text-[#787774] text-xs font-medium px-2 py-0.5 rounded-md border border-[#EAEAEA]"
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
                      className="inline-flex items-center gap-1.5 text-[#111111] hover:text-[#333333] font-semibold text-sm transition-colors whitespace-nowrap"
                    >
                      Lihat kode
                      <ArrowUpRight size={16} weight="bold" />
                    </a>
                  ) : (
                    <span className="text-[#787774] text-xs flex items-center gap-1.5 whitespace-nowrap">
                      <LockSimple size={14} />
                      Under company license
                    </span>
                  )}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="kontak" className="py-24 border-t border-[#EAEAEA]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-tight">
              Mari berkolaborasi
            </h2>
            <p className="text-[#787774] text-lg max-w-xl mx-auto mt-4">
              Terbuka untuk mendiskusikan peluang baru dan proyek menarik.
            </p>
          </Reveal>

          <Reveal
            delay={0.05}
            className="bg-white border border-[#EAEAEA] rounded-2xl p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#FBFBFA] border border-[#EAEAEA] hover:border-[#CDCDCA] rounded-xl transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-white border border-[#EAEAEA] group-hover:bg-[#F7F6F3] flex items-center justify-center flex-shrink-0 transition-colors">
                    <c.Icon
                      size={20}
                      weight="bold"
                      className="text-[#787774] group-hover:text-[#111111] transition-colors"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#787774] uppercase tracking-wider mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-sm font-medium text-[#2F3437] group-hover:text-[#111111] transition-colors truncate">
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
