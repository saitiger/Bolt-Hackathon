import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import RecipeCard from './RecipeCard';

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  source: string;
  url: string;
  matchPercentage: number;
  ingredients: string[];
}

interface RecipeGridProps {
  ingredients: string[];
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ ingredients }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const mockRecipes: Recipe[] = [
    {
      id: '1',
      title: 'Mediterranean Pasta Salad',
      description: 'A fresh and vibrant pasta salad with Mediterranean flavors.',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&q=80',
      source: 'AllRecipes',
      url: 'https://allrecipes.com/recipe/mediterranean-pasta-salad',
      matchPercentage: 92,
      ingredients: ['pasta', 'olives', 'tomatoes', 'cucumber', 'feta cheese'],
    },
    {
      id: '2',
      title: 'Herb-Crusted Chicken',
      description: 'Juicy chicken breast with a crispy herb crust.',
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&q=80',
      source: 'Food Network',
      url: 'https://foodnetwork.com/recipe/herb-crusted-chicken',
      matchPercentage: 87,
      ingredients: ['chicken breast', 'herbs', 'breadcrumbs', 'olive oil'],
    },
    {
      id: '3',
      title: 'Vegetable Stir Fry',
      description: 'Quick and healthy stir fry with fresh vegetables.',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80',
      source: 'Tasty',
      url: 'https://tasty.co/recipe/vegetable-stir-fry',
      matchPercentage: 85,
      ingredients: ['broccoli', 'carrots', 'bell peppers', 'soy sauce'],
    },
    {
      id: '4',
      title: 'Creamy Mushroom Risotto',
      description: 'Rich and creamy risotto with wild mushrooms.',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80',
      source: 'AllRecipes',
      url: 'https://allrecipes.com/recipe/creamy-mushroom-risotto',
      matchPercentage: 89,
      ingredients: ['arborio rice', 'mushrooms', 'parmesan cheese', 'white wine'],
    },
    {
      id: '5',
      title: 'Spicy Thai Curry',
      description: 'Aromatic Thai curry with coconut milk and fresh herbs.',
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=80',
      source: 'Food Network',
      url: 'https://foodnetwork.com/recipe/spicy-thai-curry',
      matchPercentage: 91,
      ingredients: ['coconut milk', 'curry paste', 'vegetables', 'fish sauce'],
    },
    {
      id: '6',
      title: 'Classic Caesar Salad',
      description: 'Traditional Caesar salad with homemade croutons.',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80',
      source: 'AllRecipes',
      url: 'https://allrecipes.com/recipe/classic-caesar-salad',
      matchPercentage: 83,
      ingredients: ['romaine lettuce', 'parmesan cheese', 'croutons', 'caesar dressing'],
    },
  ];

  useEffect(() => {
    if (ingredients.length >= 2) {
      setIsLoading(true);
      setRecipes([]);

      // Simulate API call
      const timer = setTimeout(() => {
        setRecipes(mockRecipes);
        setIsLoading(false);
      }, 1200);

      return () => clearTimeout(timer);
    } else {
      setRecipes([]);
      setIsLoading(false);
    }
  }, [ingredients]);

  if (ingredients.length < 2) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-neutral-800 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-neutral-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <p className="text-neutral-400">Add at least 2 ingredients to see recipe suggestions</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16" role="status" aria-live="polite">
        <Loader2 className="animate-spin h-8 w-8 text-emerald-500" />
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;