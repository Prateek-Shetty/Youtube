import { useEffect, useState } from "react";
import { getTrendingVideos } from "../api/videoApi";
import VideoGrid from "../components/VideoGrid";

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getTrendingVideos().then((res) => setVideos(res.data.items));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Section Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">
          🔥 Trending Now
        </h2>
        <span className="text-sm text-gray-500">Updated Daily</span>
      </div>

      {/* Video Grid */}
      <VideoGrid videos={videos} />
    </div>
  );
}
