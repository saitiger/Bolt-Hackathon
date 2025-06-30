import React from 'react';

interface TrustedSourcesProps {
  trustedSources: string[];
  onToggleTrustedSource: (source: string) => void;
}

const TrustedSources: React.FC<TrustedSourcesProps> = ({
  trustedSources,
  onToggleTrustedSource,
}) => {
  const availableSources = ['AllRecipes', 'Food Network', 'Tasty'];

  return (
    <div className="space-y-3">
      <h3 className="font-medium">Trusted Sources</h3>
      <div className="space-y-2">
        {availableSources.map((source) => (
          <label key={source} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={trustedSources.includes(source)}
              onChange={() => onToggleTrustedSource(source)}
              className="accent-emerald-500 h-4 w-4 rounded"
            />
            <span>{source}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default TrustedSources;