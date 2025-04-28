import LinkButton from "@/components/link-button";
import { createClient } from "@/utils/supabase/server";

export default async function Hobbies() {
  const supabase = await createClient();
  const { data } = await supabase.from("interests").select("*");
  const interests = data || [];
  return (
    <div className="flex flex-col gap-8 items-center justify-center m-6 font-bold text-xl">
      <h1>Alle interesser</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {interests.map((interest, index) => (
          <LinkButton
            key={index}
            text={interest.name}
            url={`/interests/${interest.slug}`}
          />
        ))}
      </div>
      <p className="text-center font-lg flex flex-col gap-2">
        Savner du noe?
        <LinkButton
          url="/interests/add"
          text="Legg til en interesse"
          className="text-sm"
        />
      </p>
    </div>
  );
}
