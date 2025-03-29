import InterestsMenu from "@/components/interestsMenu";
import LinkButton from "../components/linkButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@lib/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-8 items-center justify-center m-6 font-bold text-xl h-full">
      <div>
        {session ? (
          <p>Velkommen, {session.user?.name}!</p>
        ) : (
          <div className="flex flex-col gap-10 items-center">
            <h1>Ingen å dra på ... med?</h1>

            <LinkButton text="BLI KOMPIS" url="/login" />
          </div>
        )}
      </div>
      <InterestsMenu />
      <p className="text-center font-lg flex flex-col gap-2">
        Savner du noe?
        <LinkButton
          url="/hobbies/add"
          text="Legg til en interesse"
          className="text-sm"
        />
      </p>
    </div>
  );
}
