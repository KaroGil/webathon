import Link from "next/link";
export default function LinkButton({
  text,
  url,
  className,
}: {
  text: string;
  url?: string;
  className?: string;
}) {
  return (
    <Link
      className={`bg-foreground text-background text-center font-bold px-12 py-4 rounded-lg border-2 border-background hover:bg-background hover:text-foreground transition-all duration-300 ${className}`}
      href={url ? url : "/"}
    >
      {text}
    </Link>
  );
}
