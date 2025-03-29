"use client";
import { Calendar, Clock, User } from "lucide-react";
import { formatDateWithDay, formatTime } from "./lib/date-utils";
import { Event } from "./types/post";

export function Post({ post }: { post: Event }) {
  return (
    <div className="rounded-xl relative border p-4 bg-primary h-full">
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
      <p className="line-clamp-3">{post.description}</p>
    </div>
  );
}
