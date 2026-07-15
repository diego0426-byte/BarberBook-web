"use client";

import { useSession } from "next-auth/react";

export default function CalendarStatus() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  return (
    <div className="rounded-2xl border border-amber-500/20 bg-white/5 px-4 py-3 text-sm text-zinc-300">
      {status === "authenticated" ? (
        <p>Google Calendar conectado como {session?.user?.name ?? "tu cuenta"}.</p>
      ) : (
        <p>Conecta Google Calendar para crear reservas automáticamente.</p>
      )}
    </div>
  );
}
