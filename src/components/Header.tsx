import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  title: string;
  description: string;
  images: string[];
}

interface HeaderProps {
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  categories: Category[];
}

export default function Header({ activeCategory, setActiveCategory, categories }: HeaderProps) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToCategory = (categoryId: string) => {
    if (categoryId === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(categoryId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    setActiveCategory(categoryId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex flex-col items-center py-6">
          <div className="flex items-center space-x-3 mb-6">
            <Scissors className="w-8 h-8 text-amber-700" />
            <div>
              <h1 className="text-2xl font-italiana font-bold text-stone-800">Maison Cherubini</h1>
              <p className="text-xs text-stone-600 text-center">Décoration sur mesure</p>
            </div>
          </div>

          <div className="relative w-full flex justify-center">
            <nav className="flex items-center space-x-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                    activeCategory === category.id ? 'text-amber-700' : 'text-stone-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>

            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <button
                onClick={() => navigate('/contact')}
                className="px-4 py-1.5 bg-amber-700 text-white rounded-lg text-sm font-medium hover:bg-amber-800 transition-colors whitespace-nowrap"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <Scissors className="w-8 h-8 text-amber-700" />
            <div>
              <h1 className="text-2xl font-italiana font-bold text-stone-800">Maison Cherubini</h1>
              <p className="text-xs text-stone-600">Décoration sur mesure</p>
            </div>
          </div>

          <button
            className="text-stone-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-amber-50 rounded ${
                  activeCategory === category.id ? 'text-amber-700 bg-amber-50' : 'text-stone-700'
                }`}
              >
                {category.name}
              </button>
            ))}
            <button
              onClick={() => {
                navigate('/contact');
                setMobileMenuOpen(false);
              }}
              className="block w-full px-4 py-2 mt-4 bg-amber-700 text-white rounded-lg font-medium hover:bg-amber-800 transition-colors"
            >
              Prendre rendez-vous
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
