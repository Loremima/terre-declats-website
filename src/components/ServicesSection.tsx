import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ServiceProps } from '../types';
import { useTranslation } from 'react-i18next';

const ServiceCard: React.FC<ServiceProps> = ({ title, description, imageUrl }) => {
  const { t } = useTranslation();
  return (
    <div className="border border-black flex flex-col items-center max-w-sm mx-auto h-full bg-[#f6f1e7]">
      <div className="w-full aspect-square overflow-hidden p-4 border-black">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="text-center">
          <h3 className="font-serif text-xl text-black mb-3 tracking-wide">
            {title}
          </h3>
        </div>

        <p className="text-black text-center mb-6 text-sm leading-relaxed font-light">
          {description}
        </p>

        <div className="mt-auto flex justify-center">
          <Button variant="secondary" className="border-black text-black hover:bg-black hover:text-white">
            {t('services.card1.button')}
          </Button>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.card1.title'),
      description: t('services.card1.description'),
      imageUrl: '/images/body-treatments.jpg'
    },
    {
      title: t('services.card2.title'),
      description: t('services.card2.description'),
      imageUrl: '/images/facials.jpg'
    },
    {
      title: t('services.card3.title'),
      description: t('services.card3.description'),
      imageUrl: '/images/massage.jpg'
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      className="bg-[#f6f1e7] border-t border-black"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div id="welcome-section" className="text-center py-16">
          <h2 className="font-light text-black mb-3 uppercase tracking-[0.3em] text-sm">
            {t('services.welcome')}
          </h2>

          <h3 className="font-serif text-3xl md:text-4xl text-black mb-8 tracking-wide">
            {t('services.sectionTitle')}
          </h3>

          <p className="text-black max-w-2xl mx-auto font-light">
            {t('services.intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;