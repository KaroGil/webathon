import { promises as fs } from "fs";
import path from "path";
import { Interest } from "./../../../components/types/interests";

const filePath = path.join(process.cwd(), "public", "interests.json");

export async function GET() {
  const file = await fs.readFile(filePath, "utf8");
  return new Response(file, {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  const newInterest: Interest = await req.json();

  const file = await fs.readFile(filePath, "utf8");
  const interests: Interest[] = JSON.parse(file);

  if (interests.find((i) => i.slug === newInterest.slug)) {
    return new Response(JSON.stringify({ error: "Slug already exists" }), {
      status: 400,
    });
  }

  interests.push(newInterest);
  await fs.writeFile(filePath, JSON.stringify(interests, null, 2), "utf8");

  return new Response(JSON.stringify(newInterest), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
