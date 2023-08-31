import {Song} from "@/types";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

const getSongsByUserId = async () : Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });


};

export default getSongsByUserId;