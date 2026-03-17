import { useEffect } from 'react';
import { Phone, Mail, MapPin, Scissors, Instagram } from 'lucide-react';

export default function Footer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <footer>
      {/* Instagram Feed Section */}
      <div className="bg-stone-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-italiana font-bold text-stone-800 mb-2">
              Suivez-nous sur Instagram
            </h3>
            <a
              href="https://www.instagram.com/maison_cherubini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center gap-1"
            >
              <Instagram className="w-5 h-5" />
              @maison_cherubini
            </a>
          </div>

          <div className="elfsight-app-d11dfb73-d99e-449a-a35b-c006ca0e0145" data-elfsight-app-lazy></div>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/maison_cherubini"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              Voir plus sur Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section with dark background */}
      <div className="bg-stone-800 text-stone-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Scissors className="w-6 h-6 text-amber-500" />
              <h3 className="text-xl font-italiana font-bold text-white">Maison Cherubini</h3>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Spécialiste de la décoration textile sur mesure depuis plus de 20 ans.
              Nous créons des pièces uniques qui subliment votre intérieur.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+33123456789" className="flex items-center gap-3 hover:text-amber-500 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+33 1 23 45 67 89</span>
              </a>
              <a href="mailto:bonjour@maison-cherubini.fr" className="flex items-center gap-3 hover:text-amber-500 transition-colors">
                <Mail className="w-5 h-5" />
                <span>bonjour@maison-cherubini.fr</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>123 Rue de la Couture<br />75001 Paris, France</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Horaires</h4>
            <div className="space-y-2 text-stone-400">
              <p><span className="font-medium text-white">Lundi - Vendredi:</span> 9h - 18h</p>
              <p><span className="font-medium text-white">Samedi:</span> 10h - 17h</p>
              <p><span className="font-medium text-white">Dimanche:</span> Fermé</p>
            </div>
          </div>
        </div>

          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-500">
            <p>&copy; {new Date().getFullYear()} Maison Cherubini. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
