
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Brands = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600",
      alt: "Premium olive oil products"
    },
    {
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600",
      alt: "Tunisian landscape"
    },
    {
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600",
      alt: "Mediterranean herbs"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="brands" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('brands.title')}
            </h2>
            <p className="text-xl text-green-600 mb-6">
              {t('brands.subtitle')}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {t('brands.description')}
            </p>
          </div>

          {/* Right Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Buy Now Button */}
            <div className="mt-6 text-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                {t('brands.buyNow')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
