import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ServiceProps } from '../types';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const ServiceCard: React.FC<ServiceProps> = ({ title, description, imageUrl, buttonText, linkTo, scrollToId, externalUrl }) => {
  const buttonClasses = "border-black text-black hover:bg-black hover:text-white";
  const buttonBaseClasses = "font-light text-sm uppercase tracking-wider py-2 px-6 rounded-full transition-all duration-300 border";

  return (
    <div className="border border-black flex flex-col items-center max-w-sm mx-auto h-full bg-[#f6f1e7]">
      <div className="w-full aspect-square overflow-hidden p-4 border-black">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow text-center">
        <h3 className="font-serif text-xl text-black mb-3 tracking-wide">
          {title}
        </h3>
        <p className="text-black text-sm leading-relaxed font-light mb-6">
          {description}
        </p>

        <div className="mt-auto pt-4 flex justify-center">
          {
            scrollToId ? (
              <ScrollLink
                to={scrollToId}
                smooth={true}
                duration={1000}
                offset={-60}
                className={`${buttonBaseClasses} ${buttonClasses} cursor-pointer`}
              >
                {buttonText}
              </ScrollLink>
            ) : externalUrl ? (
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBaseClasses} ${buttonClasses}`}
              >
                {buttonText}
              </a>
            ) : linkTo ? (
              <RouterLink
                to={linkTo}
                className={`${buttonBaseClasses} ${buttonClasses}`}
              >
                {buttonText}
              </RouterLink>
            ) : (
              <span className={`${buttonBaseClasses} ${buttonClasses} opacity-50 cursor-not-allowed`}>
                {buttonText}
              </span>
            )
          }
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'cardIndividual',
      imageUrl: '/images/facials.jpg',
      scrollToId: 'bestsellers-section'
    },
    {
      key: 'cardHolistic',
      imageUrl: '/images/body-treatments.jpg',
      externalUrl: 'https://calendly.com/terresdeclat'
    },
    {
      key: 'cardProfessional',
      imageUrl: '/images/massage.jpg',
      linkTo: '/contact'
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
          {services.map((service) => (
            <ServiceCard
              key={service.key}
              title={t(`services.${service.key}.title`)}
              description={t(`services.${service.key}.description`)}
              buttonText={t(`services.${service.key}.button`)}
              imageUrl={service.imageUrl}
              linkTo={service.linkTo}
              scrollToId={service.scrollToId}
              externalUrl={service.externalUrl}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;