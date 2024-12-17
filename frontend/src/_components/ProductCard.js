import Link from "next/link";

function ProductCard({
  productImage,
  productName,
  miniInfo,
  productDescription,
  id,
  price,
}) {
  return (
    <div className="h-[500px] p-4 bg-lime-100 border border-black rounded-md shadow-md flex flex-col">
      {/* Bildbereich */}
      <div className="h-1/2 bg-white rounded-t-md overflow-hidden flex items-center justify-center">
        <img
          src={`/products/${productImage}`}
          alt={productName}
          className="h-full object-cover"
        />
      </div>
      {/* card body */}
      <div className="h-2/5 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">{productName}</h1>
          {/* mini info */}
          <p className="text-sm text-gray-500 italic">{miniInfo}</p>
          <p className="text-gray-700 mt-2">
            {productDescription.slice(0, 60)}...
          </p>
        </div>
        {/* card footer */}
        <div className="mt-4 flex justify-between items-center ">
          <Link
            href={`/products/${id}`}
            className="px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-200"
          >
            Show more...
          </Link>
          {/* price */}
          <p className="text-lg font-semibold text-gray-800">{price} €</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
