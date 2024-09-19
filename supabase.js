import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();
const supabaseUrl = "https://eoxllivvvonazpnpwugr.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
console.log(process.env.SUPABASE_KEY);
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
