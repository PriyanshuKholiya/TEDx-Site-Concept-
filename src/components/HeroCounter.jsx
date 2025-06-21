import React, { useEffect, useState } from 'react';
import './pages/HomeCarousel.css';

function getTimeLeft(targetDate) {
  const now = new Date();
  const diff = targetDate - now;
  return {
    days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
  };
}

const HeroCounter = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="hero-counter-section">
      <div className="hero-counter-title">Event Starts In</div>
      <div className="hero-counter">
        <div className="hero-counter-box">
          <div className="hero-counter-number">{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="hero-counter-label">Days</div>
        </div>
        <div className="hero-counter-box">
          <div className="hero-counter-number">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="hero-counter-label">Hours</div>
        </div>
        <div className="hero-counter-box">
          <div className="hero-counter-number">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="hero-counter-label">Minutes</div>
        </div>
        <div className="hero-counter-box">
          <div className="hero-counter-number">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="hero-counter-label">Seconds</div>
        </div>
      </div>
    </section>
  );
};

export default HeroCounter;
