import React from "react";

const galleryItems = [
  {
    src: "/images/1.jpg",
    alt: "Фото 1 з вистави",
  },
  {
    src: "/images/2.jpg",
    alt: "Фото 2 з вистави",
  },
  {
    src: "/images/3.jpg",
    alt: "Фото 3 з вистави",
  },
  {
    src: "/images/4.jpg",
    alt: "Фото 4 з вистави",
  },
  {
    src: "/images/5.jpg",
    alt: "Фото 5 з вистави",
  },
  {
    src: "/images/6.jpg",
    alt: "Фото 6 з вистави",
  }
];

const Gallery: React.FC = () => (
  <section className="w-full bg-white py-12" aria-label="Фото з вистави" id="gallery">
    <h2 className="text-2xl md:text-4xl font-bold mb-8 text-black">Фото з вистави</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {galleryItems.map((item, idx) => (
        <div key={idx} className="relative group rounded overflow-hidden shadow-md">
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-80 object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-black/0 p-4">
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery; 