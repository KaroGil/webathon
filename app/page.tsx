import InterestsMenu from "@/components/interestsMenu";
import LinkButton from "../components/linkButton";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center m-6 font-bold text-xl">
      <h1>Ingen å dra på ... med?</h1>
      <LinkButton text="BLI KOMPIS" url="/login" />
      <InterestsMenu />
    </div>
  );
}
