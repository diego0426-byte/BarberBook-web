export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80"
          alt="Barbería premium"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.25),transparent_40%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-400/40 bg-black/55 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-amber-300 backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              Estudio de grooming de lujo
            </div>

            <h1 className="text-5xl font-semibold leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Barber Studio 94
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-200 sm:text-xl">
              Cortes premium, arreglo de barba y grooming atemporal para el hombre moderno.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-full border border-amber-500 bg-amber-500 px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-amber-400"
              >
                Agendar cita
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-zinc-300">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">Cortes impecables</span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">Barbería exclusiva</span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">Atención premium</span>
            </div>
          </div>

          <div className="rounded-[32px] border border-amber-500/20 bg-black/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Reserva hoy</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Experiencia de barbería de lujo</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              Desde cortes de precisión hasta tratamientos premium para barba y cabello.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-zinc-400">Horario</p>
                <p className="mt-1 font-semibold text-white">Lunes a Sábado · 10:00 - 8:00</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-zinc-400">Ubicación</p>
                <p className="mt-1 font-semibold text-white">CDMX · Diseño, elegancia y precisión</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
