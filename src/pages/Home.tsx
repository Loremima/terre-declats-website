import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import GlowEraSection from '../components/GlowEraSection';
import BestsellersSection from '../components/BestsellersSection';

const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 1000,
        smooth: true,
        offset: -50,
      });
      navigate('.', { replace: true, state: {} });
    }
  }, [location, navigate]);

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