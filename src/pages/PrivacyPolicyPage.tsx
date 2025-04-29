import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyPage: React.FC = () => {
    const { t } = useTranslation();
    const currentDate = new Date().toLocaleDateString();

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
                    {t('legal.privacyTitle')}
                </h1>
                <div className="prose prose-lg max-w-none font-light text-sm md:text-base leading-relaxed space-y-4">
                    <p className="font-medium mb-4">
                        {t('legal.lastUpdated', { date: currentDate })}
                    </p>

                    <p>Welcome to Terres d'éclats. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services, including appointment booking via Calendly.</p>

                    <h2 className="text-xl md:text-2xl font-serif mt-6 mb-3 !font-normal">Information We Collect</h2>
                    <p>We may collect personal information that you voluntarily provide to us when you book an appointment or interact with our website. This may include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Contact Data (e.g., name, email address, phone number) provided during booking.</li>
                        <li>Usage Data (e.g., IP address, browser type, pages visited) collected automatically through cookies or similar technologies to improve our website experience.</li>
                    </ul>

                    <h2 className="text-xl md:text-2xl font-serif mt-6 mb-3 !font-normal">How We Use Your Information</h2>
                    <p>We use the information we collect primarily to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Facilitate appointment bookings and manage our schedule (via Calendly).</li>
                        <li>Respond to your inquiries.</li>
                        <li>Improve and optimize our website and services.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>

                    <h2 className="text-xl md:text-2xl font-serif mt-6 mb-3 !font-normal">Third-Party Services (Calendly)</h2>
                    <p>We use Calendly for online appointment booking. When you book an appointment, you provide your information directly to Calendly. We encourage you to review Calendly's own Privacy Policy to understand how they handle your data.</p>

                    <h2 className="text-xl md:text-2xl font-serif mt-6 mb-3 !font-normal">Cookies</h2>
                    <p>Our website may use cookies to enhance user experience. Cookies are small files stored on your device. You can manage your cookie preferences through your browser settings.</p>

                    <h2 className="text-xl md:text-2xl font-serif mt-6 mb-3 !font-normal">Data Security</h2>
                    <p>We implement reasonable measures to protect your personal information, but no electronic transmission or storage is 100% secure.</p>

                    <h2 className="text-xl md:text-2xl font-serif mt-6 mb-3 !font-normal">Your Rights</h2>
                    <p>Depending on your location, you may have rights regarding your personal data, such as the right to access, correct, or request deletion of your information. Please contact us to exercise these rights.</p>

                    <h2 className="text-xl md:text-2xl font-serif mt-6 mb-3 !font-normal">Contact Us</h2>
                    <p>If you have questions about this Privacy Policy, please contact us at: [Insert Contact Email Address]</p>

                    <p className="mt-6 italic font-medium">
                        {t('legal.genericDisclaimer')}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicyPage; 