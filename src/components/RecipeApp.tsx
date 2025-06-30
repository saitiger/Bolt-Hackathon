import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { Recipe } from '../types/Recipe';

interface RecipeAppProps {
  onBackToLanding: () => void;
}

const RecipeApp: React.FC<RecipeAppProps> = ({ onBackToLanding }) => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [trustedSources, setTrustedSources] = useState<string[]>(['AllRecipes', 'Food Network']);
  const [customSources, setCustomSources] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const addIngredient = (ingredient: string) => {
    const normalizedIngredient = ingredient.toLowerCase().trim();
    if (!ingredients.includes(normalizedIngredient) && normalizedIngredient) {
      const newIngredients = [...ingredients, normalizedIngredient];
      setIngredients(newIngredients);
      
      if (newIngredients.length >= 2) {
        fetchRecipes(newIngredients);
      }
    }
  };

  const removeIngredient = (ingredient: string) => {
    const newIngredients = ingredients.filter(ing => ing !== ingredient);
    setIngredients(newIngredients);
    
    if (newIngredients.length >= 2) {
      fetchRecipes(newIngredients);
    } else {
      setRecipes([]);
    }
  };

  const toggleTrustedSource = (source: string) => {
    setTrustedSources(prev => 
      prev.includes(source) 
        ? prev.filter(s => s !== source)
        : [...prev, source]
    );
  };

  const addCustomSource = (source: string) => {
    if (!customSources.includes(source) && source.trim()) {
      setCustomSources(prev => [...prev, source.trim()]);
    }
  };

  const fetchRecipes = async (ingredientList: string[]) => {
    setIsLoading(true);
    
    // Mock API call with realistic delay
    setTimeout(() => {
      const mockRecipes: Recipe[] = Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        title: `Delicious Dish ${i + 1}`,
        description: 'A short tasty description that makes you hungry.',
        image: 'https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80',
        source: 'AllRecipes',
        matchPercentage: Math.floor(Math.random() * 20) + 80,
        url: '#'
      }));
      
      setRecipes(mockRecipes);
      setIsLoading(false);
    }, 1200);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <section className="min-h-screen bg-neutral-950 text-white">
      <Header onToggleSidebar={toggleSidebar} onBackToLanding={onBackToLanding} />
      
      <div className="grid md:grid-cols-[320px_1fr]">
        <Sidebar
          ingredients={ingredients}
          trustedSources={trustedSources}
          customSources={customSources}
          isOpen={isSidebarOpen}
          onAddIngredient={addIngredient}
          onRemoveIngredient={removeIngredient}
          onToggleTrustedSource={toggleTrustedSource}
          onAddCustomSource={addCustomSource}
          onClose={closeSidebar}
        />
        
        <MainContent
          ingredients={ingredients}
          recipes={recipes}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
};

export default RecipeApp;