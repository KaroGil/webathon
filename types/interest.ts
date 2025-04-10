import { createClient } from "@/utils/supabase/server";

export type Interest = {
  id: number;
  created_at: Date;
  name: string;
  infinitiv: string;
  slug: string;
};

export async function getInterests(): Promise<Interest[]> {
  const supabase = await createClient();
  const { data: interests, error } = await supabase
    .from("interests")
    .select("*")
    .order("name", { ascending: true });
  if (error) {
    console.error("Error fetching interests:", error.message);
    throw new Error("Error fetching interests");
  }
  if (!interests) {
    console.error("No interests found");
    throw new Error("No interests found");
  }
  return interests;
}

export async function getInterestById(interestId: number) {
  const supabase = await createClient();

  const { data: interest, error } = await supabase
    .from("interests")
    .select("*")
    .eq("id", interestId)
    .single();

  if (!interest || error)
    throw new Error(`Interest with id "${interestId}" not found`);

  return interest;
}

export async function getInterestBySlug(slug: string): Promise<Interest> {
  const supabase = await createClient();

  const { data: interest, error } = await supabase
    .from("interests")
    .select("id, created_at, name, infinitiv, slug")
    .eq("slug", slug)
    .single();

  if (!interest || error)
    throw new Error(`Interest with slug "${slug}" not found`);

  return interest;
}
