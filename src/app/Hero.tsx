'use client'

import React, { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";

type Show = {
  id: number;
  location: string;
  date: string;
  weekday: string;
  time: string;
  buyLink: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://rozdyahaysyapohovorymo.com.ua/api/shows";

const isShow = (item: unknown): item is Show => {
  if (typeof item !== 'object' || item === null) return false;
  const obj = item as Record<string, unknown>;
  return (
    typeof obj.id === 'number' &&
    typeof obj.location === 'string' &&
    typeof obj.date === 'string' &&
    typeof obj.weekday === 'string' &&
    typeof obj.time === 'string'
  );
};

const Hero: React.FC = () => {
  const [nearestShow, setNearestShow] = useState<Show | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Не вдалося отримати події");
        const data: unknown[] = await response.json();
        const shows = data.filter(isShow).map((item) => ({
          id: item.id,
          location: item.location,
          date: item.date,
          weekday: item.weekday,
          time: item.time,
          buyLink: (item as Record<string, unknown>).buy_link as string || item.buyLink || "",
        }));
        // Найти ближайшее show к сегодняшнему дню
        const now = new Date();
        const futureShows = shows.filter((show) => {
          const showDate = new Date(`${show.date}T${show.time}`);
          return showDate >= now;
        });
        futureShows.sort((a, b) => {
          const aDate = new Date(`${a.date}T${a.time}`);
          const bDate = new Date(`${b.date}T${b.time}`);
          return aDate.getTime() - bDate.getTime();
        });
        setNearestShow(futureShows[0] || null);
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Сталася помилка";
        setError(errorMsg);
      } finally {
        setLoading(false);
      }
    };
    fetchShows();
  }, []);

  if (loading) {
    return (
      <section className="w-full flex flex-col items-center justify-center text-center py-16 md:py-28 min-h-[420px]">
        <div className="text-gray-500 text-center">Завантаження...</div>
      </section>
    );
  }

  if (error || !nearestShow) {
    return (
      <section className="w-full flex flex-col items-center justify-center text-center py-16 md:py-28 min-h-[420px]">
        <div className="text-red-500 text-center">{error || "Немає майбутніх подій"}</div>
      </section>
    );
  }

  const time = nearestShow.time.length === 5 ? `${nearestShow.time}:00` : nearestShow.time;
  const HERO_TARGET = `${nearestShow.date}T${time}.000+03:00`;

  return (
    <section
      className="w-full flex flex-col items-center justify-center text-center py-16 md:py-28 relative min-h-[420px] overflow-hidden bg-black"
      aria-label="Герой-секция: спектакль і покупка квитка"
      id="hero"
    >
      {/* Фоновое видео */}
      <video
        className="absolute inset-0 w-full h-full min-h-[420px] object-cover md:object-contain md:object-center z-0 pointer-events-none"
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
            <span className="text-2xl md:text-3xl font-extrabold text-white mb-1">
              {new Date(nearestShow.date).toLocaleDateString('uk-UA', { day: '2-digit', month: 'long' })}, {nearestShow.weekday}
            </span>
            <span className="text-lg md:text-xl text-gray-200">Дата вистави</span>
          </div>
          <span className="hidden md:inline-block w-px h-12 bg-gray-300 mx-8" aria-hidden="true"></span>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl md:text-3xl font-extrabold text-white mb-1">{nearestShow.time}</span>
            <span className="text-lg md:text-xl text-gray-200">Час початку</span>
          </div>
        </div>
        <CountdownTimer targetDateTime={HERO_TARGET} />
        <a
          href={nearestShow.buyLink}
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
};

export default Hero; 