"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function handleFromBergen(formData: FormData) {
  const supabase = await createClient();

  const user_id = formData.get("user_id") as string;
  const is_from_bergen = formData.get("is_from_bergen") === "on"; // checkbox

  const { error } = await supabase
    .from("profiles")
    .update({ is_from_bergen })
    .eq("id", user_id);

  if (error) {
    console.error("Feil ved oppdatering:", error.message);
    redirect("/error");
  }

  // 💡 Refresh profilside
  revalidatePath("/profile");
  redirect("/profile");
}
