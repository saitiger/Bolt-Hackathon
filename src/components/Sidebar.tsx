import React, { useState, KeyboardEvent } from 'react';
import { X, Plus, CheckCircle } from 'lucide-react';

interface SidebarProps {
  ingredients: string[];
  trustedSources: {
    allrecipes: boolean;
    foodnetwork: boolean;
    tasty: boolean;
  };
  customSources: string[];
  isOpen: boolean;
  onClose: () => void;
  onAddIngredient: (ingredient: string) => void;
  onRemoveIngredient: (ingredient: string) => void;
  onToggleTrustedSource: (source: keyof SidebarProps['trustedSources']) => void;
  onAddCustomSource: (source: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  ingredients,
  trustedSources,
  customSources,
  isOpen,
  onClose,
  onAddIngredient,
  onRemoveIngredient,
  onToggleTrustedSource,
  onAddCustomSource,
}) => {
  const [ingredientInput, setIngredientInput] = useState('');
  const [customSourceInput, setCustomSourceInput] = useState('');
  const [activeTab, setActiveTab] = useState<'blog' | 'social'>('blog');
  const [showSourceFeedback, setShowSourceFeedback] = useState(false);

  const handleIngredientKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && ingredientInput.trim()) {
      onAddIngredient(ingredientInput.trim());
      setIngredientInput('');
    }
  };

  const handleAddCustomSource = () => {
    if (customSourceInput.trim()) {
      onAddCustomSource(customSourceInput.trim());
      setCustomSourceInput('');
      setShowSourceFeedback(true);
      setTimeout(() => setShowSourceFeedback(false), 2500);
    }
  };

  return (
    <aside
      className={`border-r border-white/10 bg-neutral-900/80 backdrop-blur-lg md:sticky md:top-0 md:h-screen flex flex-col p-6 space-y-6 md:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative fixed inset-y-0 left-0 w-72 z-30 transition-transform`}
    >
      {/* Mobile Close Button */}
      <div className="flex md:hidden justify-end">
        <button
          onClick={onClose}
          className="p-2 rounded-md hover:bg-white/10 transition"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Ingredient Input */}
      <div className="space-y-3">
        <label htmlFor="ingredientInput" className="block text-sm font-medium">
          Add Ingredient
        </label>
        <input
          id="ingredientInput"
          type="text"
          placeholder="e.g., Tomato"
          value={ingredientInput}
          onChange={(e) => setIngredientInput(e.target.value)}
          onKeyDown={handleIngredientKeyDown}
          className="w-full rounded-lg bg-neutral-800 border border-white/10 focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-neutral-400 px-3 py-2 text-white"
          aria-label="Ingredient"
        />
        <div className="flex flex-wrap gap-2">
          {ingredients.map((ingredient) => (
            <span
              key={ingredient}
              className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-1 text-sm"
            >
              {ingredient}
              <button
                onClick={() => onRemoveIngredient(ingredient)}
                className="hover:text-red-400 transition"
                aria-label={`Remove ${ingredient}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10" />

      {/* Trusted Sources */}
      <div className="space-y-3">
        <h3 className="font-medium">Trusted Sources</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={trustedSources.allrecipes}
              onChange={() => onToggleTrustedSource('allrecipes')}
              className="accent-emerald-500 h-4 w-4 rounded"
            />
            <span>AllRecipes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={trustedSources.foodnetwork}
              onChange={() => onToggleTrustedSource('foodnetwork')}
              className="accent-emerald-500 h-4 w-4 rounded"
            />
            <span>Food Network</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={trustedSources.tasty}
              onChange={() => onToggleTrustedSource('tasty')}
              className="accent-emerald-500 h-4 w-4 rounded"
            />
            <span>Tasty</span>
          </label>
        </div>
      </div>

      <div className="border-t border-white/10" />

      {/* Custom Source */}
      <div className="space-y-3">
        <h3 className="font-medium">Add Custom Source</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-3 py-1.5 rounded-md text-sm transition ${
              activeTab === 'blog' ? 'bg-white/10' : 'hover:bg-white/10'
            }`}
          >
            Blog/Website
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`px-3 py-1.5 rounded-md text-sm transition ${
              activeTab === 'social' ? 'bg-white/10' : 'hover:bg-white/10'
            }`}
          >
            Social Media
          </button>
        </div>
        <input
          type="text"
          placeholder={activeTab === 'blog' ? 'example.com' : '@username'}
          value={customSourceInput}
          onChange={(e) => setCustomSourceInput(e.target.value)}
          className="w-full rounded-lg bg-neutral-800 border border-white/10 focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-neutral-400 px-3 py-2 text-white"
          aria-label="Custom source"
        />
        <button
          onClick={handleAddCustomSource}
          className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition font-medium"
        >
          <Plus className="w-4 h-4" /> Add Source
        </button>
        {showSourceFeedback && (
          <p className="text-sm text-emerald-400 flex items-center gap-1">
            <CheckCircle className="w-4 h-4" /> Source added
          </p>
        )}
      </div>

      {/* Custom Sources List */}
      {customSources.length > 0 && (
        <>
          <div className="border-t border-white/10" />
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-neutral-400">Custom Sources</h4>
            {customSources.map((source, index) => (
              <div key={index} className="text-sm text-neutral-300 bg-white/5 rounded px-2 py-1">
                {source}
              </div>
            ))}
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;