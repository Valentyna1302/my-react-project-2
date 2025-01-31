// src/articles-api.js
import axios from "axios";

// axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithTopic = async (topic) => {
  const response = await axios.get(`/search?query=${topic}`);
  return response.data.hits;
};

export const fetchArticles = async (query) => {
  const response = await axios.get(
    `https://hn.algolia.com/api/v1/search?query={query}`
  );
  return response.data;
};
