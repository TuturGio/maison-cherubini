import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
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

function App() {
  // Remplace 'NOM-DE-TON-REPO' par le nom exact de ton projet sur GitHub
  return (
    <BrowserRouter basename="/maison-cherubini">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* Cette route capture les erreurs et renvoie à l'accueil si besoin */}
        <Route path="*" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  );
}
