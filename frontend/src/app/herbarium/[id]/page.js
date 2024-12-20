"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { get_plant_by_id } from "../../../utils/api";

function PlantDetailsPage() {
  const { id } = useParams(); // ID aus der URL
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      get_plant_by_id(id).then((data) => {
        setPlant(data);
        setLoading(false);
      });
    }
  }, [id]);

  return loading ? (
    <div className="text-center my-6">
      <p className="text-5xl font-semibold italic">Loading plant details...</p>
    </div>
  ) : !plant ? (
    <p>Plant not found.</p>
  ) : (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-lime-100 border border-green-600 rounded-md">
      <div className="flex gap-6">
        {/* Bildbereich */}
        <div className="w-1/3">
          <img
            src={`/plants/${plant.plant_image_url}`}
            alt={plant.plant_name}
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Details */}
        <div className="w-2/3">
          <h1 className="text-3xl font-bold text-green-900">
            {plant.plant_name}
          </h1>
          <p className="italic text-gray-700">{plant.latin_name}</p>
          <div className="mt-4">
            <p>
              <span className="font-semibold">Active Ingredients:</span>{" "}
              {plant.active_ingredients.join(", ")}
            </p>
            <p>
              <span className="font-semibold">Usage:</span>{" "}
              {plant.usage.join(", ")}
            </p>
          </div>
          <p className="mt-6">{plant.herb_description}</p>
        </div>
      </div>
    </div>
  );
}

export default PlantDetailsPage;
