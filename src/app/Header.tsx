'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "Про виставу" },
  { href: "#gallery", label: "Фото" },
  { href: "#video", label: "Відео" },
  { href: "#contacts", label: "Контакти" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen((open) => !open);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="w-full bg-white text-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <nav
          className="flex items-center justify-between py-4"
          aria-label="Главная навигация"
          role="navigation"
        >
          {/* Логотип */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            aria-label="На главную"
          >
            <Image src="/logo/logo.png" alt="Логотип театра" width={120} height={48} className="h-15 w-auto" />
          </Link>
          {/* Навигация desktop */}
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-yellow-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors duration-200 px-2 py-1 rounded"
                  tabIndex={0}
                  aria-label={link.label}
                  onClick={handleCloseMenu}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleCloseMenu();
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Кнопка */}
          <button
            onClick={() => {
              const bookingSection = document.getElementById('booking');
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hidden md:inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded shadow hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors duration-200"
            tabIndex={0}
            aria-label="Придбати квиток"
          >
            Придбати квиток
          </button>
          {/* Мобильное меню */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={handleToggleMenu}
          >
            <span className="sr-only">Меню</span>
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
        {/* Мобильное выпадающее меню */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white px-0 pb-4 pt-2 animate-fade-in"
          >
            <ul className="flex flex-col gap-4 text-lg font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block hover:text-yellow-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors duration-200 px-2 py-1 rounded"
                    tabIndex={0}
                    aria-label={link.label}
                    onClick={handleCloseMenu}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') handleCloseMenu();
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 