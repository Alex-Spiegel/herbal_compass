const supabaseDB = require("../config/db");

// Service-Layer ist für die Datenbanklogik verantwortlich.
// Er enthält die direkte Kommunikation mit Supabase.

const getAllPlants = async () => {
  const { data, error } = await supabaseDB.from("plants").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const getPlantById = async (id) => {
  const { data, error } = await supabaseDB
    .from("plants")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

module.exports = { getAllPlants, getPlantById };
