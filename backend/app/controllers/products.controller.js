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

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error.message);
    res.status(500).json({ error: "Error fetching product by ID" });
  }
};

module.exports = { getAllProducts, getProductById };
