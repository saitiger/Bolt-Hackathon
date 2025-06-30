import React, { useState } from 'react';
import { Plus, CheckCircle } from 'lucide-react';

interface CustomSourceInputProps {
  onAddCustomSource: (source: string) => void;
  showFeedback: boolean;
}

const CustomSourceInput: React.FC<CustomSourceInputProps> = ({
  onAddCustomSource,
  showFeedback,
}) => {
  const [activeTab, setActiveTab] = useState<'blog' | 'social'>('blog');
  const [inputValue, setInputValue] = useState('');

  const handleAddSource = () => {
    if (inputValue.trim()) {
      onAddCustomSource(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddSource();
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="font-medium">Add Custom Source</h3>
      
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('blog')}
          className={`px-3 py-1.5 rounded-md text-sm transition ${
            activeTab === 'blog'
              ? 'bg-white/10'
              : 'hover:bg-white/10'
          }`}
        >
          Blog/Website
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`px-3 py-1.5 rounded-md text-sm transition ${
            activeTab === 'social'
              ? 'bg-white/10'
              : 'hover:bg-white/10'
          }`}
        >
          Social Media
        </button>
      </div>
      
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={activeTab === 'blog' ? 'example.com' : '@username'}
        className="w-full rounded-lg bg-neutral-800 border border-white/10 focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-neutral-400 px-3 py-2"
        aria-label="Custom source"
      />
      
      <button
        onClick={handleAddSource}
        className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition font-medium"
      >
        <Plus className="w-4 h-4" />
        Add Source
      </button>
      
      {showFeedback && (
        <p className="text-sm text-emerald-400 flex items-center gap-1">
          <CheckCircle className="w-4 h-4" />
          Source added
        </p>
      )}
    </div>
  );
};

export default CustomSourceInput;