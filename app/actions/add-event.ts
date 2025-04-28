"use server";
import { getInterestById } from "@/types/interest";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function addEvent(formData: FormData) {
  const supabase = await createClient();
  const data = await supabase.auth.getUser();

  const date = formData.get("date") as string;
  const place = formData.get("place") as string;
  const mapsLink = formData.get("mapsLink") as string;
  const interest = formData.get("interest") as string;
  const description = formData.get("description") as string;
  const user = data.data.user?.id;

  if (!user) {
    console.error("User not authenticated");
    redirect("/error");
  }

  const interestFull = await getInterestById(interest as unknown as number);

  const { error } = await supabase
    .from("events")
    .insert([{ date, place, mapsLink, interest, description, user }]);

  if (error) {
    console.error("Feil ved innsending:", error.message);
    redirect("/error");
  }

  redirect(`/interests/${interestFull.slug}`); // Redirect to the interest page
}
