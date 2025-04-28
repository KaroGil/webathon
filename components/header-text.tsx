"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getInterestBySlugClient,
  getInterestByIdClient,
} from "@/app/actions/interest-client";
import { createClient } from "@/utils/supabase/client";

export default function HeaderText({
  is_from_bergen,
}: {
  is_from_bergen: boolean;
}) {
  const path = usePathname();
  const [interestName, setInterestName] = useState("");

  useEffect(() => {
    const fetchInterest = async () => {
      const supabase = createClient();

      if (path.startsWith("/interests/")) {
        const slug = path.split("/")[2];
        if (!slug) return;

        try {
          const interest = await getInterestBySlugClient(slug);
          setInterestName(interest.infinitiv);
        } catch {
          setInterestName("");
        }
      } else if (path.startsWith("/events/")) {
        const eventId = path.split("/")[2];
        if (!eventId) return;

        const { data: event, error } = await supabase
          .from("events")
          .select("interest")
          .eq("id", eventId)
          .single();

        if (error || !event?.interest) {
          setInterestName("");
          return;
        }

        try {
          const interest = await getInterestByIdClient(event.interest);
          setInterestName(interest.infinitiv);
        } catch {
          setInterestName("");
        }
      } else {
        setInterestName("");
      }
    };

    fetchInterest();
  }, [path]);

  if (interestName) {
    return (
      <div>
        <span className="uppercase">{interestName}</span>
        <span>{is_from_bergen ? "tjommi" : "kompis"}</span>
      </div>
    );
  }

  return <div>{is_from_bergen ? "...TJOMMI" : "...KOMPIS"}</div>;
}
