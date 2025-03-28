import LinkButton from "./linkButton";

export default function HobbyMenu() {
  const interests = [
    "Fotball",
    "Basket",
    "Håndball",
    "Løping",
    "Sykling",
    "Svømming",
    "Tennis",
    "Golf",
    "Klatring",
  ];
  return (
    <div className="flex flex-col gap-8 items-center justify-center m-6 font-bold text-xl">
      <h1>Hvilke interesser har du?</h1>
      <div className="w-full max-w-screen overflow-hidden">
        <div className="animate-scroll flex gap-4 whitespace-nowrap w-max">
          {interests.concat(interests).map((interest, index) => (
            <LinkButton
              key={index}
              text={interest}
              url={`/hobbies/${interest.toLowerCase()}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
