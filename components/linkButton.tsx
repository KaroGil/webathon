import Link from "next/link";
export default function LinkButton({
  text,
  url,
}: {
  text: string;
  url?: string;
}) {
  return (
    <Link
      className={`bg-foreground text-background font-bold text-xl px-12 py-4 rounded-lg border-2 border-background hover:bg-background hover:text-foreground transition-all duration-300 `}
      href={url ? url : "/"}
    >
      {text}
    </Link>
  );
}
