import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchVideos } from "../api/videoApi";
import VideoGrid from "../components/VideoGrid";

export default function Search() {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchVideos(query).then((res) => setVideos(res.data.items));
  }, [query]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="px-6 py-4 border-b bg-white shadow-sm sticky top-0 z-40">
        <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">
          🔎 Search Results
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Showing results for <span className="font-medium text-gray-700">"{query}"</span>
        </p>
      </div>

      {/* Video Grid */}
      <VideoGrid videos={videos} />
    </div>
  );
}
