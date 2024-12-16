const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const productRoutes = require("./app/routes/products.routes");
const plantRoutes = require("./app/routes/plants.routes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/plants", plantRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
