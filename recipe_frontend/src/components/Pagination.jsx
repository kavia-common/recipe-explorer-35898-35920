import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Pagination component with previous/next buttons and page indicators.
 * Emits onPageChange without implementing data fetching.
 */
export default function Pagination({ page = 1, totalPages = 5, onPageChange }) {
  function goTo(p) {
    if (p < 1 || p > totalPages) return;
    if (onPageChange) onPageChange(p);
  }

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <button
        type="button"
        className="btn"
        onClick={() => goTo(page - 1)}
        aria-label="Previous page"
        disabled={page <= 1}
        style={{ opacity: page <= 1 ? 0.6 : 1 }}
      >
        Prev
      </button>
      <span style={{ color: 'var(--text-muted)' }}>
        Page {page} of {totalPages}
      </span>
      <button
        type="button"
        className="btn"
        onClick={() => goTo(page + 1)}
        aria-label="Next page"
        disabled={page >= totalPages}
        style={{ opacity: page >= totalPages ? 0.6 : 1 }}
      >
        Next
      </button>
    </div>
  );
}
