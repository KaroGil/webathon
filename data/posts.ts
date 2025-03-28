import { hobbies } from "@/components/hobbies";
import { Post } from "@/components/posts";

export const posts: Post[] = [
  {
    date: new Date("2025-04-01T14:00:00"),
    place: "Bystranda, Kristiansand",
    hobby: hobbies.find((h) => h.slug === "bade")!,
    user: { name: "Emma", age: 23 },
    description:
      "Bading i sjøen lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: new Date("2025-04-02T17:30:00"),
    place: "Marienlyst stadion, Drammen",
    hobby: hobbies.find((h) => h.slug === "fotball")!,
    user: { name: "Jonas", age: 27 },
    description: "Fotballtrening",
  },
  {
    date: new Date("2025-04-03T10:00:00"),
    place: "Tryvann, Oslo",
    hobby: hobbies.find((h) => h.slug === "ski")!,
    user: { name: "Nora", age: 21 },
    description: "Langrenn",
  },
  {
    date: new Date("2025-04-04T13:45:00"),
    place: "Ulriken, Bergen",
    hobby: hobbies.find((h) => h.slug === "klatre")!,
    user: { name: "Erik", age: 30 },
    description: "Klatring i fjellet",
  },
  {
    date: new Date("2025-04-05T16:00:00"),
    place: "Tjuvholmen, Oslo",
    hobby: hobbies.find((h) => h.slug === "bade")!,
    user: { name: "Selma", age: 25 },
    description: "Bading i sjøen",
  },
];
