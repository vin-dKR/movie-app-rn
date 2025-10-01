import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_KEY } from '@env';

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY)
