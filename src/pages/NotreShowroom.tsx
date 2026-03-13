import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Phone, Mail, Scissors } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function NotreShowroom() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-italiana font-bold text-stone-800 mb-8 text-center">
            Notre Showroom
          </h1>

          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <p className="text-stone-700 leading-relaxed text-lg">
                Nous vous invitons à découvrir notre showroom où vous pourrez explorer notre vaste collection de tissus, voir nos réalisations et échanger avec notre équipe sur vos projets de décoration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Scissors className="w-4 h-4 text-amber-700" />
                      <h3 className="font-semibold text-stone-800">Adresse</h3>
                    </div>
                    <p className="text-stone-600">
                      123 Avenue de la Décoration<br />
                      06000 Nice<br />
                      France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Scissors className="w-4 h-4 text-amber-700" />
                      <h3 className="font-semibold text-stone-800">Horaires d'ouverture</h3>
                    </div>
                    <p className="text-stone-600">
                      Lundi - Vendredi : 9h00 - 18h00<br />
                      Samedi : 10h00 - 17h00<br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Scissors className="w-4 h-4 text-amber-700" />
                      <h3 className="font-semibold text-stone-800">Téléphone</h3>
                    </div>
                    <p className="text-stone-600">
                      +33 (0)4 93 00 00 00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Scissors className="w-4 h-4 text-amber-700" />
                      <h3 className="font-semibold text-stone-800">Email</h3>
                    </div>
                    <p className="text-stone-600">
                      contact@maisoncherubini.fr
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-italiana font-bold text-amber-700">
                Visite sur rendez-vous
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Pour vous garantir un accueil personnalisé et un temps d'échange privilégié avec nos conseillers, nous vous recommandons de prendre rendez-vous avant votre visite. Ainsi, nous pourrons préparer les échantillons et références qui correspondent à votre projet.
              </p>
            </div>

            <div className="pt-8 flex justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-amber-700 text-white rounded-lg font-medium hover:bg-amber-800 transition-colors"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-video bg-stone-200 flex items-center justify-center">
              <p className="text-stone-500">Plan d'accès</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
