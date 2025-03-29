import { Interest, interests } from "./interests";
import { getUserById, User } from "./user";

export type Event = {
  id: number;
  date: Date;
  place: string;
  mapsLink?: string;
  hobby: Interest;
  description: string;
  user: User;
};

export function getEventById(id: number) {
  return posts.find((post) => post.id === id);
}

const defaultUser: User = {
  id: "0",
  name: "Anonym",
  email: "ukjent@ingen.com",
  password: "unknown",
};

export const posts: Event[] = [
  // Tidligere arrangementer
  {
    id: 1,
    date: new Date("2025-04-01T14:00:00"),
    place: "Høyteknologisenteret, Florida",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.8992847043078!2d5.3305758702739645!3d60.38082360000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf953233a2e21%3A0x94c7193af76b9f3c!2sHigh%20Technology%20Center%20-%20University%20of%20Bergen!5e0!3m2!1sen!2sno!4v1743279351500!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "bade")!,
    user: getUserById("5") || defaultUser,
    description: "Bading i sjøen med venner.",
  },
  {
    id: 2,
    date: new Date("2025-04-02T17:30:00"),
    place: "Marienlyst stadion, Drammen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64349.68693873462!2d10.18405255!3d59.73402170000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46413cb4aa728419%3A0xc578916649a336d9!2sDrammen!5e0!3m2!1sen!2sno!4v1743280528997!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "fotball")!,
    user: getUserById("5") || defaultUser,
    description: "Fotballtrening på stadion.",
  },
  // Arrangementer i Bergen som dekker alle interesser
  {
    id: 3,
    date: new Date("2025-04-13T15:00:00"),
    place: "Nordnes Sjøbad, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.7999699331606!2d5.3026209!3d60.3989816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfc10fcaef8c5%3A0x4aa995fe862c154b!2sNordnes%20seawater%20pool!5e0!3m2!1sen!2sno!4v1743280558511!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "bade")!,
    user: getUserById("1") || defaultUser,
    description: "Bading og avslapning ved sjøbadet.",
  },
  {
    id: 4,
    date: new Date("2025-04-14T18:00:00"),
    place: "Brann Stadion, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.7395475525484!2d5.3574701!3d60.3669423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf939026c541b%3A0x2bfea90d566fa549!2sBrann%20Stadion!5e0!3m2!1sen!2sno!4v1743280586014!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "fotball")!,
    user: getUserById("1") || defaultUser,
    description: "Fotballkamp mellom lokale lag.",
  },
  {
    id: 5,
    date: new Date("2025-04-15T10:00:00"),
    place: "Voss Resort, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.8510739237001!2d6.410883799999999!3d60.629100699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463ddadc0e6e8a51%3A0xd45822a2ecaa1f0!2sVoss%20Resort%20Fjellheisar!5e0!3m2!1sen!2sno!4v1743280610607!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "ski")!,
    user: getUserById("5") || defaultUser,
    description: "Skikjøring i flotte løyper.",
  },
  {
    id: 6,
    date: new Date("2025-04-16T12:00:00"),
    place: "Ulriken, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "klatre")!,
    user: getUserById("5") || defaultUser,
    description: "Klatretur i fjellet.",
  },
  {
    id: 7,
    date: new Date("2025-04-17T17:00:00"),
    place: "Framohallen, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",

    hobby: interests.find((h) => h.slug === "handball")!,
    user: getUserById("2") || defaultUser,
    description: "Håndballtrening med lagkamerater.",
  },
  {
    id: 8,
    date: new Date("2025-04-18T09:00:00"),
    place: "Store Lungegårdsvann, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",

    hobby: interests.find((h) => h.slug === "lope")!,
    user: getUserById("2") || defaultUser,
    description: "Morgentur langs vannet.",
  },
  {
    id: 9,
    date: new Date("2025-04-19T14:00:00"),
    place: "Bergen Basketballklubb",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "basketball")!,
    user: getUserById("2") || defaultUser,
    description: "Basketballkamp i hallen.",
  },
  {
    id: 10,
    date: new Date("2025-04-20T11:00:00"),
    place: "Bergen Golfklubb",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "golf")!,
    user: getUserById("2") || defaultUser,
    description: "Golfturnering for nybegynnere.",
  },
  {
    id: 11,
    date: new Date("2025-04-21T16:00:00"),
    place: "Bergen Offentlige Bibliotek",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "kotlin")!,
    user: getUserById("2") || defaultUser,
    description: "Kotlin workshop for utviklere.",
  },
  {
    id: 12,
    date: new Date("2025-04-22T15:30:00"),
    place: "Nordnes Tennisanlegg, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "tennis")!,
    user: getUserById("2") || defaultUser,
    description: "Tennistrening for alle nivåer.",
  },
  {
    id: 13,
    date: new Date("2025-04-23T14:00:00"),
    place: "Flesland Flyplass, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "fly")!,
    user: getUserById("3") || defaultUser,
    description: "Flyspotting og foto av fly.",
  },
  {
    id: 14,
    date: new Date("2025-04-24T18:30:00"),
    place: "Bergen Yoga Studio",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "yoga")!,
    user: getUserById("3") || defaultUser,
    description: "Yogaklasse for stressmestring.",
  },
  {
    id: 15,
    date: new Date("2025-04-25T19:00:00"),
    place: "Kode Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "rust")!,
    user: getUserById("3") || defaultUser,
    description: "Rust-programmering for viderekomne.",
  },
  {
    id: 16,
    date: new Date("2025-04-26T10:00:00"),
    place: "Fløibanen, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "vandring")!,
    user: getUserById("3") || defaultUser,
    description: "Morgenvandring til Fløyen.",
  },
  {
    id: 17,
    date: new Date("2025-04-27T12:30:00"),
    place: "Torgallmenningen, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "yoga")!,
    user: getUserById("3") || defaultUser,
    description: "Gratis utendørs yogatime.",
  },
  {
    id: 18,
    date: new Date("2025-04-28T14:00:00"),
    place: "Møhlenpris Idrettsbane, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "fotball")!,
    user: getUserById("3") || defaultUser,
    description: "Fotballkamp mellom vennelag.",
  },
  {
    id: 19,
    date: new Date("2025-04-29T18:00:00"),
    place: "VilVite, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "kotlin")!,
    user: getUserById("4") || defaultUser,
    description: "Introduksjon til Kotlin-programmering.",
  },
  {
    id: 20,
    date: new Date("2025-04-30T09:00:00"),
    place: "Sandviken Sjøbad, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "bade")!,
    user: getUserById("4") || defaultUser,
    description: "Morgensvøm i sjøen.",
  },
  {
    id: 21,
    date: new Date("2025-05-01T16:00:00"),
    place: "Fana Golfklubb, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "golf")!,
    user: getUserById("4") || defaultUser,
    description: "Golfturnering for amatører.",
  },
  {
    id: 22,
    date: new Date("2025-05-02T11:30:00"),
    place: "Bergen Tennisklubb",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "tennis")!,
    user: getUserById("4") || defaultUser,
    description: "Tennisturnering for nybegynnere.",
  },
  {
    id: 23,
    date: new Date("2025-05-03T14:30:00"),
    place: "Kyrkjetangen, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "basketball")!,
    user: getUserById("4") || defaultUser,
    description: "Basketballspill med venner.",
  },
  {
    id: 24,
    date: new Date("2025-05-04T17:00:00"),
    place: "Alvøen Idrettspark, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "handball")!,
    user: getUserById("4") || defaultUser,
    description: "Håndballkamp mellom lokalag.",
  },
  {
    id: 25,
    date: new Date("2025-05-05T08:30:00"),
    place: "Ulriken, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "lope")!,
    user: getUserById("5") || defaultUser,
    description: "Løpetur til toppen av Ulriken.",
  },
  {
    id: 26,
    date: new Date("2025-05-06T13:00:00"),
    place: "Høyteknologisenteret, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "rust")!,
    user: getUserById("5") || defaultUser,
    description: "Workshop i Rust-programmering.",
  },
  {
    id: 27,
    date: new Date("2025-05-07T20:00:00"),
    place: "Flesland Flyplass, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "fly")!,
    user: getUserById("1") || defaultUser,
    description: "Kveldsflyspotting på flyplassen.",
  },
  {
    id: 28,
    date: new Date("2025-05-08T15:00:00"),
    place: "Damsgårdsfjellet, Bergen",
    mapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.405355937868!2d5.3869521!3d60.377485799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf92af87f339d%3A0x84391761658b3434!2sUlriken!5e0!3m2!1sen!2sno!4v1743280667409!5m2!1sen!2sno",
    hobby: interests.find((h) => h.slug === "klatre")!,
    user: getUserById("1") || defaultUser,
    description: "Klatring på naturlige ruter.",
  },
];
