import React from 'react';
import SearchBar from '../components/SearchBar';
import FiltersPanel from '../components/FiltersPanel';
import RecipesGrid from '../components/RecipesGrid';
import Pagination from '../components/Pagination';
import EmptyState from '../components/EmptyState';

/**
 * PUBLIC_INTERFACE
 * Home page shows search, filters, and a grid of recipe cards with pagination.
 * All data is placeholder; no fetching implemented yet.
 */
export default function Home() {
  const [page, setPage] = React.useState(1);
  const [items] = React.useState(() =>
    Array.from({ length: 8 }).map((_, idx) => ({
      id: String(idx + 1),
      title: `Recipe ${idx + 1}`,
      description: 'A delicious sample recipe to showcase the layout.',
      rating: 3 + Math.random() * 2,
      time: `${20 + (idx % 4) * 10}m`,
      tags: idx % 2 === 0 ? ['Quick', 'Vegetarian'] : ['Budget'],
    }))
  );

  const hasItems = items && items.length > 0;

  return (
    <main className="main">
      <section style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 16 }}>
        <FiltersPanel />
        <div>
          <SearchBar onSearch={() => {}} />
          {hasItems ? (
            <>
              <RecipesGrid items={items} />
              <Pagination page={page} onPageChange={setPage} totalPages={5} />
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
    </main>
  );
}
