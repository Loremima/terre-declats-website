import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import GlowEraSection from '../components/GlowEraSection';
import BestsellersSection from '../components/BestsellersSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f6f1e7]">
      <Navbar />
      <Hero />
      <ServicesSection />
      <GlowEraSection />
      <BestsellersSection />
    </div>
  );
};

export default Home;