const express = require("express");
const router = express.Router();
const plantsController = require("../controllers/plants.controller");

// Verbindung zwischen der URL und dem Controller zuständig.
// Sie delegieren die Arbeit an den Controller.

router.get("/", plantsController.getAllPlants);

module.exports = router;
