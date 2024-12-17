const plantsService = require("../services/plants.service");

// Controller steuert die Logik für den Request und ruft den Service auf.
// Er ist für das Error-Handling und die Response verantwortlich.

const getAllPlants = async (req, res) => {
  try {
    const plants = await plantsService.getAllPlants();
    res.status(200).json(plants);
  } catch (error) {
    console.error("Error fetching plants:", error.message);
    res.status(500).json({ error: "Error fetching plants" });
  }
};

const getPlantById = async (req, res) => {
  try {
    const id = req.params.id;
    const plant = await plantsService.getPlantById(id);
    if (!plant) {
      return res.status(404).json({ error: "Plant not found" });
    }
    res.status(200).json(plant);
  } catch (error) {
    console.error("Error fetching plants by ID:", error.message);
    res.status(500).json({ error: "Error fetching plants by ID" });
  }
};

module.exports = { getAllPlants, getPlantById };
