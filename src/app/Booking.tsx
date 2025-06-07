import React from "react";

type Show = {
  id: number;
  location: string;
  date: string; // формат: YYYY-MM-DD
  weekday: string;
  time: string; // формат: HH:mm
  buyLink: string;
};

const shows: Show[] = [
  {
    id: 1,
    location: 'Культурний кластер "Краків", Русанівська набережна, 12/2',
    date: '2024-06-26',
    weekday: 'четвер',
    time: '18:30',
    buyLink: 'https://secure.wayforpay.com/payment/s20aef53e791e',
  },
  {
    id: 2,
    location: 'Центральний будинок Офіцерів, вул. Грушевського, 30/1',
    date: '2024-07-17',
    weekday: 'неділя',
    time: '18:30',
    buyLink: 'https://secure.wayforpay.com/payment/s87166ae1bdd6',
  },
  {
    id: 3,
    location: 'Центральний будинок Офіцерів, вул. Грушевського, 30/1',
    date: '2024-08-07',
    weekday: 'четвер',
    time: '19:00',
    buyLink: 'https://secure.wayforpay.com/payment/s8aa87c0f4aa1',
  },
];

const Booking: React.FC = () => (
  <section
    className="w-full flex flex-col gap-2 md:gap-4"
    aria-label="Бронирование билетов"
    id="booking"
  >
    {shows.map((show, idx) => {
      const isLast = idx === shows.length - 1;
      return (
        <div
          key={show.id}
          className={`w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 py-6 md:py-8 ${!isLast ? 'border-b border-gray-200' : ''}`}
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
    })}
  </section>
);

export default Booking; 