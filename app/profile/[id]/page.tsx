"use client";
import { Post } from "@/components/posts";
import { posts } from "@/components/types/post";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const LanguageMenu = () => {
  const [language, setLanguage] = useState("no");
  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang === "en") {
      setLanguage("en");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    window.dispatchEvent(new Event("storage"));
  }, [language]);

  return (
    <div className="flex items-center gap-2">
      <label className="flex items-center gap-1 text-sm">
        <input
          type="checkbox"
          checked={language == "en"}
          onChange={() => setLanguage(language == "en" ? "no" : "en")}
        />
        Bergenser-modus
      </label>
    </div>
  );
};

export default function ProfilePage() {
  const { data: session } = useSession();

  const user = session?.user;
  const myEvents = posts.filter((event) => event.user.email === user?.email);

  return (
    <div className="p-6 space-y-5">
      <div>
        <h1 className="text-3xl font-bold">{user?.name}</h1>
        <p className="mt-4">Navn: {user?.name}</p>
        <p>E-post: {user?.email}</p>
      </div>
      <LanguageMenu />
      <div>
        <h2 className="text-2xl font-semibold">Mine arrangementer:</h2>
        {myEvents.length > 0 ? (
          <ul className="space-y-2 mt-2 grid grid-cols-1 md:grid-cols-2  gap-4">
            {myEvents.map((event) => (
              <Post
                key={event.date.toISOString()}
                post={event}
                link={`/event/${event.id}`}
              />
            ))}
          </ul>
        ) : (
          <p className="mt-2">Ingen arrangementer funnet.</p>
        )}
      </div>

      {session && (
        <Button
          variant="secondary"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logg ut
        </Button>
      )}
    </div>
  );
}
