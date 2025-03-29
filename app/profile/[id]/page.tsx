"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function ProfilePage() {
  const user = { id: 1, name: "Ole Brumm", email: "ole@brumm.no" };
  const { data: session } = useSession();

  return (
    <div className="p-6 space-y-5">
      <div>
        <h1 className="text-3xl font-bold">{user.name}</h1>
        <p className="mt-4">Navn: {user.name}</p>
        <p>E-post: {user.email}</p>
      </div>
      {session && (
        <Button
          variant="secondary"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logg ut
        </Button>
      )}
    </div>
  );
}
