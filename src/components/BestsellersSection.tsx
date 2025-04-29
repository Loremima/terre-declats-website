import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { TreatmentProps } from '../types';
import { useTranslation } from 'react-i18next';

const TreatmentItem: React.FC<TreatmentProps> = ({ name, description, learnMoreText, bookingUrl, expanded = false, onClick }) => {
  return (
    <div
      className="py-5 border-b border-black cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-black group-hover:text-gray-600 transition-colors font-serif tracking-wide">
          {name}
        </h3>
        <span className="text-2xl text-black transition-transform duration-300 transform">
          {expanded ? '-' : '+'}
        </span>
      </div>

      {expanded && (
        <div className="pt-4 text-black text-sm animate-fadeIn text-center">
          <p className="font-light">{description || `Default description for ${name}`}</p>
          <div className="mt-4 flex justify-center">
            {bookingUrl ? (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block font-light uppercase tracking-wider rounded-full transition-all duration-300 border text-xs py-1.5 px-4 bg-transparent border-black text-black hover:bg-gray-100`}
              >
                {learnMoreText || "Book Now"}
              </a>
            ) : (
              <Button variant="secondary" size="sm">
                {learnMoreText || "Learn More"}
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const BestsellersSection: React.FC = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const treatments = [
    { key: 'itemKobido' },
    { key: 'itemDrainage' },
    { key: 'itemCourse' },
    { key: 'itemRoutine' },
    { key: 'itemShopping' },
  ];

  const bookingUrls: { [key: string]: string } = {
    itemKobido: "https://calendly.com/terresdeclat/massage-facial-kobido",
    itemDrainage: "https://calendly.com/terresdeclat/drainage-lymphatique-corps-120",
    itemCourse: "https://calendly.com/terresdeclat/cours-de-massage-facial-visio",
    itemRoutine: "https://calendly.com/terresdeclat/bilan-skincare-routine-personnalisee",
    itemShopping: "https://calendly.com/terresdeclat/nouvelle-reunion"
  };

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      className="border-t border-black"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-[400px] md:h-[800px] bg-[#f6f1e7] border-black md:border-r order-2 md:order-1">
          <img
            src="/images/bestsellers.jpg"
            alt="Woman receiving facial treatment"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center justify-center p-8 md:p-16 bg-[#f6f1e7] order-1 md:order-2">
          <div className="max-w-md w-full h-full flex flex-col justify-center">
            <h2 className="font-serif text-3xl text-black mb-10 tracking-wide text-center">
              {t('bestsellers.title')}
            </h2>

            <div className="mb-10">
              {treatments.map((treatment, index) => (
                <TreatmentItem
                  key={index}
                  name={t(`bestsellers.${treatment.key}.name`)}
                  description={t(`bestsellers.${treatment.key}.desc`)}
                  learnMoreText={t('bestsellers.learnMore')}
                  bookingUrl={bookingUrls[treatment.key]}
                  expanded={expandedIndex === index}
                  onClick={() => handleClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BestsellersSection;