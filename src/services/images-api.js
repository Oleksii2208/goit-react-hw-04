import axios from "axios";

const API_KEY = "D5fl4sDm_5iMf3NxAIbT3gy6Djb934SGAoQ-s5t4h1Q";
axios.defaults.baseURL = "https://api.unsplash.com/";

const fetchImages = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      per_page: 12,
      page: page,
      client_id: API_KEY,
    },
    // signal: signal,
  });

  return response.data;
};

export default fetchImages;
