// Type definitions
export interface Recipe {
  id: string;
  title: string;
  url: string;
  source: string;
  image?: string;
  description: string;
  ingredients: string[];
  matchPercentage: number;
}

export interface TrustedSource {
  id: string;
  name: string;
  searchUrl: string; // e.g., "site:allrecipes.com"
  enabled: boolean;
}

// Google Search API function
export async function googleSearch(query: string, maxResults: number = 5): Promise<Recipe[]> {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const cx = import.meta.env.VITE_GOOGLE_SEARCH_ENGINE_ID;
  if (!apiKey || !cx) throw new Error('Google API key or Search Engine ID missing');

  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}&num=${maxResults}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch from Google Search API');
  const data = await res.json();
  if (!data.items) return [];

  return data.items.map((item: any) => {
    const id = item.cacheId || (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2));
    const url = item.link;
    const source = (() => {
      try {
        return new URL(item.link).hostname;
      } catch {
        return '';
      }
    })();
    return {
      id,
      title: item.title || '',
      url,
      source,
      image: item.pagemap?.cse_image?.[0]?.src,
      description: item.snippet || '',
      ingredients: [],
      matchPercentage: 0,
    };
  });
}

// Helper to find recipes from multiple sources
export async function findRecipes(ingredients: string[], sources: TrustedSource[]): Promise<Recipe[]> {
  const enabledSources = sources.filter(s => s.enabled);
  const queries = enabledSources.map(source => {
    const ingredientQuery = ingredients.join(' ');
    return `${source.searchUrl} ${ingredientQuery} recipe`;
  });
  const results = await Promise.all(queries.map(q => googleSearch(q)));
  return results.flat();
} 