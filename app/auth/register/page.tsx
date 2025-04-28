"use client";

import { useState } from "react";
import { register } from "@/app/actions/register";
import Link from "next/link";

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);

  async function handleRegister(formData: FormData) {
    const result = await register(formData);

    if (result?.error) {
      setError(result.error);
    } else {
      window.location.href = "/"; // Eller /auth/login om du vil sende dit
    }
  }

  return (
    <div className="flex items-center justify-center my-12 flex-col">
      <form
        action={handleRegister}
        className="flex flex-col gap-4 items-center w-72"
      >
        <h1 className="text-2xl font-bold mb-8">Registrer deg</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded w-full text-center">
            {error}
          </div>
        )}

        <input
          className="border p-2 rounded w-full"
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Fullt navn"
          required
        />
        <input
          className="border p-2 rounded w-full"
          id="username"
          name="username"
          type="text"
          placeholder="Brukernavn"
          required
        />
        <input
          className="border p-2 rounded w-full"
          id="email"
          name="email"
          type="email"
          placeholder="E-post"
          required
        />
        <input
          className="border p-2 rounded w-full"
          id="password"
          name="password"
          type="password"
          placeholder="Passord"
          required
        />
        <div className="flex items-center gap-2 flex-row">
          <input type="checkbox" id="notCreep" name="notCreep" />
          <label htmlFor="notCreep">Jeg er ikke creep</label>
        </div>
        <button
          className="bg-black text-white px-4 py-2 rounded w-full"
          type="submit"
        >
          Registrer deg
        </button>
      </form>

      <p className="mt-4">
        Er du allerede kompis?{" "}
        <Link href="/auth/login" className="hover:underline">
          Logg inn
        </Link>
      </p>
    </div>
  );
}
