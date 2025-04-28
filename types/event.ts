import { createClient } from "@/utils/supabase/server";

export type Event = {
  id: number;
  date: Date;
  place: string;
  mapsLink?: string;
  interest: number;
  description: string;
  user: string;
};

export async function getEventById(id: number): Promise<Event> {
  const supabase = await createClient();
  const { data: event, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(`Error fetching event: ${error.message}`);

  return event;
}

export async function getEventsToInterest(
  interestId: number
): Promise<Event[]> {
  const supabase = await createClient();
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .eq("interest", interestId);

  if (error) throw new Error(`Error fetching events: ${error.message}`);

  return events;
}

export async function getEventsToUser(userId: string): Promise<Event[]> {
  const supabase = await createClient();
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .eq("user", userId);

  if (error) throw new Error(`Error fetching events: ${error.message}`);

  return events;
}
