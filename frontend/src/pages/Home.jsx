import { useEffect, useState } from "react";
import { getTrendingVideos } from "../api/videoApi";
import VideoGrid from "../components/VideoGrid";

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getTrendingVideos().then((res) => setVideos(res.data.items));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold m-4">Trending</h2>
      <VideoGrid videos={videos} />
    </div>
  );
}