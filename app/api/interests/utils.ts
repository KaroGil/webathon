import { promises as fs } from "fs";
import path from "path";
import type { Interest } from "./../../../components/types/interests";

export async function getInterestBySlug(
  slug: string
): Promise<Interest | undefined> {
  const filePath = path.join(process.cwd(), "public", "interests.json");
  const file = await fs.readFile(filePath, "utf-8");
  const interests: Interest[] = JSON.parse(file);

  return interests.find((interest) => interest.slug === slug);
}
