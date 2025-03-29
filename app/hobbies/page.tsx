import LinkButton from "@/components/linkButton";
import { interests } from "@/components/interests";

export default function Hobbies() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center m-6 font-bold text-xl">
      <h1>Alle interesser</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {interests.map((interest, index) => (
          <LinkButton
            key={index}
            text={interest.name}
            url={`/hobbies/${interest.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
