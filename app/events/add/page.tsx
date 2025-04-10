import { addEvent } from "@/app/actions/add-event";
import { getInterests } from "@/types/interest";

export default async function AddEvent() {
  const interests = await getInterests();
  return (
    <div className="flex flex-col gap-6 items-center justify-center m-6 font-bold text-lg mt-20">
      <p className="text-center text-lg">Legg til arrangement</p>
      <form className="flex flex-col gap-4 w-full max-w-sm" action={addEvent}>
        <div>
          <label htmlFor="date" className="block font-medium">
            Dato og tid
          </label>
          <input
            type="datetime-local"
            name="date"
            id="date"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="place" className="block font-medium">
            Sted
          </label>
          <input
            type="text"
            name="place"
            id="place"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="mapsLink" className="block font-medium">
            Google Maps-lenke (valgfritt)
          </label>
          <input
            type="url"
            name="mapsLink"
            id="mapsLink"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="interest" className="block font-medium">
            Velg interesse
          </label>
          <select
            name="interest"
            id="interest"
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">-- Velg --</option>
            {interests.map((interest) => (
              <option key={interest.id} value={interest.id}>
                {interest.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block font-medium">
            Beskrivelse
          </label>
          <textarea
            name="description"
            id="description"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-foreground text-background text-center font-bold px-12 py-4 rounded-lg border-2 border-background hover:bg-background hover:text-foreground transition-all duration-300 $"
        >
          Legg til
        </button>
      </form>
    </div>
  );
}
