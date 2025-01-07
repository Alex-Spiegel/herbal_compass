import { useEffect, useState } from "react";
import Link from "next/link";
import { get_all_products } from "../utils/api"; // Funktion für das Fetching

function SlidingProductCard({ plantName }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all products und filter nach plantName in ingredients
    get_all_products()
      .then((products) => {
        const matches = products.filter(
          (product) => product.ingredients.includes(plantName.toLowerCase()) // Filter nach kleingeschriebenem plantName
        );
        setFilteredProducts(matches);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [plantName]);

  return (
    <div className="mx-auto w-[750px] p-6 bg-gray-100 border border-gray-400 rounded-md shadow-md transition-all duration-500">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Products for {plantName}
        </h2>
      </div>

      {loading ? (
        <p className=" text-gray-600 italic">Loading products...</p>
      ) : filteredProducts.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-4">
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <div className="w-[180px] h-[350px] flex flex-col justify-between gap-1 bg-gray-300 p-4 rounded-md shadow">
                <img
                  src={`/products/${product.image_url}`}
                  alt={product.product_name}
                  className="h-[150px] object-contain"
                />
                <h3 className="mt-2 text-sm font-bold text-gray-700">
                  {product.product_name}
                </h3>
                <p className="text-xs text-gray-600">{product.mini_info}</p>
                <p className="text-xs italic text-gray-500">
                  Type: {product.product_type}
                </p>
                <Link
                  href={`/products/${product.id}`}
                  className="mt-2 block px-3 py-1 text-center font-bold text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-200"
                >
                  Show more &#187;
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600 italic">
          No products found for "{plantName}".
        </p>
      )}
    </div>
  );
}

export default SlidingProductCard;
