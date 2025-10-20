import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export async function getProducts() {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data.products || [];
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
}