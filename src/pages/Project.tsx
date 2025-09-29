import React from 'react';
import w3icon from '../assets/socialmedia/w3school1.png';
import hricon from '../assets/socialmedia/hackerrank1.png';
import nsicon from '../assets/socialmedia/newtonschool1.png';
import { useData } from '../context/DataContext'
import { NavLink } from 'react-router-dom';

interface Project {
  img: string;
  heading: string;
  about: string;
  date: string;
  codebtn: string;
  previewbtn: string;
}

const Project: React.FC = () => {

  const { projectData } = useData();



  const problemSolvingData = [
    { img: w3icon, heading: 'W3schools', link: 'https://www.w3profile.com/Vishesh' },
    { img: hricon, heading: 'HackerRank', link: 'https://www.hackerrank.com/profile/Vishesh9310' },
    { img: nsicon, heading: 'Newton Schools', link: 'https://my.newtonschool.co/user/vk866797' },
  ];

  return (
    <section className="h-fit py-20 projects-body pb-20 space-y-20">
      {/* Projects Section */}
      <div>
        <h2 className="text-3xl sm:text-4xl text-center font-bold orbitron bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-10">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-24">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl transition-all"
            >
              <div className="project-body h-full w-full rounded-2xl overflow-hidden flex flex-col">
                <NavLink key={project.id} to={`/projects/${project.id}`} >
                  <img src={project.img} alt={project.heading} className="h-64 w-full object-cover" />
                  <div className="p-4 flex-1 space-y-2">
                    <h3 className="text-center font-bold italic text-lg orbitron">{project.heading}</h3>
                    <p className="text-sm text-blue-500">{project.about}</p>
                    <p className="orbitron text-sm">{project.date}</p>
                  </div>
                </NavLink>
                <div className="flex flex-col sm:flex-row justify-evenly gap-3 p-4">
                  <a
                    href={project.codebtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-2 px-5 rounded-full text-center w-full"
                  >
                    Code
                  </a>
                  <a
                    href={project.previewbtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-2 px-5 rounded-full text-center w-full"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
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

export default Project;
