import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Optional: Import a simplified Footer if needed, or rely on the global one if implemented

const AboutPage: React.FC = () => {
    const { t } = useTranslation();

    // Animation for the overall page content fade-in
    const pageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    };

    // Reusable variants for content blocks (text or image)
    const contentBlockVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.0, // Slightly slower for smoother feel
                ease: "easeInOut"
            }
        }
    };

    // Stagger children animation for text paragraphs within a block
    const textContainerVariants = {
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };
    const paragraphVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.98 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: "easeInOut" } }
    };

    return (
        // Main container with base background and padding
        <motion.div
            className="bg-[#f6f1e7] text-black pt-24 md:pt-32"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }} // Add exit animation
        >
            {/* Centralized Title */}
            <motion.h1
                className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16 leading-tight tracking-wide text-center container mx-auto px-4 lg:px-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
            >
                {t('about.pageTitle')}
            </motion.h1>

            {/* Section 1: Image Left, Text Right */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 border-t border-black"
                variants={contentBlockVariants} // Animate section as a block
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Trigger animation on scroll
            >
                {/* Image Column */}
                <motion.div
                    className="order-2 md:order-1 h-[450px] md:h-[500px] lg:h-[600px] border-black md:border-r" // Unified height
                    variants={imageVariants} // Apply image animation variant
                >
                    <img
                        src="/images/founder-portrait.jpg"
                        alt="Founder portrait"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                {/* Text Column */}
                <div className="order-1 md:order-2 flex items-center justify-center p-8 md:p-12 lg:p-16 bg-[#f6f1e7]">
                    <motion.div
                        className="space-y-6 text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto px-4"
                        variants={textContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.blockquote variants={paragraphVariants} className="pl-2 text-black/80 bg-[#e0d8c5] py-4 rounded-md shadow-sm text-base md:text-lg lg:text-xl xl:text-2xl font-aboutfront">
                            {t('about.p1')}
                        </motion.blockquote>
                    </motion.div>
                </div>
            </motion.div>

            {/* Section 2: Text Left, Image Right */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 border-t border-black"
                variants={contentBlockVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Text Column */}
                <div className="order-1 md:order-1 flex items-center justify-center p-8 md:p-12 lg:p-16 bg-[#f6f1e7]">
                    <motion.div
                        className="space-y-6 text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto px-4"
                        variants={textContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.blockquote variants={paragraphVariants} className="pl-2 text-black/80 bg-[#e0d8c5] py-4 rounded-md shadow-sm text-base md:text-lg lg:text-xl xl:text-2xl font-aboutfront">
                            {t('about.p2')}
                        </motion.blockquote>
                    </motion.div>
                </div>
                {/* Image Column */}
                <motion.div
                    className="order-2 md:order-2 h-[450px] md:h-[500px] lg:h-[600px] border-black md:border-l"
                    variants={imageVariants}
                >
                    <img
                        src="/images/leaf.jpg"
                        alt="Facial treatment detail"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </motion.div>

            {/* Section 3: Image Left, Text Right */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-black"
                variants={contentBlockVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Image Column */}
                <motion.div
                    className="order-2 md:order-1 h-[450px] md:h-[500px] lg:h-[600px] border-black md:border-r"
                    variants={imageVariants}
                >
                    <img
                        src="/images/spa.jpg"
                        alt="Body treatment products"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                {/* Text Column */}
                <div className="order-1 md:order-2 flex flex-col justify-between h-full p-8 bg-[#f6f1e7]">
                    <motion.div
                        className="flex-1 flex flex-col justify-center space-y-6 text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto px-4"
                        variants={textContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.blockquote variants={paragraphVariants} className="pl-2 text-black/80 bg-[#e0d8c5] py-4 rounded-md shadow-sm text-base md:text-lg lg:text-xl xl:text-2xl font-aboutfront">
                            {t('about.p3')}
                        </motion.blockquote>
                    </motion.div>
                    <div className="flex-shrink-0" />
                </div>
            </motion.div>

        </motion.div>
    );
};

export default AboutPage; 