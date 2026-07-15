export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-500/20 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#" className="text-lg font-semibold uppercase tracking-[0.35em] text-amber-400">
          Barber Studio 94
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-300 md:flex">
          <a href="#services" className="transition hover:text-amber-400">Servicios</a>
          <a href="#gallery" className="transition hover:text-amber-400">Galería</a>
          <a href="#reviews" className="transition hover:text-amber-400">Reseñas</a>
          <a href="#pricing" className="transition hover:text-amber-400">Precios</a>
          <a href="#contact" className="transition hover:text-amber-400">Contacto</a>
        </nav>

        <a
          href="#booking"
          className="rounded-full border border-amber-500 px-4 py-2 text-sm font-semibold text-amber-400 transition hover:bg-amber-500 hover:text-black"
        >
          Agenda ahora
        </a>
      </div>
    </header>
  );
}
