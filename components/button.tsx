export default function Button({ text }: { text: string }) {
  return (
    <button
      className={`bg-foreground text-background font-bold text-xl px-12 py-4 rounded-lg border-2 border-background hover:bg-background hover:text-foreground transition-all duration-300 `}
    >
      {text}
    </button>
  );
}
