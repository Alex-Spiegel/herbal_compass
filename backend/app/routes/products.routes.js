const express = require("express");
const router = express.Router();
const productController = require("../controllers/products.controller");

// Verbindung zwischen der URL und dem Controller zuständig.
// Sie delegieren die Arbeit an den Controller.

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

module.exports = router;
