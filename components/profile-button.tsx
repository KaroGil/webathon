import Link from "next/link";
import { User } from "lucide-react";

export function ProfileButton({ userId }: { userId: number }) {
  return (
    <Link
      href={`/profile/${userId}`}
      className="h-10 w-10 bg-background rounded-full flex justify-center items-center text-foreground"
    >
      <User className="h-6 w-6" />
    </Link>
  );
}
