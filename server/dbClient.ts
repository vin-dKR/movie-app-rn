import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fhwsarjutgjlyzhqdwdj.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
console.log("supabaseKey is this:", supabaseKey)

const supabase = createClient(supabaseUrl, supabaseKey!)

const fetchMovies = async () => {
    const { data, error } = await supabase
        .from('movies')
        .select('*')
        .order("popularity", { ascending: false })
        .limit(20)

    if (error) {
        console.error('Error fetching movies:', error);
        return [];
    }

    console.log("tis is data")
    return data
}


fetchMovies().then((movies) => {
    console.log(movies);
});

