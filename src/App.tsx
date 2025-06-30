import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import MainApp from './components/MainApp';

function App() {
  const [showApp, setShowApp] = useState(false);

  const handleGetCooking = () => {
    setShowApp(true);
  };

  return (
    <div className="font-inter bg-neutral-900 text-white selection:bg-emerald-500/30">
      {!showApp ? (
        <HeroSection onGetCooking={handleGetCooking} />
      ) : (
        <MainApp />
      )}
    </div>
  );
}

export default App;