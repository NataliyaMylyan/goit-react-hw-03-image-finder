// import axios from "axios";
const axios = require("axios");

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "23855124-9744a76c55c8d410f772c2e55";
const PER_PAGE = 12;

async function fetchImages(searchQuery, page) {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    );
    return response.data;
  } catch (error) {
    console.log(`No results found for ${searchQuery}`);
  }
}

const api = { fetchImages };

export default api;
