
import { useLanguage } from '@/contexts/LanguageContext';

const PremiumQuality = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="py-20 bg-white bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(src/components/ui/img/Logo1.jpg)'
      }}
    >
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('quality.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('quality.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PremiumQuality;
