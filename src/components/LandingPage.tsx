import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onGetCooking: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetCooking }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Sequential animation reveal
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/Landing Page Video.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
        <h1
          className={`transition-all duration-700 sm:text-6xl lg:text-7xl text-4xl font-semibold tracking-tight ${
            isAnimated ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
          }`}
        >
          Turn What You Have into What You Crave
        </h1>
        
        <p
          className={`transition-all duration-700 delay-150 text-lg sm:text-xl max-w-xl ${
            isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Find real recipes using the ingredients you already have.
        </p>

        {/* Shiny CTA Button */}
        <button
          onClick={onGetCooking}
          className={`shiny-cta focus:outline-none transition-all duration-700 delay-300 ${
            isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span>
            Get Cooking <ArrowRight className="w-5 h-5" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default LandingPage;