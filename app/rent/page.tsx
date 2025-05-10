"use client";
import LinkButton from "@/components/linkButton";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface Ad {
  title: string;
  description: string;
  location: string;
  contact: string;
}

export default function RentMePage() {
  const [ads, setAds] = useState<Ad[]>([
    {
      title: "Turkamerat",
      description:
        "Bli med på tur i skog og mark. Jeg har godt humør og mye energi.",
      location: "Oslo",
      contact: "OleBrumm@example.com",
    },
    {
      title: "Eventplanlegger",
      description:
        "Kreativ og strukturert, hjelper deg med å planlegge ditt neste arrangement.",
      location: "Bergen",
      contact: "johanne@herheim.com",
    },
    {
      title: "Fotograf",
      description:
        "Erfaren fotograf tilgjengelig for portretter og arrangementer.",
      location: "Stavanger",
      contact: "Karo@gil.com",
    },
    {
      title: "Musiker",
      description:
        "Talentfull gitarist som kan spille på små og store arrangementer.",
      location: "Trondheim",
      contact: "Henrik@lomo.com",
    },
    {
      title: "Hundepasser",
      description: "Elsker hunder, passer både store og små hunder.",
      location: "Oslo",
      contact: "Mille@hoeg.com",
    },
  ]);

  const addAd = () => {
    const newAd = {
      title: "Hjelp med flytting",
      description: "Sterk og arbeidsvillig, kan hjelpe med flytting og bæring.",
      location: "Bergen",
      contact: "flyttehjelp@kompis.com",
    };
    setAds([...ads, newAd]);
  };

  return (
    <div className="min-h-screen bg-background text-background">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <section>
          <h2 className="text-foreground text-2xl font-semibold mb-6">
            Lei en kompis
          </h2>
          {ads.map((ad, index) => (
            <div
              key={index}
              className="bg-foreground rounded-xl shadow-md p-6 mb-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold">{ad.title}</h3>
              <p className="text-sm text-gray-500">{ad.location}</p>
              <p className="mt-2">{ad.description}</p>
              <p className="mt-2 text-sm">Kontakt: {ad.contact}</p>
              <LinkButton
                text="Kontakt"
                url={`mailto:${ad.contact}`}
                className="mt-4 inline-block px-4 py-2 border border-background rounded-md text-background hover:bg-background hover:text-foreground transition w-fit"
              />
            </div>
          ))}
          <Button
            onClick={addAd}
            className="mt-4 px-4 py-2 bg-primary  rounded-md"
          >
            Legg ut annonse
          </Button>
        </section>
      </main>
    </div>
  );
}
