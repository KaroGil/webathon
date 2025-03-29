import { createClient } from "../lib/supabase";

export default async function Instruments() {
    const supabase = await createClient();
    const { data: instruments } = await supabase.from("location").select();

    return <pre>{JSON.stringify(instruments, null, 2)}</pre>
}