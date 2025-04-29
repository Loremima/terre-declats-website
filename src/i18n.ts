import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'; // To load translations from /public/locales

i18n
    // Load translation using http -> see /public/locales
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(HttpApi)
    // Detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // Pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // Init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        supportedLngs: ['en', 'fr'],
        fallbackLng: 'en', // Use English if detected language is not available
        debug: import.meta.env.DEV, // Enable debug output in development

        detection: {
            // Order and from where user language should be detected
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            // Caches detection results in localStorage
            caches: ['localStorage'],
        },

        backend: {
            // Path where resources get loaded from
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        interpolation: {
            escapeValue: false, // Not needed for React as it escapes by default
        },
    });

export default i18n; 