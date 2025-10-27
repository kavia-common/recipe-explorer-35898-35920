import React from 'react';
import { NavLink, Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Header renders the top navigation bar with branding and primary nav links.
 * Uses Ocean Professional theme variables for styling via global CSS classes.
 */
export default function Header() {
  return (
    <header className="app-header" role="banner">
      <nav className="nav" aria-label="Primary">
        <Link to="/" className="brand" aria-label="Go to Home">Recipe Explorer</Link>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
      </nav>
    </header>
  );
}
