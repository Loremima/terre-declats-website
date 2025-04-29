import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      }
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black/10 z-10"></div>

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')"
        }}
      ></div>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4 pt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-white/70 font-light mb-8 text-base uppercase tracking-[0.3em]"
          variants={textVariants}
        >
          {t('hero.subtitle')}
        </motion.h2>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-14 leading-tight tracking-wide italic"
          variants={textVariants}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.div variants={buttonVariants}>
          <Link
            to="welcome-section"
            smooth={true}
            duration={1000}
            offset={-50}
            className="bg-white/60 hover:bg-white/70 border border-white/40 px-10 py-3 font-light text-sm uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer inline-block"
          >
            {t('hero.button')}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;