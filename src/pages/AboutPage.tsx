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
            className="bg-[#f6f1e7] text-black pt-24 md:pt-32 pb-16 md:pb-24" // Removed min-height, sections will define height
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
                    className="order-2 md:order-1 h-[450px] md:h-[600px] lg:h-[700px] border-black md:border-r" // Adjusted height
                    variants={imageVariants} // Apply image animation variant
                >
                    <img
                        src="/images/founder-portrait.jpg"
                        alt="Founder portrait"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                {/* Text Column */}
                <div className="order-1 md:order-2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-[#f6f1e7]">
                    <motion.div
                        className="space-y-6 text-base md:text-lg leading-relaxed font-light max-w-md" // Adjusted leading
                        variants={textContainerVariants}
                        initial="hidden" // Initial state for staggering
                        animate="visible"   // Animate when parent is visible
                    >
                        <motion.p variants={paragraphVariants} className="italic">
                            {t('about.p1')}
                        </motion.p>
                        <motion.p variants={paragraphVariants}>
                            {t('about.p2')}
                        </motion.p>
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
                <div className="order-1 md:order-1 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-[#f6f1e7]">
                    <motion.div
                        className="space-y-6 text-base md:text-lg leading-relaxed font-light max-w-md"
                        variants={textContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.p variants={paragraphVariants}>
                            {t('about.p3')}
                        </motion.p>
                        <motion.blockquote
                            className="border-l-2 border-black/40 pl-6 py-2 my-6 italic text-black/80" // Adjusted margin
                            variants={paragraphVariants}
                        >
                            {t('about.quote')}
                        </motion.blockquote>
                    </motion.div>
                </div>
                {/* Image Column */}
                <motion.div
                    className="order-2 md:order-2 h-[450px] md:h-[500px] lg:h-[600px] border-black md:border-l" // Different height for variety
                    variants={imageVariants}
                >
                    <img
                        src="/images/leaf.jpg" // Using a different image
                        alt="Facial treatment detail"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </motion.div>

            {/* Section 3: Image Left, Text Right */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-black" // Added border-b
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
                        src="/images/spa.jpg" // Another different image
                        alt="Body treatment products"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                {/* Text Column */}
                <div className="order-1 md:order-2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-[#f6f1e7]">
                    <motion.div
                        className="space-y-6 text-base md:text-lg leading-relaxed font-light max-w-md"
                        variants={textContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.p variants={paragraphVariants}>
                            {t('about.p4')}
                        </motion.p>
                        <motion.p variants={paragraphVariants} className="pt-2 font-medium"> {/* Adjusted padding */}
                            {t('about.p5')}
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

        </motion.div>
    );
};

export default AboutPage; 