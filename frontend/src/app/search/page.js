"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/_components/ProductCard";
import SearchFieldBtn from "@/_components/SearchFieldBtn";

function SearchPage() {
  const [query, setQuery] = useState(""); // query = aktueller Wert der Suchanfrage
  const [results, setResults] = useState([]); // results = speichert die Ergebnisse der Suche, die vom Server kommen
  const [loading, setLoading] = useState(false); // loading = Indikator, ob Suche noch läuft
  const searchParams = useSearchParams();

  useEffect(() => {
    const type = searchParams.get("type");
    setLoading(true);

    const fetchData = async () => {
      let API_URL;

      if (type === "herbs") {
        API_URL = "http://localhost:5000/api/herbs";
      } else {
        API_URL = "http://localhost:5000/api/products";
      }

      const response = await fetch(API_URL);
      const data = await response.json();
      setResults(data);
      setLoading(false);
    };

    fetchData();
  }, [searchParams]);

  return (
    <div>
      {/* <h1 className="text-3xl font-bold">
        {searchParams.get("type") === "herbs" ? "All HERBS" : "All PRODUCTS"}
      </h1> */}
      <div className="w-[80vw] px-14 mx-auto my-3 flex justify-evenly gap-3">
        <button className="w-40 h-20 px-4 text-center bg-green-300 border-2 border-green-800 rounded-md">
          Symptoms
        </button>
        <button className="w-40 h-20 px-4 text-center bg-green-300 border-2 border-green-800 rounded-md">
          Herbs
        </button>
        <button className="w-40 h-20 px-4 text-center bg-green-300 border-2 border-green-800 rounded-md">
          Products
        </button>
      </div>

      {/* Suchfeld */}
      <form className="w-[80vw] px-14 mx-auto my-3">
        <SearchFieldBtn
          placeholderText="Enter search term"
          buttonText="Search"
          onInputChange={(event) => setQuery(event.target.value)}
          onButtonClick={() => {
            const fetchData = async () => {
              setLoading(true);
              const API_URL =
                searchParams.get("type") === "herbs"
                  ? "http://localhost:5000/api/herbs"
                  : "http://localhost:5000/api/products";

              const response = await fetch(`${API_URL}?query=${query}`);
              const data = await response.json();
              setResults(data);
              setLoading(false);
            };
            fetchData();
          }}
        />
      </form>

      {/* SEARCH RESULTS */}
      <div className="w-[80vw] px-14 mx-auto my-3">
        <h2 className="text-3xl font-bold">Search Results</h2>
        <p className="text-xs">63 Results</p>
      </div>

      {/* Ladeanzeige */}
      {loading && <p>Loading...</p>}

      {/* Ergebnisse anzeigen */}
      <div className="flex flex-col gap-4">
        {results.length !== 0 ? (
          results.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              brand={item.brand}
              productName={item.productName || item.name}
              prod_description={item.prod_description}
              productImage={item.image_url}
            />
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
