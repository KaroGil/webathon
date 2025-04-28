"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function addInterest(formData: FormData) {
  const supabase = await createClient();

  const name = formData.get("name") as string;
  const infinitiv = formData.get("infinitiv") as string;
  const slug = generateSlug(name);

  const { error } = await supabase
    .from("interests")
    .insert([{ name, infinitiv, slug }]);

  if (error) {
    console.error("Feil ved innsending:", error.message);
    redirect("/error");
  }

  redirect("/interests");
}

function generateSlug(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
