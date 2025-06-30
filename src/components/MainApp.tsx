import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import RecipeGrid from './RecipeGrid';

const MainApp: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [trustedSources, setTrustedSources] = useState({
    allrecipes: true,
    foodnetwork: true,
    tasty: false,
  });
  const [customSources, setCustomSources] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const addIngredient = (ingredient: string) => {
    const normalizedIngredient = ingredient.toLowerCase().trim();
    if (normalizedIngredient && !ingredients.includes(normalizedIngredient)) {
      setIngredients([...ingredients, normalizedIngredient]);
    }
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(ing => ing !== ingredient));
  };

  const toggleTrustedSource = (source: keyof typeof trustedSources) => {
    setTrustedSources(prev => ({
      ...prev,
      [source]: !prev[source]
    }));
  };

  const addCustomSource = (source: string) => {
    if (source.trim() && !customSources.includes(source.trim())) {
      setCustomSources([...customSources, source.trim()]);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Mobile Header */}
      <header className="flex md:hidden items-center justify-between px-4 py-3 border-b border-white/10 backdrop-blur-lg sticky top-0 z-20">
        <h2 className="text-xl font-semibold tracking-tight">Recipe Finder</h2>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 rounded-md hover:bg-white/10 transition"
          aria-label="Open sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <div className="grid md:grid-cols-[320px_1fr]">
        {/* Sidebar */}
        <Sidebar
          ingredients={ingredients}
          trustedSources={trustedSources}
          customSources={customSources}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onAddIngredient={addIngredient}
          onRemoveIngredient={removeIngredient}
          onToggleTrustedSource={toggleTrustedSource}
          onAddCustomSource={addCustomSource}
        />

        {/* Main Content */}
        <main className="p-6 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Recipes</h2>
            <p className="text-neutral-400">Add at least two ingredients to start seeing results.</p>
          </div>

          <RecipeGrid ingredients={ingredients} />
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default MainApp;