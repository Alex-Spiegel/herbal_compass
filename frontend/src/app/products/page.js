"use client";
import ProductCard from "@/_components/ProductCard";
import { get_all_products } from "@/utils/api";
import { useEffect, useState } from "react";

function ProductsPage() {
  // mit useState den Startwert setzen
  const [products, setProducts] = useState([]);

  //mit useEffect das eigentliche Fetching machen und mit Setterfunktion den Wert neu setzen
  useEffect(() => {
    get_all_products().then((recievedData) => {
      setProducts(recievedData);
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">All PRODUCTS</h1>
      <p className="text-xl">Here you can see a wide variety of products.</p>
      <div className="flex flex-col gap 4">
        {products.length !== 0 ? (
          products.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              brand={item.brand}
              productName={item.productName}
              prod_description={item.prod_description}
              productImage={item.image_url}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
