import { DynamicSky } from "@/components/DynamicSky";
import { CountdownTimer } from "@/components/CountdownTimer";
import { PixelStar } from "@/components/PixelStar";
import buildingImage from "@/assets/building.png";
import fitoorLogo from "@/assets/fitoor-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <DynamicSky />
      
      {/* Floating decorative stars */}
      <PixelStar 
        className="absolute top-20 left-10 text-yellow-300 animate-float" 
        size="md"
        style={{ animationDelay: '0s' } as React.CSSProperties}
      />
      <PixelStar 
        className="absolute top-32 left-1/4 text-yellow-200 animate-float" 
        size="sm"
        style={{ animationDelay: '0.5s' } as React.CSSProperties}
      />
      <PixelStar 
        className="absolute top-16 right-20 text-yellow-300 animate-float" 
        size="lg"
        style={{ animationDelay: '1s' } as React.CSSProperties}
      />
      <PixelStar 
        className="absolute top-40 right-1/3 text-yellow-200 animate-float" 
        size="sm"
        style={{ animationDelay: '1.5s' } as React.CSSProperties}
      />
      <PixelStar 
        className="absolute bottom-1/3 left-1/4 text-yellow-300 animate-twinkle" 
        size="sm"
        style={{ animationDelay: '2s' } as React.CSSProperties}
      />
      <PixelStar 
        className="absolute bottom-1/4 right-1/4 text-yellow-200 animate-twinkle" 
        size="md"
        style={{ animationDelay: '2.5s' } as React.CSSProperties}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pb-20">
        {/* Title section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-sm md:text-xl mb-2 tracking-wider text-foreground/90 font-clean">
            Plaksha University's
          </h2>
          <h3 className="text-xs md:text-base mb-4 tracking-widest text-foreground/80 font-pixel">
            annual techno-cultural Fest
          </h3>
          <div className="mb-8 md:mb-12">
            <img 
              src={fitoorLogo} 
              alt="Fitoor" 
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto mx-auto animate-glow-pulse"
            />
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-8 md:mb-10">
          <CountdownTimer />
        </div>

        {/* Register Button */}
        <div className="mb-12 md:mb-16">
          <a
            href="https://unstop.com/college-fests/fitoor-plaksha-university-punjab-408947"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative px-10 md:px-16 py-4 md:py-5 text-xl md:text-2xl font-pixel font-bold tracking-widest hover:scale-105 transition-all duration-200 uppercase cursor-pointer"
            style={{
              backgroundColor: '#FFB000',
              color: '#000000',
              boxShadow: `
                6px 6px 0px #000000,
                0 0 20px rgba(255, 176, 0, 0.6),
                inset -3px -3px 0px rgba(0, 0, 0, 0.4),
                inset 3px 3px 0px rgba(255, 255, 255, 0.3)
              `,
              border: '4px solid #000000',
              imageRendering: 'pixelated',
              textShadow: '2px 2px 0px rgba(0, 0, 0, 0.3)'
            }}
          >
            REGISTER
          </a>
        </div>
      </div>

      {/* Building at the bottom with overlays */}
      <div className="fixed bottom-0 left-0 right-0 z-0">
        <div className="relative">
          <img 
            src={buildingImage} 
            alt="University Building" 
            className="w-full h-auto object-cover object-top pixel-borders"
            style={{ 
              maxHeight: '50vh',
              imageRendering: 'pixelated'
            }}
          />
          
          {/* Overlay content */}
          <div className="absolute inset-0 flex items-end px-6 md:px-12 pb-6 md:pb-8">
            {/* Instagram */}
            <div className="text-white">
              <a 
                href="https://www.instagram.com/fitoor.plaksha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mb-2 hover:opacity-80 transition-opacity"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm md:text-base">fitoor.plaksha</span>
              </a>
              <p className="text-xs md:text-sm">Coming soon at Plaksha University.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
