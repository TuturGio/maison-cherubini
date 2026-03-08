import { Phone, Mail, MapPin, Scissors } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Scissors className="w-6 h-6 text-amber-500" />
              <h3 className="text-xl font-serif font-bold text-white">Atelier Couture</h3>
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
              <a href="mailto:contact@atelier-couture.fr" className="flex items-center gap-3 hover:text-amber-500 transition-colors">
                <Mail className="w-5 h-5" />
                <span>contact@atelier-couture.fr</span>
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
          <p>&copy; 2024 Atelier Couture. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
