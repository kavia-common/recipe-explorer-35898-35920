import React from 'react';
import Tag from './Tag';

/**
 * PUBLIC_INTERFACE
 * FiltersPanel shows basic placeholder controls for filtering recipes.
 * It does not fetch or mutate data; emits callbacks if provided.
 */
export default function FiltersPanel({ onApply, onReset }) {
  const [cuisine, setCuisine] = React.useState('');
  const [difficulty, setDifficulty] = React.useState('');
  const [selectedTags, setSelectedTags] = React.useState([]);

  const tags = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Quick', 'Budget'];

  function toggleTag(tag) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  return (
    <aside className="card" aria-label="Filters" style={{ minWidth: 260 }}>
      <h2 style={{ marginTop: 0 }}>Filters</h2>

      <div style={{ display: 'grid', gap: 12 }}>
        <label>
          <span style={{ display: 'block', color: 'var(--text-muted)', marginBottom: 6 }}>Cuisine</span>
          <select
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            aria-label="Cuisine filter"
            style={{
              width: '100%',
              height: 40,
              borderRadius: 10,
              border: '1px solid var(--border)',
              background: 'transparent',
              color: 'var(--text)',
              padding: '0 10px',
            }}
          >
            <option value="">Any</option>
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
            <option value="indian">Indian</option>
            <option value="japanese">Japanese</option>
          </select>
        </label>

        <label>
          <span style={{ display: 'block', color: 'var(--text-muted)', marginBottom: 6 }}>Difficulty</span>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            aria-label="Difficulty filter"
            style={{
              width: '100%',
              height: 40,
              borderRadius: 10,
              border: '1px solid var(--border)',
              background: 'transparent',
              color: 'var(--text)',
              padding: '0 10px',
            }}
          >
            <option value="">Any</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="hard">Hard</option>
          </select>
        </label>

        <div>
          <span style={{ display: 'block', color: 'var(--text-muted)', marginBottom: 6 }}>Tags</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {tags.map((t) => (
              <Tag
                key={t}
                label={t}
                active={selectedTags.includes(t)}
                onClick={() => toggleTag(t)}
              />
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <button
            type="button"
            className="btn"
            onClick={() => onApply && onApply({ cuisine, difficulty, tags: selectedTags })}
          >
            Apply
          </button>
          <button
            type="button"
            className="btn"
            style={{ background: 'var(--secondary)', boxShadow: 'var(--shadow-btn)' }}
            onClick={() => {
              setCuisine('');
              setDifficulty('');
              setSelectedTags([]);
              if (onReset) onReset();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </aside>
  );
}
