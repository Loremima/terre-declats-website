import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        // Added id="contact-section" back here for the scroll link
        <footer id="contact-section" className="bg-[#f6f1e7] text-black py-8 md:py-12 border-t border-black/20">
            <div className="container mx-auto px-4 lg:px-12 text-center">

                {/* Copyright */}
                <p className="text-xs font-light mb-4">
                    {t('footer.copyright', { year: currentYear })}
                </p>

                {/* Legal Links */}
                <div className="text-xs font-light mb-4">
                    <Link to="/privacy-policy" className="hover:opacity-75 transition-opacity duration-300">
                        {t('footer.privacy')}
                    </Link>
                    <span className="opacity-50 mx-2">|</span>
                    <Link to="/terms-of-service" className="hover:opacity-75 transition-opacity duration-300">
                        {t('footer.terms')}
                    </Link>
                </div>

                {/* Credit Line */}
                <p className="text-xs font-light opacity-75">
                    {t('footer.credit')}
                </p>

            </div>
        </footer>
    );
};

export default Footer; 