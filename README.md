# Portofolio Carles Marvin

Website portofolio personal dengan gaya editorial/Swiss: tipografi serif besar, background cream, aksen oranye, garis tipis. Dibuat dengan Vite + React + TypeScript + Tailwind CSS v4.

## Jalankan

```bash
npm install
npm run dev
```

## Menambah project baru

1. Taruh screenshot di `src/assets/`.
2. Tambah satu entri di `src/data/projects.ts` — slug, nomor, nama, tahun, kategori, masalah, peran, hasil, stack, image, dan link repo/live.
3. Selesai. Daftar di beranda dan halaman detailnya (`/karya/<slug>`) muncul otomatis.

## Catatan desain

- Design tokens (warna, font, skala teks, spacing, motion) ada di `src/index.css` — termasuk dark mode via `prefers-color-scheme` dan dukungan `prefers-reduced-motion`.
- Font: Instrument Serif (display), Geist Sans (body), Geist Mono (label) via Fontsource.
- Signature element: daftar project berupa teks besar dengan preview gambar mengikuti kursor. Nonaktif otomatis di perangkat sentuh dan reduced-motion.
- Project yang belum punya screenshot menampilkan bingkai "Screenshot menyusul" — isi field `image` setelah aset siap.

## Deploy

`npm run build` menghasilkan folder `dist/`. Karena pakai SPA routing, arahkan rewrite semua route ke `index.html` (di Vercel: vercel.json rewrite `/(.*)` → `/index.html`).
