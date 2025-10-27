import React from 'react';

/**
 * PUBLIC_INTERFACE
 * EmptyState shows a placeholder message and optional action.
 */
export default function EmptyState({ title = 'No recipes found', description = 'Try adjusting your filters or search terms.', action }) {
  return (
    <div className="card" style={{ textAlign: 'center', padding: 24 }}>
      <div style={{
        width: 64,
        height: 64,
        margin: '0 auto 12px',
        borderRadius: 16,
        background: 'var(--primary-ghost)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--primary)',
        fontWeight: 700
      }}>
        🍽️
      </div>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ color: 'var(--text-muted)', marginTop: 6 }}>{description}</p>
      {action}
    </div>
  );
}
