import InterestsMenu from "@/components/interestsMenu";
import LinkButton from "../components/linkButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@lib/authOptions";
import Geolocation from "@/components/geolocation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-8 items-center justify-center m-8 font-bold text-xl h-full">
      <div>
        {session ? (
          <p>Velkommen, {session.user?.name}!</p>
        ) : (
          <div className="flex flex-col gap-10 items-center">
            <h1>Ingen å dra på ... med?</h1>

            <LinkButton text="BLI KOMPIS" url="/register" />
          </div>
        )}
      </div>
      <InterestsMenu />
      <Geolocation />
    </div>
  );
}
