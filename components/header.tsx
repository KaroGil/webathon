import Link from "next/link";
import { hobbies } from "./hobbies";

export function Header() {
  return (
    <div className="w-full h-12 flex px-5 items-center justify-between bg-blue-200 border-b">
      <p className="">BADEKOMPIS</p>
      <div className="space-x-4">
        {hobbies.map((h: string) => (
          <Link key={h} href={`/${h}`}>
            {h}
          </Link>
        ))}
      </div>
    </div>
  );
}
