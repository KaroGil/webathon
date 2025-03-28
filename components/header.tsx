import Link from "next/link";
import AuthButtons from "@/components/authButtons";

export function Header() {
  return (
    <div className="bg-foreground text-background px-6 grid grid-cols-3">
      <div></div>
      <div className="flex items-center justify-center p-12 place-self-center">
        <Link href="/" className="uppercase font-bold text-5xl">
          ...KOMPIS
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <AuthButtons />
      </div>
    </div>
  );
}
