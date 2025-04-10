import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import LinkButton from "./link-button";

export default async function InterestMenu() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase.from("interests").select("*");
  const interests = data || [];

  return (
    <div className="flex flex-col gap-16 items-center justify-center m-6 font-bold text-xl">
      <h1 className="text-3xl">Hvilke interesser har du?</h1>
      <div className="w-full max-w-screen overflow-hidden">
        <div className="animate-scroll flex gap-4 whitespace-nowrap w-max">
          {interests
            .concat(interests)
            .map((interest, index) =>
              user ? (
                <LinkButton
                  key={index}
                  text={interest.name}
                  url={`/interests/${interest.slug}`}
                />
              ) : (
                <LinkButton key={index} text={interest.name} url="/" />
              )
            )}
        </div>
      </div>
      <p className="text-center font-lg">
        Se alle{" "}
        <Link href="/interests" className="hover:underline">
          her
        </Link>
      </p>
    </div>
  );
}
