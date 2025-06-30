import React from 'react';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  source: string;
  match: number;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <article className="relative overflow-hidden rounded-xl bg-neutral-800 shadow-lg hover:shadow-emerald-500/10 group transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-40 w-full object-cover group-hover:scale-105 transition duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-medium hover:text-emerald-400 transition">
          <a href="#" target="_blank" rel="noopener noreferrer">
            {recipe.title}
          </a>
        </h3>
        <p className="text-sm text-neutral-400 line-clamp-2">
          {recipe.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-neutral-500">{recipe.source}</span>
          <span className="text-xs bg-emerald-600/20 text-emerald-400 px-2 py-0.5 rounded-full">
            {recipe.match}% match
          </span>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;