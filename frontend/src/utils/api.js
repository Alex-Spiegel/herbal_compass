const API_URL = "http://localhost:5000";

const get_all_products = async () => {
  const result = await fetch(`${API_URL}/api/products`);
  return result.json();
};

const get_product_by_id = async (id) => {
  const result = await fetch(`${API_URL}/api/products/${id}`);
  return result.json();
};

const get_all_plants = async () => {
  const result = await fetch(`${API_URL}/api/plants`);
  return result.json();
};

const get_plant_by_id = async (id) => {
  const result = await fetch(`${API_URL}/api/plants/${id}`);
  return result.json();
};

export { get_all_products, get_product_by_id, get_all_plants, get_plant_by_id };
