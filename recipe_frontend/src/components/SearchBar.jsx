import React from 'react';

/**
 * PUBLIC_INTERFACE
 * SearchBar provides a text input and optional submit button for querying recipes.
 * Does not implement data fetching; emits onSearch callback if provided.
 */
export default function SearchBar({ placeholder = "Search recipes...", onSearch }) {
  const [value, setValue] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (onSearch) onSearch(value);
  }

  return (
    <form onSubmit={handleSubmit} role="search" aria-label="Recipe search" style={{ marginBottom: 16 }}>
      <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center',
      }}>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          aria-label="Search recipes"
          style={{
            flex: 1,
            height: 44,
            borderRadius: 10,
            border: '1px solid var(--border)',
            background: 'var(--surface)',
            color: 'var(--text)',
            padding: '0 12px',
          }}
        />
        <button type="submit" className="btn" aria-label="Search">
          Search
        </button>
      </div>
    </form>
  );
}
