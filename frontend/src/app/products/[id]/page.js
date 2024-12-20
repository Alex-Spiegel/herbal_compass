"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { get_product_by_id } from "../../../utils/api"; // API-Funktion zum Abrufen des Produkts

function ProductDetailsPage() {
  const { id } = useParams(); // ID aus der URL extrahieren
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      get_product_by_id(id).then((data) => {
        setProduct(data);
        setLoading(false);
      });
    }
  }, [id]);

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
          <p className="text-lg ">{product.product_description}</p>
          <p className="mt-4">
            <span className="font-semibold">Price:</span> {product.price} €
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
