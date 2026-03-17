import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface InfoSlide {
  id: string;
  title: string;
  image: string;
  route: string;
}

const slides: InfoSlide[] = [
  {
    id: 'histoire',
    title: 'Notre Histoire',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    route: '/notre-histoire',
  },
  {
    id: 'showroom',
    title: 'Notre Showroom',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
    route: '/notre-showroom',
  },
  {
    id: 'contact',
    title: 'Contact',
    image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg',
    route: '/contact',
  },
];

export default function InfoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const itemsPerView = 3;
  const maxIndex = Math.max(0, slides.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const navigateToPage = (route: string) => {
    navigate(route);
  };

  return (
    <div className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-italiana text-center text-stone-800 mb-16">Découvrez-nous</h2>

        <div className="relative">
          {maxIndex > 0 && (
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-stone-700 hover:bg-amber-700 hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-stone-700 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-shrink-0 group cursor-pointer"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                  onClick={() => navigateToPage(slide.route)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg border-2 border-stone-200">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-0 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                      <h3 className="text-white text-3xl font-italiana text-center px-6 uppercase tracking-wide">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {maxIndex > 0 && (
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-stone-700 hover:bg-amber-700 hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-stone-700 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {maxIndex > 0 && (
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
        )}
      </div>
    </div>
  );
}
