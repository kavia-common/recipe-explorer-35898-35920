import React from 'react';
import { Routes, Route, NavLink, useParams } from 'react-router-dom';

/**
 * Simple placeholder pages to scaffold routing.
 * Replace with actual implementations during subsequent subtasks.
 */

function HomePage() {
  return (
    <main className="main">
      <section className="card" aria-labelledby="home-title">
        <h1 id="home-title">Recipe Explorer</h1>
        <p>Browse, search, and view recipes. Use the navigation to explore.</p>
      </section>
    </main>
  );
}

function RecipeDetailPage() {
  const { id } = useParams();
  return (
    <main className="main">
      <article className="card" aria-labelledby="recipe-title">
        <h1 id="recipe-title">Recipe #{id}</h1>
        <p>Detailed instructions, ingredients, and cooking tips will appear here.</p>
      </article>
    </main>
  );
}

function SignInPage() {
  return (
    <main className="main" role="main" aria-label="Sign In">
      <section className="card" style={{ maxWidth: 420, margin: '24px auto' }}>
        <h1>Sign In</h1>
        <p style={{ color: 'var(--text-muted)' }}>Enter your credentials to continue.</p>
        <form onSubmit={(e) => e.preventDefault()} aria-label="Sign in form">
          <div style={{ display: 'grid', gap: 12, marginTop: 12 }}>
            <label>
              <span style={{ display: 'block', marginBottom: 6 }}>Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                aria-label="Email"
                style={{
                  width: '100%',
                  height: 44,
                  padding: '0 12px',
                  borderRadius: 10,
                  border: '1px solid var(--border)',
                  background: 'transparent',
                  color: 'var(--text)'
                }}
              />
            </label>
            <label>
              <span style={{ display: 'block', marginBottom: 6 }}>Password</span>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                aria-label="Password"
                style={{
                  width: '100%',
                  height: 44,
                  padding: '0 12px',
                  borderRadius: 10,
                  border: '1px solid var(--border)',
                  background: 'transparent',
                  color: 'var(--text)'
                }}
              />
            </label>
            <button type="submit" className="btn" aria-label="Sign in">
              Sign In
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

/**
 * PUBLIC_INTERFACE
 * AppRouter defines top-level routes and renders a minimal header navigation.
 */
export default function AppRouter() {
  return (
    <>
      <header className="app-header" role="banner">
        <nav className="nav" aria-label="Primary">
          <span className="brand">Recipe Explorer</span>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/recipe/1">Sample Recipe</NavLink>
          <NavLink to="/signin">Sign In</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
