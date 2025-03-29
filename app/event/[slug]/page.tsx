"use client";
import { formatDateWithDay, formatTime } from "@/components/lib/date-utils";
import { Event, getEventById } from "@/components/types/post";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function EventPage() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const event = getEventById(parseInt(id));

  if (!event) return <p>Event not found</p>;

  return (
    <div className="flex justify-center flex-col w-full items-center md:w-2/3 md:mx-auto p-4 space-y-5">
      <p className="font-bold text-xl">{event.place}</p>
      <div className="bg-primary rounded-xl p-4 space-y-4 w-full">
        <EventInfo event={event} />
        <p>{event.description}</p>
      </div>
      <EventButtons />
      <CommentSection />
    </div>
  );
}

function EventInfo({ event }: { event: Event }) {
  return (
    <div>
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
        <p>{event.user.name}</p>
      </div>
    </div>
  );
}

function EventButtons() {
  const [isGoing, setIsGoing] = useState(false);
  const [isInterested, setIsInterested] = useState(false);

  const handleGoing = () => {
    setIsGoing(!isGoing);
    if (!isGoing) setIsInterested(false);
  };

  const handleInterested = () => {
    setIsInterested(!isInterested);
    if (!isInterested) setIsGoing(false);
  };

  return (
    <div className="flex space-x-2">
      <Button onClick={handleGoing} variant={isGoing ? `secondary` : `default`}>
        Skal
      </Button>
      <Button
        onClick={handleInterested}
        variant={isInterested ? `secondary` : `default`}
      >
        Interessert
      </Button>
    </div>
  );
}

function CommentSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    setComments((prev) => [...prev, newComment.trim()]);
    setNewComment("");
  };

  return (
    <div className="w-full mt-4">
      <h3 className="font-semibold mb-2">Kommentarer</h3>
      <div className="space-y-2">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="bg-primary p-2 rounded-md shadow-md text-sm"
          >
            {comment}
          </div>
        ))}
      </div>
      <div className="flex mt-2 space-x-2">
        <input
          className="border p-2 rounded w-full"
          type="text"
          value={newComment}
          placeholder="Skriv en kommentar..."
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button onClick={handleAddComment} variant="default">
          Legg til
        </Button>
      </div>
    </div>
  );
}
