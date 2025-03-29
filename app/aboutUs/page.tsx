export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-8">
      <h1 className="text-4xl font-bold mb-4">Om oss</h1>
      <p className="text-lg mb-2">
        Vi er utviklerne bak KOMPIS, et prosjekt laget av:
      </p>
      <ul className="list-none list-inside flex flex-col items-center">
        <li>Mille</li>
        <li>Karolina</li>
        <li>Johanne</li>
        <li>Henrik</li>
      </ul>
      <p className="text-2xl font-bold mt-4">AKA Ninja Turtles</p>
      <p className="text-6xl font-bold mt-4">🐢</p>
    </div>
  );
}
