import React, { useState } from 'react';
import { X } from 'lucide-react';

interface IngredientInputProps {
  ingredients: string[];
  onAddIngredient: (ingredient: string) => void;
  onRemoveIngredient: (ingredient: string) => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({
  ingredients,
  onAddIngredient,
  onRemoveIngredient,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      onAddIngredient(inputValue.trim());
      setInputValue('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddIngredient(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="space-y-3">
      <label htmlFor="ingredientInput" className="block text-sm font-medium">
        Add Ingredient
      </label>
      <form onSubmit={handleSubmit}>
        <input
          id="ingredientInput"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g., Tomato"
          className="w-full rounded-lg bg-neutral-800 border border-white/10 focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-neutral-400 px-3 py-2"
          aria-label="Ingredient"
        />
      </form>
      
      <div className="flex flex-wrap gap-2">
        {ingredients.map((ingredient) => (
          <span
            key={ingredient}
            className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-1 text-sm"
          >
            {ingredient}
            <button
              onClick={() => onRemoveIngredient(ingredient)}
              className="hover:text-red-400 transition-colors"
              aria-label={`Remove ${ingredient}`}
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default IngredientInput;