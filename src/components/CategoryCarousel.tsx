import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  title: string;
  description: string;
  images: string[];
}

interface CategoryCarouselProps {
  categories: Category[];
}

export default function CategoryCarousel({ categories }: CategoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const itemsPerView = 3;
  const maxIndex = Math.max(0, categories.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const navigateToCategory = (categoryId: string) => {
    const routeMap: { [key: string]: string } = {
      'rideaux': '/rideaux',
      'voilages': '/voilages',
      'stores': '/stores',
      'yachting': '/yachting',
      'banquettes': '/banquettes',
      'echantillons': '/echantillons',
    };
    navigate(routeMap[categoryId] || '/');
  };

  return (
    <div className="w-full py-20 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-italiana text-center text-stone-800 mb-16">Nos Réalisations</h2>

        <div className="relative">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-stone-700 hover:bg-amber-700 hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-stone-700 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex-shrink-0 group cursor-pointer"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                  onClick={() => navigateToCategory(category.id)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg border-2 border-stone-200">
                    <img
                      src={category.images[0]}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-0 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                      <h3 className="text-white text-3xl font-italiana text-center px-6 uppercase tracking-wide">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-stone-700 hover:bg-amber-700 hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-stone-700 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-amber-700 w-8' : 'bg-stone-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
