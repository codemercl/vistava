import React, { useState } from "react";

const aboutContent = (
  <div className="mt-6 flex flex-col md:flex-row gap-8 items-start">
    {/* Постер слева */}
    <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-start mb-4 md:mb-0">
      <img
        src="/images/poster.png"
        alt="Постер вистави"
        className="rounded-lg shadow-md max-w-xs w-full h-auto object-contain"
      />
    </div>
    {/* Текст справа */}
    <div className="flex-1 min-w-0">
      <p className="mb-4 text-lg md:text-xl text-black">
        Комедія «Роздягайся, поговоримо» – це справжній ураган сміху, несподіванок і пікантних моментів!
      </p>
      <p className="mb-4 text-lg md:text-xl text-black">
        Подружжя, яке вирішило зробити ремонт, навіть не уявляло, що зміни торкнуться не лише стін, а й їхніх почуттів. Чи вдасться їм втримати баланс між фарбою, шпалерами і… раптовими зізнаннями? Приходьте, і ви дізнаєтесь, як оновити не тільки інтерьер, а й стосунки! Зануритесь у вир комічних ситуацій разом із нами!
      </p>
      <p className="font-bold text-xl md:text-2xl text-black">
        Ми обіцяємо подарувати вам веселий і незабутній театральний вечір!
      </p>
      {/* Соцсети */}
      <div className="flex gap-6 mt-6">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/izmailovamaryna/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
        >
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
          </svg>
        </a>
        {/* Telegram */}
        <a
          href="https://t.me/izmailovamaryna"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        >
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="text-blue-400 hover:text-blue-600 transition-colors duration-200">
            <path d="M12 0C5.371 0 0 5.371 0 12c0 6.629 5.371 12 12 12s12-5.371 12-12c0-6.629-5.371-12-12-12zm5.707 7.293l-2.828 10.607c-.213.803-.646 1.001-1.309.623l-3.619-2.672-1.747 1.682c-.193.193-.355.355-.729.355l.26-3.687 6.713-6.055c.292-.26-.063-.406-.451-.146l-8.299 5.221-3.576-1.117c-.777-.242-.792-.777.162-1.153l14.029-5.409c.646-.242 1.213.146 1.004 1.137z"/>
          </svg>
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/pc.izmailovam/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded"
        >
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="text-pink-500 hover:text-pink-700 transition-colors duration-200">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.981.981-1.275 2.093-1.334 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981.981-2.093 1.275-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
);

const teamContent = (
  <div className="mt-6">
    <ul className="text-lg md:text-xl text-black space-y-2">
      <li><span className="font-bold">Режисер:</span> Євгенія Бєлова</li>
      <li><span className="font-bold">Сценографія:</span> Світіч Геннадій</li>
      <li className="mt-4 font-bold">Для вас грають:</li>
      <li><span className="font-bold">Філіп</span> - Світіч Геннадій</li>
      <li><span className="font-bold">Джоана</span> - Мороз Ольга/ Тамбова Анна</li>
      <li><span className="font-bold">Генрі</span> - Супрун Євген</li>
      <li><span className="font-bold">Лінда</span> - Попова Яна</li>
      <li><span className="font-bold">Алістер</span> - Бікбулатов Ренат</li>
      <li><span className="font-bold">Сільвія</span> - Кирильчатенко Кароліна/ Саранцева Поліна</li>
      <li><span className="font-bold">Міс Уілкінсон</span> - Вишковець Марія/ Крепець Наталія</li>
      <li><span className="font-bold">Уолтер</span> - Буднік Ілля/ Щочка Андрій</li>
    </ul>
  </div>
);

const tabs = [
  { label: "Про виставу", content: aboutContent },
  { label: "Колектив", content: teamContent },
];

const AboutTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (idx: number) => setActiveTab(idx);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === 'Enter' || e.key === ' ') setActiveTab(idx);
    if (e.key === 'ArrowRight') setActiveTab((prev) => (prev + 1) % tabs.length);
    if (e.key === 'ArrowLeft') setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  return (
    <section className="w-full bg-white rounded-none py-10 mt-4" aria-label="Про виставу та колектив" id="about">
      <div className="flex border-b border-gray-200 mb-2">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`flex-1 text-lg md:text-xl font-semibold py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-colors duration-200 ${activeTab === idx ? 'border-b-2 border-red-400 text-black' : 'text-gray-500'}`}
            aria-selected={activeTab === idx}
            aria-controls={`tabpanel-${idx}`}
            id={`tab-${idx}`}
            role="tab"
            tabIndex={0}
            onClick={() => handleTabClick(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="outline-none"
      >
        {tabs[activeTab].content}
      </div>
    </section>
  );
};

export default AboutTabs; 