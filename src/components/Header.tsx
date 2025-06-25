
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMarksDropdownOpen, setIsMarksDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const marks = [
    "Olive Oil Premium",
    "Traditional Harissa",
    "Mediterranean Spices",
    "Artisan Preserves",
    "Gourmet Selection",
  ];

  const languages = [
    { code: "en", label: "EN", name: "English" },
    { code: "fr", label: "FR", name: "Français" },
    { code: "de", label: "DS", name: "Deutsch" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setIsMarksDropdownOpen(false);
    setIsLanguageDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  const marksRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        marksRef.current &&
        !marksRef.current.contains(event.target as Node)
      ) {
        setIsMarksDropdownOpen(false);
      }
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - moved to far left */}
          <div className="flex-shrink-0 mr-8">
            <h1 className="text-2xl font-bold text-green-800 dark:text-green-400">Agrocartago</h1>
          </div>

          {/* Desktop Navigation - centered */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("story")}
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              {t("nav.contact")}
            </button>

            {/* Marks Dropdown */}
            <div ref={marksRef} className="relative">
              <button
                onClick={() => setIsMarksDropdownOpen((open) => !open)}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors focus:outline-none"
                aria-expanded={isMarksDropdownOpen}
              >
                {t("nav.marks")}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isMarksDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                  {marks.map((mark, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection("brands")}
                      className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      {mark}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Switch */}
            <div className="hidden md:flex items-center space-x-2">
              <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                aria-label="Toggle dark mode"
              />
              <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </div>

            {/* Language Selector Dropdown */}
            <div ref={languageRef} className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen((open) => !open)}
                className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
                aria-expanded={isLanguageDropdownOpen}
              >
                {languages.find((lang) => lang.code === language)?.label || "EN"}
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as "en" | "fr")}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        language === lang.code
                          ? "bg-green-50 dark:bg-green-900/50 text-green-600 dark:text-green-400 font-medium"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400"
                      }`}
                    >
                      <span className="font-medium">{lang.label}</span>
                      <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                        {lang.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-400 transition-all ${
                      isMenuOpen ? "rotate-45 translate-y-1" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-400 mt-1 transition-all ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-400 mt-1 transition-all ${
                      isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-left"
              >
                {t("nav.home")}
              </button>
              <button
                onClick={() => scrollToSection("story")}
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-left"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("footer")}
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-left"
              >
                {t("nav.contact")}
              </button>
              <button
                onClick={() => scrollToSection("brands")}
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-left"
              >
                {t("nav.marks")}
              </button>
              
              {/* Mobile Dark Mode Switch */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300 text-sm">Dark Mode</span>
                <div className="flex items-center space-x-2">
                  <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  <Switch
                    checked={theme === 'dark'}
                    onCheckedChange={toggleTheme}
                    aria-label="Toggle dark mode"
                  />
                  <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
