"use client";

import { useSession, signOut } from "next-auth/react";

export default function AuthStatus() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="flex gap-4 items-center">
      <p>Logget inn som {session.user?.email}</p>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Logg ut
      </button>
    </div>
  );
}
