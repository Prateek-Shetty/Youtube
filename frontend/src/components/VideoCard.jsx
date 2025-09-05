export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle } = video.snippet;
  const videoId = video.id.videoId || video.id; // for search vs trending

  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
    >
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="w-full h-48 object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Video Info */}
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 line-clamp-2 hover:text-red-600 transition-colors text-sm">
          {title}
        </h3>
        <p className="text-gray-500 text-xs mt-1">{channelTitle}</p>
      </div>
    </a>
  );
}
