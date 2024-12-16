"use client";

import SearchFieldBtn from "@/_components/SearchFieldBtn";

function SearchSection() {
  function handleInputChange(event) {
    console.log("Input value:", event.target.value); // Hier kannst du den Input-Wert weiter verarbeiten
  }

  function handleButtonClick() {
    console.log("Search button clicked!");
    // Hier kannst du die Suchfunktion aufrufen
  }

  return (
    // DIV WITH BG-IMAGE
    <div
      className="h-[83vh] flex flex-col justify-end bg-cover bg-center"
      style={{
        backgroundImage: "url('pexels-yankrukov16-9.jpg')",
      }}
    >
      {/* TEXT, BUTTONS & SEARCH FIELD */}
      <div className="w-[80vw] px-14 pb-4 flex flex-col gap-2">
        <h1 className="text-5xl font-bold leading-tight">
          <span className="block">Find your</span>
          <span className="block">natural path</span>
        </h1>
        <div className="text-lg leading-tight">
          <p>Discover natural remedies for your ailments,</p>
          <p>herbal products, and more.</p>
        </div>
        <div className="pt-4 flex gap-2">
          <button className="w-56 px-6 py-1 bg-green-500 border border-gray-700 rounded-full font-semibold hover:bg-green-600">
            Search for Symptoms
          </button>
          <button className="w-56 px-6 py-1 bg-green-500 border border-gray-700 rounded-full font-semibold hover:bg-green-600">
            Search for Herbs
          </button>
          <button className="w-56 px-6 py-1 bg-green-500 border border-gray-700 rounded-full font-semibold hover:bg-green-600">
            Search for Products
          </button>
        </div>

        {/* SEARCH FIELD & SEARCH-BTN*/}
        <div>
          <SearchFieldBtn
            placeholderText="Enter symptom (e.g. stomachache)"
            buttonText="Search"
            onInputChange={handleInputChange}
            onButtonClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
