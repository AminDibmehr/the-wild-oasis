import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oujslptvqnvqbxbmyjde.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91anNscHR2cW52cWJ4Ym15amRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1ODg2NDEsImV4cCI6MjAwNzE2NDY0MX0.5ubJJjIs-WAIdTV6syjZbwsp-Rt9odAwn030rkcXgbs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
