import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import RecipeDetail from '../pages/RecipeDetail';
import SignIn from '../pages/SignIn';

/**
 * PUBLIC_INTERFACE
 * AppRouter defines top-level routes and renders the header navigation.
 * Wires the core pages and keeps data fetching out of scope for now.
 */
export default function AppRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
