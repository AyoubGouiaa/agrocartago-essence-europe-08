
import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'en' | 'fr' | 'de';
  setLanguage: (lang: 'en' | 'fr' | 'de') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.marks': 'Our Marks',
    
    // Hero
    'hero.title': 'Tunisian Excellence,',
    'hero.subtitle': 'Share with Europe',
    'hero.description': 'Discover the authentic flavors of Tunisia through our premium selection of olive oils, harissa, and traditional delicacies',
    'hero.discover': 'Discover all our brands !',
    'hero.story': 'Our story',
    
    // Brands
    'brands.title': 'Our Premium Tunisian Brands',
    'brands.subtitle': 'Discover our carefully curated collection of authentic Tunisian products',
    'brands.description': 'Each of our brands tells a story of tradition, quality, and authentic Tunisian heritage. From the golden olive groves of Sfax to the spice markets of Tunis, we bring you the finest products that have been perfected over generations.',
    'brands.buyNow': 'Buy Now!',
    
    // Premium Quality
    'quality.title': 'Premium Quality',
    'quality.description': 'First cold pressing directly by mechanical extraction to ensure superior quality.',
    
    // Why Choose Us
    'why.title': 'Why Choose Agrocartago?',
    'why.subtitle': 'We are your trusted partner for authentic Tunisian products in European markets',
    'why.premium': 'Premium Quality',
    'why.heritage': 'Authentic Heritage',
    'why.certified': 'Certified Products',
    
    // Stats
    'stats.years': 'Years of Excellence',
    'stats.brands': 'Premium Brands',
    'stats.countries': 'European Countries',
    'stats.clients': 'Satisfied Clients',
    
    // Discover
    'discover.title': 'Discover',
    'discover.learnMore': 'Learn More',
    'discover.exploreAll': 'Explore All Brands',
    
    // Story
    'story.title': 'Our Story, Rooted in the Mediterranean',
    'story.readMore': 'Read More',
    
    // Partners
    'partners.title': 'Our Partners',
    
    // Footer
    'footer.slogan': 'Bringing the finest Tunisian flavors to Europe',
    'footer.quickLinks': 'Quick Links',
    'footer.ourBrands': 'Our Brands',
    'footer.copyright': '© 2025 Agrocartago. All rights reserved.',
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.marks': 'Nos Marques',
    
    // Hero
    'hero.title': 'Excellence Tunisienne,',
    'hero.subtitle': 'Partagée avec l\'Europe',
    'hero.description': 'Découvrez les saveurs authentiques de la Tunisie à travers notre sélection premium d\'huiles d\'olive, harissa et délices traditionnels',
    'hero.discover': 'Découvrez toutes nos marques !',
    'hero.story': 'Notre histoire',
    
    // Brands
    'brands.title': 'Nos Marques Tunisiennes Premium',
    'brands.subtitle': 'Découvrez notre collection soigneusement sélectionnée de produits tunisiens authentiques',
    'brands.description': 'Chacune de nos marques raconte une histoire de tradition, de qualité et d\'héritage tunisien authentique. Des oliveraies dorées de Sfax aux marchés d\'épices de Tunis, nous vous apportons les meilleurs produits perfectionnés au fil des générations.',
    'brands.buyNow': 'Acheter maintenant !',
    
    // Premium Quality
    'quality.title': 'Qualité Premium',
    'quality.description': 'Première pression à froid directement par extraction mécanique pour assurer une qualité supérieure.',
    
    // Why Choose Us
    'why.title': 'Pourquoi Choisir Agrocartago ?',
    'why.subtitle': 'Nous sommes votre partenaire de confiance pour les produits tunisiens authentiques sur les marchés européens',
    'why.premium': 'Qualité Premium',
    'why.heritage': 'Héritage Authentique',
    'why.certified': 'Produits Certifiés',
    
    // Stats
    'stats.years': 'Années d\'Excellence',
    'stats.brands': 'Marques Premium',
    'stats.countries': 'Pays Européens',
    'stats.clients': 'Clients Satisfaits',
    
    // Discover
    'discover.title': 'Découvrir',
    'discover.learnMore': 'En savoir plus',
    'discover.exploreAll': 'Explorer toutes les marques',
    
    // Story
    'story.title': 'Notre Histoire, Enracinée en Méditerranée',
    'story.readMore': 'Lire la suite',
    
    // Partners
    'partners.title': 'Nos Partenaires',
    
    // Footer
    'footer.slogan': 'Apporter les meilleures saveurs tunisiennes en Europe',
    'footer.quickLinks': 'Liens Rapides',
    'footer.ourBrands': 'Nos Marques',
    'footer.copyright': '© 2025 Agrocartago. Tous droits réservés.',
  },
  de: {
    // Header
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.marks': 'Unsere Marken',
    
    // Hero
    'hero.title': 'Tunesische Exzellenz,',
    'hero.subtitle': 'Geteilt mit Europa',
    'hero.description': 'Entdecken Sie die authentischen Aromen Tunesiens durch unsere Premium-Auswahl an Olivenölen, Harissa und traditionellen Köstlichkeiten',
    'hero.discover': 'Entdecken Sie alle unsere Marken!',
    'hero.story': 'Unsere Geschichte',
    
    // Brands
    'brands.title': 'Unsere Premium Tunesischen Marken',
    'brands.subtitle': 'Entdecken Sie unsere sorgfältig kuratierte Sammlung authentischer tunesischer Produkte',
    'brands.description': 'Jede unserer Marken erzählt eine Geschichte von Tradition, Qualität und authentischem tunesischem Erbe. Von den goldenen Olivenhainen von Sfax bis zu den Gewürzmärkten von Tunis bringen wir Ihnen die besten Produkte, die über Generationen perfektioniert wurden.',
    'brands.buyNow': 'Jetzt kaufen!',
    
    // Premium Quality
    'quality.title': 'Premium Qualität',
    'quality.description': 'Erste Kaltpressung direkt durch mechanische Extraktion für überlegene Qualität.',
    
    // Why Choose Us
    'why.title': 'Warum Agrocartago wählen?',
    'why.subtitle': 'Wir sind Ihr vertrauensvoller Partner für authentische tunesische Produkte auf europäischen Märkten',
    'why.premium': 'Premium Qualität',
    'why.heritage': 'Authentisches Erbe',
    'why.certified': 'Zertifizierte Produkte',
    
    // Stats
    'stats.years': 'Jahre der Exzellenz',
    'stats.brands': 'Premium Marken',
    'stats.countries': 'Europäische Länder',
    'stats.clients': 'Zufriedene Kunden',
    
    // Discover
    'discover.title': 'Entdecken',
    'discover.learnMore': 'Mehr erfahren',
    'discover.exploreAll': 'Alle Marken erkunden',
    
    // Story
    'story.title': 'Unsere Geschichte, Verwurzelt im Mittelmeer',
    'story.readMore': 'Weiterlesen',
    
    // Partners
    'partners.title': 'Unsere Partner',
    
    // Footer
    'footer.slogan': 'Die besten tunesischen Aromen nach Europa bringen',
    'footer.quickLinks': 'Schnelle Links',
    'footer.ourBrands': 'Unsere Marken',
    'footer.copyright': '© 2025 Agrocartago. Alle Rechte vorbehalten.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'fr' | 'de'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
