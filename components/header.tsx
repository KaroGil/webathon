import Link from "next/link";

export function Header() {
  return (
    <div className="w-full h-12 flex px-5 items-center justify-between bg-blue-200 border-b">
      <Link href="/">BADEKOMPIS</Link>
    </div>
  );
}
