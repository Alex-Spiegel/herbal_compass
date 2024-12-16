"use client";

import { get_all_products } from "@/utils/api";
import { useEffect, useState } from "react";
import ProductCard from "@/_components/ProductCard";
import Dropdown from "@/_components/Dropdown";

function ProductsPage() {
  // mit useState den Startwert setzen
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // State für gefilterte Produkte aus den Dropdowns
  const [loading, setLoading] = useState(true); // Loading-State hinzufügen
  const [selectedType, setSelectedType] = useState(""); // State für den ausgewählten Produkttyp
  const [selectedMarket, setSelectedMarket] = useState(""); // State für den ausgewählten Markt
  const [selectedIngredient, setSelectedIngredient] = useState(""); // State für die ausgewählte Zutat

  // Mapping zwischen Dropdown-Optionen und den tatsächlichen Werten in der Datenbank
  const typeMapping = {
    All: "", // "All" zeigt alle Produkte
    Tablets: "tablets",
    Tea: "tea",
    Bath: "bath",
  };

  const marketMapping = {
    All: "", // "All" zeigt alle Märkte
    REWE: "rewe",
    EDEKA: "edeka",
    ALDI: "aldi",
    DM: "dm",
  };

  const ingredientMapping = {
    All: "", // "All" zeigt alle Produkte
    Chamomile: "chamomile",
    Eucalyptus: "eucalyptus",
    Fennel: "fennel",
    Lavender: "lavender",
    Mint: "mint",
    Pine: "pine",
    Thistle: "thistle",
    Thyme: "thyme",
    Turmeric: "turmeric",
    Valerian: "valerian",
  };

  // mit useEffect das eigentliche Fetching machen und mit Setterfunktion den Wert neu setzen
  useEffect(() => {
    get_all_products().then((recievedData) => {
      // alphabetisch sortieren
      const sortedData = recievedData.sort((a, b) =>
        a.product_name.localeCompare(b.product_name)
      );
      setProducts(sortedData);
      setFilteredProducts(sortedData); // Anfangs alle Produkte anzeigen
      setLoading(false); // Ladezustand beenden
    });
  }, []);

  // Filterfunktion für das Dropdown (Produkte filtern)
  const applyFilters = () => {
    let filtered = products;

    // Produkttyp-Filter
    if (selectedType) {
      const dbType = typeMapping[selectedType];
      if (dbType) {
        filtered = filtered.filter(
          (product) => product.product_type === dbType
        );
      }
    }

    // Markt-Filter
    if (selectedMarket) {
      const dbMarket = marketMapping[selectedMarket];
      if (dbMarket) {
        filtered = filtered.filter((product) =>
          product.shop.includes(dbMarket)
        );
      }
    }

    // Zutat-Filter
    if (selectedIngredient) {
      const dbIngredient = ingredientMapping[selectedIngredient];
      if (dbIngredient) {
        filtered = filtered.filter((product) =>
          product.ingredients.includes(dbIngredient)
        );
      }
    }

    setFilteredProducts(filtered);
  };

  // Handler für die Auswahl der Filter
  const handleFilterSelect = (filterValue, filterCategory) => {
    if (filterCategory === "type") {
      setSelectedType(filterValue);
    } else if (filterCategory === "market") {
      setSelectedMarket(filterValue);
    } else if (filterCategory === "ingredient") {
      setSelectedIngredient(filterValue);
    }
  };

  // Überwachung der Filterzustände, um die Produkte neu zu filtern
  useEffect(() => {
    applyFilters();
  }, [selectedType, selectedMarket, selectedIngredient]);

  return (
    <div className="max-w-5xl mx-auto my-6">
      {/* Headline und Beschreibung immer sichtbar */}
      <h1 className="px-16 text-4xl font-extrabold text-lime-100">PRODUCTS</h1>
      <p className="px-16 text-xl italic text-green-950">
        Discover a wide variety of products carefully crafted to support your
        well-being. From soothing teas and relaxing baths to herbal supplements,
        our selection is designed to help you embrace the power of nature in
        your daily life.
      </p>

      {/* Filter aus Dropdowns */}
      <div className="px-24 py-3 mt-6 flex flex-col border-y border-lime-100">
        <p className="pb-1 text-3xl font-semibold text-lime-100">Filters</p>
        <div className="flex gap-6">
          <Dropdown
            buttonLabel="Product Type"
            filterOptions={["All", "Tablets", "Tea", "Bath"]}
            onFilterSelect={(filterValue) =>
              handleFilterSelect(filterValue, "type")
            }
          />
          <Dropdown
            buttonLabel="Market"
            filterOptions={["All", "REWE", "EDEKA", "ALDI", "DM"]}
            onFilterSelect={(filterValue) =>
              handleFilterSelect(filterValue, "market")
            }
          />
          <Dropdown
            buttonLabel="Ingredient"
            filterOptions={[
              "All",
              "Chamomile",
              "Eucalyptus",
              "Fennel",
              "Lavender",
              "Mint",
              "Pine",
              "Thistle",
              "Thyme",
              "Turmeric",
              "Valerian",
            ]}
            onFilterSelect={(filterValue) =>
              handleFilterSelect(filterValue, "ingredient")
            }
          />
        </div>
      </div>

      {/* Ladeanzeige während Fetching */}
      {loading ? (
        <div className="text-center my-6">
          <p className="text-5xl font-semibold italic">Loading products...</p>
        </div>
      ) : (
        // Produktkarten werden erst nach dem Laden angezeigt
        <div className="my-6 grid grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                productImage={item.image_url}
                productName={item.product_name}
                miniInfo={item.mini_info}
                productDescription={item.product_description}
                price={item.price}
              />
            ))
          ) : (
            <p className="text-center text-xl font-semibold">
              No products found
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
