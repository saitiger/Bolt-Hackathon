import React from 'react';
import { Recipe } from '../types/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <article className="relative overflow-hidden rounded-xl bg-neutral-800 shadow-lg hover:shadow-emerald-500/10 group transition">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-40 w-full object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-medium hover:text-emerald-400 transition">
          <a
            href={recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {recipe.title}
          </a>
        </h3>
        <p className="text-sm text-neutral-400">{recipe.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-neutral-500">{recipe.source}</span>
          <span className="text-xs bg-emerald-600/20 text-emerald-400 px-2 py-0.5 rounded-full">
            {recipe.matchPercentage}% match
          </span>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;