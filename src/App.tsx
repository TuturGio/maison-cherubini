import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { categories } from './data/categories';

function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  return (
    <div className="min-h-screen bg-stone-50">
      <Header
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
      />
      <Hero />

      <main className="container mx-auto px-4 py-16">
        {categories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
          />
        ))}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
