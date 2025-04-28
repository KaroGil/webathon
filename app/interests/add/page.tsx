import { addInterest } from "@/app/actions/add-interest";

export default function AddInterest() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center m-6 font-bold text-lg mt-20">
      <p className="text-center text-lg">Legg til interesse</p>
      <form
        className="flex flex-col gap-4 w-full max-w-sm"
        action={addInterest}
      >
        <input
          type="text"
          name="interest"
          placeholder="Navn på interesse"
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="infinitiv"
          placeholder="Interesse i infinitiv"
          className="border p-2 rounded w-full"
          required
        />
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
