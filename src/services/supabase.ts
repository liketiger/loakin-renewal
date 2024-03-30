import { createClient } from '@supabase/supabase-js';

const {VITE_API_SUPABASE_URL, VITE_API_SUPABASE_KEY} = import.meta.env

const supabaseUrl = VITE_API_SUPABASE_URL;
const supabaseKey = VITE_API_SUPABASE_KEY;
const supabase = createClient(supabaseUrl!, supabaseKey!);

export default supabase;
