import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Tag renders a small pill label with active styling.
 */
export default function Tag({ label, active = false, onClick, size = 'md' }) {
  const paddings = size === 'sm' ? '2px 8px' : '4px 10px';
  const fontSize = size === 'sm' ? 12 : 13;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="tag"
      style={{
        border: `1px solid ${active ? 'color-mix(in oklab, var(--primary), #000 10%)' : 'var(--border)'}`,
        background: active ? 'var(--primary-ghost)' : 'transparent',
        color: active ? 'var(--primary)' : 'var(--text)',
        borderRadius: 999,
        padding: paddings,
        fontSize,
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      {label}
    </button>
  );
}
