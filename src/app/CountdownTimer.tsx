import React, { useEffect, useState } from "react";

type CountdownTimerProps = { targetDateTime: string };

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDateTime }) => {
  const [timeLeft, setTimeLeft] = useState<{hours: number, minutes: number, seconds: number}>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const target = new Date(targetDateTime);
      const diff = Math.max(0, target.getTime() - now.getTime());
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ hours, minutes, seconds });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDateTime]);

  return (
    <div className="flex gap-4 items-end mt-6 justify-center">
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-base md:text-lg text-gray-200">годин</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-base md:text-lg text-gray-200">хвилин</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-base md:text-lg text-gray-200">секунд</span>
      </div>
    </div>
  );
};

export default CountdownTimer; 