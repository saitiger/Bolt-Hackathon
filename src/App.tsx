import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import RecipeApp from './components/RecipeApp';

function App() {
  const [showApp, setShowApp] = useState(false);

  const handleGetCooking = () => {
    setShowApp(true);
  };

  const handleBackToLanding = () => {
    setShowApp(false);
  };

  return (
    <div className="font-inter bg-neutral-900 text-white selection:bg-emerald-500/30">
      {!showApp ? (
        <LandingPage onGetCooking={handleGetCooking} />
      ) : (
        <RecipeApp onBackToLanding={handleBackToLanding} />
      )}
    </div>
  );
}

export default App;