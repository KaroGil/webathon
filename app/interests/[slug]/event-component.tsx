import { getUserFromId } from "@/types/profile";
import { formatDateWithDay, formatTime } from "@/components/lib/date-utils";
import { Calendar, Clock, User, Trophy } from "lucide-react";
import { type Event } from "@/types/event";
import { getInterestById } from "@/types/interest";
import Link from "next/link";

export async function EventComponent({ event }: { event: Event }) {
  const user = await getUserFromId(event.user);
  const interest = await getInterestById(event.interest);
  return (
    <div className="rounded-xl relative border p-4 bg-primary h-full space-y-2 hover:shadow-lg transition-shadow duration-300">
      <Link href={`/events/${event.id}`} className="block no-underline">
        <p className="font-bold text-lg mb-2">{event.place}</p>
        <div className="flex space-x-2 w-full">
          <Calendar className="size-4" />
          <p>{formatDateWithDay(event.date)}</p>
        </div>
        <div className="flex space-x-2">
          <Clock className="size-4" />
          <p>{formatTime(event.date)}</p>
        </div>
        <div className="flex space-x-2">
          <User className="size-4" />
          <p>{user.full_name}</p>
        </div>
        <div className="flex space-x-2 mb-2">
          <Trophy className="size-4" />
          <p>{interest.name}</p>
        </div>
        <p className="line-clamp-3">{event.description}</p>
      </Link>
      {event.mapsLink && (
        <Link
          href={event.mapsLink}
          target="_blank"
          className="mt-2 space-y-2 absolute top-4 right-4"
        >
          {event.mapsLink ? "Vis kart" : "Ingen kart tilgjengelig"}
        </Link>
      )}
    </div>
  );
}
