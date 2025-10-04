import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY

// console.log("the keys are,", SUPABASE_KEY, SUPABASE_URL)

export const supabaseClient = createClient(SUPABASE_URL!, SUPABASE_KEY!)
