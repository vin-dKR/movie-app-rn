import { Database, Tables } from "@/database.types"
import { supabaseClient } from "./db/supabaseClient"
import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'


interface FetchMovies {
    data: Tables<"movies">[] | null
    error: Error | null
}

export const fetchMoviesDefault = async (): Promise<FetchMovies> => {
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
