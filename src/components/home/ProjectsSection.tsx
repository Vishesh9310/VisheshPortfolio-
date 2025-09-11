import React, { useState } from 'react';
import w3icon from '../../assets/socialmedia/w3school1.png';
import hricon from '../../assets/socialmedia/hackerrank1.png';
import nsicon from '../../assets/socialmedia/newtonschool1.png';
import { type Project } from '../../types/dataTypes';
import { useData } from '../../context/DataContext';


const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const {projectData} = useData();
  const topThreeProject = projectData.slice(0,4);

  const problemSolvingData = [
    { img: w3icon, heading: 'W3schools', link: 'https://www.w3profile.com/Vishesh' },
    { img: hricon, heading: 'HackerRank', link: 'https://www.hackerrank.com/profile/Vishesh9310' },
    { img: nsicon, heading: 'Newton Schools', link: 'https://my.newtonschool.co/user/vk866797' },
  ];

  return (
    <section id='project' className="h-fit py-20 projects-body pb-20 space-y-20">

      <div>
      {/* Projects Section */}
      <div>
        <h2 className="text-3xl sm:text-4xl text-center font-bold orbitron bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-10">Projects</h2>
        <h2 className="text-2xl px-24 font-bold orbitron mb-24">#Top Three Projects</h2>
        {/* projectgrid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-24">
          {topThreeProject.map((project, index) => (
            <div
              key={index}
              className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl transition-all cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <div className="project-body h-full w-full rounded-2xl overflow-hidden flex flex-col">
                <img
                  src={project.img}
                  alt={project.heading}
                  className="h-52 w-full object-cover"
                />
                <div className="p-4 flex-1 space-y-2">
                  <h3 className="text-center font-bold italic text-lg orbitron">{project.heading}</h3>
                  <p className="text-sm">{project.desc}</p>
                  <p className="orbitron text-sm">{project.date}</p>    
                </div>
                <div className='text-center w-full pb-4 mx-auto'>
                   <a href={project.codebtn} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-2 px-10 rounded-full text-center w-full">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* About Section (when project is clicked) */}
        {activeProject && (
          <div className="max-w-4xl mx-auto mt-16 p-8 project-body rounded-2xl shadow-lg">
            <button
              className="float-right text-red-400 text-lg"
              onClick={() => setActiveProject(null)}
            >
              ✖
            </button>
            <h3 className="text-3xl font-bold italic orbitron mb-4">{activeProject.heading}</h3>
            <p className="italic text-sky-500 mb-2">{activeProject.desc}</p>
            <p className="mb-4 ">{activeProject.about}</p>
            <p className="orbitron text-sm mb-4">📅 {activeProject.date}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={activeProject.codebtn}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-2 px-5 rounded-full text-center"
              >
                View Code
              </a>
              <a
                href={activeProject.previewbtn}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 py-2 px-5 rounded-full text-center"
              >
                Live Preview
              </a>
            </div>
          </div>
        )}
        <div className='px-24 py-10 w-full text-right'>
          <a href='/projects' className='text-2xl animate-pulse'>➤ Show More</a>
        </div>
      </div>

      {/* Problem Solving Section */}
      <div>
        <h2 className="text-3xl sm:text-4xl text-center font-bold orbitron bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-10">
          Problem Solving
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-24">
          {problemSolvingData.map((platform, index) => (
            <a key={index} href={platform.link} target="_blank" rel="noopener noreferrer">
              <div className="w-full h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl transition-all">
                <div className="project-body rounded-2xl overflow-hidden flex flex-col items-center">
                  <img src={platform.img} alt={platform.heading} className="h-64 w-full object-contain" />
                  <h3 className="p-4 orbitron text-center font-bold italic text-lg">{platform.heading}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    // </div>proof of skills(showcase work)</div>
  );
};

export default ProjectsSection;