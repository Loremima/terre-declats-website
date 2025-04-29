import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Instagram, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
    const { t } = useTranslation();

    // Animation similaire aux AUTRES sections/pages (slide up + fade in)
    const pageVariants = {
        hidden: { opacity: 0, y: 20 }, // Ajout de y: 20 pour l'effet slide
        visible: {
            opacity: 1,
            y: 0, // Retour à y: 0
            transition: { duration: 0.8, ease: "easeInOut" }
        },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // Ajout relative, image de fond, et overlay via pseudo-élément
            className="relative min-h-screen bg-[#f6f1e7] text-black pt-40 pb-16 md:pt-48 md:pb-24 
                       bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat 
                       before:content-[''] before:absolute before:inset-0 before:bg-[#f6f1e7]/90 before:z-0"
        >
            {/* Ajout relative et z-10 pour que le contenu soit au-dessus de l'overlay */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <h1 className="font-serif text-4xl md:text-5xl mb-6 tracking-wide">
                        {t('contactPage.title')}
                    </h1>
                    <p className="font-light text-lg leading-relaxed">
                        {t('contactPage.intro')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="border border-black bg-white/30 backdrop-blur-sm p-6 md:p-8 rounded-lg flex flex-col items-center justify-center text-center h-full">
                        <Mail size={32} className="mb-4 text-black/80" />
                        <h3 className="font-serif text-2xl mb-3 tracking-wide">
                            {t('contactPage.emailCardTitle')}
                        </h3>
                        <p className="font-light text-sm mb-5">
                            {t('contactPage.emailPrompt')}
                        </p>
                        <a
                            href={`mailto:${t('contactPage.emailAddress')}`}
                            className="font-light text-lg hover:text-gray-700 transition-colors duration-300 pt-2"
                        >
                            {t('contactPage.emailAddress')}
                        </a>
                    </div>

                    <div className="border border-black bg-white/30 backdrop-blur-sm p-6 md:p-8 rounded-lg flex flex-col items-center justify-center text-center h-full">
                        <Instagram size={32} className="mb-4 text-black/80" />
                        <h3 className="font-serif text-2xl mb-3 tracking-wide">
                            {t('contactPage.instagramCardTitle')}
                        </h3>
                        <p className="font-light text-sm mb-5">
                            {t('contactPage.instagramPrompt')}
                        </p>
                        <a
                            href="https://www.instagram.com/terresdeclat_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center font-light text-lg hover:text-gray-700 transition-colors duration-300 pt-2"
                        >
                            {t('contactPage.instagramHandle')}
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactPage; 