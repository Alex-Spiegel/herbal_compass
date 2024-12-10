const productService = require("../services/products.service");

// Controller steuert die Logik für den Request und ruft den Service auf.
// Er ist für das Error-Handling und die Response verantwortlich.

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ error: "Error fetching products" });
  }
};

module.exports = { getAllProducts };
