import LinkButton from "./linkButton";
import { interests } from "./types/interests";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@lib/authOptions";

export default async function InterestMenu() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

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
                  url={`/hobbies/${interest.slug}`}
                />
              ) : (
                <LinkButton key={index} text={interest.name} url="/" />
              )
            )}
        </div>
      </div>
      <p className="text-center font-lg">
        Se alle{" "}
        <Link href="/hobbies" className="hover:underline">
          her
        </Link>
      </p>
    </div>
  );
}
