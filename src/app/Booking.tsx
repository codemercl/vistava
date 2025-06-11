import React, { useEffect, useState } from "react";

type Show = {
  id: number;
  location: string;
  date: string;
  weekday: string;
  time: string;
  buyLink: string;
};

const API_URL = "https://vistava-backend.vercel.app/api/shows";

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

const Booking = () => {
  const [shows, setShows] = useState<Show[]>([]);
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
        setShows(
          data.filter(isShow).map((item) => ({
            id: item.id,
            location: item.location,
            date: item.date,
            weekday: item.weekday,
            time: item.time,
            buyLink: (item as Record<string, unknown>).buy_link as string || item.buyLink || "",
          }))
        );
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Сталася помилка";
        setError(errorMsg);
      } finally {
        setLoading(false);
      }
    };
    fetchShows();
  }, []);

  return (
    <section
      className="w-full flex flex-col gap-2 md:gap-4"
      id="booking"
    >
      {loading ? (
        <div className="text-gray-500 text-center">Завантаження...</div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : shows.length === 0 ? (
        <div className="text-gray-500 text-center">Подій немає</div>
      ) : (
        shows.map((show, idx) => {
          const isLast = idx === shows.length - 1;
          return (
            <div
              key={show.id}
              className={`w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-3 py-6 md:py-8 ${!isLast ? 'border-b border-gray-200' : ''}`}
              tabIndex={0}
              aria-label={`Спектакль: ${show.location}, ${show.date} ${show.weekday}, ${show.time}`}
            >
              {/* Локация */}
              <div className="flex-1 min-w-[180px] mb-2 md:mb-0">
                <div className="text-base md:text-lg text-gray-400 font-semibold mb-1">Театр</div>
                <div className="text-lg md:text-xl font-bold text-gray-900">{show.location}</div>
              </div>
              {/* Дата */}
              <div className="flex-1 min-w-[120px] mb-2 md:mb-0">
                <div className="text-base md:text-lg text-gray-400 font-semibold mb-1">Дата вистави</div>
                <div className="text-xl md:text-2xl font-bold text-gray-900">{new Date(show.date).toLocaleDateString('uk-UA', { day: '2-digit', month: 'long' })}, {show.weekday}</div>
              </div>
              {/* Время */}
              <div className="flex-1 min-w-[80px] mb-2 md:mb-0 flex flex-col items-start">
                <div className="text-base md:text-lg text-gray-400 font-semibold mb-1">Час початку</div>
                <div className="text-xl md:text-2xl font-bold text-gray-900">{show.time}</div>
              </div>
              {/* Кнопка */}
              <div className="flex-shrink-0 w-full md:w-auto">
                <a
                  href={show.buyLink}
                  className="block w-full md:w-auto bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded shadow hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors duration-200 text-lg md:text-xl text-center"
                  tabIndex={0}
                  aria-label="Придбати квиток"
                >
                  Придбати квиток
                </a>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

export default Booking; 