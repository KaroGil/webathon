import InterestMenu from "@/components/interests-menu";
import { WelcomeMessage } from "@/components/welcome-message";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center m-20 font-bold text-xl h-full">
      <div>
        <WelcomeMessage />
      </div>
      <InterestMenu />
    </div>
  );
}
