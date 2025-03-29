import Image from "next/image";
import turtle from "@/public/turtle.png"; // adjust path if needed

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mb-6">
      {["Mille", "Karo", "Jane", "Lømo"].map((name, index) => {
        return (
          <div key={index}>
            <Image src={turtle} alt="Turtle" width={400} />
            <p className=" text-center text-foreground font-7xl font-bold">
              {name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
