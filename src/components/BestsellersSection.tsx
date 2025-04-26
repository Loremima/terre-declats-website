import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { TreatmentProps } from '../types';

const TreatmentItem: React.FC<TreatmentProps> = ({ name, expanded = false, onClick }) => {
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
        <div className="pt-4 text-black text-sm animate-fadeIn">
          <p className="font-light">Our signature {name.toLowerCase()} combines advanced techniques with natural ingredients
            for remarkable results. Experience the difference with our expert practitioners.</p>
          <div className="mt-4">
            <Button variant="secondary" className="text-xs px-4 py-1.5">Learn More</Button>
          </div>
        </div>
      )}
    </div>
  );
};

const BestsellersSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const treatments = [
    "Signature Hydrafacial",
    "Age Defying Facial",
    "Gua Sha Super Lift",
    "Body Lift and Sculpt",
    "Buccal Massage"
  ];

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
          <div className="max-w-md w-full">
            <h2 className="font-serif text-3xl text-black mb-10 tracking-wide text-center">
              OUR BESTSELLERS
            </h2>

            <div className="mb-10">
              {treatments.map((treatment, index) => (
                <TreatmentItem
                  key={index}
                  name={treatment}
                  expanded={expandedIndex === index}
                  onClick={() => handleClick(index)}
                />
              ))}
            </div>

            <Button className="w-full justify-center border-black text-black hover:bg-black hover:text-white">
              View All Treatments
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BestsellersSection;