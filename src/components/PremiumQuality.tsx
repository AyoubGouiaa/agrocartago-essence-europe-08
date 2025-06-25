
import { useLanguage } from '@/contexts/LanguageContext';

const PremiumQuality = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="py-20 bg-gray-50 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400)'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            🏆 {t('quality.title')} ⭐
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            🌿 {t('quality.description')} 🫒
          </p>
        </div>
      </div>
    </section>
  );
};

export default PremiumQuality;
