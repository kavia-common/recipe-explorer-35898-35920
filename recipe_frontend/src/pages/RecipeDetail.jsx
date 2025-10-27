import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Rating from '../components/Rating';
import Tag from '../components/Tag';

/**
 * PUBLIC_INTERFACE
 * RecipeDetail shows a detailed view for a selected recipe id with placeholders.
 */
export default function RecipeDetail() {
  const { id } = useParams();

  const recipe = {
    id,
    title: `Recipe #${id}`,
    description:
      'This is a placeholder recipe description. Detailed instructions and ingredients will be displayed here.',
    rating: 4.3,
    time: '45m',
    tags: ['Vegetarian', 'Quick', 'Dinner'],
    ingredients: [
      '2 cups of placeholder ingredient',
      '1 tbsp of another ingredient',
      'Salt and pepper to taste',
    ],
    steps: [
      'Preheat oven to 180°C (356°F).',
      'Mix all ingredients thoroughly.',
      'Bake for 25 minutes until golden and cooked through.',
    ],
  };

  return (
    <main className="main">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: recipe.title }]} />
      <article className="card">
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <h1 style={{ margin: '0 0 6px' }}>{recipe.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Rating value={recipe.rating} />
              <span style={{
                fontSize: 12,
                color: 'var(--text-muted)',
                background: 'var(--primary-ghost)',
                borderRadius: 999,
                padding: '4px 8px'
              }}>{recipe.time}</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {recipe.tags.map((t) => <Tag key={t} label={t} />)}
          </div>
        </header>

        <div style={{ marginTop: 16, width: '100%', aspectRatio: '16/7', borderRadius: 12, overflow: 'hidden',
          background: 'linear-gradient(135deg, color-mix(in oklab, var(--primary), #fff 85%), var(--surface))',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 700 }}>
          Image Placeholder
        </div>

        <section style={{ marginTop: 16 }}>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>
        </section>

        <section style={{ marginTop: 16 }}>
          <h2>Instructions</h2>
          <ol>
            {recipe.steps.map((step, i) => <li key={i} style={{ marginBottom: 8 }}>{step}</li>)}
          </ol>
        </section>
      </article>
    </main>
  );
}
