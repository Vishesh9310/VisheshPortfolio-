import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../../context/DataContext';

const ServiceSection: React.FC = () => {
  const {serviceData} = useData();

  return (
    <div
      id="skills"
      className="h-fit text-white py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-black via-gray-900 to-black"
    >
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text w-fit mx-auto orbitron"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Services
      </motion.h2>

      <div className="mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
        {serviceData.map((service, index) => {
          const Icon = service.img;
          return (
            <motion.div
              key={index}
              className="p-6 sm:p-8 bg-slate-950 rounded-3xl flex flex-col sm:flex-row items-start gap-5 shadow-lg shadow-purple-900 hover:shadow-cyan-900 transition-shadow duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Icon className="h-12 w-12 text-cyan-400 flex-shrink-0" />
              <div className="leading-7 space-y-2">
                <h3 className="font-bold border-b-2 border-white w-fit px-2">{service.heading}</h3>
                <p className="text-sm sm:text-base">{service.about}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSection;