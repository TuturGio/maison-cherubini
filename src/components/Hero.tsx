import { Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

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
          <p className="text-xl text-stone-700 mb-8 leading-relaxed">
            Découvrez notre collection de rideaux, voilages, stores et articles de décoration
            confectionnés avec soin et expertise. Un savoir-faire artisanal au service de votre intérieur.
          </p>

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
