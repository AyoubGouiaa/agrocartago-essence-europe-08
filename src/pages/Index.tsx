
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import PremiumQuality from '@/components/PremiumQuality';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import Discover from '@/components/Discover';
import Story from '@/components/Story';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Brands />
        <PremiumQuality />
        <WhyChooseUs />
        <Stats />
        <Discover />
        <Story />
        <Partners />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
