function ProductCard({
  productName,
  brand,
  id,
  productImage,
  prod_description,
}) {
  return (
    <div className="w-96 p-4 ml-10 mb-5 border-2 border-gray-600 rounded-md">
      <h1 className="text-2xl font-bold">Produktname:{productName}</h1>
      <p>Brand:{brand}</p>
      <p>ID:{id}</p>
      <p>Produktbeschreibung:{prod_description}</p>
      <img src={productImage} alt={id} className="h-[200px]" />
    </div>
  );
}

export default ProductCard;
