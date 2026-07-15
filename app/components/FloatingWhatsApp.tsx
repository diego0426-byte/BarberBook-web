export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5215555555555"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-amber-500/30 bg-amber-500 px-4 py-3 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(212,175,55,0.3)] transition hover:scale-105"
    >
      <span className="text-lg">💬</span>
      WhatsApp
    </a>
  );
}
