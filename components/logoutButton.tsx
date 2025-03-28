"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-black text-white px-4 py-2 rounded"
    >
      Logg ut
    </button>
  );
}
