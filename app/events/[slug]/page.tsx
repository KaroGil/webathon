import { addComment } from "@/app/actions/comment";
import {
  formatDateTime,
  formatDateWithDay,
  formatTime,
} from "@/components/lib/date-utils";
import { getEventById } from "@/types/event";
import { type Event } from "@/types/event";
import { type Comment } from "@/types/comment";
import { getUserFromId } from "@/types/profile";
import { createClient } from "@/utils/supabase/server";
import { Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { handleAttendance } from "@/app/actions/event-attendance";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params;
  const event = await getEventById(parseInt(slug));
  return (
    <div className="flex justify-center flex-col w-full items-center md:w-2/3 md:mx-auto p-4 space-y-5">
      <p className="font-bold text-xl">{event.place}</p>
      <div className="bg-primary rounded-xl p-4 space-y-4 w-full">
        <EventInfo event={event} />
        <p>{event.description}</p>
      </div>
      <EventButtons event={event} />
      <div className="w-full">
        <CommentSection eventId={event.id} />
        <CommentForm eventId={event.id} />
      </div>
    </div>
  );
}

async function EventInfo({ event }: { event: Event }) {
  const user = await getUserFromId(event.user);
  return (
    <div>
      <div className="flex space-x-2 w-full">
        <Calendar className="size-4" />
        <p>{formatDateWithDay(event.date)}</p>
      </div>
      <div className="flex space-x-2">
        <Clock className="size-4" />
        <p>{formatTime(event.date)}</p>
      </div>
      <div className="flex space-x-2">
        <User className="size-4" />
        <p>{user.full_name}</p>
      </div>
    </div>
  );
}

async function EventButtons({ event }: { event: Event }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: existing } = await supabase
    .from("event_attendance")
    .select("status")
    .eq("event_id", event.id)
    .eq("user_id", user?.id)
    .single();

  const selectedStatus = existing?.status;

  return (
    <form action={handleAttendance} className="flex gap-2 mt-4">
      <input type="hidden" name="event_id" value={event.id} />
      <Button
        name="status"
        value="skal"
        variant={selectedStatus === "skal" ? "secondary" : "default"}
      >
        Skal
      </Button>
      <Button
        name="status"
        value="interessert"
        variant={selectedStatus === "interessert" ? "secondary" : "default"}
      >
        Interessert
      </Button>
    </form>
  );
}

async function CommentSection({ eventId }: { eventId: number }) {
  const supabase = await createClient();
  const { data: comments, error } = await supabase
    .from("comments")
    .select("*")
    .eq("event_id", eventId)
    .order("created_at", { ascending: false });

  if (error) {
    return <p>Kunne ikke laste kommentarer.</p>;
  }

  return (
    <div className="space-y-4 mt-6">
      <h3 className="text-lg font-semibold">Kommentarer</h3>
      {comments?.length === 0 ? (
        <p>Ingen kommentarer ennå.</p>
      ) : (
        comments?.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))
      )}
    </div>
  );
}

async function CommentComponent({ comment }: { comment: Comment }) {
  const user = await getUserFromId(comment.user_id);
  return (
    <div className="bg-primary p-2 rounded-md shadow-md text-sm">
      <div className="flex">
        <div className="w-8 h-8 inline-block mr-2 bg-background rounded-full relative">
          <User className="absolute mx-auto size-3 w-full h-full my-auto p-1" />
        </div>
        <div>
          <p className="font-semibold">{user.full_name}</p>
          <p className="text-xs text-gray-500 mb-2">
            {formatDateTime(comment.created_at)}
          </p>
        </div>
      </div>

      <p>{comment.content}</p>
    </div>
  );
}

function CommentForm({ eventId }: { eventId: number }) {
  return (
    <form action={addComment} className="flex mt-2 space-x-2">
      <input type="hidden" name="event_id" value={eventId} />

      <input
        name="content"
        placeholder="Skriv en kommentar..."
        required
        className="border p-2 rounded w-full"
        type="text"
      />

      <Button type="submit" variant="default">
        Legg til
      </Button>
    </form>
  );
}
