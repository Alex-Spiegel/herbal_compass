const supabaseDB = require("../config/db");

// Service-Layer ist für die Datenbanklogik verantwortlich.
// Er enthält die direkte Kommunikation mit Supabase.

const getAllProducts = async () => {
  const { data, error } = await supabaseDB.from("products").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const getProductById = async (id) => {
  const { data, error } = await supabaseDB
    .from("products")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

module.exports = { getAllProducts, getProductById };
