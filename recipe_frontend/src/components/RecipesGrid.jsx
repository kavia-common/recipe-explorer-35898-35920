import React from 'react';
import RecipeCard from './RecipeCard';

/**
 * PUBLIC_INTERFACE
 * RecipesGrid lays out a list of recipes in a responsive CSS grid.
 * Receives items array and renders RecipeCard for each.
 */
export default function RecipesGrid({ items = [] }) {
  const fallback = items.length === 0;

  return (
    <section aria-label="Recipes list">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 16,
        }}
      >
        {fallback
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card" style={{ height: 240, opacity: 0.5 }} />
            ))
          : items.map((recipe) => <RecipeCard key={recipe.id ?? recipe.title} recipe={recipe} />)}
      </div>
    </section>
  );
}
