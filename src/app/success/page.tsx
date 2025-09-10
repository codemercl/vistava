'use client'

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const SuccessPage = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const [paymentData, setPaymentData] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Получаем параметры от wayforpay
    const params = new URLSearchParams(searchParams.toString());
    if (params.toString()) {
      const data: Record<string, string> = {};
      params.forEach((value, key) => {
        data[key] = value;
      });
      setPaymentData(data);
      console.log('Payment data from wayforpay:', data);
    }
  }, [searchParams]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-4 py-10">
      {paymentData ?
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
          <p className="text-center text-lg md:text-xl text-gray-700 mb-8 font-medium">Чекаємо на вас на виставці.<br />Дякуємо за довіру!</p>

          <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-700 text-center">
              Дані платежу отримано успішно
            </p>
          </div>

          <Link
            href="/"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold text-lg md:text-xl py-3 px-8 rounded-xl shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 transition-colors duration-200"
            tabIndex={0}
            aria-label="Повернутися на головну"
          >
            Повернутися на головну
          </Link>
        </div>
        :
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
          <p className="text-center text-lg md:text-xl text-gray-700 mb-8 font-medium">Чекаємо на вас на виставці.<br />Дякуємо за довіру!</p>

          <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-700 text-center">
              Дані платежу отримано успішно
            </p>
          </div>

          <Link
            href="/"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold text-lg md:text-xl py-3 px-8 rounded-xl shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 transition-colors duration-200"
            tabIndex={0}
            aria-label="Повернутися на головну"
          >
            Повернутися на головну
          </Link>
        </div>
      }
    </main>
  );
};

export default SuccessPage; 