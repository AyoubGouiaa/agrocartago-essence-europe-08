
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      id="footer" 
      className="bg-gray-900 text-white py-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url(src/components/ui/img/Products.jpg)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Slogan */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">🌿 Agrocartago</h3>
            <p className="text-gray-300 text-lg">
              {t('footer.slogan')} 🇹🇳➡️🇪🇺
            </p>
          </div>

          {/* Center Column - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">🔗 {t('footer.quickLinks')}</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="block text-gray-300 hover:text-green-400 transition-colors"
              >
                🏠 {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('story')}
                className="block text-gray-300 hover:text-green-400 transition-colors"
              >
                📖 {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('footer')}
                className="block text-gray-300 hover:text-green-400 transition-colors"
              >
                📧 {t('nav.contact')}
              </button>
            </div>
          </div>

          {/* Right Column - Our Brands & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">🏺 {t('footer.ourBrands')}</h4>
            <div className="space-y-2 mb-6">
              <p className="text-gray-300">🫒 Oleagold</p>
              <p className="text-gray-300">🌶️ Harissa Heritage</p>
              <p className="text-gray-300">🌿 Carthago Olives</p>
              <p className="text-gray-300">✨ Tunis Gold</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors text-2xl"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-600 transition-colors text-2xl"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-pink-400 transition-colors text-2xl"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
