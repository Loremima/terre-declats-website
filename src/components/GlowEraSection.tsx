import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const GlowEraSection: React.FC = () => {
  const { t } = useTranslation();

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
      className="w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center bg-[#f6f1e7] p-8 md:p-16 border-t border-black order-1 md:order-1">
          <div className="max-w-md text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-6 leading-tight tracking-wide">
              {t('glow_era.title')}
            </h2>

            <p className="text-black mb-8 leading-relaxed font-light">
              {t('glow_era.intro')}
            </p>

            <div className="flex justify-center">
              <a
                href="https://calendly.com/terresdeclat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full text-sm bg-black text-white hover:bg-gray-800 transition-all duration-300 uppercase tracking-wider font-light"
              >
                {t('glow_era.button')}
              </a>
            </div>
          </div>
        </div>

        <div className="h-[400px] md:h-[800px] border-t border-black md:border-l order-2 md:order-2">
          <img
            src="/images/glow-era.jpg"
            alt="Woman with glowing skin"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default GlowEraSection;