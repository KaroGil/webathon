import HobbyMenu from "@/components/hobbyMenu";
import Button from "../components/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center m-6 font-bold text-xl">
      <h1>Ingen å dra på ... med?</h1>
      <Button text="BLI KOMPIS" />
      <HobbyMenu />
    </div>
  );
}
