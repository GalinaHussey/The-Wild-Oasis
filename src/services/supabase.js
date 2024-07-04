import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cgkqozovbbnfjexmxrkt.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNna3Fvem92YmJuZmpleG14cmt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxNDI2OTYsImV4cCI6MjAzNDcxODY5Nn0.yeoVGcYOP0g-V2sPqflpUcmNBGSbh_QbMFtw7RL53d8";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
