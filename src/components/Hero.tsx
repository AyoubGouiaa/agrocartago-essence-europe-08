import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dBWyUGm4BQ1k8B7UC7JBTSfBkRu-zFPb3g&s",
    "https://www.tatasimplybetter.com/cdn/shop/files/olive_1080x1080_2e1eabf2-2c28-4046-873c-5a9a3ae51a14_2048x2048.jpg?v=1734608321",
    "https://www.greendna.in/cdn/shop/products/oliveoil_600x.jpg?v=1738823916",
    "https://www.cateroils.co.uk/wp-content/uploads/2022/01/olives-with-olive-oil.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtW5JJ8Y6RQjbB9Ic8DrbB3AKJEwjN7_dBpQ&s",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-yellow-50"
    >
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Mediterranean landscape ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-60" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Add a dark overlay to improve text readability */}
      <div className="absolute inset-0 z-5 bg-black/20"></div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white shadow-lg"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-green-800">{t("hero.title")}</span>
            <br />
            <span className="text-yellow-600">{t("hero.subtitle")}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("brands")}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {t("hero.discover")}
            </button>
            <button
              onClick={() => scrollToSection("story")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {t("hero.story")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
