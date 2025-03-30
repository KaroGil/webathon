import Link from "next/link";
import { AnimatedIcons } from "@/components/animation/animatedIcons";
import { DiGithubBadge } from "react-icons/di";

export function Footer() {
  return (
    <AnimatedIcons n={10}>
      <footer className="flex flex-col bottom-0 w-full bg-foreground text-background p-12 border-t mt-50">
        <div className="flex flex-row items-center justify-center w-full">
          <p className="uppercase text-lg font-bold">...KOMPIS</p>
          <div className="ml-auto flex justify-center gap-4">
            <Link href="/aboutUs" className="ml-auto flex justify-center">
              Om oss
            </Link>
            <Link href="/careers" className="ml-auto flex justify-center">
              Jobb
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row items-center justify-center w-full mt-10 gap-2">
            <Link href="https://github.com/KaroGil/webathon" target="_blank">
              <DiGithubBadge size={24} />
            </Link>
            <p>Laget av Ninja Turtles 🐢 Mille, Karolina, Johanne og Henrik</p>
          </div>
          © {new Date().getFullYear()} ...Kompis. All rights not reserved.
        </div>
      </footer>
    </AnimatedIcons>
  );
}
