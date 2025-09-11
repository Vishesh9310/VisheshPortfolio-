import React from "react";
import { motion } from "framer-motion";
import { useData } from "../../context/DataContext";

const ExperienceSection: React.FC = () => {
  const {experience, education} = useData();

  return (
    <div className="min-h-fit py-12 px-6">
      {/* Header */}
      <div className="flex justify-between items-center max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl font-bold orbitron lg:text-5xl">
          Experience & Resume
        </h1>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Experience Timeline */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 experience-text orbitron ">
            Work Experience
          </h2>
          <div className="space-y-8 border-l-2 border-purple-400 pl-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-5"></div>
                <h3 className="pl-5 text-lg font-semibold experience-text orbitron italic">
                  {exp.role}
                </h3>
                <p className=" text-sm">
                  {exp.company} | {exp.duration}
                </p>
                <p className="mt-2 experience-text">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 orbitron experience-text">
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
                <div className="absolute -left-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                <h3 className="pl-5 text-lg font-semibold orbitron italic experience-text">
                  {edu.degree}
                </h3>
                <p className="experience-text text-sm">
                  {edu.institution} | {edu.duration}
                </p>
                <p className="mt-2 experience-text">
                  {edu.details}
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
