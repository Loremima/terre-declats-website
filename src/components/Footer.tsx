import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        // Added id="contact-section" back here for the scroll link
        <footer id="contact-section" className="bg-[#f6f1e7] text-black py-8 md:py-12 border-t border-black/20">
            <div className="container mx-auto px-4 lg:px-12 text-center">

                {/* Optional: Logo/Title again */}
                {/* <h3 className="font-serif text-lg text-black mb-4">Terre d'éclats</h3> */}

                {/* Copyright */}
                <p className="text-xs font-light mb-2">
                    © {currentYear} Terre d'éclats. All rights reserved.
                </p>

                {/* Credit Line */}
                <p className="text-xs font-light mb-4 opacity-75">
                    Made with ❤️ by Don Lorenzo.
                </p>

                {/* Re-added Legal Links with Router Link */}
                <div className="flex justify-center items-center space-x-4 md:space-x-6 text-xs font-light mt-4">
                    <Link to="/privacy-policy" className="hover:opacity-75 transition-opacity duration-300">Privacy Policy</Link>
                    <span className="opacity-50">|</span>
                    <Link to="/terms-of-service" className="hover:opacity-75 transition-opacity duration-300">Terms of Service</Link>
                </div>

            </div>
        </footer>
    );
};

export default Footer; 