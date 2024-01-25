import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://gwchravzjvjdczpsohjw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3Y2hyYXZ6anZqZGN6cHNvaGp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4Mjc5NjQsImV4cCI6MjAyMTQwMzk2NH0.Nlsk-w2WA4ajZ_ooVjd-kWlOm7ARGBkj0QKZb8mr9OE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
