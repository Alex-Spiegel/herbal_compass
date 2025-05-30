"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/context/GlobalState";

export default function AddProductPage() {
  const { isAdmin } = useGlobalState();
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
    if (!isAdmin) {
      router.push("/"); // Weiterleitung, wenn keine Admin-Berechtigung
    }
  }, [isAdmin, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      product_name: productName,
      brand,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      price: parseFloat(price),
      shop: shop.split(",").map((item) => item.trim()),
      product_description: productDescription,
      mini_info: miniInfo,
      image_url: imageUrl,
      product_type: productType,
    };

    setLoading(true);
    setMessage("");

    try {
      const { data, error } = await supabase
        .from("products")
        .insert([productData]);

      if (error) throw error;

      setMessage("Produkt wurde erfolgreich hinzugefügt!");
      setProductName("");
      setBrand("");
      setIngredients("");
      setPrice("");
      setShop("");
      setProductDescription("");
      setMiniInfo("");
      setImageUrl("");
      setProductType("");
    } catch (error) {
      setMessage("Fehler beim Hinzufügen des Produkts.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!isAdmin) {
    return (
      <p className="text-5xl font-semibold italic">Checking authorization...</p>
    );
  }

  return (
    <div className="w-1/2 px-12 py-6 bg-lime-100 rounded-xl shadow-lg mx-auto">
      <h2 className="text-xl text-blue-500 font-semibold mb-4">
        Add a new Product
      </h2>

      {/* Formular für das Produkt */}
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
