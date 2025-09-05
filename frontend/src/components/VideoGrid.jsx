import VideoCard from "./VideoCard.jsx";

export default function VideoGrid({ videos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gray-50">
      {videos.map((v) => (
        <VideoCard key={v.id.videoId || v.id} video={v} />
      ))}
    </div>
  );
}
