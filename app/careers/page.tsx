import LinkButton from "@/components/link-button";
import React from "react";

const jobOpenings = [
  {
    title: "Frontend-kompis",
    location: "Hjemmekontor",
    type: "Fulltid",
    description:
      "Vi ser etter en frontend-utvikler med erfaring i React og Tailwind CSS.",
    link: "/careers/frontend-developer",
  },
  {
    title: "Backend-kompis",
    location: "Oslo, Norge",
    type: "Deltid",
    description:
      "Bli med i backend-teamet vårt og bygg skalerbare API-er med Node.js og PostgreSQL.",
    link: "/careers/backend-developer",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-background">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <section>
          <h2 className="text-foreground text-2xl font-semibold mb-6">
            Ledige stillinger
          </h2>
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-foreground rounded-xl shadow-md p-6 mb-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-sm text-gray-500">
                {job.location} · {job.type}
              </p>
              <p className="mt-2">{job.description}</p>
              <LinkButton
                text="Se stilling"
                url={job.link}
                className="mt-4 inline-block px-4 py-2 border border-background rounded-md text-background hover:bg-background hover:text-foreground transition w-fit"
              />
            </div>
          ))}
        </section>

        <section className="mt-16 text-foreground">
          <h2 className="text-2xl font-semibold mb-4">
            Fant du ikke noe som passer?
          </h2>
          <p>
            Vi er alltid på utkikk etter engasjerte mennesker. Send gjerne en
            åpen søknad til{" "}
            <a
              href="mailto:jobs@kompis.com"
              className="text-foregournd underline"
            >
              jobs@kompis.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
