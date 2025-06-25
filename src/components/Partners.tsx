
import { useLanguage } from '@/contexts/LanguageContext';

const Partners = () => {
  const { t } = useLanguage();

  const partners = [
    { name: 'Premium Foods EU', logo: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200', emoji: '🇪🇺' },
    { name: 'Mediterranean Imports', logo: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=200', emoji: '🌊' },
    { name: 'European Gourmet', logo: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200', emoji: '🍽️' },
    { name: 'Specialty Foods Co', logo: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=200', emoji: '✨' },
  ];

  return (
    <section 
      className="py-20 bg-gray-50 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url(src/components/ui/img/Logo1.jpg)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🤝 {t('partners.title')}
          </h2>
          <p className="text-lg text-gray-600">Trusted partnerships across Europe 🌍</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center"
            >
              <div className="text-2xl mb-2">{partner.emoji}</div>
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-20 h-20 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-300 mb-3"
              />
              <p className="text-sm text-gray-600 text-center">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
