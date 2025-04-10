import { createClient } from "@/utils/supabase/server";

export type Profile = {
  id: string;
  created_at: Date;
  username: string;
  full_name: string;
  is_from_bergen: boolean;
};

export async function getUserFromId(userId: string): Promise<Profile> {
  const supabase = await createClient();
  const { data: user, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (!user || error) throw new Error(`User with id "${userId}" not found`);

  return user;
}
