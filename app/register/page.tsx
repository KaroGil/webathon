"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== repeatPassword) {
      setError("Passordene må være like");
      return;
    }

    // Trim e-post for å fjerne uønskede mellomrom
    const trimmedEmail = email.trim();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail, password, name }),
      });

      const result = await res.json();

      if (!res.ok) {
        setError("Registrering feilet: " + (result.error || "Ukjent feil"));
        return;
      }

      // Etter vellykket registrering, logg inn brukeren
      const signInResult = await signIn("credentials", {
        email: trimmedEmail,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      if (!signInResult) {
        setError("Innlogging feilet etter registrering: Ingen respons.");
        return;
      }

      if (signInResult.error) {
        setError("Innlogging feilet etter registrering: " + signInResult.error);
      } else if (signInResult.ok && signInResult.url) {
        setError("");
        window.location.href = signInResult.url;
      } else {
        setError("Innlogging feilet etter registrering: Uventet respons.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError("En feil oppstod under registrering: " + err.message);
      } else {
        setError("En ukjent feil oppstod under registrering.");
      }
    }
  }

  return (
    <div className="flex items-center justify-center mt-8 flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center w-72"
      >
        <h1 className="text-2xl font-bold mb-8">Registrer deg</h1>
        <input
          className="border p-2 rounded w-full"
          type="text" // Riktig input-type for navn
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Navn"
        />
        <input
          className="border p-2 rounded w-full"
          type="email" // Riktig input-type for e-post
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-post"
        />
        <input
          className="border p-2 rounded w-full"
          type="password" // Riktig input-type for passord
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passord"
        />
        <input
          className="border p-2 rounded w-full"
          type="password" // Riktig input-type for gjentatt passord
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          placeholder="Gjenta passord"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-black text-white px-4 py-2 rounded w-full"
          type="submit"
        >
          Register deg
        </button>
      </form>
      <p className="mt-4">
        Er du allerede kompis?{" "}
        <Link href="/login" className="hover:underline">
          Logg inn
        </Link>
      </p>
    </div>
  );
}
