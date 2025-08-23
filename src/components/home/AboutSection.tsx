import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { useLocation } from 'react-router-dom';
// import { PrimaryButton, SecondaryButton, DangerButton } from "../ui/Buttons";

const words = ["BCA Undergraduate", "Problem Solver", "Open Source Enthusiast"];

const AboutSection: React.FC = () => {
  const location = useLocation();
  const sectionRef = useRef<HTMLDivElement| null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      if (location.hash === "#about" || location.hash === "#skills") {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : 150, parseInt(String(Math.random() * 350))));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Cursor Blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/resume.pdf";
    link.download = "Vishesh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='h-fit bg-gradient-to-l to-black via-gray-800 from-black p-10'>
      <div className='lg:flex lg:justify-between'>
        <div className='font-bold space-y-4 w-full lg:w-2/3 lg:content-center text-center lg:text-left'>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Hi,<br /> I'm <span className='text-gray-400'>VISHESH</span></h2>
          <p className='text-3xl'><span className='text-gray-400'>Mern Stack</span> Developer</p>
          <motion.p
            className="text-xl md:text-3xl font-semibold h-10 mb-6  bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
          </motion.p>
          <div className="flex justify-center lg:justify-start space-x-6 text-gray-400 text-2xl">
            <a href="https://github.com/Vishesh9310" target="_blank" rel="noreferrer" className='hover:text-white'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/vishesh-b8a2b72a3" target="_blank" rel="noreferrer" className='hover:text-sky-500'><FaLinkedin /></a>
            <a href="https://www.instagram.com/sayme_vishesh/" target="_blank" rel="noreferrer" className='hover:text-pink-500'><FaInstagram /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className='hover:text-blue-300'><FaTwitter /></a>
          </div>
          <div className='flex justify-center lg:justify-start gap-5 pt-4'>
            <a href='/contact' className='bg-none border-2 border-gray-400 rounded-2xl px-3 py-1'>Contact Me</a>
            <button onClick={handleDownload} className='bg-gray-400 border-2 text-black border-gray-400 rounded-2xl px-3 py-1'>Get Resume</button>
          </div>
        </div>
        <div className='lg:w-1/2 sm:w-full lg:content-center sm:py-10 lg:pt-30 '>
          <img src={logo} alt="full stack developer" className="w-[300px] md:w-[500px] lg:w-[450px] xl:w-[500px] rounded-lg object-cover sm:mx-auto" />
        </div>
      </div>

      <div className="w-auto h-fit p-0.5 space-y-5 m-5 sm:m-10 lg:m-20 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
  <div
    ref={sectionRef}
    id="about"
    className="bg-gradient-to-l from-black via-gray-900 to-black h-fit p-6 sm:p-10 space-y-5 rounded-2xl w-auto"
  >
    <h2 className="text-2xl font-bold mb-10 sm:mb-20">About Me:</h2>

    {/* Responsive Container */}
    <div className="flex flex-col lg:flex-row justify-between gap-10">
      <p className="text-base sm:text-lg leading-relaxed lg:w-2/3">
        Hi, I'm a frontend developer currently pursuing a Bachelor of Computer
        Applications (BCA), driven by a passion for creating intuitive,
        responsive, and user-centric digital experiences. <br />
        <br />
        My journey into tech began with a deep interest in programming, where I
        built a strong foundation in C, C++, and Data Structures & Algorithms.
        Over time, I discovered my love for frontend development and honed my
        skills in HTML, CSS, Tailwind CSS, JavaScript, and React.js, enabling me
        to bring ideas to life through clean, efficient, and scalable code.{" "}
        <br />
        <br />
        I take pride in writing well-structured code and designing interfaces
        that are not only visually appealing but also accessible and
        performance-optimized. I'm also well-versed in MySQL and Relational
        Databases, giving me the ability to manage data effectively and
        integrate backend systems seamlessly. <br />
        <br />
        Beyond the screen, I enjoy solving algorithmic challenges and exploring
        modern design trends, always striving to learn, grow, and push the
        boundaries of what I can create. <br />
        <br />
        Let’s build something great together!
      </p>

      {/* Right Code Block */}
      <div className="bg-[#0d1021] p-4 sm:p-6 rounded-xl shadow-lg text-xs sm:text-sm font-mono w-full lg:w-1/3 border border-[#222] overflow-x-auto">
        <pre className="text-yellow-400 whitespace-pre-wrap">
          {`const coder = {
  name: 'Vishesh Chauhan',
  skills: ['React', 'TypeScript', 'Tailwind', 'Java',
   'Spring Boot', 'MySQL'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`}
        </pre>
      </div>
    </div>
  </div>
</div>


      {/* <section>| **About Me** | Timeline (education + experience), Skill charts, Tech stack badges          Hero Section (Top):
          Your Name (big, bold)
          Tagline/Role → “BCA Student | Full Stack Developer | Tech Enthusiast”
          A short 1-liner goal → “Passionate about building web apps with React & Java”
          CTA buttons → “View Projects” / “Contact Me”
          About Preview (small intro):
          3–4 lines about your journey, passion, and skills         <br />
          Why not About as main page?
          Recruiters/visitors first want a quick overview, not a long story.
          About page is good for details (your journey, education, etc.), but Home should grab attention.
          <br />          Then a “Read More” → About Page button                        | Recharts (skill charts), Context data handling                             |
        </section> 

         <section className="flex gap-4">
          <PrimaryButton label="Save" onClick={() => alert("Saved!")} />
          <SecondaryButton label="Cancel" onClick={() => alert("Cancelled!")} />
          <DangerButton label="Delete" onClick={() => alert("Deleted!")} />
        </section> 

         <section><div className="p-6 sm:p-12 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <p className="inline-flex gap-2 items-center">
                      <img src={img} alt="React Logo" className="h-6" />
                      <span>Frontend Developer</span>
                    </p>
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                      Transforming{' '}
                      <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text inline-block">
                        Ideas
                      </span>{' '}
                      into Seamless User{' '}
                      <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text inline-block">
                        Experiences
                      </span>
                    </h1>
                    <p className="text-lg sm:text-base lg:text-lg w-full lg:w-3/4">
                      I'm a Full Stack Software Engineer specializing in building modern web applications. Check out my projects and skills.
                    </p>
                    <button className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 px-6 py-3 rounded-lg">
                      Learn More
                    </button>
                  </div>
                </div>
        </section> */}
    </div>
  );
};

export default AboutSection;
