"use client";
import { formatDateWithDay, formatTime } from "./lib/date-utils";
import { LikeButton } from "./likebutton";
import { Event } from "./types/post";

export function Post({ post }: { post: Event }) {
  return (
    <div className="rounded-xl relative border p-4 bg-primary h-full">
      <p className="font-bold">📍{post.place}</p>
      <p>📅{formatDateWithDay(post.date)}</p>
      <p>🕗{formatTime(post.date)}</p>
      <p>👤{post.user.name}</p>
      <p className="line-clamp-3">{post.description}</p>
      <div className="absolute top-2 right-2">
        <LikeButton />
      </div>
    </div>
  );
}
