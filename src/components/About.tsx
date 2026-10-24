export default function About() {
  return (
    <section id="tentang" className="section-space border-t border-line">
      <div className="gutter max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <p className="label-mono text-muted md:col-span-3">Tentang</p>
        <div className="md:col-span-8 md:col-start-5 space-y-6 max-w-[60ch]">
          <h2
            className="font-display tracking-tight leading-none"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Saya Carles, developer yang seleranya ngulik di hasil kerjanya.
          </h2>
          <p className="text-muted">
            Saya suka bagian dari web yang paling jarang dibahas: detail kecil
            yang bikin sesuatu terasa niat. Spacing yang konsisten, hover yang
            responsif, halaman yang kebuka cepat bahkan di sinyal jelek. Buat
            saya itu bukan polesan terakhir — itu kerjaan utamanya.
          </p>
          <p className="text-muted">
            Cara kerja saya sederhana: mulai dari masalah yang nyata, bangun
            yang paling kecil yang bisa dipakai, terus rapikan sampai enak
            dilihat. Saya lebih pilih satu hal yang selesai daripada lima hal
            yang setengah jalan.
          </p>
          <p className="text-muted">
            Sekarang saya lagi fokus ngasah craft frontend — tipografi, motion
            yang hormat sama pengguna, dan performa. Kalau kamu punya project
            yang butuh orang yang peduli sama detail kayak gini,{" "}
            <a href="#kontak" className="link-underline text-fg">
              ngobrol yuk
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
