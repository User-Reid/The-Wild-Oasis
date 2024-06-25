import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://truqmhfhxnsdeyyikqpm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydXFtaGZoeG5zZGV5eWlrcXBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxNjYzMTIsImV4cCI6MjAzNDc0MjMxMn0.0MmMDSpNpBtFCAgMH3EDSAcjKdJeF71w9u3_w4RyR1k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
