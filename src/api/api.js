const axios = require("axios");
axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = "23855124-9744a76c55c8d410f772c2e55";
const pageQuantity = 12;

async function fetchImages(searchQuery, currentPage) {
  try {
    const response = await axios.get(
      `/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageQuantity}`
    );
    return response.data;
  } catch (error) {
    console.log(`No results found for ${searchQuery}`);
  }
}

const api = { fetchImages };

export default api;
