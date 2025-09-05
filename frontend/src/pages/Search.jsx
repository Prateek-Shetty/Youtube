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
    <div>
      <h2 className="text-xl font-bold m-4">Search Results for "{query}"</h2>
      <VideoGrid videos={videos} />
    </div>
  );
}