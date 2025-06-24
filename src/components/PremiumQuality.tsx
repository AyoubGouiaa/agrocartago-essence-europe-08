
import { useLanguage } from '@/contexts/LanguageContext';

const PremiumQuality = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('quality.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('quality.description')}
          </p>
          
          {/* Decorative olive branch */}
          <div className="mt-8 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400"
              alt="Olive branches"
              className="w-32 h-20 object-cover rounded-lg opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumQuality;
