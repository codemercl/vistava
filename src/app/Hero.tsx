'use client'

import React from "react";
import CountdownTimer from "./CountdownTimer";

const HERO_DATE = "2024-06-26";
const HERO_TIME = "18:30";
const HERO_TARGET = `${HERO_DATE}T${HERO_TIME}:00`;

const Hero: React.FC = () => (
  <section
    className="w-full flex flex-col items-center justify-center text-center py-16 md:py-28 relative min-h-[420px] overflow-hidden"
    aria-label="Герой-секция: спектакль і покупка квитка"
    id="hero"
  >
    {/* Фоновое видео */}
    <video
      className="absolute inset-0 w-full h-full min-h-[420px] object-cover z-0 pointer-events-none"
      src="/video/videoplayback.webm"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      controls={false}
      aria-hidden="true"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
    <div className="relative z-20 flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-lg text-white">
        Роздягайся поговоримо
      </h1>
      <p className="text-lg md:text-2xl font-medium mb-8 text-gray-200 max-w-2xl mx-auto">
        Комедія, яка змінить ваше уявлення про відвертість
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
        <div className="flex flex-col items-center md:items-end">
          <span className="text-2xl md:text-3xl font-extrabold text-white mb-1">26 червня, четвер</span>
          <span className="text-lg md:text-xl text-gray-200">Дата вистави</span>
        </div>
        <span className="hidden md:inline-block w-px h-12 bg-gray-300 mx-8" aria-hidden="true"></span>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl md:text-3xl font-extrabold text-white mb-1">18:30</span>
          <span className="text-lg md:text-xl text-gray-200">Час початку</span>
        </div>
      </div>
      <CountdownTimer targetDateTime={HERO_TARGET} />
      <a
        href="https://secure.wayforpay.com/payment/s20aef53e791e"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-400 text-gray-900 font-extrabold px-10 py-4 rounded shadow hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors duration-200 text-xl md:text-2xl mt-10"
        tabIndex={0}
        aria-label="Придбати квиток"
      >
        Придбати квиток
      </a>
    </div>
  </section>
);

export default Hero; 