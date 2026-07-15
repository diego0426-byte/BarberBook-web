const services = [
  {
    title: "Corte clásico",
    description: "Estilo preciso con un acabado atemporal y un detalle pulido.",
    price: "$45",
    icon: "✂",
  },
  {
    title: "Fade",
    description: "Transición limpia y contraste moderno para una silueta marcada.",
    price: "$55",
    icon: "✦",
  },
  {
    title: "Afeitado de barba",
    description: "Formas refinadas y bordes esculpidos con cuidado premium.",
    price: "$30",
    icon: "◌",
  },
  {
    title: "Paquete premium",
    description: "Corte, lavado, toalla caliente y tratamiento de acabado en una sola visita.",
    price: "$80",
    icon: "✧",
  },
  {
    title: "Corte para niños",
    description: "Grooming amable y cómodo diseñado para clientes más jóvenes.",
    price: "$25",
    icon: "☻",
  },
  {
    title: "Lavado de cabello",
    description: "Enjuague de lujo, cuidado del cuero cabelludo y acabado suave.",
    price: "$20",
    icon: "❋",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#050505] px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            Servicios destacados
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Eleva tu estilo con grooming de lujo.
          </h2>
          <p className="mt-4 text-lg text-zinc-300">
            Cuidado personalizado, técnica excepcional y un acabado impecable cada vez.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[28px] border border-amber-500/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/70 hover:shadow-[0_20px_60px_rgba(212,175,55,0.16)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-xl text-amber-400 transition duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <div className="mb-4 flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <span className="text-sm font-semibold text-amber-400">{service.price}</span>
              </div>
              <p className="text-sm leading-7 text-zinc-400">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
