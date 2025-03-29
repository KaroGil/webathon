import Link from "next/link";
import { AnimatedIcons } from "@/components/animation/animatedIcons";

export function Footer() {
  return (
    <AnimatedIcons n={10}>
      <footer className="flex flex-col bottom-0 w-full bg-foreground text-background p-12 border-t">
        <div className="flex flex-row items-center justify-center w-full">
          <p className="uppercase text-lg font-bold">...KOMPIS</p>
          <Link href="/aboutUs" className="ml-auto flex justify-center">
            Om oss
          </Link>
        </div>
        <p className="mt-10 flex justify-center">
          Laget av Ninja Turtles 🐢 Mille, Karolina, Johanne og Henrik
        </p>
      </footer>
    </AnimatedIcons>
  );
}
