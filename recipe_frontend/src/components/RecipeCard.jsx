import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import Tag from './Tag';

/**
 * PUBLIC_INTERFACE
 * RecipeCard displays a single recipe preview. Accepts recipe object shape.
 * Does not fetch; purely presentational with placeholder image.
 */
export default function RecipeCard({ recipe = {} }) {
  const {
    id = '1',
    title = 'Sample Recipe',
    description = 'A short description for this delicious dish.',
    rating = 4.5,
    time = '30m',
    tags = ['Quick', 'Vegetarian'],
    imageUrl,
  } = recipe;

  return (
    <article className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <Link to={`/recipe/${id}`} style={{ textDecoration: 'none', color: 'inherit' }} aria-label={`View ${title}`}>
        <div style={{
          width: '100%',
          aspectRatio: '16/9',
          background: 'linear-gradient(135deg, color-mix(in oklab, var(--primary), #fff 85%), var(--surface))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--primary)',
          fontWeight: 700
        }}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span>{title}</span>
          )}
        </div>
        <div style={{ padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <h3 style={{ margin: '0 0 6px' }}>{title}</h3>
            <span style={{
              fontSize: 12,
              color: 'var(--text-muted)',
              background: 'var(--primary-ghost)',
              borderRadius: 999,
              padding: '4px 8px'
            }}>{time}</span>
          </div>
          <p style={{ margin: '0 0 10px', color: 'var(--text-muted)' }}>{description}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Rating value={rating} />
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {tags.slice(0, 2).map((t) => (
                <Tag key={t} label={t} size="sm" />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
