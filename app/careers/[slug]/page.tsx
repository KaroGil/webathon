import { notFound } from "next/navigation";
import LinkButton from "@/components/link-button";

const jobOpenings = [
  {
    title: "Frontend-utvikler",
    slug: "frontend-developer",
    location: "Hjemmekontor",
    type: "Fulltid",
    description:
      "Vi ser etter en frontend-utvikler med erfaring i React og Tailwind CSS.",
  },
  {
    title: "Backend-utvikler",
    slug: "backend-developer",
    location: "Oslo, Norge",
    type: "Deltid",
    description:
      "Bli med i backend-teamet vårt og bygg skalerbare API-er med Node.js og PostgreSQL.",
  },
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function JobPage({ params }: PageProps) {
  const { slug } = await params;
  const job = jobOpenings.find((job) => job.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-gray-800">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
        <p className="text-gray-600 mb-2">
          {job.location} · {job.type}
        </p>
        <p className="my-8 text-lg">{job.description}</p>

        <LinkButton
          text="Søk nå"
          url="mailto:jobs@yourcompany.com"
          className="mt-4 inline-block px-4 py-2 border border-background rounded-md text-background hover:bg-background hover:foreground transition w-fit"
        />
      </main>
    </div>
  );
}
