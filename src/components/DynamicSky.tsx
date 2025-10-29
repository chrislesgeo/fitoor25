import { useEffect, useState } from 'react';

interface SkyColors {
  start: string;
  end: string;
  name: string;
}

const getSkyColors = (): SkyColors => {
  const hour = new Date().getHours();
  
  // Night: 0-5 and 21-23
  if (hour >= 0 && hour < 5 || hour >= 21) {
    return {
      start: 'hsl(240, 40%, 10%)',
      end: 'hsl(280, 40%, 15%)',
      name: 'night'
    };
  }
  
  // Dawn: 5-7
  if (hour >= 5 && hour < 7) {
    return {
      start: 'hsl(250, 50%, 35%)',
      end: 'hsl(30, 80%, 60%)',
      name: 'dawn'
    };
  }
  
  // Day: 7-17
  if (hour >= 7 && hour < 17) {
    return {
      start: 'hsl(200, 80%, 50%)',
      end: 'hsl(210, 70%, 70%)',
      name: 'day'
    };
  }
  
  // Dusk: 17-21
  return {
    start: 'hsl(20, 80%, 50%)',
    end: 'hsl(280, 50%, 30%)',
    name: 'dusk'
  };
};

export const DynamicSky = () => {
  const [skyColors, setSkyColors] = useState(getSkyColors());
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 60,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }));
    setStars(newStars);

    // Update sky colors every minute
    const interval = setInterval(() => {
      setSkyColors(getSkyColors());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const isNightTime = skyColors.name === 'night' || skyColors.name === 'dusk';

  return (
    <div 
      className="fixed inset-0 -z-10 transition-all duration-[3000ms]"
      style={{
        background: `linear-gradient(to bottom, ${skyColors.start}, ${skyColors.end})`
      }}
    >
      {/* Stars - only visible at night/dusk */}
      {isNightTime && stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      
      {/* Pixel clouds */}
      <div className="absolute top-10 left-20 w-32 h-16 opacity-40">
        <svg viewBox="0 0 128 64" className="pixel-borders">
          <rect x="16" y="32" width="16" height="16" fill="currentColor" className="text-purple-400" />
          <rect x="32" y="16" width="16" height="32" fill="currentColor" className="text-purple-400" />
          <rect x="48" y="8" width="32" height="40" fill="currentColor" className="text-purple-300" />
          <rect x="80" y="16" width="32" height="32" fill="currentColor" className="text-purple-400" />
          <rect x="112" y="32" width="16" height="16" fill="currentColor" className="text-purple-400" />
        </svg>
      </div>
      
      <div className="absolute top-32 right-32 w-40 h-20 opacity-30 animate-float">
        <svg viewBox="0 0 160 80" className="pixel-borders">
          <rect x="20" y="40" width="20" height="20" fill="currentColor" className="text-pink-300" />
          <rect x="40" y="20" width="20" height="40" fill="currentColor" className="text-pink-300" />
          <rect x="60" y="10" width="40" height="50" fill="currentColor" className="text-pink-200" />
          <rect x="100" y="20" width="40" height="40" fill="currentColor" className="text-pink-300" />
          <rect x="140" y="40" width="20" height="20" fill="currentColor" className="text-pink-300" />
        </svg>
      </div>
    </div>
  );
};
