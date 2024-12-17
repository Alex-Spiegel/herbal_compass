"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { get_all_plants } from "@/utils/api";
import SearchResultPlantCard from "@/_components/SearchResultPlantCard";

function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialSymptom = searchParams.get("symptom") || ""; // Extract symptom from URL
  const [symptom, setSymptom] = useState(initialSymptom);
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]); // die Matches, sozusagen
  const [loading, setLoading] = useState(true);

  // Fetch all plants wenn die Komponente gemounted wird
  useEffect(() => {
    get_all_plants()
      .then((data) => {
        setPlants(data);
        setLoading(false);

        // Filtere plants nach initial Symptom das wir aus den Params haben
        if (initialSymptom) {
          filterPlants(data, initialSymptom);
        }
      })
      .catch((err) => console.error("Error fetching plants:", err));
  }, []);

  // Funktion zum Filtern der Pflanzen basierend auf dem eingegebenen Symptom
  const filterPlants = (allPlants, searchSymptom) => {
    const matches = allPlants.filter((plant) =>
      plant.usage.some((use) =>
        use.toLowerCase().includes(searchSymptom.toLowerCase())
      )
    );
    setFilteredPlants(matches);
  };

  // Handle Klich auf search button
  const handleSearch = () => {
    if (symptom.trim()) {
      router.push(`/search?symptom=${encodeURIComponent(symptom.trim())}`);
      filterPlants(plants, symptom);
    }
  };

  return (
    <>
      {/* Search Bar */}
      <div className="my-6 flex justify-center gap-4">
        <input
          className="w-[650px] h-14 p-3 text-lg border border-gray-700 rounded-full"
          type="text"
          placeholder="Enter your symptom"
          value={symptom}
          onChange={(event) => setSymptom(event.target.value)}
        />
        <button
          className="h-14 w-28 px-6 py-3 text-lg text-white bg-green-700 border border-gray-700 rounded-full font-semibold hover:bg-green-800"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Ladeanzeige während Fetching */}
      {loading ? (
        <div className="text-center my-6">
          <p className="text-5xl font-semibold italic">
            Loading search results...
          </p>
        </div>
      ) : (
        // ResultCards werden erst nach dem Laden angezeigt
        <div className="my-6 grid grid-cols-1 gap-6">
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant) => (
              <SearchResultPlantCard
                key={plant.id}
                plantImage={plant.plant_image_url}
                plantName={plant.plant_name}
                latinName={plant.latin_name}
                id={plant.id}
              />
            ))
          ) : (
            // No results
            <p className="text-center text-xl text-gray-700">
              No plants found for "{symptom}".
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default SearchPage;
