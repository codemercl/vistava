import React from "react";

const videos = [
  {
    url: "https://www.youtube.com/embed/0pfg3EbN6Bc",
    title: "Відео з вистави 1",
  },
  {
    url: "https://www.youtube.com/embed/jNrAVfKold8",
    title: "Відео з вистави 2",
  },
];

const VideoGallery: React.FC = () => (
  <section className="w-full bg-white py-12" aria-label="Відео з вистави" id="video">
    <h2 className="text-2xl md:text-4xl font-bold mb-8 text-black">Відео з вистави</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videos.map((video, idx) => (
        <div key={idx} className="w-full aspect-video bg-black rounded overflow-hidden shadow-md">
          <iframe
            src={video.url}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full min-h-[240px] text-lg md:text-xl"
            aria-label={video.title}
          />
        </div>
      ))}
    </div>
  </section>
);

export default VideoGallery; 