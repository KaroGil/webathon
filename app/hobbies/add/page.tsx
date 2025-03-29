import LinkButton from "@/components/linkButton";

export default function AddInterest() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center m-6 font-bold text-xl">
      <p className="text-center font-lg">Kommer snart!</p>
      <p className="text-center font-lg flex flex-col gap-2">
        Savner du noe?
        <LinkButton
          url="/hobbies/add"
          text="Legg til en interesse"
          className="text-sm"
        />
      </p>
    </div>
  );
}
