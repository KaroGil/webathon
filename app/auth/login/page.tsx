import { login } from "@/app/actions/login";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center mt-12 flex-col">
      <form className="flex flex-col gap-4 items-center w-72">
        <h1 className="text-2xl font-bold mb-8">Logg inn</h1>
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
        <button
          formAction={login}
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
