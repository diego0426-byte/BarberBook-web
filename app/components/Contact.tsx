export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[32px] border border-amber-500/20 bg-zinc-950/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] lg:grid-cols-[1fr_0.9fr] lg:p-12">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">Contacto</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Visítanos o reserva directamente desde aquí.</h2>
          <p className="mt-4 text-lg text-zinc-300">Estamos en el corazón de la ciudad, listos para recibirte con una experiencia de lujo.</p>
          <div className="mt-8 space-y-3 text-zinc-300">
            <p>📍 Av. Reforma 94, CDMX</p>
            <p>📞 +52 1 55 5555 5555</p>
            <p>✉️ hola@barberstudio94.com</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-white/10">
          <div className="flex h-full min-h-[320px] items-center justify-center bg-gradient-to-br from-amber-500/20 to-black text-center text-zinc-300">
            <div>
              <p className="text-lg font-semibold text-white">Mapa de Google</p>
              <p className="mt-2 text-sm">Lugar de referencia próximamente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
