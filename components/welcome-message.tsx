import { createClient } from "@/utils/supabase/server";
import LinkButton from "./link-button";

export async function WelcomeMessage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) return <p>Velkommen, {user.user_metadata.full_name}!</p>;

  return (
    <div className="flex flex-col gap-10 items-center">
      <h1>Ingen å dra på ... med?</h1>

      <LinkButton text="BLI KOMPIS" url="/signup" />
    </div>
  );
}
