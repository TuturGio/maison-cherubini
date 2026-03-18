import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryCarousel from './components/CategoryCarousel';
import InfoCarousel from './components/InfoCarousel';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import NotreHistoire from './pages/NotreHistoire';
import NotreShowroom from './pages/NotreShowroom';
import Rideaux from './pages/Rideaux';
import Voilages from './pages/Voilages';
import Stores from './pages/Stores';
import Yachting from './pages/Yachting';
import Banquettes from './pages/Banquettes';
import Echantillons from './pages/Echantillons';
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

      {/* Desktop version */}
      <div className="hidden md:block">
        <CategoryCarousel categories={categories} />
        <InfoCarousel />
      </div>

      {/* Mobile version */}
      <div className="md:hidden">
        <CategoryCarousel categories={categories} />

        {/* Découvrez-nous Section */}
        <div className="px-4 pt-8 pb-4">
          <h2 className="text-2xl font-italiana font-bold text-stone-800">
            Découvrez-nous
          </h2>
        </div>

        <div className="px-4 pb-8 space-y-4">
          <a
            href="/notre-histoire"
            className="block rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="h-48 bg-gradient-to-br from-stone-600 to-stone-700 flex items-center justify-center">
              <h3 className="text-2xl font-italiana font-bold text-white uppercase">
                Notre Histoire
              </h3>
            </div>
          </a>
          <a
            href="/notre-showroom"
            className="block rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="h-48 bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
              <h3 className="text-2xl font-italiana font-bold text-white uppercase">
                Notre Showroom
              </h3>
            </div>
          </a>
        </div>
      </div>

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
        <Route path="/rideaux" element={<Rideaux />} />
        <Route path="/voilages" element={<Voilages />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/yachting" element={<Yachting />} />
        <Route path="/banquettes" element={<Banquettes />} />
        <Route path="/echantillons" element={<Echantillons />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notre-histoire" element={<NotreHistoire />} />
        <Route path="/notre-showroom" element={<NotreShowroom />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
