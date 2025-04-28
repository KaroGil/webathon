"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function logout() {
  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
      redirect("/error");
      return;
    }
    // Ingen direkte omdirigering her, vi lar klienten håndtere det
  } catch (err) {
    console.error("Unexpected error during logout:", err);
    redirect("/error");
  }
}
