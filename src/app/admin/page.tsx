'use client'

import React, { useState, useEffect } from "react";

type Show = {
  id: number;
  location: string;
  date: string; // формат: YYYY-MM-DD
  weekday: string;
  time: string; // формат: HH:mm
  buyLink: string;
};

const initialShows: Show[] = [];

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://vistava-backend.vercel.app/api/shows";

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [shows, setShows] = useState<Show[]>(initialShows);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<Omit<Show, "id">>({
    location: "",
    date: "",
    weekday: "",
    time: "",
    buyLink: "",
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login === "admin" && password === "admin01") {
      setIsAuthenticated(true);
      setLogin("");
      setPassword("");
    } else {
      alert("Невірний логін або пароль");
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  useEffect(() => {
    if (isAuthenticated) fetchShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const handleAddShow = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.location || !form.date || !form.weekday || !form.time || !form.buyLink) {
      alert("Заповніть всі поля");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          location: form.location,
          date: form.date,
          weekday: form.weekday,
          time: form.time,
          buyLink: form.buyLink,
        }),
      });
      if (!response.ok) throw new Error("Не вдалося додати подію");
      setForm({ location: "", date: "", weekday: "", time: "", buyLink: "" });
      await fetchShows();
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Сталася помилка";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteShow = async (id: number) => {
    if (!window.confirm("Ви впевнені, що хочете видалити цю подію?")) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Не вдалося видалити подію");
      await fetchShows();
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Сталася помилка";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // type guard для Show
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

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <form
          className="bg-white p-8 rounded shadow-md flex flex-col gap-4 w-full max-w-lg"
          onSubmit={handleLoginSubmit}
          aria-label="Форма входу адміністратора"
        >
          <h1 className="text-2xl font-bold mb-2 text-center text-black">Вхід до адмін-панелі</h1>
          <input
            type="text"
            name="login"
            value={login}
            onChange={handleLoginChange}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            placeholder="Логін"
            aria-label="Логін"
            autoComplete="username"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            placeholder="Пароль"
            aria-label="Пароль"
            autoComplete="current-password"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-200"
            aria-label="Увійти"
          >
            Увійти
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded shadow p-6 flex flex-col gap-8 text-black">
        <h1 className="text-3xl font-bold mb-4">Керування подіями</h1>
        {/* Форма додавання */}
        <form
          className="flex flex-col gap-4"
          onSubmit={handleAddShow}
          aria-label="Додати подію"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleFormChange}
              className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Локація"
              aria-label="Локація"
              required
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleFormChange}
              className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Дата"
              required
            />
            <input
              type="text"
              name="weekday"
              value={form.weekday}
              onChange={handleFormChange}
              className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="День тижня"
              aria-label="День тижня"
              required
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleFormChange}
              className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Час початку"
              required
            />
            <input
              type="url"
              name="buyLink"
              value={form.buyLink}
              onChange={handleFormChange}
              className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Посилання на купівлю"
              aria-label="Посилання на купівлю"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-200"
            aria-label="Додати подію"
          >
            Додати подію
          </button>
        </form>
        {/* Список подій */}
        <section className="flex flex-col gap-4" aria-label="Список подій">
          {loading ? (
            <div className="text-gray-500 text-center">Завантаження...</div>
          ) : error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : shows.length === 0 ? (
            <div className="text-gray-500 text-center">Подій немає</div>
          ) : (
            shows.map((show) => (
              <div
                key={show.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-200 py-4"
                tabIndex={0}
                aria-label={`Подія: ${show.location}, ${show.date} ${show.weekday}, ${show.time}`}
              >
                <div className="flex-1 min-w-[180px] mb-2 md:mb-0">
                  <div className="text-base text-gray-400 font-semibold mb-1">Театр</div>
                  <div className="text-lg font-bold text-gray-900">{show.location}</div>
                </div>
                <div className="flex-1 min-w-[120px] mb-2 md:mb-0">
                  <div className="text-base text-gray-400 font-semibold mb-1">Дата вистави</div>
                  <div className="text-xl font-bold text-gray-900">{new Date(show.date).toLocaleDateString('uk-UA', { day: '2-digit', month: 'long' })}, {show.weekday}</div>
                </div>
                <div className="flex-1 min-w-[80px] mb-2 md:mb-0 flex flex-col items-start">
                  <div className="text-base text-gray-400 font-semibold mb-1">Час початку</div>
                  <div className="text-xl font-bold text-gray-900">{show.time}</div>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto flex gap-2">
                  <a
                    href={show.buyLink}
                    className="block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded shadow hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors duration-200 text-center"
                    tabIndex={0}
                    aria-label="Посилання на купівлю"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Купити
                  </a>
                  <button
                    onClick={() => handleDeleteShow(show.id)}
                    className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-200"
                    aria-label="Видалити подію"
                  >
                    Видалити
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </main>
  );
};

export default AdminPage; 