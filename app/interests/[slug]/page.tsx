import Link from "next/link";
import { getInterestBySlug, Interest } from "@/types/interest";
import { type Event, getEventsToInterest } from "@/types/event";

import { Button } from "@/components/ui/button";
import { EventComponent } from "./event-component";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function InterestPage({ params }: PageProps) {
  const { slug } = await params;
  const interest: Interest = await getInterestBySlug(slug);
  const events: Event[] = await getEventsToInterest(interest.id);

  return (
    <div className="px-4 pt-12 space-y-8 flex flex-col">
      <Link href={`/events/add`}>
        <Button>Nytt Arrangement</Button>
      </Link>
      <div className="space-y-4">
        {events.map((event) => (
          <EventComponent key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
