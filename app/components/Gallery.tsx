const beforeAfter = [
  {
    title: "Antes / Después",
    before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1622288432480-0657f6ce1f0c?auto=format&fit=crop&w=800&q=80",
    label: "Corte premium",
  },
  {
    title: "Barba refinada",
    before: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    label: "Afeitado clásico",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#080808] px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">Antes y después</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Resultados que hablan por sí solos.</h2>
          <p className="mt-4 text-lg text-zinc-300">Cada detalle está pensado para resaltar tu estilo con precisión y elegancia.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {beforeAfter.map((item) => (
            <article key={item.title} className="rounded-[32px] border border-white/10 bg-zinc-950/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <span className="rounded-full border border-amber-500/30 px-3 py-1 text-sm text-amber-400">{item.label}</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[24px]">
                  <img src={item.before} alt={`Antes ${item.title}`} className="h-56 w-full object-cover" />
                  <p className="bg-black/70 px-4 py-2 text-center text-sm text-zinc-300">Antes</p>
                </div>
                <div className="overflow-hidden rounded-[24px]">
                  <img src={item.after} alt={`Después ${item.title}`} className="h-56 w-full object-cover" />
                  <p className="bg-amber-500/90 px-4 py-2 text-center text-sm font-semibold text-black">Después</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
