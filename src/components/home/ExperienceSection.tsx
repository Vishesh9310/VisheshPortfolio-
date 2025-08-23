import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "TechKnights",
    duration: "Jan 2025 - Mar 2025",
    description:
      "Worked on building responsive React components, optimized state management, and improved performance.",
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    duration: "2024 - Present",
    description:
      "Developed REST APIs with Spring Boot, integrated MySQL, and deployed apps using Docker & GitHub Actions.",
  },
];

const education = [
  {
    degree: "BCA - Computer Applications",
    institution: "XYZ University",
    duration: "2022 - 2025",
    description:
      "Studying core CS subjects, Java, React, DSA, and building real-world projects.",
  },
  {
    degree: "Higher Secondary",
    institution: "ABC School",
    duration: "2020 - 2022",
    description: "Specialized in PCM with Computer Science.",
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="min-h-fit bg-gray-50 dark:bg-gray-900 py-12 px-6">
      {/* Header */}
      <div className="flex justify-between items-center max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Experience & Resume
        </h1>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Experience Timeline */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Work Experience
          </h2>
          <div className="space-y-8 border-l-2 border-purple-400 pl-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                  {exp.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {exp.company} | {exp.duration}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-200">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Education
          </h2>
          <div className="space-y-8 border-l-2 border-cyan-400 pl-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {edu.institution} | {edu.duration}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-200">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
