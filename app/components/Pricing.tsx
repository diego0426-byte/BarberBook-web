const pricing = [
  {
    title: "Corte premium",
    price: "$45",
    description: "Corte de precisión con estilo definido y acabado impecable.",
  },
  {
    title: "Barba premium",
    price: "$35",
    description: "Afeitado y diseño de barba con atención al detalle.",
  },
  {
    title: "Paquete de lujo",
    price: "$85",
    description: "Corte, barba, lavado y tratamiento para una experiencia completa.",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-amber-500/20 bg-zinc-950/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-10 lg:p-14">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">Precios</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Una inversión en estilo, precisión y confort.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((item) => (
            <div key={item.title} className="rounded-[24px] border border-white/10 bg-black/60 p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{item.description}</p>
              <p className="mt-6 text-3xl font-semibold text-amber-400">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
