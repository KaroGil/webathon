import { Button } from "@/components/ui/button";
import { getEventsToUser } from "@/types/event";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { EventComponent } from "../interests/[slug]/page";
import { logout } from "../actions/signout";
import { getUserFromId } from "@/types/profile";
import { handleFromBergen } from "../actions/from-bergen";

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const profile = await getUserFromId(user?.id);

  const events = await getEventsToUser(user?.id);

  return (
    <div className="p-6 space-y-5">
      <div>
        <h1 className="text-3xl font-bold">Min profil</h1>
        <p className="mt-4">Navn: {user.user_metadata.full_name}</p>
        <p>E-post: {user.email}</p>
      </div>
      <form action={handleFromBergen} className="mt-4">
        <input type="hidden" name="user_id" value={user.id} />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="is_from_bergen"
            defaultChecked={profile?.is_from_bergen}
            className="w-4 h-4"
          />
          Bergenser modus?
        </label>
        <Button type="submit" className="mt-4" variant="secondary">
          Oppdater profil
        </Button>
      </form>
      <div>
        <h2 className="text-2xl font-semibold">Mine arrangementer:</h2>
        {events.length > 0 ? (
          <ul className="space-y-2 mt-2 grid grid-cols-1 md:grid-cols-2  gap-4">
            {events.map((event) => (
              <EventComponent event={event} key={event.id} />
            ))}
          </ul>
        ) : (
          <p className="mt-2">Ingen arrangementer funnet.</p>
        )}
      </div>
      <Button variant="secondary" onClick={logout}>
        Logg ut
      </Button>
    </div>
  );
}
