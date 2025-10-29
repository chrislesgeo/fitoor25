import { useEffect, useState } from 'react';
import countdownBg from '@/assets/countdown-bg.png';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();
  
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

export const CountdownTimer = () => {
  // Set target date to 7 days from now (matching the reference image)
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    date.setHours(23, 48, 15); // Matching the reference time
    return date;
  });
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="relative">
      {/* Countdown cell with background image */}
      <div 
        className="relative rounded-2xl overflow-hidden p-3 md:p-4"
        style={{
          backgroundImage: `url(${countdownBg})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'pixelated'
        }}
      >
        {/* Inner content */}
        <div className="relative z-10">
          <div className="text-3xl md:text-5xl font-bold text-primary text-glow-pink tracking-tight leading-none mb-1">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-accent text-[0.5rem] md:text-xs tracking-widest font-bold">
            {label}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex gap-2 md:gap-4 justify-center items-center">
      <TimeUnit value={timeLeft.days} label="DAYS" />
      <TimeUnit value={timeLeft.hours} label="HOURS" />
      <TimeUnit value={timeLeft.minutes} label="MINS" />
      <TimeUnit value={timeLeft.seconds} label="SECS" />
    </div>
  );
};
