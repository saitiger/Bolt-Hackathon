import React from 'react';
import RecipeGrid from './RecipeGrid';
import LoadingSpinner from './LoadingSpinner';
import { Recipe } from '../types/Recipe';

interface MainContentProps {
  ingredients: string[];
  recipes: Recipe[];
  isLoading: boolean;
}

const MainContent: React.FC<MainContentProps> = ({
  ingredients,
  recipes,
  isLoading,
}) => {
  return (
    <main className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Recipes</h2>
        <p className="text-neutral-400">
          Add at least two ingredients to start seeing results.
        </p>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : ingredients.length >= 2 ? (
        <RecipeGrid recipes={recipes} />
      ) : (
        <div className="text-center py-16">
          <p className="text-neutral-400">
            Add ingredients to discover amazing recipes!
          </p>
        </div>
      )}
    </main>
  );
};

export default MainContent;