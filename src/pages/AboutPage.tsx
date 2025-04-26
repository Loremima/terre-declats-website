import React from 'react';
import { motion } from 'framer-motion';

// Optional: Import a simplified Footer if needed, or rely on the global one if implemented

const AboutPage: React.FC = () => {

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
                    My Journey to Radiance
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
                                The quiet introspection of lockdown became my moment of revelation: I found my true calling in the art of well-being 🌱. This pivotal time led me not only to deeper self-discovery but also to sharing my passion, culminating in the publication of my book on natural wellness in February.
                            </motion.p>
                            <motion.p variants={paragraphVariants}>
                                My journey began with formal training in aesthetics (CAP Esthétique), but my thirst for knowledge never ceased. I pursued specialized certifications, becoming a facialist adept in Hydrafacial treatments and mastering the Renata França lymphatic drainage technique. These skills, combined with extensive training in Kobido facial massage, allow me to offer truly bespoke and effective treatments.
                            </motion.p>
                            <motion.p variants={paragraphVariants}>
                                Currently, I am furthering my expertise by studying naturopathy, aiming to provide a comprehensive, holistic approach to support your long-term well-being.
                            </motion.p>
                            <motion.blockquote
                                className="border-l-2 border-black/40 pl-6 py-2 my-8 italic text-black/80"
                                variants={paragraphVariants} // Animate it like a paragraph
                            >
                                My own path, marked by questions of self-acceptance, has shaped a unique philosophy of care. I profoundly believe in the transformative power of beauty rituals and dedicated self-care for women.
                            </motion.blockquote>
                            <motion.p variants={paragraphVariants}>
                                It is this conviction that fuels my mission, leading to the opening of my own sanctuary in September 2024 – an institute exclusively for women, focusing on lymphatic drainage and the harmonious balance of body and mind.
                            </motion.p>
                            <motion.p variants={paragraphVariants} className="pt-4 font-medium">
                                Welcome to my space, dedicated to natural radiance and holistic well-being, where expertise meets personalized care. My approach blends ancestral wisdom with modern techniques to offer you a unique experience of relaxation and innate beauty. ✨
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage; 