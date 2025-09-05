import axios from "axios";

const youtubeAPI = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export default youtubeAPI;