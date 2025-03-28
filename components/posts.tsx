"use client";
import { formatDateWithDay, formatTime } from "./utils/date-utils";
import { Hobby } from "./hobbies";
import { LikeButton } from "./likebutton";

export type Post = {
  date: Date;
  place: string;
  hobby: Hobby;
  description: string;
  user: { name: string; age: number }; // change to user
};

export function Posts({ post }: { post: Post }) {
  return (
    <div className="rounded-xl relative border border-gray-300 p-4 m-4 bg-gray-100">
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
