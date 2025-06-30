import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onGetCooking: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetCooking }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
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
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/30" />

      {/* Bolt Badge - Top Right */}
      <div className="absolute top-4 right-4 z-20">
        <img
          src="/Bolt Badge.png"
          alt="Bolt Badge"
          className="w-16 h-16 sm:w-20 sm:h-20 opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-16 text-left space-y-6 w-full max-w-3xl">
        <h1
          className={`transition-all duration-700 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight whitespace-normal sm:whitespace-nowrap leading-tight ${
            isAnimated ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
          }`}
        >
          <span className="hidden sm:inline"> </span><br className="block sm:hidden" />From Fridge to Feast. Fast.

        </h1>
        <p
          className={`transition-all duration-700 delay-150 text-base sm:text-lg max-w-2xl whitespace-normal sm:whitespace-nowrap ${
            isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
Find trusted recipes with what you've got, no guessing!

</p>

        {/* Shiny CTA Button */}
        <button
          onClick={onGetCooking}
          className={`shiny-cta focus:outline-none transition-all duration-700 delay-300 ${
            isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span>
           Get Cooking
          </span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;