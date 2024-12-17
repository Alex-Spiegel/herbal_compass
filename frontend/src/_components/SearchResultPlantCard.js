import Link from "next/link";

function SearchResultPlantCard({ plantImage, plantName, latinName, id }) {
  return (
    <div className="mx-auto h-[200px] w-[800px] p-4 m-4 flex flex-row bg-lime-100 border border-black rounded-md shadow-md">
      {/* Bildbereich */}
      <div className="w-1/3 h-full bg-white rounded-md overflow-hidden flex items-center justify-center">
        <img
          src={`/plants/${plantImage}`}
          alt={plantName}
          className="h-full object-cover"
        />
      </div>

      {/* card body */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{plantName}</h1>
          {/* mini info */}
          <p className="text-sm text-gray-500 italic">{latinName}</p>
        </div>

        {/* card footer */}
        <div className="mt-4 flex justify-around items-center">
          <button className="px-4 py-2 font-bold text-white bg-green-700 rounded-md hover:bg-green-800 transition duration-200">
            Find products &#10225;
          </button>
          <Link
            href={`/herbarium/${id}`} // Anpassung für Navigation
            className="px-4 py-2 font-bold text-white bg-green-700 rounded-md hover:bg-green-800 transition duration-200"
          >
            Learn more &#187;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchResultPlantCard;
