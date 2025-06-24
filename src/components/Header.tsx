
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-green-800">Agrocartago</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('footer')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {t('nav.contact')}
            </button>
            <button
              onClick={() => scrollToSection('brands')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {t('nav.marks')}
            </button>
          </nav>

          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  language === 'en'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  language === 'fr'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                FR
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('story')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('footer')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                {t('nav.contact')}
              </button>
              <button
                onClick={() => scrollToSection('brands')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                {t('nav.marks')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
