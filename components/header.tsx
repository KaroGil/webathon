"use client";

import Link from "next/link";
import AuthButtons from "@/components/authButtons";
import { usePathname } from "next/navigation";
import { getInterestBySlug } from "./types/interests";
import { getEventById } from "./types/post";
import { useEffect, useState } from "react";
import { AnimatedIcons } from "@/components/animation/animatedIcons";

export function Header() {
  const pathname = usePathname();

  const [bade, setBade] = useState(false);
  const [title, setTitle] = useState("...KOMPIS");

  useEffect(() => {
    if (pathname.startsWith("/hobbies/")) {
      const hobby = pathname.split("/")[2];
      const name = getInterestBySlug(hobby);
      console.log("Got hobby name:", name);

      setTitle(`${name?.infinitiv?.toUpperCase()}kompis`);
      if (name?.name == "Bading") {
        setBade(true);
      }
    } else if (pathname.startsWith("/event/")) {
      const id = pathname.split("/")[2];
      const event = getEventById(parseInt(id));
      setTitle(`${event?.hobby.infinitiv}kompis`);
      setBade(false);
    } else {
      setTitle("...KOMPIS");
      setBade(false);
    }
  }, [pathname]);

  const headerContent = (
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

  return bade ? (
    <AnimatedIcons n={10} bade={bade}>
      {headerContent}
    </AnimatedIcons>
  ) : (
    headerContent
  );
}
