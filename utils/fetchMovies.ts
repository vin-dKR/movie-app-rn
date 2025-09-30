import { supabaseClient } from "./db/supabaseClient"

export const fetchMoviesDefault = async () => {
    const { data, error } = await supabaseClient
        .from("movies")
        .select("*")
        .limit(50)

    return {
        data,
        error
    }
}

export const fetchMovies = async ({ query }: { query?: string }) => {
    if (query) {
        const { data, error } = await supabaseClient
            .from("movies")
            .select("*")
            .ilike("title", `%{query}%`)

        return {
            data,
            error
        }
    }

    return fetchMoviesDefault()
}
