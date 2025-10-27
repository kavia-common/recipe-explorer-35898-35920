import React from 'react';
import './App.css';
import './theme/theme.css';
import AppRouter from './routes/AppRouter';

/**
 * PUBLIC_INTERFACE
 * App is the root component that renders the global layout and router.
 * It applies the Ocean Professional theme via theme.css (CSS variables).
 */
function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
