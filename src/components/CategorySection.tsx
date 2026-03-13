import { Scissors } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  title: string;
  description: string;
  images: string[];
}

interface CategorySectionProps {
  category: Category;
}

export default function CategorySection({ category }: CategorySectionProps) {
  return (
    <section id={category.id} className="mb-24 scroll-mt-24">
      <div className="max-w-4xl mb-12">
        <div className="flex items-center gap-4 mb-4">
          <Scissors className="w-8 h-8 text-amber-700 flex-shrink-0" />
          <h3 className="text-4xl font-italiana font-bold text-stone-800">
            {category.title}
          </h3>
        </div>
        <p className="text-lg text-stone-600 leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={image}
              alt={`${category.name} ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
