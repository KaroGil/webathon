import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import { User } from "lucide-react";

export default async function AuthButtons() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return (
      <Link
        href={"/profile"}
        className="h-10 w-10 bg-background rounded-full flex justify-center items-center text-foreground mx-6"
      >
        <User className="h-6 w-6" />
      </Link>
    );
  }

  return (
    <Link href="/auth/login">
      <Button
        className={`font-bold hover:bg-foreground hover:text-background round transition-all duration-300 `}
      >
        Logg inn
      </Button>
    </Link>
  );
}
