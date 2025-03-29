export type Interest = { name: string; infinitiv: string; slug: string };

export function getInterestBySlug(slug: string) {
  return interests.find((interest) => interest.slug === slug);
}

export function getInfinitiveBySlug(slug: string) {
  const interest = interests.find((interest) => interest.slug === slug);
  return interest ? interest.infinitiv : null;
}

export const interests: Interest[] = [
  { name: "Bading", infinitiv: "Bade", slug: "bade" },
  { name: "Fotball", infinitiv: "Fotball", slug: "fotball" },
  { name: "Ski", infinitiv: "Ski", slug: "ski" },
  { name: "Klatring", infinitiv: "Klatre", slug: "klatre" },
  { name: "Håndball", infinitiv: "Håndball", slug: "handball" },
  { name: "Løping", infinitiv: "Løpe", slug: "lope" },
  { name: "Basketball", infinitiv: "Basketball", slug: "basketball" },
  { name: "Golf", infinitiv: "Golf", slug: "golf" },
  { name: "Tennis", infinitiv: "Tennis", slug: "tennis" },
  { name: "Svømming", infinitiv: "Svømme", slug: "svomme" },
  { name: "Yoga", infinitiv: "Soga", slug: "yoga" },
  { name: "Rust", infinitiv: "Rust", slug: "rust" },
];
