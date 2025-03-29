"use client";

import { useEffect, useState } from "react";
import type { Interest } from "./../../../components/types/interests";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export default function AddInterest() {
  const [interestName, setInterestName] = useState("");
  const [infinitiv, setInfinitiv] = useState("");
  const [interests, setInterests] = useState<Interest[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch existing interests on mount
  useEffect(() => {
    const fetchInterests = async () => {
      const res = await fetch("/api/interests");
      const data = await res.json();
      setInterests(data);
    };

    fetchInterests();
  }, []);

  const handleAddInterest = async () => {
    setError(null);
    if (!interestName || !infinitiv) return;

    const newInterest: Interest = {
      name: interestName.trim(),
      infinitiv: infinitiv.trim(),
      slug: slugify(infinitiv),
    };

    try {
      const res = await fetch("/api/interests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInterest),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.error || "Noe gikk galt");
        return;
      }

      const added = await res.json();
      setInterests((prev) => [...prev, added]);
      setInterestName("");
      setInfinitiv("");
    } catch {
      setError("Klarte ikke å legge til interesse");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Legg til interesse</h1>

      <div className="flex flex-col gap-4 mb-6 w-full max-w-md">
        <input
          type="text"
          value={interestName}
          onChange={(e) => setInterestName(e.target.value)}
          placeholder="Navn (f.eks. Fotball)"
          className="p-2 border rounded"
        />
        <input
          type="text"
          value={infinitiv}
          onChange={(e) => setInfinitiv(e.target.value)}
          placeholder="Infinitiv (f.eks. Spille fotball)"
          className="p-2 border rounded"
        />
        <button
          onClick={handleAddInterest}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Legg til
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <ul className="w-full max-w-md space-y-2">
        {interests.map((interest) => (
          <li
            key={interest.slug}
            className="p-3 bg-white border rounded shadow-sm flex justify-between"
          >
            <span>
              {interest.name} ({interest.infinitiv})
            </span>
            <span className="text-gray-400 text-sm">/{interest.slug}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
