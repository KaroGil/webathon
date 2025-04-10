// actions/handleAttendance.ts
"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function handleAttendance(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const event_id = Number(formData.get("event_id"));
  const status = formData.get("status") as "skal" | "interessert";

  if (!user) redirect("/auth/login");

  const { data: existing } = await supabase
    .from("event_attendance")
    .select("id")
    .eq("event_id", event_id)
    .eq("user_id", user.id)
    .single();

  let error;

  if (existing) {
    ({ error } = await supabase
      .from("event_attendance")
      .update({ status })
      .eq("id", existing.id));
  } else {
    ({ error } = await supabase.from("event_attendance").insert([
      {
        user_id: user.id,
        event_id,
        status,
      },
    ]));
  }

  if (error) {
    console.error("Feil ved lagring:", error.message);
    redirect("/error");
  }

  redirect(`/events/${event_id}`);
}
