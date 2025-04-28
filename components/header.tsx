import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { getUserFromId } from "@/types/profile";
import HeaderText from "./header-text";

export async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const profile = user ? await getUserFromId(user?.id || "") : null;

  return (
    <header className="w-full bg-black text-background px-4 py-12">
      <div className="max-w-7xl mx-auto relative flex items-center justify-center">
        <Link
          href="/"
          className="uppercase font-bold text-5xl text-center w-full"
        >
          <HeaderText is_from_bergen={profile?.is_from_bergen || false} />
        </Link>
        <div className="absolute right-0">
          {user ? (
            <Link
              href="/profile"
              className="h-10 w-10 bg-background rounded-full flex justify-center items-center text-foreground mx-6"
            >
              <UserIcon className="h-6 w-6" />
            </Link>
          ) : (
            <Link href="/auth/login">
              <Button className="font-bold hover:bg-foreground hover:text-background transition-all duration-300">
                Logg inn
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
