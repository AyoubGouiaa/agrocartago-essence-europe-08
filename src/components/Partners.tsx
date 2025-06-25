
import { useLanguage } from '@/contexts/LanguageContext';

const Partners = () => {
  const { t } = useLanguage();

  const partners = [
    { name: '🍽️ Premium Foods EU', logo: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200' },
    { name: '🌊 Mediterranean Imports', logo: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=200' },
    { name: '👨‍🍳 European Gourmet', logo: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200' },
    { name: '🥘 Specialty Foods Co', logo: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=200' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            🤝 {t('partners.title')} 🌟
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-20 h-20 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
