import { useEffect, useState, useRef } from "react";
import i18next from '../i18n'


const Countdown = ({ date }) => {
  const calculateTimeLeft = () => {
    const difference = date - new Date();
    if (difference <= 0) return null;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [animateUnits, setAnimateUnits] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  const prevTimeLeft = useRef(timeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = calculateTimeLeft();
      if (!newTime) return;

      // trigger an animation for each changing unit
      setAnimateUnits({
        days: newTime.days !== prevTimeLeft.current.days,
        hours: newTime.hours !== prevTimeLeft.current.hours,
        minutes: newTime.minutes !== prevTimeLeft.current.minutes,
        seconds: newTime.seconds !== prevTimeLeft.current.seconds,
      });

      prevTimeLeft.current = newTime;
      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateUnits({
        days: false,
        hours: false,
        minutes: false,
        seconds: false,
      });
    }, 300);
    return () => clearTimeout(timeout);
  }, [animateUnits]);

  const timeUnit = (label, value, animate) => (
    <div className="flex flex-col items-center px-2 sm:px-3 md:px-4">
      <div
        className={`text-5xl sm:text-6xl md:text-7xl font-bold transition-transform duration-300 ease-in-out ${
          animate ? "scale-110 opacity-80" : ""
        }`}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-base md:text-xl uppercase mt-10">
        {label}
      </div>
    </div>
  );
  
  return (
    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6 md:gap-x-8 py-3 md:py-6 px-4">
      {timeUnit(i18next.t("countdown.days"), timeLeft.days, animateUnits.days)}
      {timeUnit(i18next.t("countdown.hours"), timeLeft.hours, animateUnits.hours)}
      {timeUnit(i18next.t("countdown.minutes"), timeLeft.minutes, animateUnits.minutes)}
      {timeUnit(i18next.t("countdown.seconds"), timeLeft.seconds, animateUnits.seconds)}
    </div>
  );
};

export default Countdown;