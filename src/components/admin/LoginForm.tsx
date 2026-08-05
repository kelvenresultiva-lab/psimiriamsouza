"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Não foi possível entrar.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-line bg-white p-8 shadow-sm"
    >
      <h1 className="font-playfair text-2xl font-semibold text-ink">Área da psicóloga</h1>
      <p className="font-heebo text-sm text-muted">
        Entre com seu e-mail e senha para gerenciar os posts do blog.
      </p>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="E-mail"
        autoFocus
        required
        className="rounded-lg border border-line px-4 py-3 font-heebo text-sm text-ink outline-none focus:border-gold-bright"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Senha"
        required
        className="rounded-lg border border-line px-4 py-3 font-heebo text-sm text-ink outline-none focus:border-gold-bright"
      />
      {error && <p className="font-heebo text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="hover-float mt-2 inline-flex items-center justify-center rounded-tl-[15px] rounded-br-[15px] bg-gold-bright px-8 py-3 font-lato text-[15px] uppercase tracking-[1.3px] text-white transition-colors duration-300 hover:bg-gold disabled:opacity-60"
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
