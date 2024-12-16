"use client";

import { get_all_plants } from "@/utils/api";
import { useEffect, useState } from "react";
import Dropdown from "@/_components/Dropdown";
import PlantCard from "@/_components/PlantCard";
import { MenuItems } from "@headlessui/react";

function HerbariumPage() {
  // mit useState den Startwert setzen
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]); // State für gefilterte Pflanzen aus den Dropdowns
  const [loading, setLoading] = useState(true); // Loading-State hinzufügen

  const [selectedOrigin, setSelectedOrigin] = useState(""); // State für die ausgewähle Herkunft
  const [selectedUsage, setSelectedUsage] = useState(""); // State für den ausgewählten Usage-Filter
  const [selectedGrowthType, setSelectedGrowthType] = useState(""); // State für den ausgewählten Growth Type-Filter
  const [selectedActiveIngredient, setSelectedActiveIngredient] = useState(""); // State für aktiven Inhaltsstoff

  // Mapping zwischen Dropdown-Optionen und den tatsächlichen Werten in der Datenbank
  const regionMapping = {
    All: "", // "All" zeigt alle Produkte
    Europe: "europe",
    Asia: "asia",
    Mediterranean: "mediterranean",
    Australia: "australia",
    "Northern Hemisphere": "northern hemisphere",
    "South Asia": "south asia",
  };

  const usageMapping = {
    All: "", // "All" zeigt alle usages
    "Digestive aid": "digestive aid",
    Relaxation: "relaxation",
    "Anti-inflammatory": "anti-inflammatory",
    "Sleep aid": "sleep aid",
    Antiseptic: "antiseptic",
    "Respiratory support": "respiratory support",
    Antimicrobial: "antimicrobial",
    Antioxidant: "antioxidant",
  };

  const growthTypeMapping = {
    All: "", // "All" zeigt alle Growth Types
    "Annual herb": "annual herb",
    "Biennial herb": "biennial herb",
    "Perennial herb": "perennial herb",
    Shrub: "shrub",
    Tree: "tree",
  };

  const ingredientMapping = {
    All: "", // "All" zeigt alle Wirkstoffe an
    Flavonoids: "flavonoids",
    "Essential oils": "essential oils",
    Anethole: "anethole",
    Eucalyptol: "eucalyptol",
    Tannins: "tannins",
    Menthol: "menthol",
  };

  // mit useEffect das eigentliche Fetching machen und mit Setterfunktion den Wert neu setzen
  useEffect(() => {
    get_all_plants().then((recievedData) => {
      // alphabetisch sortieren
      const sortedData = recievedData.sort((a, b) =>
        a.plant_name.localeCompare(b.plant_name)
      );
      setPlants(sortedData);
      setFilteredPlants(sortedData); // Anfangs alle Pflanzen anzeigen
      setLoading(false); // Ladezustand beenden
    });
  }, []);

  // Filterfunktion für das Dropdown (Pflanzen filtern)
  const applyFilters = () => {
    let filtered = plants;

    // Herkunfts-Filter
    if (selectedOrigin) {
      const dbOrigin = regionMapping[selectedOrigin];
      if (dbOrigin) {
        filtered = filtered.filter((plant) => plant.origin.includes(dbOrigin));
      }
    }

    // Usage-Filter
    if (selectedUsage) {
      const dbUsage = usageMapping[selectedUsage];
      if (dbUsage) {
        filtered = filtered.filter((plant) => plant.usage.includes(dbUsage));
      }
    }

    // Growth Type-Filter
    if (selectedGrowthType) {
      const dbGrowthType = growthTypeMapping[selectedGrowthType];
      if (dbGrowthType) {
        filtered = filtered.filter(
          (plant) => plant.growth_type === dbGrowthType
        );
      }
    }

    // Inhaltsstoff-Filter
    if (selectedActiveIngredient) {
      const dbIngredient = ingredientMapping[selectedActiveIngredient];
      if (dbIngredient) {
        filtered = filtered.filter((plant) =>
          plant.active_ingredients.includes(dbIngredient)
        );
      }
    }

    setFilteredPlants(filtered);
  };

  // Handler für die Auswahl der Filter
  const handleFilterSelect = (filterValue, filterCategory) => {
    if (filterCategory === "origin") {
      setSelectedOrigin(filterValue);
    } else if (filterCategory === "usage") {
      setSelectedUsage(filterValue);
    } else if (filterCategory === "growthType") {
      setSelectedGrowthType(filterValue);
    } else if (filterCategory === "activeIngredient") {
      setSelectedActiveIngredient(filterValue);
    }
  };

  // Überwachung der Filterzustände, um die Produkte neu zu filtern
  useEffect(() => {
    applyFilters();
  }, [
    selectedOrigin,
    selectedUsage,
    selectedGrowthType,
    selectedActiveIngredient,
  ]);

  return (
    <div className="max-w-5xl mx-auto my-6">
      {/* Headline und Beschreibung immer sichtbar */}
      <h1 className="px-16 text-4xl font-extrabold text-lime-100">HERBARIUM</h1>
      <p className="px-16 text-xl italic text-green-950">
        Explore an extensive collection of herbs and plants, each celebrated for
        its unique qualities and natural benefits. From calming remedies to
        invigorating solutions, our herbarium is designed to connect you with
        the timeless wisdom of nature and inspire a holistic approach to
        well-being.
      </p>

      {/* Filter aus Dropdowns */}
      <div className="px-24 py-3 mt-6 flex flex-col border-y border-lime-100">
        <p className="pb-1 text-3xl font-semibold text-lime-100">Filters</p>
        <div className="flex gap-6">
          <Dropdown
            buttonLabel="Origin"
            filterOptions={[
              "- All -",
              "Europe",
              "Asia",
              "Mediterranean",
              "Australia",
              "Northern Hemisphere",
              "South Asia",
            ]}
            onFilterSelect={(filterValue) =>
              handleFilterSelect(filterValue, "origin")
            }
          />
          <Dropdown
            buttonLabel="Usage"
            filterOptions={[
              "- All -",
              "Digestive aid",
              "Relaxation",
              "Anti-inflammatory",
              "Sleep aid",
              "Antiseptic",
              "Respiratory support",
              "Antimicrobial",
              "Antioxidant",
            ]}
            onFilterSelect={(filterValue) =>
              handleFilterSelect(filterValue, "usage")
            }
          />
          <Dropdown
            buttonLabel="Growth Type"
            filterOptions={[
              "- All -",
              "Annual herb",
              "Biennial herb",
              "Perennial herb",
              "Shrub",
              "Tree",
            ]}
            onFilterSelect={(filterValue) =>
              handleFilterSelect(filterValue, "growthType")
            }
          />
          <Dropdown
            buttonLabel="Active Ingredient"
            filterOptions={[
              "- All -",
              "Flavonoids",
              "Essential oils",
              "Anethole",
              "Eucalyptol",
              "Tannins",
              "Menthol",
            ]}
            onFilterSelect={(filterValue) =>
              handleFilterSelect(filterValue, "activeIngredient")
            }
          />
        </div>
      </div>

      {/* Ladeanzeige während Fetching */}
      {loading ? (
        <div className="text-center my-6">
          <p className="text-5xl font-semibold italic">Loading herbs...</p>
        </div>
      ) : (
        // Produktkarten werden erst nach dem Laden angezeigt
        <div className="my-6 grid grid-cols-1 gap-6">
          {filteredPlants.length > 0 ? (
            filteredPlants.map((item) => {
              return (
                <PlantCard
                  key={item.id}
                  plantImage={item.plant_image_url}
                  plantName={item.plant_name}
                  latinName={item.latin_name}
                  activeIngredient={item.active_ingredients}
                  usage={item.usage}
                  herbDescription={item.herb_description}
                />
              );
            })
          ) : (
            <p className="text-center text-xl font-semibold">No herbs found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default HerbariumPage;
