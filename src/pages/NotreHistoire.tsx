import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function NotreHistoire() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-italiana font-bold text-stone-800 mb-8 text-center">
            Notre Histoire
          </h1>

          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-italiana font-bold text-amber-700">
                Une passion familiale depuis des générations
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Maison Cherubini est née d'une passion transmise de génération en génération pour l'art de la décoration textile. Fondée il y a plusieurs décennies, notre entreprise familiale a su préserver le savoir-faire artisanal tout en s'adaptant aux tendances contemporaines.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-italiana font-bold text-amber-700">
                L'excellence artisanale
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Chaque pièce que nous créons est le fruit d'un travail minutieux et d'une attention particulière portée aux détails. Nos artisans, formés aux techniques traditionnelles, travaillent avec les plus beaux tissus pour donner vie à vos projets de décoration.
              </p>
              <p className="text-stone-700 leading-relaxed">
                De la confection de rideaux sur mesure à la création de banquettes élégantes, en passant par nos réalisations pour le secteur du yachting, nous mettons notre expertise au service de votre confort et de votre bien-être.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-italiana font-bold text-amber-700">
                Notre engagement
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Chez Maison Cherubini, nous croyons que chaque intérieur mérite une décoration unique qui reflète la personnalité de ses occupants. C'est pourquoi nous accompagnons nos clients à chaque étape de leur projet, du choix des tissus à la pose finale, en garantissant un résultat à la hauteur de leurs attentes.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Notre showroom vous accueille pour découvrir notre collection de tissus et échantillons, et pour échanger avec notre équipe sur vos projets de décoration.
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
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
