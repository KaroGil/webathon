"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function addComment(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const content = formData.get("content") as string;
  const event_id = Number(formData.get("event_id"));

  if (!user) {
    console.error("User not authenticated");
    redirect("/error");
  }

  if (!content || !event_id) {
    console.error("Missing content or event_id");
    redirect("/error");
  }

  const { error } = await supabase.from("comments").insert([
    {
      content,
      event_id,
      user_id: user.id,
    },
  ]);

  if (error) {
    console.error("Feil ved innsending av kommentar:", error.message);
    redirect("/error");
  }

  redirect(`/events/${event_id}`);
}
