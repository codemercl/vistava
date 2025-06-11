import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-neutral-900 text-neutral-200 py-12" aria-label="Футер" id="contacts">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Контакти */}
      <div>
        <div className="uppercase text-sm tracking-widest border-b border-neutral-700 pb-2 mb-4">Контакти</div>
        <div className="mb-3">Є питання чи побажання?</div>
        <a href="mailto:izmailmd80@gmail.com" className="flex items-center gap-2 bg-neutral-800 rounded px-4 py-2 mb-3 hover:bg-neutral-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400">
          {/* mail icon */}
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-yellow-400"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" fill="currentColor"/></svg>
          <span className="font-semibold">Напишіть нам</span>
        </a>
        <div className="text-xs text-neutral-400 mb-2">Обробка звернень здійснюється через e-mail</div>
        <div className="text-sm mb-2">м. Київ, проспект М. Бажана, 14. - 1 поверх. М. Осокорки.</div>
        <div className="text-sm space-y-1">
          <div><a href="tel:+380673276097" className="underline">+380673276097</a> <span className="text-xs text-neutral-400">(вайбер, телеграм)</span></div>
          <div><a href="tel:+380675373847" className="underline">+380675373847</a> <span className="text-xs text-neutral-400">(телеграм, вайбер)</span></div>
        </div>
        <div className="text-sm mt-2 space-y-1">
          <div><a href="mailto:izmailmd80@gmail.com" className="underline">izmailmd80@gmail.com</a></div>
        </div>
      </div>
      {/* Події */}
      <div>
        <div className="uppercase text-sm tracking-widest border-b border-neutral-700 pb-2 mb-4">Події</div>
        <ul className="space-y-2">
          <li><a href="https://izmailovamaryna.com.ua/театр" className="hover:underline">Театр</a></li>
          <li><a href="https://izmailovamaryna.com.ua/дітям" className="hover:underline">Дітям</a></li>
          <li><a href="https://izmailovamaryna.com.ua/театральна-студія" className="hover:underline">Театральна студія</a></li>
        </ul>
      </div>
      {/* Сервіси */}
      <div>
        <div className="uppercase text-sm tracking-widest border-b border-neutral-700 pb-2 mb-4">Сервіси</div>
        <ul className="space-y-2">
          <li><a href="https://izmailovamaryna.com.ua/івент-послуги" className="hover:underline">Івент-послуги</a></li>
          <li><a href="https://izmailovamaryna.com.ua/про-нас/благодійна-ініціатива-подаруй-дитині-посмішку" className="hover:underline">Благодійна ініціатива</a></li>
        </ul>
      </div>
      {/* Про нас */}
      <div>
        <div className="uppercase text-sm tracking-widest border-b border-neutral-700 pb-2 mb-4">Про нас</div>
        <ul className="space-y-2">
          <li><a href="https://izmailovamaryna.com.ua/про-нас" className="hover:underline">Про нас</a></li>
          <li><a href="https://izmailovamaryna.com.ua" className="hover:underline">Головна</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-10 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Продюсерський центр Ізмайлової Марини</div>
  </footer>
);

export default Footer; 