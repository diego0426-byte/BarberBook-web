const reviews = [
  {
    name: "Daniel R.",
    quote: "La atención al detalle es incomparable. Cada visita se siente personalizada y de lujo.",
    rating: "★★★★★",
  },
  {
    name: "Marcus T.",
    quote: "La mejor experiencia de barbería de la ciudad. Precisión, comodidad y estilo en un solo lugar.",
    rating: "★★★★★",
  },
  {
    name: "Liam S.",
    quote: "Desde el primer corte hasta el acabado, es una clase magistral de grooming.",
    rating: "★★★★★",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-[#050505] px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">Reseñas de Google</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Clientes que regresan por la experiencia premium.</h2>
          </div>
          <div className="rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-400">
            4.9/5 promedio
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((item) => (
            <article key={item.name} className="rounded-[24px] border border-amber-500/20 bg-zinc-950/80 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
              <p className="text-amber-400">{item.rating}</p>
              <p className="mt-4 text-lg leading-8 text-zinc-200">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-zinc-400">Cliente frecuente</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
