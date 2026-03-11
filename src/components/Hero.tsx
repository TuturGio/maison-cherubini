import { Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handwrittenStyle = { 
  fontFamily: "'Playwrite NL', cursive",
  lineHeight: '1.8'
};

  return (
    <div className="relative h-[500px] bg-gradient-to-br from-amber-50 to-stone-100 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-italiana font-bold text-stone-800 mb-6 leading-tight">
            Décoration Textile sur Mesure
          </h2>
          
          <div className="text-md text-stone-700 mb-8 leading-relaxed force-playwrite bg-white/60 backdrop-blur-sm p-6 rounded-lg">
          <p className="mb-4">
              "Il y a des marques qui naissent d'une idée. La nôtre naît d'une rencontre.
            </p>

            <p className="mb-4">
              deux femmes,<br />
              deux énergies,<br />
              deux sensibilités,
            </p>

            <p className="mb-4">
              Une même exigence.
            </p>

            <p>
              Nous ne sommes pas identiques. Et c'est précisément là que tout commence."
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">Nous contacter</span>
            </button>
            <a
              href="mailto:contact@atelier-couture.fr"
              className="inline-flex items-center gap-2 bg-white text-stone-800 px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors border border-stone-300"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Demander un devis</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
