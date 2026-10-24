const items = [
  {
    label: "Lagi Ngoding",
    text: "Ngoding + Music = Repeat",
  },
  {
    label: "Lagi belajar",
    text: "Serius + Ngantuk + Bosen = Ngga Kelar-Kelar",
  },
  {
    label: "Lagi dengerin Lagu",
    text: "Music + Game + Turu = Bangun-bangun Budek ",
  },
];

const updated = "24 Oktober 2026";

export default function Now() {
  return (
    <section className="border-t border-line">
      <div className="gutter max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-12 gap-6">
        <p className="label-mono text-muted md:col-span-3">Sekarang</p>
        <div className="md:col-span-8 md:col-start-5 space-y-4">
          {items.map((i) => (
            <p key={i.label} className="text-muted max-w-[60ch]">
              <span className="label-mono text-fg mr-3">{i.label}</span>
              {i.text}
            </p>
          ))}
          <p className="label-mono text-muted pt-2">
            Terakhir diupdate: {updated}
          </p>
        </div>
      </div>
    </section>
  );
}
