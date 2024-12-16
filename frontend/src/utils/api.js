const API_URL = "http://localhost:5000";

const get_all_products = async () => {
  const result = await fetch(`${API_URL}/api/products`);
  return result.json();
};

export { get_all_products };
