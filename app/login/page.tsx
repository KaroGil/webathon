"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    });

    if (res?.error) {
      setError("Feil e-post eller passord");
    } else if (res?.ok) {
      setError("");
      window.location.href = res.url || "/";
    }
  }

  return (
    <main className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center"
      >
        <h1 className="text-2xl font-bold">Logg inn</h1>
        <input
          className="border p-2 rounded"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="border p-2 rounded"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button className="bg-black text-white px-4 py-2 rounded" type="submit">
          Logg inn
        </button>
      </form>
    </main>
  );
}
