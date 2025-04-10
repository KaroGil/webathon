import { Interest } from "@/types/interest";
import { createClient } from "@/utils/supabase/client";

export async function getInterestBySlugClient(slug: string): Promise<Interest> {
  const supabase = createClient();

  const { data: interest, error } = await supabase
    .from("interests")
    .select("id, created_at, name, infinitiv, slug")
    .eq("slug", slug)
    .single();

  if (!interest || error)
    throw new Error(`Interest with slug "${slug}" not found`);

  return interest;
}

export async function getInterestByIdClient(id: string): Promise<Interest> {
  const supabase = createClient();

  const { data: interest, error } = await supabase
    .from("interests")
    .select("id, created_at, name, infinitiv, slug")
    .eq("id", id)
    .single();

  if (!interest || error) throw new Error(`Interest with id "${id}" not found`);

  return interest;
}
