"use client";
import { formatDateWithDay, formatTime } from "./utils/date-utils";
import { Interest } from "./interests";
import { LikeButton } from "./likebutton";

export type Post = {
  date: Date;
  place: string;
  hobby: Interest;
  description: string;
  user: { name: string; age: number }; // change to user
};

export function Posts({ post }: { post: Post }) {
  return (
    <div className="rounded-xl relative border p-4 bg-primary">
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
