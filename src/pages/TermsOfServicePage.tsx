import React from 'react';
import { motion } from 'framer-motion';

const TermsOfServicePage: React.FC = () => {

    // Basic animation for page load
    const pageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    };

    return (
        <motion.div
            className="bg-[#f6f1e7] text-black pt-24 md:pt-32 pb-16 md:pb-24 min-h-[calc(100vh-150px)]" // Ensure minimum height minus approx nav/footer
            variants={pageVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto px-4 lg:px-12">
                <h1 className="font-serif text-4xl md:text-5xl mb-8 md:mb-12">
                    Terms of Service
                </h1>
                <div className="prose prose-lg max-w-none font-light text-sm md:text-base leading-relaxed space-y-4">
                    <p className="font-medium mb-4">Last Updated: 26-04-2025</p>

                    <p>Welcome to the Terre d'éclats website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.</p>

                    <h2 className="text-xl md:text-2xl font-serif mt-6 mb-3 !font-normal">Use of Website</h2>
                    <p>This website is provided for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</p>

                    <h2 className="text-xl md:text-2xl font-serif mt-6 mb-3 !font-normal">Services and Bookings</h2>
                    <p>Our website describes the holistic beauty treatments offered. Appointments are booked via the third-party service Calendly. Your use of Calendly is subject to their terms and conditions. Any specific terms related to our treatments (cancellations, etc.) will be communicated during the booking process or consultation.</p>

                    <h2 className="text-xl md:text-2xl font-serif mt-6 mb-3 !font-normal">Intellectual Property</h2>
                    <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, text, and graphics. Reproduction is prohibited other than in accordance with copyright law.</p>

                    <h2 className="text-xl md:text-2xl font-serif mt-6 mb-3 !font-normal">Disclaimers</h2>
                    <p>While we strive to provide accurate information, we make no warranties regarding the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, or services contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>

                    <h2 className="text-xl md:text-2xl font-serif mt-6 mb-3 !font-normal">Limitation of Liability</h2>
                    <p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>

                    <h2 className="text-xl md:text-2xl font-serif mt-6 mb-3 !font-normal">Governing Law</h2>
                    <p>Your use of this website and any dispute arising out of such use is subject to the laws of [Insert Jurisdiction, e.g., France].</p>

                    <h2 className="text-xl md:text-2xl font-serif mt-6 mb-3 !font-normal">Contact Us</h2>
                    <p>If you have questions about these Terms of Service, please contact us at: [Insert Contact Email Address]</p>

                    <p className="mt-6 italic font-medium">**Disclaimer:** This is a generic template. Please adapt it to your specific services and consult with a legal professional.</p>
                </div>
            </div>
        </motion.div>
    );
};

export default TermsOfServicePage; 