import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/videos",
});

// Fetch trending
export const getTrendingVideos = () => API.get("/trending");

// Search
export const searchVideos = (q) => API.get(`/search?q=${q}`);