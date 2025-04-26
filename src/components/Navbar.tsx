import React, { useState, useEffect } from 'react';
import { Instagram, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const overlayLinkClasses = "text-white text-2xl uppercase tracking-[0.2em] font-light hover:opacity-75 transition-opacity duration-300 block";

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const linkContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } }
  };

  const useDarkElements = scrolled || location.pathname !== '/';

  return (
    <>
      <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-[#f6f1e7] border-b border-black py-3'
        : 'bg-transparent py-5'
        }`}>
        <div className="w-full mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center h-full relative">
          <button
            onClick={toggleMenu}
            className={`z-[51] transition-colors duration-300 p-2 -ml-2 ${useDarkElements ? 'text-black' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block h-[1.5px] w-6 bg-current transition-transform duration-300"></span>
              <span className="block h-[1.5px] w-6 bg-current transition-transform duration-300"></span>
            </div>
          </button>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <RouterLink
              to="/"
              onClick={() => isMenuOpen && toggleMenu()}
            >
              <h1 className={`font-serif text-xl md:text-2xl transition-colors duration-500 ${useDarkElements ? 'text-black' : 'text-white'}`}>TERRE D'ÉCLATS</h1>
            </RouterLink>
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <a
              href="https://www.instagram.com/terresdeclat_"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${useDarkElements ? 'text-black hover:text-gray-700' : 'text-white hover:text-white/80'}`}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://calendly.com/terresdeclat"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-block px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-light uppercase tracking-wider md:tracking-widest transition-all duration-300 ${useDarkElements ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-white/90'}`}
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="overlay-menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-5 md:top-8 md:right-8 text-white hover:opacity-75 transition-opacity duration-300 z-[61]"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <motion.div
              className="flex flex-col items-center space-y-8"
              variants={linkContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={linkItemVariants}>
                <RouterLink
                  to="/about"
                  className={overlayLinkClasses + " cursor-pointer"}
                  onClick={toggleMenu}
                >
                  About
                </RouterLink>
              </motion.div>
              <motion.div variants={linkItemVariants}>
                <ScrollLink
                  to="welcome-section"
                  smooth={true}
                  duration={1000}
                  offset={-80}
                  className={overlayLinkClasses + " cursor-pointer"}
                  onClick={toggleMenu}
                >
                  Treatments
                </ScrollLink>
              </motion.div>
              <motion.div variants={linkItemVariants}>
                <ScrollLink
                  to="contact-section"
                  smooth={true}
                  duration={1000}
                  offset={0}
                  className={overlayLinkClasses + " cursor-pointer"}
                  onClick={toggleMenu}
                >
                  Contact
                </ScrollLink>
              </motion.div>
              <motion.div variants={linkItemVariants}>
                <a
                  href="https://calendly.com/terresdeclat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 px-7 py-2.5 rounded-full text-base bg-white/20 text-white hover:bg-white/30 transition-colors duration-300 uppercase tracking-[0.2em] font-light inline-block`}
                  onClick={toggleMenu}
                >
                  Book Now
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;