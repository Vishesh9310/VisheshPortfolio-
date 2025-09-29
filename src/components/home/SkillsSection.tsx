import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaJava, FaObjectGroup } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiMysql, SiExpress, SiPostman, SiGit, SiTailwindcss, SiSpring, SiCplusplus, SiC, SiJavascript, SiLeetcode } from "react-icons/si";
import { MdMemory, MdSmartphone } from 'react-icons/md'
import { BiBrain } from 'react-icons/bi'
import { AiOutlineBarChart } from 'react-icons/ai'


const SkillsSection: React.FC = () => {

  return (
    <div id='skills' className='skills-body h-fit py-14 px-5 space-y-20'>
      <div className='text-center w-full'>
        <h2 className='text-6xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text w-fit mx-auto orbitron mb-4'>Skills</h2>
        <p className='w-full italic'>Crafting responsive websites and dynamic web apps with modern technologies. Let's build something amazing together!</p>
      </div>
      <div className='w-full space-y-20'>
        <h2 className='orbitron mx-auto font-bold italic text-lg tracking-[0.2em] border-b-2 w-fit '>Frontend Development</h2>
        <div className='grid p-3 grid-cols-4 gap-x-5 gap-y-10 w-full place-items-center'>
          <div className=' text-center'>
            <FaHtml5 title="HTML" className='text-orange-600 mb-3 h-9 w-fit m-auto' />
            <h2>HTML5</h2>
          </div>
          <div className=' text-center'>
            <FaCss3Alt title="CSS" className='text-sky-600 mb-3 h-9 w-fit m-auto' />
            <h2>CSS3</h2>
          </div>
          <div className=' text-center'>
            <SiJavascript title="JavaScript" className='text-yellow-300 mb-3 h-8 w-fit m-auto' />
            <h2>JavaScript(ES6+)</h2>
          </div>
          <div className=' text-center'>
            <FaReact title="React" className='text-sky-300 mb-3 h-9 w-fit m-auto' />
            <h2>React.js</h2>
          </div>
          <div className=' text-center'>
            <SiTailwindcss title="HTML" className='text-sky-600 mb-3 h-9 w-fit m-auto' />
            <h2>TailwindCSS</h2>
          </div>
          <div className=' text-center'>
            <SiTypescript title="TypeScript" className='text-blue-500 mb-3 h-8 w-fit m-auto' />
            <h2>TypeScript</h2>
          </div>
        </div>
      </div>

      <div className='w-full space-y-20'>
        <h2 className='orbitron mx-auto font-bold italic text-lg tracking-[0.2em] border-b-2 w-fit'>Backend Development</h2>
        <div className='grid p-3 grid-cols-4 gap-x-5 gap-y-10 w-full place-items-center'>
          <div className=' text-center'>
            <FaNodeJs title="Node.js" className='text-green-600 mb-3 h-9 w-fit m-auto' />
            <h2>NodeJs</h2>
          </div>
          <div className=' text-center'>
            <SiExpress title="Express.js" className='text-green-800 mb-3 h-9 w-fit m-auto' />
            <h2>ExpressJs</h2>
          </div>
          <div className=' text-center'>
            <SiSpring title="JavaScript" className='text-green-400 mb-3 h-9 w-fit m-auto' />
            <h2>Spring</h2>
          </div>
          <div className=' text-center'>
            <SiPostman title="Postman" className='text-orange-500 mb-3 h-9 w-fit m-auto' />
            <h2>Postman</h2>
          </div>
          <div className=' text-center'>
            <SiGit title="Git" className='text-red-500 mb-3 h-9 w-fit m-auto' />
            <h2>Git</h2>
          </div>
          <div className=' text-center'>
            <FaGithub title="GitHub" className='text-white mb-3 h-9 w-fit m-auto' />
            <h2>Github</h2>
          </div>
        </div>
      </div>

      <div className='w-full space-y-20'>
        <h2 className='orbitron mx-auto font-bold italic text-lg tracking-[0.2em] border-b-2 w-fit'>Database Technologies</h2>
        <div className='grid p-3 grid-cols-3 w-full gap-x-5 gap-y-10 place-items-center'>
          <div className=' text-center'>
            <SiMysql title="MySQL" className='text-white mb-3 h-9 w-fit m-auto' />
            <h2>MySQL</h2>
          </div>
          <div className=' text-center'>
            <FaObjectGroup title="MongoDB" className='text-white mb-3 h-9 w-fit m-auto' />
            <h2>RDBMS</h2>
          </div>
          <div className=' text-center'>
            <SiMongodb title="MongoDB" className='text-green-800 mb-3 h-9 w-fit m-auto' />
            <h2>MongoDB</h2>
          </div>
        </div>
      </div>

      
      <div className='w-full space-y-20'>
        <h2 className='orbitron mx-auto font-bold italic text-lg tracking-[0.2em] border-b-2 w-fit'>Programming Languages</h2>
        <div className='grid p-3 grid-cols-4 w-full gap-x-5 gap-y-10 place-items-center'>
          <div className=' text-center'>
            <SiC title="C" className='text-white mb-3 h-8 w-fit m-auto' />
            <h2>C Programming</h2>
          </div>
          <div className=' text-center'>
            <SiCplusplus title="JavaScript" className='text-sky-200 mb-3 h-9 w-fit m-auto' />
            <h2>C++</h2>
          </div>
          <div className=' text-center'>
            <FaJs title="JavaScript" className='text-yellow-300 mb-3 h-9 w-fit m-auto' />
            <h2>JavaScript(ES6+)</h2>
          </div>
          <div className=' text-center'>
            <FaJava title="JavaScript" className='text-yellow-300 mb-3 h-9 w-fit m-auto' />
            <h2>Java</h2>
          </div>
        </div>
      </div>

      <div className='w-full space-y-20'>
        <h2 className='orbitron mx-auto font-bold italic text-lg tracking-[0.2em] border-b-2 w-fit'>Algorithms & Problem Solving</h2>
        <div className='grid p-3 grid-cols-2 w-full gap-x-5 gap-y-10 place-items-center'>
          <div className=' text-center'>
            <SiLeetcode title="MongoDB" className='text-yellow-200 mb-3 h-9 w-fit m-auto' />
            <h2>DSA <br />(Date Structure and Algorithm) </h2>
          </div>
          <div className=' text-center'>
            <MdMemory title="MongoDB" className='text-pink-400 mb-3 h-9 w-fit m-auto' />
            <h2>OOPs <br />(Object Oriented Programming)</h2>
          </div>
        </div>
      </div>

      <div className='w-full space-y-20'>
        <h2 className='orbitron mx-auto font-bold italic text-lg tracking-[0.2em] border-b-2 w-fit'>Other Skills</h2>
        <div className='grid p-3 grid-cols-3 w-full gap-x-5 gap-y-10 place-items-center'>
          <div className=' text-center'>
            <AiOutlineBarChart title="MongoDB" className='text-yellow-200 mb-3 h-9 w-fit m-auto' />
            <h2>Statistics <br />(Fundamental)</h2>
          </div>
          <div className=' text-center'>
            <BiBrain title="MongoDB" className='text-pink-400 mb-3 h-9 w-fit m-auto' />
            <h2>Analytical Thinking</h2>
          </div>
          <div className=' text-center'>
            <MdSmartphone title="MongoDB" className='text-pink-400 mb-3 h-9 w-fit m-auto' />
            <h2>Responsive Web Design</h2>
          </div>
        </div>
      </div>

    </div>
  )
};

export default SkillsSection