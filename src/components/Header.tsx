
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMarksDropdownOpen, setIsMarksDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsMarksDropdownOpen(false);
  };

  const marks = [
    'Olive Oil Premium',
    'Traditional Harissa',
    'Mediterranean Spices',
    'Artisan Preserves',
    'Gourmet Selection'
  ];

  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'de', label: 'DS', name: 'Deutsch' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-green-800">Agrocartago</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
            
            {/* Our Marks Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsMarksDropdownOpen(true)}
              onMouseLeave={() => setIsMarksDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                {t('nav.marks')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isMarksDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {marks.map((mark, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection('brands')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      {mark}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Language Selector Dropdown */}
          <div className="flex items-center space-x-4">
            <div 
              className="relative"
              onMouseEnter={() => setIsLanguageDropdownOpen(true)}
              onMouseLeave={() => setIsLanguageDropdownOpen(false)}
            >
              <button className="flex items-center bg-gray-100 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                {languages.find(lang => lang.code === language)?.label || 'EN'}
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as 'en' | 'fr')}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        language === lang.code
                          ? 'bg-green-50 text-green-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                      }`}
                    >
                      <span className="font-medium">{lang.label}</span>
                      <span className="ml-2 text-xs text-gray-500">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
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
