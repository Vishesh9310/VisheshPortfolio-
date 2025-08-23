import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Avviare Educational Hub',
    duration: '2023 - 2026',
    details:
      'Pursuing a comprehensive program in Computer Applications with a focus on software development, programming fundamentals, data structures, web technologies, and database management. Actively involved in real-world projects, coding challenges, and problem-solving tasks.',
  },
  {
    degree: 'Self-Learning & Skill Development',
    institution: 'Independent Learning',
    duration: '2021 - 2023',
    details:
      'After completing my 12th in 2021, I dedicated two years to exploring career options and strengthening my programming fundamentals through self-learning. Gained hands-on experience with Java, JavaScript, and problem-solving, which built a strong foundation for my BCA journey started in 2023.',
  },
  {
    degree: 'Higher Secondary Education (12th)',
    institution: 'Shri Krishna Inter College',
    duration: '2019 - 2021',
    details:
      'Completed 12th grade from UP Board with Physics, Chemistry, and Mathematics (PCM) as core subjects, securing 65%. Developed logical and analytical reasoning skills, which nurtured an early interest in programming and technical fields.',
  },
  {
    degree: 'High School (10th)',
    institution: 'Shri Krishna Inter College',
    duration: '2017 - 2019',
    details:
      'Completed Class 10th (UP Board) with 70%. Built a strong academic foundation across core subjects, developing consistency, discipline, and an interest in analytical learning that prepared me for higher studies.',
  },

];

const EducationSection:React.FC = () => {
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
        {educationData.map((edu, index) => (
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