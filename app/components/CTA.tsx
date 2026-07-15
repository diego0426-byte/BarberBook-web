export default function CTA() {
  return (
    <section id="cta" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-[32px] border border-amber-500/20 bg-gradient-to-r from-amber-500/20 via-black to-amber-500/10 px-8 py-12 text-center text-white md:flex-row md:text-left">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Reserva tu visita</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Tu estilo merece ser tratado con lujo, precisión y exclusividad.</h2>
        </div>

        <a href="#booking" className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-black transition hover:bg-amber-400">Agendar cita</a>
      </div>
    </section>
  );
}
