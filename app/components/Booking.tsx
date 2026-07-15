"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "5215555555555";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Corte clásico",
    barber: "Alex",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      `Nombre: ${formData.name}`,
      `Teléfono: ${formData.phone}`,
      `Servicio: ${formData.service}`,
      `Barbero: ${formData.barber}`,
      `Fecha: ${formData.date}`,
      `Hora: ${formData.time}`,
      `Notas: ${formData.notes || "Ninguna"}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-amber-500/20 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 p-8 shadow-[0_20px_80px_rgba(212,175,55,0.14)] sm:p-10 lg:p-14">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">Reserva tu visita</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Tu cita merece una experiencia premium.</h2>
            <p className="mt-4 text-lg text-zinc-300">Completa tus datos y te contactaremos de inmediato con tu reserva.</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-sm text-zinc-300">
            <p className="font-semibold text-white">Qué incluye</p>
            <ul className="mt-3 space-y-2">
              <li>• Confirmación rápida vía WhatsApp</li>
              <li>• Atención personalizada y asesoría de estilo</li>
              <li>• Servicio premium con productos de primera calidad</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">Nombre completo</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Juan Pérez" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-500" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">Número de teléfono</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(55) 1234-5678" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-500" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">Correo electrónico</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="tu@ejemplo.com" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-500" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">Selecciona un servicio</label>
              <select name="service" value={formData.service} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-500">
                <option className="bg-black">Corte clásico</option>
                <option className="bg-black">Fade</option>
                <option className="bg-black">Afeitado de barba</option>
                <option className="bg-black">Paquete premium</option>
                <option className="bg-black">Corte para niños</option>
                <option className="bg-black">Lavado de cabello</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">Selecciona un barbero</label>
              <select name="barber" value={formData.barber} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-500">
                <option className="bg-black">Alex</option>
                <option className="bg-black">Jordan</option>
                <option className="bg-black">Seth</option>
              </select>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">Fecha</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-500" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">Hora</label>
                <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-500" required />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">Notas</label>
              <textarea name="notes" value={formData.notes} onChange={handleChange} rows={4} placeholder="Cuéntanos tu estilo preferido o solicitudes especiales..." className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-500" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <button type="submit" className="rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-black transition hover:bg-amber-400">Enviar reserva</button>
          </div>
        </form>
      </div>
    </section>
  );
}
