import youtubeAPI from "../utils/youtubeAPI.js";

export const getTrendingVideos = async (req, res) => {
  try {
    const response = await youtubeAPI.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN", // Change region if needed
        maxResults: 20,
        key: process.env.YT_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trending videos", error });
  }
};

export const searchVideos = async (req, res) => {
  try {
    const { q } = req.query;
    const response = await youtubeAPI.get("/search", {
      params: {
        part: "snippet",
        q,
        maxResults: 20,
        type: "video",
        key: process.env.YT_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error searching videos", error });
  }
};