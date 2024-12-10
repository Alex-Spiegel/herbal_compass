const { createClient } = require("@supabase/supabase-js");

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseDB = createClient(supabaseUrl, supabaseKey);

// geht auch, obwohl keine function. supabaseDB ist ein statisches Client-Object
module.exports = supabaseDB;
