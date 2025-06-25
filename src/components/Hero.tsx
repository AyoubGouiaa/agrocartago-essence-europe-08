
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "src/components/ui/img/Olive oil.jpg",
    "src/components/ui/img/Harissa.jpg",
    "src/components/ui/img/Date.jpg",
    "src/components/ui/img/Olives.jpg",
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
              index === currentImageIndex ? "opacity-90" : "opacity-0"
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
            <span className="bg-gradient-to-r from-white to-[#fccf81] bg-clip-text text-transparent ">
              {t("hero.title")} 🇹🇳
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-[#fccf81] bg-clip-text text-transparent">
              {t("hero.subtitle")}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("brands")}
              className="bg-[#f5b74c] hover:bg-[#a37629] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {t("hero.discover")}
            </button>
            <button
              onClick={() => scrollToSection("story")}
              className="bg-[#de9c2a] hover:bg-[#87601c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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
