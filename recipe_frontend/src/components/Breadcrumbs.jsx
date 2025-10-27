import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Breadcrumbs renders a simple breadcrumb trail.
 */
export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 12, color: 'var(--text-muted)' }}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx}>
            {item.to ? (
              <Link to={item.to} style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: 'var(--text)' }}>{item.label}</span>
            )}
            {!isLast && <span style={{ margin: '0 8px' }}>/</span>}
          </span>
        );
      })}
    </nav>
  );
}
