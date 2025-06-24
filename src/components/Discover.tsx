
import { useLanguage } from '@/contexts/LanguageContext';

const Discover = () => {
  const { t } = useLanguage();

  const brands = [
    {
      name: 'Oleagold',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400',
      description: 'Premium olive oil from ancient groves'
    },
    {
      name: 'Harissa Heritage',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
      description: 'Authentic spice blends and harissa'
    },
    {
      name: 'Carthago Olives',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400',
      description: 'Traditional olive varieties'
    }
  ];

  return (
    <section id="discover" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {t('discover.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {brand.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {brand.description}
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
                  {t('discover.learnMore')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            {t('discover.exploreAll')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discover;
