"use client";

import Link from "next/link";
import AuthButtons from "@/components/authButtons";
import { usePathname } from "next/navigation";
import { getInterestBySlug } from "./types/interests";
import { getEventById } from "./types/post";

export function Header() {
  const pathname = usePathname();

  let title = "...KOMPIS";

  if (pathname.startsWith("/hobbies/")) {
    const hobby = pathname.split("/")[2];
    const name = getInterestBySlug(hobby);
    title = `${name?.infinitiv?.toUpperCase()}kompis`;
  }
  if (pathname.startsWith("/event/")) {
    const id = pathname.split("/")[2];
    const event = getEventById(parseInt(id));
    title = `${event?.hobby.infinitiv}kompis`;
  }
  return (
    <header className="w-full bg-black text-background px-4 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between relative">
        <Link
          href="/"
          className="uppercase font-bold text-5xl text-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
        >
          {title}
        </Link>

        <div className="mt-4 md:mt-0 md:ml-auto">
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}
