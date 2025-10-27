import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Loader shows a simple spinner styled with theme colors.
 */
export default function Loader({ label = 'Loading...' }) {
  return (
    <div role="status" aria-live="polite" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: '50%',
          border: '2px solid color-mix(in oklab, var(--primary), #fff 60%)',
          borderTopColor: 'var(--primary)',
          animation: 'spin 1s linear infinite',
        }}
      />
      <span style={{ color: 'var(--text-muted)' }}>{label}</span>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
