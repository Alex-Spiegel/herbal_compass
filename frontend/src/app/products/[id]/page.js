"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { get_product_by_id } from "../../../utils/api"; // API-Funktion zum Abrufen des Produkts
import { useGlobalState } from "@/context/GlobalState";
import { createClient } from "@/utils/supabase/client";

function ProductDetailsPage() {
  const supabase = createClient();
  const { id } = useParams(); // ID aus der URL extrahieren
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isAdmin } = useGlobalState();
  const router = useRouter();

  useEffect(() => {
    if (id) {
      get_product_by_id(id).then((data) => {
        setProduct(data);
        setLoading(false);
      });
    }
  }, [id]);

  const handleDeleteProduct = async () => {
    try {
      const { error } = await supabase
        .from("products") // Name der Tabelle in Supabase
        .delete()
        .eq("id", id); // Produkt basierend auf der ID löschen

      if (error) {
        console.error("Failed to delete product:", error.message);
        alert("Failed to delete the product.");
      } else {
        alert("Product deleted successfully.");
        router.push("/products"); // Nach dem Löschen zur Produktliste weiterleiten
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("An error occurred while deleting the product.");
    }
  };

  return loading ? (
    <div className="text-center my-6">
      <p className="text-5xl font-semibold italic">
        Loading product details...
      </p>
    </div>
  ) : !product ? (
    <p>Product not found.</p>
  ) : (
    <div className="max-w-4xl h-[400px] p-6 mx-auto my-8 flex gap-6 bg-lime-100 border border-green-600 rounded-md">
      {/* Bildbereich */}
      <div className="w-1/3 flex justify-center">
        <img
          src={`/products/${product.image_url}`}
          alt={product.product_name}
          className="h-full w-full object-contain rounded-md"
        />
      </div>

      {/* Produktdetails */}
      <div className="w-2/3 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-green-900">
          {product.product_name}
        </h1>
        <p className="italic text-gray-700">{product.mini_info}</p>
        <div className="mt-4">
          <p className="text-lg">{product.product_description}</p>
          <p className="mt-4">
            <span className="font-semibold">Price:</span> {product.price} €
          </p>
        </div>

        {/* Admin Buttons */}
        {isAdmin && (
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleDeleteProduct}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Delete Product
            </button>
            <Link
              href={`/admin/update-product/${id}`}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Update Product
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
