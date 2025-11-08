import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import IMG from "./assets/Image.jpg";
import Tabungan from "./assets/Tabungan.png";
import STI from "./assets/STI.png";
import AAP from "./assets/AAP.png";
import TIM from "./assets/TIM.png";
import BLOGFY from './assets/BLOGFY.jpg'
import MobileApps from "./assets/MobileApps.png";

export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-gray-900 to-gray-900"></div>

        <div className="max-w-4xl px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Halo, Saya{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Carles Marvin
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            <span className="text-cyan-300 font-bold">
              Full-Stack Developer{" "}
            </span>{" "}
            and
            {""} <span className="text-cyan-300 font-bold">App Devlopment</span>{" "}
            {""}
            yang bersemangat menciptakan pengalaman digital yang{" "}
            <span className="text-cyan-400">bermakna</span> dan{" "}
            <span className="text-cyan-400">berdampak</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projek"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-cyan-500/25 inline-flex items-center gap-2"
            >
              <span>Lihat Portfolio</span>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <a
              href="#kontak"
              className="border border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 inline-flex  active:bg-cyan-700  items-center gap-2"
            >
              <span>Hubungi Saya</span>
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section dengan layout yang lebih modern */}
      <section id="tentang" className="py-24 bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tentang <span className="text-cyan-400">Saya</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
            {/* Gambar */}
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src={IMG}
                  alt="Carles Marvin"
                  className="relative rounded-2xl w-full max-w-md h-auto border-4 border-gray-700 shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Deskripsi */}
            <div className="lg:w-3/5">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Perkenalkan, saya{" "}
                  <span className="text-cyan-400 font-semibold">
                    Carles Marvin
                  </span>
                  , seorang{" "}
                  <span className="font-semibold text-cyan-400">
                    Full-Stack Developer dan App Developer
                  </span>{" "}
                  dengan pengalaman lebih dari 2 tahun dalam membangun aplikasi
                  web dan mobile yang modern dan scalable. Saya memiliki passion
                  untuk menciptakan solusi digital yang tidak hanya fungsional
                  tetapi juga memberikan pengalaman pengguna yang luar biasa.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Dengan pendekatan yang terstruktur dan perhatian terhadap
                  detail, saya berkomitmen untuk memberikan kode yang bersih,
                  maintainable, dan mengikuti best practices terbaru dalam
                  industri.
                </p>

                <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Teknologi yang Dikuasai:
                  </h3>

                  <h1 className="text-cyan-400 font-semibold text-xl mb-5">
                    Web Development:
                  </h1>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { name: "TypeScript", level: "Intermediate" },
                      { name: "Bootstrap", level: "Expert" },
                      { name: "NextJS", level: "Beginner" },
                      { name: "VueJS", level: "Intermediate" },
                      { name: "Docker", level: "Beginner" },
                      { name: "MongoDB", level: "Beginner" },
                      { name: "Express", level: "Intermediate" },
                      { name: "NodeJS", level: "Intermediate" },
                      { name: "Python", level: "Beginner" },
                      { name: "Java", level: "Intermediate" },
                      { name: "SpringBoot", level: "Beginner" },
                      { name: "Laravel", level: "Expert" },
                      { name: "CSS3", level: "Expert" },
                      { name: "HTML5", level: "Expert" },
                      { name: "JavaScript", level: "Intermediate" },
                      { name: "React", level: "Intermediate" },
                      { name: "TypeScript", level: "Advanced" },
                      { name: "Tailwind CSS", level: "Expert" },
                      { name: "PostgreSQL", level: "Beginner" },
                      { name: "Php", level: "Advanced" },
                      { name: "MySQL", level: "Advanced" },
                    ].map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-xl p-4 transition-all duration-300 hover:scale-105 group"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-cyan-300">
                            {skill.name}
                          </span>
                          <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
                            {skill.level}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ${
                              skill.level === "Expert"
                                ? "bg-gradient-to-r from-cyan-400 to-blue-500 w-full"
                                : skill.level === "Advanced"
                                ? "bg-cyan-500 w-4/5"
                                : skill.level === "Intermediate"
                                ? "bg-cyan-400 w-2/3"
                                : "bg-cyan-300 w-1/2"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <h1 className="text-cyan-400 mt-10 font-semibold text-xl mb-5">
                    App Development:
                  </h1>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[{ name: "ReactNative", level: "Intermediate" }].map(
                      (skill) => (
                        <div
                          key={skill.name}
                          className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-xl p-4 transition-all duration-300 hover:scale-105 group"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-cyan-300">
                              {skill.name}
                            </span>
                            <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
                              {skill.level}
                            </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-500 ${
                                skill.level === "Expert"
                                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 w-full"
                                  : skill.level === "Advanced"
                                  ? "bg-cyan-500 w-4/5"
                                  : skill.level === "Intermediate"
                                  ? "bg-cyan-400 w-2/3"
                                  : "bg-cyan-300 w-1/2"
                              }`}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projek" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Projek <span className="text-cyan-400">Unggulan</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Beberapa karya terbaik yang menunjukkan kemampuan dan passion saya
              dalam pengembangan web and App development.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "EduSavings",
                desc: "Platform pengelolaan tabungan siswa berbasis web dengan fitur pencatatan transaksi real-time, manajemen akun, dan dashboard statistik interaktif.",
                img: Tabungan,
                tags: ["Laravel 11", "Node.js", "MySQL"],
                code: "https://github.com/CarlesWebDev/Tabungan",
              },
              {
                title: "Bloggers App",
                desc: "Bloggers App adalah aplikasi berbasis web yang memungkinkan pengguna untuk membuat, membaca, mengedit, dan menghapus artikel blog mereka secara mudah dan interaktif.",
                img: BLOGFY,
                tags: ["Bootstrap", "Laravel 11", "Mysql"],
                code: "https://gitlab.com/oo5832246/blogger",
              },
              {
                title: "STI",
                desc: "Perusahaan penyedia solusi sistem integrasi dan layanan digital yang membantu bisnis bertransformasi melalui teknologi, software development, dan managed IT services.",
                img: STI,
                tags: [
                  "React.Js(Tsx)",
                  "AOS",
                  "Mysql",
                  "Axios",
                  "TailwindCss",
                  "SpringBoot",
                  "Zustand",
                ],
                code: "#",
              },
              {
                title: "AAP",
                desc: "perusahaan teknologi yang menyediakan solusi pembayaran digital, layanan komunikasi mobile, dan pengembangan sistem bisnis terintegrasi.",
                img: AAP,
                tags: [
                  "React.Js(Tsx)",
                  "AOS",
                  "Mysql",
                  "Axios",
                  "TailwindCss(DaisyUI)",
                  "SpringBoot",
                  "Zustand",
                ],
                code: "#",
              },
              {
                title: "TIM",
                desc: "perusahaan teknologi finansial yang menyediakan sistem terpadu proses pinjaman (seperti kredit origination, manajemen risiko, penagihan) bagi lembaga keuangan dan mikrofinansial.",
                img: TIM,
                tags: [
                  "React.Js(Tsx)",
                  "AOS",
                  "Mysql",
                  "Axios",
                  "TailwindCss(DaisyUI)",
                  "SpringBoot",
                  "Zustand",
                ],
                code: "#",
              },
              {
                title: "CMS",
                desc: "Platform yang memudahkan pengguna dalam mengelola konten website melalui dashboard interaktif tanpa harus memiliki keahlian coding.",
                img: "https://placehold.co/600x400/1F2937/93C5FD?text=Not+Image",
                tags: [
                  "React.Js(Tsx)",
                  "AOS",
                  "Mysql",
                  "Axios",
                  "TailwindCss(DaisyUI)",
                  "SpringBoot",
                  "Zustand",
                ],
                code: "#",
              },
              {
                title: "Sales-App",
                desc: "Aplikasi mobile untuk tim penjualan yang memungkinkan mereka mengelola prospek, melacak aktivitas penjualan, dan mengakses data pelanggan secara real-time.",
                img: MobileApps,
                tags: [
                  "React.Js(Tsx)",
                  "Expo",
                  "TailwindCss(NativeWind)",
                  "SpringBoot",
                  "Zustand",
                ],
                code: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-6 active:bg-cyan-800">
                  <h3 className="text-xl font-bold mb-3 text-cyan-50">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-cyan-500/10 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="">
                    {project.code !== "#" ? (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                        View Code
                      </a>
                    ) : (
                      <span className="text-gray-500 text-sm italic">
                        Under Company License
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" className="py-24 bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mari <span className="text-cyan-400">Berkolaborasi</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Saya selalu terbuka untuk mendiskusikan peluang baru dan proyek
              menarik. Mari ciptakan sesuatu yang luar biasa bersama!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="bg-gray-900/50  active:text-cyan-700  backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 md:p-8  lg:p-12">
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-50 mb-4 sm:mb-6 text-center md:text-left">
                  Hubungi Saya
                </h3>

                <div className="space-y-3 sm:space-y-4 ">
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg md:rounded-xl bg-gray-800/50 border border-gray-700 hover:border-cyan-400/50 transition-colors duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <a href="mailto:charlesmarvin4321@gmail.com">
                      <div className="min-w-0  flex-1">
                        <p className="text-cyan-400 text-xs sm:text-sm mb-1">
                          Email
                        </p>
                        <p className="text-cyan-50 font-medium active:text-cyan-700 text-sm sm:text-base break-all hover:text-cyan-400">
                          charlesmarvin4321@gmail.com
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg md:rounded-xl bg-gray-800/50 border border-gray-700 hover:border-cyan-400/50 transition-colors duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/carles-marvin-3a01a4336/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-cyan-400 text-xs sm:text-sm mb-1">
                          LinkedIn
                        </p>
                        <p className="text-cyan-50 font-medium  active:text-cyan-700  text-sm sm:text-base break-all hover:text-cyan-400">
                          carlesmarvin
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center mt-8 md:mt-0">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-50 mb-4 sm:mb-6 text-center md:text-left">
                    Sosmed
                  </h3>
                  <a
                    href="https://instagram.com/carlsmrvn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg md:rounded-xl bg-gray-800/50 border border-gray-700 hover:border-cyan-400/50 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-cyan-400 text-xs sm:text-sm mb-1">
                        Instagram
                      </p>
                      <p className="text-cyan-50 font-medium text-sm  active:text-cyan-700  sm:text-base group-hover:text-cyan-300 transition-colors duration-300">
                        @carlsmrvn
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0"
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
                  </a>

                  <a
                    href="https://wa.me/6283807362506"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg md:rounded-xl bg-gray-800/50 border border-gray-700 hover:border-cyan-400/50 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.19 1.63 6.02L0 24l6.13-1.6A11.78 11.78 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 22a9.77 9.77 0 0 1-4.97-1.34l-.36-.21-3.63.95.97-3.54-.23-.37A9.77 9.77 0 0 1 2 12C2 6.48 6.48 2 12 2c2.6 0 5.04 1.02 6.86 2.86A9.77 9.77 0 0 1 22 12c0 5.52-4.48 10-10 10z" />
                        <path d="M17.47 14.29l-2.18-.63a.71.71 0 0 0-.68.18l-.47.48c-.56.56-1.47.56-2.03 0l-.97-.97a1.4 1.4 0 0 1 0-2.03l.48-.47a.71.71 0 0 0 .18-.68l-.63-2.18a.7.7 0 0 0-.67-.49h-.35a4.18 4.18 0 0 0-4.18 4.18c0 2.92 2.38 5.3 5.3 5.3a4.18 4.18 0 0 0 4.18-4.18v-.35a.7.7 0 0 0-.49-.67z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-cyan-400 text-xs sm:text-sm mb-1">
                        WhatsApp
                      </p>
                      <p className="text-cyan-50 font-medium  active:text-cyan-700  text-sm sm:text-base group-hover:text-cyan-300 transition-colors duration-300">
                        +62 838-0736-2506
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
