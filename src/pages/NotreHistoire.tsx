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

          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-6">
            <p className="text-stone-700 leading-relaxed">
              Tout a commencé à Marseille, là où j'ai grandi.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Depuis toujours, je suis attirée par les matières, les textures, les détails qui font la différence. Passionnée de couture et de création textile depuis l'enfance, j'ai décidé de quitter ma ville pour me former à Paris à la confection de lingerie et de maillots de bain.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Pendant 4 ans, j'ai travaillé chez Pain de Sucre, puis 3 ans chez Noo en tant que prototypiste. Ces expériences m'ont permis d'acquérir une exigence du détail, la maîtrise des matières et le goût du travail sur mesure.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Mais au fond de moi, l'envie d'entreprendre ne m'a jamais quittée.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Je crois que j'attendais la bonne rencontre pour me lancer.<br />
              Et puis il y a eu Chloé.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Très vite, une évidence : une vision commune, des valeurs partagées et une complémentarité naturelle. De rendez-vous en rendez-vous, notre idée a pris forme. Moi, passionnée de matières, de couture et de création. Chloé, animée par la décoration et dotée de solides compétences en développement d'entreprise.
            </p>

            <p className="text-stone-700 leading-relaxed font-medium">
              La question s'est imposée :<br />
              Et si on créait quelque chose ensemble ?
            </p>

            <p className="text-stone-700 leading-relaxed">
              L'opportunité d'un local a été le déclic. Nous avons quitté nos emplois respectifs, et l'aventure a commencé.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Aujourd'hui, à travers notre entreprise de décoration sur mesure, nous proposons bien plus qu'un produit : Nous offrons un accompagnement de A à Z.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Notre ambition est de faire naître un projet, de l'idée à la réalisation, en créant des espaces qui racontent une histoire — Celle de nos clients.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Passionnées par les matières, les couleurs et les textures, nous avons également développé une collection de coussins, matelas et pièces textiles, entièrement personnalisables et réalisables sur mesure.
            </p>

            <p className="text-stone-700 leading-relaxed font-medium">
              Chaque projet est unique. Et c'est cette singularité que nous voulons faire vivre.
            </p>

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
