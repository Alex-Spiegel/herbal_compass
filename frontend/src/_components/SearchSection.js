"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchSection() {
  const [symptom, setSymptom] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (symptom.trim()) {
      router.push(`/search?symptom=${encodeURIComponent(symptom.trim())}`);
    }
  };

  return (
    // DIV WITH BG-IMAGE
    <div
      className="h-[80vh] flex flex-col justify-end bg-cover bg-center"
      style={{
        backgroundImage: "url('pexels-yankrukov16-9.jpg')",
      }}
    >
      {/* TEXTS */}
      <div className="lg:w-[80vw] px-7 lg:px-14 pb-4 flex flex-col">
        <h1 className="mb-4 text-5xl lg:text-6xl font-bold">
          <span className="block">Find your</span>
          <span className="block">natural remedy</span>
        </h1>
        <div className="mb-5 lg:mb-14 lg:text-2xl leading-none">
          <p>Discover natural remedies for your ailments,</p>
          <p>herbal products, and more.</p>
        </div>

        {/* SEARCH FIELD & SEARCH-BUTTON*/}
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
          <input
            className=" w-full lg:w-[650px] h-12 lg:h-14 p-3 text-lg border border-gray-700 rounded-full"
            type="text"
            placeholder="Enter your symptom"
            value={symptom}
            onChange={(event) => setSymptom(event.target.value)}
          />
          <button
            className="w-full lg:w-28 h-12 lg:h-14 px-6 py-3 text-lg text-white bg-green-700 border border-gray-700 rounded-full font-semibold hover:bg-green-800"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
