"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { get_product_by_id } from "@/utils/api"; // API-Funktion für GET
import { createClient } from "@/utils/supabase/client"; // Supabase-Client
import { useGlobalState } from "@/context/GlobalState";

export default function UpdateProductPage() {
  const supabase = createClient();
  const { id } = useParams(); // ID aus der URL
  const { isAdmin } = useGlobalState();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // States für Produktdetails und Formulareingaben
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [shop, setShop] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [miniInfo, setMiniInfo] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [productType, setProductType] = useState("");

  useEffect(() => {
    if (id) {
      get_product_by_id(id).then((data) => {
        if (data) {
          setProductName(data.product_name || "");
          setBrand(data.brand || "");
          setIngredients(data.ingredients || "");
          setPrice(data.price || "");
          setShop(data.shop || "");
          setProductDescription(data.product_description || "");
          setMiniInfo(data.mini_info || "");
          setImageUrl(data.image_url || "");
          setProductType(data.product_type || "");
        } else {
          setMessage("Product not found.");
        }
      });
    }
  }, [id]);

  if (!isAdmin) {
    router.push("/"); // Falls kein Admin, zurück zur Startseite
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedProduct = {
      product_name: productName,
      brand,
      ingredients: Array.isArray(ingredients)
        ? ingredients
        : ingredients.split(",").map((i) => i.trim()),
      price: parseFloat(price),
      shop: Array.isArray(shop) ? shop : shop.split(",").map((s) => s.trim()),
      product_description: productDescription,
      mini_info: miniInfo,
      image_url: imageUrl,
      product_type: productType,
    };

    try {
      const { error } = await supabase
        .from("products")
        .update(updatedProduct)
        .eq("id", id);

      if (error) {
        console.error("Error updating product:", error.message);
        setMessage("An error occurred while updating the product.");
      } else {
        setMessage("Product successfully updated.");
        setTimeout(() => {
          router.push(`/products/${id}`); // Weiterleitung zur Produktdetailseite
        }, 2000);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setMessage("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-1/2 px-12 py-6 bg-lime-100 rounded-xl shadow-lg mx-auto">
      <h2 className="text-xl text-right text-green-700 font-semibold mb-4">
        Update the Product
      </h2>

      {/* Formular für das Product */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName" className="font-medium text-gray-700">
            Product name
          </label>
          <input
            id="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="brand" className="font-medium text-gray-700">
            Brand
          </label>
          <input
            id="brand"
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="ingredients" className="font-medium text-gray-700">
            Ingredients (separated by commas)
          </label>
          <input
            id="ingredients"
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="price" className="font-medium text-gray-700">
            Price
          </label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="shop" className="font-medium text-gray-700">
            Shops (separated by commas)
          </label>
          <input
            id="shop"
            type="text"
            value={shop}
            onChange={(e) => setShop(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label
            htmlFor="productDescription"
            className="font-medium text-gray-700"
          >
            Product description
          </label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="miniInfo" className="font-medium text-gray-700">
            Mini Info
          </label>
          <textarea
            id="miniInfo"
            value={miniInfo}
            onChange={(e) => setMiniInfo(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="font-medium text-gray-700">
            Image URL
          </label>
          <input
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="productType" className="font-medium text-gray-700">
            Product Type
          </label>
          <input
            id="productType"
            type="text"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full px-6 py-2 font-bold text-white bg-green-500 border border-gray-800 rounded-full hover:bg-green-500"
            disabled={loading}
          >
            {loading ? "Loading..." : "Adding product"}
          </button>
        </div>
      </form>
      {/* Erfolg oder Fehlermeldung */}
      {message && (
        <div className="mt-4 text-center text-green-600">{message}</div>
      )}
    </div>
  );
}
