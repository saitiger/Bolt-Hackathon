import React, { useState } from 'react';
import { X, Plus, CheckCircle } from 'lucide-react';
import IngredientInput from './IngredientInput';
import TrustedSources from './TrustedSources';
import CustomSourceInput from './CustomSourceInput';

interface SidebarProps {
  ingredients: string[];
  trustedSources: string[];
  customSources: string[];
  isOpen: boolean;
  onAddIngredient: (ingredient: string) => void;
  onRemoveIngredient: (ingredient: string) => void;
  onToggleTrustedSource: (source: string) => void;
  onAddCustomSource: (source: string) => void;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  ingredients,
  trustedSources,
  customSources,
  isOpen,
  onAddIngredient,
  onRemoveIngredient,
  onToggleTrustedSource,
  onAddCustomSource,
  onClose,
}) => {
  const [showSourceFeedback, setShowSourceFeedback] = useState(false);

  const handleAddCustomSource = (source: string) => {
    onAddCustomSource(source);
    setShowSourceFeedback(true);
    setTimeout(() => setShowSourceFeedback(false), 2500);
  };

  return (
    <aside
      className={`border-r border-white/10 bg-neutral-900/80 backdrop-blur-lg md:sticky md:top-0 md:h-screen flex flex-col p-6 space-y-6 md:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative fixed inset-y-0 left-0 w-72 z-30 transition-transform`}
    >
      <div className="flex md:hidden justify-end">
        <button
          onClick={onClose}
          className="p-2 rounded-md hover:bg-white/10 transition"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <IngredientInput
        ingredients={ingredients}
        onAddIngredient={onAddIngredient}
        onRemoveIngredient={onRemoveIngredient}
      />

      <div className="border-t border-white/10" />

      <TrustedSources
        trustedSources={trustedSources}
        onToggleTrustedSource={onToggleTrustedSource}
      />

      <div className="border-t border-white/10" />

      <CustomSourceInput
        onAddCustomSource={handleAddCustomSource}
        showFeedback={showSourceFeedback}
      />
    </aside>
  );
};

export default Sidebar;