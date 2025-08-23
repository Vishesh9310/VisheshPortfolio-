import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaUserAstronaut } from 'react-icons/fa';
import { FolderGit2, Mail } from 'lucide-react';

interface Service {
  img: React.ElementType; // React component type for icons 
  heading: string;
  about: string;
}

const ServiceSection: React.FC = () => {
  const serviceData: Service[] = [
    {
      img: FaUserAstronaut,
      heading: 'Web Development',
      about:
        'We craft scalable and high-performance web applications tailored to your needs. From simple websites to complex enterprise platforms, our solutions ensure speed, security, and future-ready architecture.',
    },
    {
      img: FaTools,
      heading: 'Digital Strategy',
      about:
        'We help you align technology with business goals. From market research to growth-driven roadmaps, our digital strategies empower brands to thrive in a competitive landscape with data-backed decisions.',
    },
    {
      img: FolderGit2,
      heading: 'User Experience',
      about:
        'Our UX process focuses on clarity, simplicity, and engagement. By understanding user behavior, we design interfaces that are not only beautiful but also intuitive and conversion-driven.',
    },
    {
      img: Mail,
      heading: 'Web Design',
      about:
        'A website is more than visuals—it’s your digital identity. We create futuristic, responsive, and immersive designs that leave a lasting impression while maintaining usability across all devices.',
    },
  ];

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