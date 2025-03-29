import { notFound } from "next/navigation";
import LinkButton from "@/components/linkButton";

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

export default function JobPage({ params }: { params: { slug: string } }) {
  const job = jobOpenings.find((job) => job.slug === params.slug);

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
        <p className="my-6 text-lg">{job.description}</p>

        <LinkButton
          text="Søk nå"
          url="mailto:jobs@kompis.com"
          className="px-6 py-3 bg-foreground text-background rounded-md hover:bg-backgorund hover:text-foregorund transition"
        />
      </main>
    </div>
  );
}
