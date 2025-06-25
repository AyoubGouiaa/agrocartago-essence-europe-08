
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('why.premium'),
      description: 'Carefully selected products meeting the highest European standards',
      icon: '🏆'
    },
    {
      title: t('why.heritage'),
      description: 'Traditional methods passed down through generations',
      icon: '🌿'
    },
    {
      title: t('why.certified'),
      description: 'All products certified for quality and authenticity',
      icon: '✅'
    }
  ];

  return (
    <section 
      className="py-20 bg-white bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(src/components/ui/img/Products.jpg)'
      }}
    >
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-85"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('why.title')}
          </h2>
          <p className="text-xl text-green-600 max-w-3xl mx-auto">
            {t('why.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white/90 hover:bg-white"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
