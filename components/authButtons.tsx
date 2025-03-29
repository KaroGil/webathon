"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="bg-background text-foreground px-4 py-2 rounded mx-4 w-30 font-bold"
      >
        Logg ut
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="bg-background text-foreground px-4 py-2 rounded mx-4 w-30 font-bold"
    >
      Logg inn
    </button>
  );
}
