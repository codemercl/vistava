'use client'

import Link from 'next/link';
import { useRef, useEffect } from 'react';

const SuccessPage = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-4 py-10">
      <div
        ref={cardRef}
        className="flex flex-col items-center bg-white/90 rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full border border-yellow-100 animate-fade-in"
      >
        <span
          className="mb-6 text-yellow-400 drop-shadow-lg animate-bounce"
          aria-label="Успішна покупка"
          role="img"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 md:h-24 md:w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="11" className="stroke-yellow-300" strokeWidth="2" fill="#FEF3C7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 13l3 3 7-7" className="stroke-yellow-500" strokeWidth="2.5" />
          </svg>
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-gray-900 tracking-tight font-sans">Покупку здійснено успішно!</h1>
        <p className="text-center text-lg md:text-xl text-gray-700 mb-8 font-medium">Чекаємо на вас на виставці.<br/>Дякуємо за довіру!</p>
        <Link
          href="/"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold text-lg md:text-xl py-3 px-8 rounded-xl shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 transition-colors duration-200"
          tabIndex={0}
          aria-label="Повернутися на головну"
        >
          Повернутися на головну
        </Link>
      </div>
    </main>
  );
};

export default SuccessPage; 