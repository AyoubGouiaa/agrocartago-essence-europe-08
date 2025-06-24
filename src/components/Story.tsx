
import { useLanguage } from '@/contexts/LanguageContext';

const Story = () => {
  const { t } = useLanguage();

  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600"
              alt="Mediterranean landscape"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-800/20 to-transparent rounded-lg"></div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('story.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our journey began in the heart of Tunisia, where the Mediterranean sun has blessed our lands for centuries. From the ancient olive groves of Sfax to the bustling spice markets of Tunis, we have carefully cultivated relationships with local producers who share our passion for authentic, premium quality products.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Today, we bridge the gap between Tunisia's rich culinary heritage and Europe's sophisticated markets, bringing you products that tell stories of tradition, craftsmanship, and Mediterranean excellence.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              {t('story.readMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
