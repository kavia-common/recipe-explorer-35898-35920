import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Rating displays a 5-star rating visualization with numeric value.
 */
export default function Rating({ value = 0, outOf = 5 }) {
  const stars = Array.from({ length: outOf }).map((_, i) => {
    const filled = i + 1 <= Math.round(value);
    return (
      <span key={i} aria-hidden="true" style={{ color: filled ? 'var(--secondary)' : 'var(--border)' }}>
        ★
      </span>
    );
  });

  return (
    <div aria-label={`Rating: ${value} out of ${outOf}`} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <div style={{ display: 'flex', gap: 2, fontSize: 14, lineHeight: 1 }}>{stars}</div>
      <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>{value.toFixed(1)}</span>
    </div>
  );
}
