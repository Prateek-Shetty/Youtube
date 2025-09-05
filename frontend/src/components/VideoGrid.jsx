import VideoCard from "./VideoCard.jsx";

export default function VideoGrid({ videos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {videos.map((v) => (
        <VideoCard key={v.id.videoId || v.id} video={v} />
      ))}
    </div>
  );
}