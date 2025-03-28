import LinkButton from "./linkButton";
import { interests } from "../components/interests";

export default function InterestMenu() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center m-6 font-bold text-xl">
      <h1>Hvilke interesser har du?</h1>
      <div className="w-full max-w-screen overflow-hidden">
        <div className="animate-scroll flex gap-4 whitespace-nowrap w-max">
          {interests.concat(interests).map((interest, index) => (
            <LinkButton
              key={index}
              text={interest.name}
              url={`/hobbies/${interest.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
