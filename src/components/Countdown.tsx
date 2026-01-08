import { useState, useEffect } from 'react';

// --- CORRECCIÓN: TimeBox ahora está AFUERA del componente principal ---
const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center mx-2 md:mx-4">
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 w-16 md:w-20 text-center shadow-lg">
      <span className="text-2xl md:text-3xl font-bold text-white">
        {value < 10 ? `0${value}` : value}
      </span>
    </div>
    <span className="text-orange-400 text-xs md:text-sm font-medium mt-2 uppercase tracking-wider">
      {label}
    </span>
  </div>
);
// -------------------------------------------------------------------

const Countdown = () => {
  // FECHA OBJETIVO: 12 de Enero de 2026 a las 09:00 AM
  const targetDate = new Date('2026-01-09T08:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center mt-8 mb-8 animate-fade-in-up">
      <TimeBox value={timeLeft.days} label="Días" />
      <TimeBox value={timeLeft.hours} label="Horas" />
      <TimeBox value={timeLeft.minutes} label="Min" />
      <TimeBox value={timeLeft.seconds} label="Seg" />
    </div>
  );
};

export default Countdown;