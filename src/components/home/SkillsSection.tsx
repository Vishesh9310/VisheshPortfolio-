import React from 'react'
import cp from '../../assets/c.png'
import cpp from '../../assets/cpp.png'
import dsa from '../../assets/hierarchical-structure.png'
import oops from '../../assets/oops.jpg'
import rdbms from '../../assets/rdbm.jpg'
import statis from '../../assets/statics.png'
import analyThink from '../../assets/analytical-skill.png'
import responsivedesign from '../../assets/rr.jpg'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiMysql, SiExpress, SiPostman, SiGit } from "react-icons/si";


const SkillsSection: React.FC = () => {
  {/* <section className='bg-slate-900 h-fit text-white p-10 space-y-5 m-20 rounded-2xl '>
          <h2 className='text-2xl font-bold'>About Me:</h2>
          <p className='text-lg'>Hi, I'm a frontend developer currently pursuing a Bachelor of Computer Applications (BCA), driven by a passion for creating intuitive, responsive, and user-centric digital experiences. <br /><br />
          My journey into tech began with a deep interest in programming, where I built a strong foundation in C, C++, and Data Structures & Algorithms. Over time, I discovered my love for frontend development and honed my skills in HTML, CSS, Tailwind CSS, JavaScript, and React.js, enabling me to bring ideas to life through clean, efficient, and scalable code. <br /><br />
          I take pride in writing well-structured code and designing interfaces that are not only visually appealing but also accessible and performance-optimized. I'm also well-versed in MySQL and Relational Databases, giving me the ability to manage data effectively and integrate backend systems seamlessly. <br /><br />
          Beyond the screen, I enjoy solving algorithmic challenges and exploring modern design trends, always striving to learn, grow, and push the boundaries of what I can create. <br /><br />
          Let’s build something great together!
          </p>
        </section> */}
  return (
      <div id='skills' className='bg-slate-950 h-fit text-white py-14 px-5 space-y-20'>
        <div className='text-center w-full'>
          <h2 className='text-6xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text w-fit mx-auto orbitron'>Skills</h2>
          <p className='w-full italic'>Crafting responsive websites and dynamic web apps with modern technologies. Let's build something amazing together!</p>
        </div>
        <div className='w-full space-y-20'>
          <h2 className='orbitron mx-auto font-bold italic text-lg tracking-[0.2em] border-b-2 w-fit border-white'>Frontend Development</h2>
          <div className='grid grid-cols-3 gap-x-5 gap-y-10 p-5 w-full place-items-center'>
            <div className=' text-center'>
              <FaHtml5 title="HTML" className='text-orange-600 mb-3 h-9 w-fit m-auto'/>
              <h2>HTML5</h2>
            </div>
            <div className=' text-center'>
              <FaCss3Alt title="CSS" className='text-sky-600 mb-3 h-9 w-fit m-auto'/>
              <h2>CSS3</h2>
            </div>
            <div className=' text-center'>
              <FaHtml5 title="HTML" className='text-orange-600 mb-3 h-9 w-fit m-auto'/>
              <h2>TailwindCSS</h2>
            </div>
            <div className=' text-center'>
              <FaJs title="JavaScript" className='text-yellow-300 mb-3 h-9 w-fit m-auto'/>
              <h2>JavaScript(ES6+)</h2>
            </div>
            <div className=' text-center'>
              <SiTypescript title="TypeScript" className='text-blue-500 mb-3 h-9 w-fit m-auto'/>
              <h2>TypeScript</h2>
            </div>
            <div className=' text-center'>
              <FaReact title="React" className='text-sky-300 mb-3 h-9 w-fit m-auto'/>
              <h2>React.js</h2>
            </div>
          </div>
        </div>

        <div className='w-full space-y-20'>
          <h2 className='orbitron mx-auto font-bold italic text-lg tracking-[0.2em] border-b-2 w-fit border-white'>Backend Development</h2>
          <div className='grid grid-cols-3 gap-x-5 gap-y-10 p-5 w-full place-items-center'>
            <div className=' text-center'>
              <FaNodeJs title="Node.js" className='text-green-600 mb-3 h-9 w-fit m-auto'/>
              <h2>HTML5</h2>
            </div>
            <div className=' text-center'>
              <SiExpress title="Express.js" className='text-green-800 mb-3 h-9 w-fit m-auto'/>
              <h2>CSS3</h2>
            </div>
            <div className=' text-center'>
              <SiPostman title="Postman" className='text-orange-500 mb-3 h-9 w-fit m-auto'/>
              <h2>JavaScript(ES6+)</h2>
            </div>
            <div className=' text-center'>
              <SiGit title="Git" className='text-red-500 mb-3 h-9 w-fit m-auto'/>
              <h2>TypeScript</h2>
            </div>
            <div className=' text-center'>
              <FaGithub title="GitHub"  className='text-white mb-3 h-9 w-fit m-auto'/>
              <h2>React.js</h2>
            </div>
          </div>
        </div>

        <div className='w-full space-y-20'>
          <h2 className='orbitron mx-auto font-bold italic text-lg tracking-[0.2em] border-b-2 w-fit border-white'>Programming Languages</h2>
          <div className='grid grid-cols-3 w-full gap-x-5 gap-y-10 p-5 place-items-center'>
            <div className=' text-center'>
              <img src={cp} alt="" className='mb-3 h-10 w-fit m-auto' />
              <h2>C Programming</h2>
            </div>
            <div className='text-center'>
              <img src={cpp} alt="" className='mb-3 h-10 w-fit m-auto' />
              <h2>C++ <br />(with a strong understanding of Object-Oriented Programming)</h2>
            </div>
            <div className=' text-center'>
              <FaJs title="JavaScript" className='text-yellow-300 mb-3 h-9 w-fit m-auto'/>
              <h2>JavaScript(ES6+)</h2>
            </div>
          </div>
        </div>

        <div className='w-full space-y-20'>
          <h2 className='orbitron mx-auto font-bold italic text-lg tracking-[0.2em] border-b-2 w-fit border-white'>Database Technologies</h2>
          <div className='grid grid-cols-3 w-full gap-x-5 gap-y-10 p-5 place-items-center'>
            <div className=' text-center'>
              <SiMysql title="MySQL" className='text-white mb-3 h-9 w-fit m-auto'/>
              <h2>MySQL</h2>
            </div>
            <div className='text-center'>
              <img src={rdbms} alt="" className='mb-3 h-10 w-fit m-auto' />
              <h2>RDBMS <br />(Relational Database Concepts)</h2>
            </div>
            <div className=' text-center'>
              <SiMongodb title="MongoDB"  className='text-green-800 mb-3 h-9 w-fit m-auto'/>
              <h2>MongoDB</h2>
            </div>
            
          </div>
        </div>

        <div className='w-full space-y-20'>
          <h2 className='orbitron mx-auto font-bold italic text-lg tracking-[0.2em] border-b-2 w-fit border-white'>Algorithms & Problem Solving</h2>
          <div className='grid grid-cols-2 w-full gap-x-5 gap-y-10 p-5 place-items-center'>
            <div className='text-center'>
              <img src={dsa} alt="" className='mb-3 h-10 w-fit m-auto' />
              <h2>DSA <br /> (Data Structures and Algorithms)</h2>
            </div>
            <div className='text-center'>
              <img src={oops} alt="" className='mb-3 h-10 w-fit m-auto' />
              <h2>OOPs <br /> (Object Oriented Programming)</h2>
            </div>
          </div>
        </div>

        <div className='w-full space-y-20'>
          <h2 className='orbitron mx-auto font-bold italic text-lg tracking-[0.2em] border-b-2 w-fit border-white'>Other Skills</h2>
          <div className='grid grid-cols-3 w-full gap-x-5 gap-y-10 p-5 place-items-center'>
            <div className='text-center'>
              <img src={statis} alt="" className='mb-3 h-10 w-fit m-auto' />
              <h2>Statistics <br /> (Fundamentals)</h2>
            </div>
            <div className='text-center'>
              <img src={analyThink} alt="" className='mb-3 h-10 w-fit m-auto' />
              <h2>Analytical Thinking</h2>
            </div>
            <div className='text-center'>
              <img src={responsivedesign} alt="" className='mb-3 h-10 w-fit m-auto' />
              <h2>Responsive Web Design</h2>
            </div>
          </div>
        </div>

      </div>
)};

export default SkillsSection