import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import NotreHistoire from './pages/NotreHistoire';
import NotreShowroom from './pages/NotreShowroom';
import { categories } from './data/categories';

function Home() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notre-histoire" element={<NotreHistoire />} />
        <Route path="/notre-showroom" element={<NotreShowroom />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
