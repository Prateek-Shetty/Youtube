export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle } = video.snippet;
  const videoId = video.id.videoId || video.id; // for search vs trending

  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg shadow hover:shadow-lg transition p-2"
    >
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-full rounded-lg"
      />
      <h3 className="font-semibold mt-2 text-sm">{title}</h3>
      <p className="text-gray-500 text-xs">{channelTitle}</p>
    </a>
  );
}