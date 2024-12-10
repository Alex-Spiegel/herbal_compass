const API_URL = "http://localhost:5000";

const get_all_products = async () => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};

export { get_all_products };
