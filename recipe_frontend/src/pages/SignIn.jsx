import React from 'react';

/**
 * PUBLIC_INTERFACE
 * SignIn page renders a basic form scaffold without handling auth.
 */
export default function SignIn() {
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
