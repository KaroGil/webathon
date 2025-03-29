"use client";

import { useSession, signIn } from "next-auth/react";
import { ProfileButton } from "./profile-button";
import { Button } from "./ui/button";

export default function AuthButtons() {
  const { data: session } = useSession();
  const user = { id: 1, name: "Ole Brumm" };

  if (session) {
    return <ProfileButton userId={user.id} />;
  }

  return (
    <Button
      onClick={() => signIn()}
      className={`font-bold hover:bg-foreground hover:text-background round transition-all duration-300 `}
    >
      Logg inn
    </Button>
  );
}
