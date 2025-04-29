import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Optional: Import a simplified Footer if needed, or rely on the global one if implemented

const AboutPage: React.FC = () => {
    const { t } = useTranslation();

    // Animation for the content container
    const pageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    };

    // Animation variants for text paragraphs
    const paragraphVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            className="bg-[#f6f1e7] text-black pt-24 md:pt-32 pb-16 md:pb-24 min-h-[calc(100vh-150px)]" // White background, padding top to account for fixed navbar
            variants={pageVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto px-4 lg:px-12">
                {/* Title centered above the grid */}
                <motion.h1
                    className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16 leading-tight tracking-wide text-center"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                >
                    {t('about.pageTitle')}
                </motion.h1>

                {/* Grid: Image Left, Text Right on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    {/* Image Content (Order 1 on Desktop) */}
                    <motion.div
                        className="order-1 h-[400px] md:h-[600px] lg:h-[700px] bg-gray-200"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                    >
                        <img
                            src="/images/founder-portrait.jpg"
                            alt="Founder portrait"
                            className="w-full h-full object-cover rounded-md shadow-lg"
                        />
                    </motion.div>

                    {/* Text Content Refined (Order 2 on Desktop) */}
                    <div className="order-2">
                        <motion.div
                            className="space-y-6 text-base md:text-lg leading-loose font-light max-w-lg mx-auto md:mx-0" // Added mx-auto for centering text block on mobile if needed
                            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } } }} // Added delayChildren
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.p variants={paragraphVariants} className="italic">
                                {t('about.p1')}
                            </motion.p>
                            <motion.p variants={paragraphVariants}>
                                {t('about.p2')}
                            </motion.p>
                            <motion.p variants={paragraphVariants}>
                                {t('about.p3')}
                            </motion.p>
                            <motion.blockquote
                                className="border-l-2 border-black/40 pl-6 py-2 my-8 italic text-black/80"
                                variants={paragraphVariants} // Animate it like a paragraph
                            >
                                {t('about.quote')}
                            </motion.blockquote>
                            <motion.p variants={paragraphVariants}>
                                {t('about.p4')}
                            </motion.p>
                            <motion.p variants={paragraphVariants} className="pt-4 font-medium">
                                {t('about.p5')}
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage; 