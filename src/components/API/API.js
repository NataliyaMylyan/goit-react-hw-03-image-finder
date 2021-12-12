const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "23855124-9744a76c55c8d410f772c2e55";
const PER_PAGE = 12;

function fetchImages(searchQuery, page) {
  return fetch(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No results found for ${searchQuery}`));
  });
}

const api = { fetchImages };

export default api;
