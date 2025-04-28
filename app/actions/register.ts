"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function register(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullName = formData.get("fullName") as string;
  const username = formData.get("username") as string;
  const notCreep = formData.get("notCreep");

  if (!email || !password || !fullName || !username)
    return { error: "Alle felt må fylles ut." };

  if (password.length < 6) return { error: "Passord må være minst 6 tegn." };

  if (!notCreep) return { error: "Bekreft at du ikke er en creep." };

  const { data: existingUser, error: fetchError } = await supabase
    .from("profiles")
    .select("id")
    .eq("username", username)
    .maybeSingle();

  if (fetchError) {
    console.error("Feil ved sjekk av brukernavn:", fetchError.message);
    return { error: "Noe gikk galt. Prøv igjen senere." };
  }

  if (existingUser) return { error: "Brukernavn er allerede i bruk." };

  const { error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        username,
      },
    },
  });

  if (signUpError) {
    console.error("Feil ved registrering:", signUpError.message);
    return { error: signUpError.message };
  }

  revalidatePath("/", "layout");
  return { success: true };
}
