import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { categories } from '../data/categories';

export default function Voilages() {
  const category = categories.find(cat => cat.id === 'voilages')!;

  return (
    <div className="min-h-screen bg-stone-50">
      <Header activeCategory="" setActiveCategory={() => {}} categories={categories} />

      <div className="container mx-auto px-4 py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour à l'accueil
        </Link>

        <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-4">
          {category.title}
        </h1>

        <p className="text-lg text-stone-600 mb-12 max-w-3xl">
          {category.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.images.map((image, index) => (
            <div
              key={index}
              className="aspect-[4/5] overflow-hidden rounded-lg group"
            >
              <img
                src={image}
                alt={`${category.name} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
