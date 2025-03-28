import Link from "next/link";

export function Header() {
  return (
    <div className="flex items-center justify-center bg-foreground border-b text-background font-bold text-5xl p-12">
      <Link href="/" className="uppercase">
        ...KOMPIS
      </Link>
    </div>
  );
}
