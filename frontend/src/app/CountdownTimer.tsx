import React, { useEffect, useState } from "react";

type CountdownTimerProps = { targetDateTime: string };

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDateTime }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const target = new Date(targetDateTime);
      if (isNaN(target.getTime())) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const diff = Math.max(0, target.getTime() - now.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDateTime]);

  return (
    <div className="flex gap-4 items-end mt-6 justify-center min-h-[70px]">
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="text-base md:text-lg text-gray-200">днів</span>
      </div>
      <span className="inline-block w-px h-16 bg-gray-300 mx-2" aria-hidden="true"></span>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-base md:text-lg text-gray-200">годин</span>
      </div>
      <span className="nline-block w-px h-16 bg-gray-300 mx-2" aria-hidden="true"></span>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-base md:text-lg text-gray-200">хвилин</span>
      </div>
      <span className="inline-block w-px h-16 bg-gray-300 mx-2" aria-hidden="true"></span>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-base md:text-lg text-gray-200">секунд</span>
      </div>
    </div>
  );
};

export default CountdownTimer; 