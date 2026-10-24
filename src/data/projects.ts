import Tabungan from "../assets/Tabungan.png";
import BLOGFY from "../assets/BLOGFY.jpg";
import STI from "../assets/STI.png";
import AAP from "../assets/AAP.png";
import TIM from "../assets/TIM.png";
import CorelevDigital from "../assets/CorelevDigital.png";
import MobileApps from "../assets/MobileApps.png";
import SIPASAR from "../assets/SIPASAR.png";

export type Project = {
  slug: string;
  number: string;
  name: string;
  year: string;
  category: string;
  problem: string;
  role: string;
  result: string;
  stack: string[];
  /** Screenshot asli. Kalau belum ada, biarkan undefined — UI menampilkan bingkai "screenshot menyusul". */
  image?: string;
  repo?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "corelev-digital",
    number: "01",
    name: "Corelev Digital",
    year: "2025",
    category: "Website Agensi",
    problem:
      "Agensi butuh website utama yang bisa nyambung langsung dengan calon klien tanpa bikin mereka repot.",
    role: "Saya desain halamannya, pasang live chat, dan tombol WhatsApp yang jalan mulus di HP Android.",
    image : CorelevDigital,
    result:
      "Website agensi live dengan live chat aktif dan tombol WhatsApp yang bisa diklik langsung dari HP Android — calon klien nyambung tanpa lewat form panjang.",
    stack: ["Next.js", "Tailwind CSS"],
    live: "https://www.corelevdigital.web.id/",
  },
  {
    slug: "kaspro",
    number: "02",
    name: "Kaspro",
    year: "2025",
    category: "Tools Internal",
    problem:
      "Mencatat pengeluaran dari struk fisik itu ribet: struk hilang, angka lupa, catatan nggak konsisten.",
    role: "Saya bikin tools internal: scan struk pakai OCR jadi data transaksi otomatis, lengkap dengan dashboard, riwayat, dan login JWT.",
    result:
      "Satu foto struk langsung jadi baris data transaksi — kategori, nominal, tanggal — tanpa diketik manual. Dashboard dan riwayat bisa dibuka rapi dari HP.",
    stack: ["Next.js", "TypeScript"],
  },
  {
    slug: "coffee-shop-templates",
    number: "03",
    name: "Coffee Shop Templates",
    year: "2024",
    category: "Template",
    problem:
      "Kedai kopi kecil butuh landing page yang bagus tapi nggak punya developer dan nggak mau ribet dengan build step.",
    role: "Saya bikin beberapa template landing page kedai kopi dalam satu file, dengan animasi SVG dan efek scroll.",
    result:
      "Beberapa landing page kedai kopi siap pakai dalam satu file — dibuka langsung jalan di browser, animasi SVG dan efek scroll ikut tanpa install apa pun.",
    stack: ["HTML", "Tailwind CDN", "JavaScript"],
  },
  {
    slug: "edusavings",
    number: "04",
    name: "EduSavings",
    year: "2025",
    category: "Web Application",
    problem:
      "Pencatatan tabungan siswa masih manual dan nggak ada rekap statistik yang gampang dibaca.",
    role: "Saya bangun platform pengelolaan tabungan siswa dengan pencatatan transaksi real-time dan dashboard statistik.",
    result:
      "Setiap transaksi tabungan tercatat saat itu juga, dan pihak sekolah bisa lihat rekap statistiknya tanpa hitung manual.",
    stack: ["Laravel 11", "Node.js", "MySQL"],
    image: Tabungan,
    repo: "https://github.com/CarlesWebDev/Tabungan",
  },
  {
    slug: "bloggers-app",
    number: "05",
    name: "Bloggers App",
    year: "2025",
    category: "Web Platform",
    problem:
      "Proses bikin dan mengelola artikel blog butuh satu tempat yang sederhana dan langsung jalan.",
    role: "Saya bangun aplikasi web lengkap untuk membuat, membaca, mengedit, dan menghapus artikel secara interaktif.",
    result: "Artikel bisa dibuat, diedit, dan dihapus penuh dari satu aplikasi — kode sumbernya bisa dilihat publik di GitLab.",
    stack: ["Laravel 11", "Bootstrap", "MySQL"],
    image: BLOGFY,
    repo: "https://gitlab.com/oo5832246/blogger",
  },
  {
    slug: "sti",
    number: "06",
    name: "STI",
    year: "2025",
    category: "Corporate Website",
    problem:
      "Perusahaan sistem integrasi butuh website yang bisa menjelaskan layanannya dengan jelas ke calon klien.",
    role: "Saya bangun website perusahaan penyedia solusi sistem integrasi dan layanan digital untuk transformasi bisnis.",
    result: "Website perusahaan dengan halaman layanan yang menjelaskan tiap solusi secara konkret — dari integrasi sistem sampai transformasi digital.",
    stack: ["React (TSX)", "TailwindCSS", "SpringBoot"],
    image: STI,
  },
  {
    slug: "aap",
    number: "07",
    name: "AAP",
    year: "2025",
    category: "Business Solution",
    problem:
      "Bisnis butuh satu sistem terpadu untuk pembayaran digital dan komunikasi pelanggannya.",
    role: "Saya kembangkan solusi pembayaran digital, layanan komunikasi mobile, dan pengembangan sistem bisnis terintegrasi.",
    result: "Pembayaran digital dan layanan komunikasi pelanggan berjalan dari satu sistem yang sama, bukan tersebar di beberapa tools.",
    stack: ["React (TSX)", "TailwindCSS", "SpringBoot"],
    image: AAP,
  },
  {
    slug: "tim",
    number: "08",
    name: "TIM",
    year: "2025",
    category: "Fintech Platform",
    problem:
      "Lembaga keuangan butuh proses pinjaman yang terpadu dan terlacak dari awal sampai akhir.",
    role: "Saya bangun platform teknologi finansial dengan sistem terpadu proses pinjaman bagi lembaga keuangan.",
    result: "Alur pinjaman — dari pengajuan sampai pencairan — terlacak dalam satu platform, jadi tidak ada tahap yang hilang di tengah jalan.",
    stack: ["React (TSX)", "TailwindCSS", "Zustand"],
    image: TIM,
  },
  {
    slug: "sales-app",
    number: "09",
    name: "Sales App",
    year: "2025",
    category: "Mobile App",
    problem:
      "Tim penjualan butuh cara memantau prospek dan aktivitas tanpa laporan manual yang lewat.",
    role: "Saya buat aplikasi mobile untuk tim penjualan mengelola prospek dan melacak aktivitas secara real-time.",
    result: "Tim penjualan update prospek dan aktivitas langsung dari HP, jadi laporan tidak lagi numpuk di akhir minggu.",
    stack: ["React Native", "Expo", "SpringBoot"],
    image: MobileApps,
  },
  {
    slug: "sipasar",
    number: "10",
    name: "SIPASAR",
    year: "2025",
    category: "Management System",
    problem:
      "Keluhan sarana prasarana sekolah masuk lewat banyak jalur, jadi susah ditindaklanjuti petugas.",
    role: "Saya bangun platform pengaduan sarana prasarana sekolah untuk membantu petugas mengelola keluhan secara efisien.",
    result: "Semua keluhan masuk ke satu antrean terpusat dengan status jelas dan  petugas tahu mana yang belum ditangani.",
    stack: ["Laravel 11", "Alpine.js", "TailwindCSS"],
    image: SIPASAR,
    repo: "https://github.com/CarlesWebDev/UKK",
  },
];
