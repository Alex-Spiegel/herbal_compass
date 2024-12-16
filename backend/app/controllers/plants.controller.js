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

module.exports = { getAllPlants };
