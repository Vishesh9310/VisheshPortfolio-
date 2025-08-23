import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { useData } from '../../context/DataContext';

const EducationSection:React.FC = () => {
  const {education} = useData();

  return (
    <section id="education" className="h-fit py-20 px-5 bg-gradient-to-r from-black via-gray-900 to-black">
      
      <motion.h2
        className="text-6xl font-bold w-fit mx-auto mb-10  bg-gradient-to-r orbitron from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            // className="relative bg-slate-950 rounded-2xl p-6 border border-none shadow-xl shadow-purple-900 hover:shadow-cyan-900 transition-all duration-500"
            className="relative bg-slate-950 rounded-4xl p-6 sm:p-8 border border-cyan-500/20 shadow-lg shadow-purple-900/50
                     hover:shadow-cyan-900/60 hover:scale-[1.02] transition-all duration-500
                     backdrop-blur-md"
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="flex items-center gap-4 mb-4w-fit mx-auto">
              <FaGraduationCap className="text-cyan-400 text-3xl" />
              <div className='text-center sm:text-left'>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400 orbitron">{edu.degree}</h3>
                <p className="text-sm sm:text-base italic text-gray-300">{edu.institution}</p>
                <p className="text-xs sm:text-sm text-gray-400">{edu.duration}</p>
              </div>
            </div>
            <p className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">{edu.details}</p>

               </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;