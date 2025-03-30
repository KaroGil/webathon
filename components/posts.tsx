"use client";
import { Calendar, Clock, Trophy, User } from "lucide-react";
import { formatDateWithDay, formatTime } from "./lib/date-utils";
import { Event } from "./types/post";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Post({ post, link }: { post: Event; link: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMap = (event: React.MouseEvent) => {
    // Stopper klikking på kortet når man trykker på knappen
    event.stopPropagation();
    setIsExpanded((prev) => !prev);
  };
  return (
    <div className="rounded-xl relative border p-4 bg-primary h-full space-y-2 hover:shadow-lg transition-shadow duration-300">
      <Link href={link} className="block no-underline">
        <p className="font-bold text-lg mb-2">{post.place}</p>
        <div className="flex space-x-2 w-full">
          <Calendar className="size-4" />
          <p>{formatDateWithDay(post.date)}</p>
        </div>
        <div className="flex space-x-2">
          <Clock className="size-4" />
          <p>{formatTime(post.date)}</p>
        </div>
        <div className="flex space-x-2">
          <User className="size-4" />
          <p>{post.user.name}</p>
        </div>
        <div className="flex space-x-2 mb-2">
          <Trophy className="size-4" />
          <p>{post.hobby.name}</p>
        </div>
        <p className="line-clamp-3">{post.description}</p>
      </Link>
      {post.mapsLink && (
        <Button
          variant="primary"
          onClick={toggleMap}
          className="mt-2 space-y-2 absolute top-4 right-4"
        >
          {isExpanded ? "Lukk kart" : "Vis kart"}
        </Button>
      )}
      {isExpanded && (
        <div className="mt-2">
          <iframe
            src={post.mapsLink}
            width="100%"
            height="300"
            loading="lazy"
            className="rounded-md border"
            allowFullScreen
            title={`Kart over ${post.place}`}
          ></iframe>
        </div>
      )}
    </div>
  );
}
