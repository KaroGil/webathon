"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

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
    <div className="flex items-center justify-center mt-12 flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center w-72"
      >
        <h1 className="text-2xl font-bold mb-8">Logg inn</h1>
        <input
          className="border p-2 rounded w-full"
          type="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-post"
        />
        <input
          className="border p-2 rounded w-full"
          type="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passord"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-black text-white px-4 py-2 rounded w-full"
          type="submit"
        >
          Logg inn
        </button>
      </form>
      <p className="mt-4">
        Er du ikke kompis enda?¿ {""}
        <Link href="/register" className="hover:underline">
          Registrer deg
        </Link>
      </p>
    </div>
  );
}
