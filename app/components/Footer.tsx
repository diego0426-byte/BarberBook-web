export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8 text-zinc-400 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
        <p>© 2026 Barber Studio 94. Creado para el grooming moderno.</p>
        <div className="flex gap-4">
          <a href="#" className="transition hover:text-amber-400">
            Instagram
          </a>
          <a href="#" className="transition hover:text-amber-400">
            WhatsApp
          </a>
          <a href="#" className="transition hover:text-amber-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
