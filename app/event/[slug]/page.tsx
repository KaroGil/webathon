"use client";
import { formatDateWithDay, formatTime } from "@/components/lib/date-utils";
import { Event, getEventById } from "@/components/types/post";
import { Button } from "@/components/ui/button";
import { Calendar, Calendar1Icon, Clock, User } from "lucide-react";
import { usePathname } from "next/navigation";

export default function EventPage() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const event = getEventById(parseInt(id));

  if (!event) return <p>Event not found</p>;

  return (
    <div className="flex justify-center flex-col w-full items-center md:w-2/3 md:mx-auto p-4 space-y-5">
      <p className="font-bold text-xl">{event.place}</p>
      <div className="bg-primary rounded-xl p-4 space-y-4">
        <EventInfo event={event} />
        <p>{event.description}</p>
      </div>
      <EventButtons event={event} />
    </div>
  );
}

function EventInfo({ event }: { event: Event }) {
  return (
    <div>
      <p className="flex space-x-2">
        <Calendar className="size-4" />
        <p>{formatDateWithDay(event.date)}</p>
      </p>
      <p className="flex space-x-2">
        <Clock className="size-4" />
        <p>{formatTime(event.date)}</p>
      </p>
      <p className="flex space-x-2">
        <User className="size-4" />
        <p>{event.user.name}</p>
      </p>
    </div>
  );
}

function EventButtons({ event }: { event: Event }) {
  return (
    <div className="flex space-x-2">
      <Button>Skal</Button>
      <Button>Interessert</Button>
    </div>
  );
}
