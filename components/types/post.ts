import { promises as fs } from "fs";
import path from "path";
import { Interest } from "./interests";

export type Event = {
  id: number;
  date: Date;
  place: string;
  hobby: Interest;
  description: string;
  user: { name: string; age: number };
};

export async function getEvents(): Promise<Event[]> {
  const filePath = path.join(process.cwd(), "public", "interests.json");
  const file = await fs.readFile(filePath, "utf-8");
  const interests: Interest[] = JSON.parse(file);

  return [
    {
      id: 1,
      date: new Date("2025-04-01T14:00:00"),
      place: "Bystranda, Kristiansand",
      hobby: interests.find((h) => h.slug === "bade")!,
      user: { name: "Emma", age: 23 },
      description:
        "Bading i sjøen lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      date: new Date("2025-04-02T17:30:00"),
      place: "Marienlyst stadion, Drammen",
      hobby: interests.find((h) => h.slug === "fotball")!,
      user: { name: "Jonas", age: 27 },
      description: "Fotballtrening",
    },
    {
      id: 3,
      date: new Date("2025-04-03T10:00:00"),
      place: "Tryvann, Oslo",
      hobby: interests.find((h) => h.slug === "ski")!,
      user: { name: "Nora", age: 21 },
      description: "Langrenn",
    },
    {
      id: 4,
      date: new Date("2025-04-04T13:45:00"),
      place: "Ulriken, Bergen",
      hobby: interests.find((h) => h.slug === "klatre")!,
      user: { name: "Erik", age: 30 },
      description: "Klatring i fjellet",
    },
    {
      id: 5,
      date: new Date("2025-04-05T16:00:00"),
      place: "Tjuvholmen, Oslo",
      hobby: interests.find((h) => h.slug === "bade")!,
      user: { name: "Selma", age: 25 },
      description: "Bading i sjøen",
    },
  ];
}

export async function getEventById(id: number): Promise<Event | undefined> {
  const posts = await getEvents();
  return posts.find((post) => post.id === id);
}
