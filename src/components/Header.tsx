import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Scissors, ChevronDown } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  title: string;
  description: string;
  images: string[];
}

interface HeaderProps {
  activeCategory?: string;
  setActiveCategory?: (id: string) => void;
  categories?: Category[];
}

export default function Header({ activeCategory, setActiveCategory, categories = [] }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  const scrollToCategory = (categoryId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToCategoryOnPage(categoryId);
      }, 100);
    } else {
      scrollToCategoryOnPage(categoryId);
    }
    setMobileMenuOpen(false);
    setSubmenuOpen(false);
    setMobileSubmenuOpen(false);
  };

  const scrollToCategoryOnPage = (categoryId: string) => {
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
    if (setActiveCategory) {
      setActiveCategory(categoryId);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="hidden md:flex flex-col items-center py-8">
          <div
            className="flex items-center space-x-4 mb-8 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Scissors className="w-12 h-12 text-amber-700" />
            <div>
              <h1 className="text-4xl font-italiana font-bold text-stone-800">Maison Cherubini</h1>
              <p className="text-sm text-stone-600 text-center">Décoration sur-mesure</p>
            </div>
          </div>

          <div className="relative w-full flex justify-center">
            <nav className="flex items-center space-x-12">
              <div
                className="relative"
                onMouseEnter={() => setSubmenuOpen(true)}
                onMouseLeave={() => setSubmenuOpen(false)}
              >
                <button
                  onClick={() => navigate('/')}
                  className={`flex items-center space-x-1 text-sm uppercase tracking-wide transition-colors hover:text-amber-700 ${
                    location.pathname === '/' ? 'text-amber-700' : 'text-stone-700'
                  }`}
                >
                  <span>Nos réalisations</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {submenuOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[200px] border border-stone-100">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => scrollToCategory(category.id)}
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-amber-50 hover:text-amber-700 ${
                          activeCategory === category.id ? 'text-amber-700 bg-amber-50' : 'text-stone-700'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => navigate('/notre-histoire')}
                className={`text-sm uppercase tracking-wide transition-colors hover:text-amber-700 ${
                  location.pathname === '/notre-histoire' ? 'text-amber-700' : 'text-stone-700'
                }`}
              >
                Notre histoire
              </button>

              <button
                onClick={() => navigate('/notre-showroom')}
                className={`text-sm uppercase tracking-wide transition-colors hover:text-amber-700 ${
                  location.pathname === '/notre-showroom' ? 'text-amber-700' : 'text-stone-700'
                }`}
              >
                Notre showroom
              </button>

              <button
                onClick={() => navigate('/contact')}
                className={`text-sm uppercase tracking-wide transition-colors hover:text-amber-700 ${
                  location.pathname === '/contact' ? 'text-amber-700' : 'text-stone-700'
                }`}
              >
                Contact
              </button>
            </nav>

            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-2 bg-amber-700 text-white rounded-lg text-sm font-medium hover:bg-amber-800 transition-colors whitespace-nowrap"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden flex items-center justify-between h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => {
              navigate('/');
              setMobileMenuOpen(false);
            }}
          >
            <Scissors className="w-8 h-8 text-amber-700" />
            <div>
              <h1 className="text-2xl font-italiana font-bold text-stone-800">Maison Cherubini</h1>
              <p className="text-xs text-stone-600">Décoration sur-mesure</p>
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
            <div>
              <button
                onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                className="flex items-center justify-between w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 rounded"
              >
                <span>Nos réalisations</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileSubmenuOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => scrollToCategory(category.id)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-amber-50 rounded ${
                        activeCategory === category.id ? 'text-amber-700 bg-amber-50' : 'text-stone-700'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                navigate('/notre-histoire');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-amber-50 rounded ${
                location.pathname === '/notre-histoire' ? 'text-amber-700 bg-amber-50' : 'text-stone-700'
              }`}
            >
              Notre histoire
            </button>

            <button
              onClick={() => {
                navigate('/notre-showroom');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-amber-50 rounded ${
                location.pathname === '/notre-showroom' ? 'text-amber-700 bg-amber-50' : 'text-stone-700'
              }`}
            >
              Notre showroom
            </button>

            <button
              onClick={() => {
                navigate('/contact');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-amber-50 rounded ${
                location.pathname === '/contact' ? 'text-amber-700 bg-amber-50' : 'text-stone-700'
              }`}
            >
              Contact
            </button>

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
