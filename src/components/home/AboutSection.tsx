import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '../../assets/me/me half.jpg'
import { useLocation } from 'react-router-dom';
import Vishesh_Resume from '../../assets/resume/Vishesh 2023-26.pdf'

const words = ["BCA Undergraduate", "Problem Solver", "Open Source Enthusiast"];

const AboutSection: React.FC = () => {
  const location = useLocation();
  const sectionRef = useRef<HTMLDivElement | null>(null);

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
    link.href = Vishesh_Resume;
    link.download = "Vishesh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='h-fit service-body p-[5%] pt-14'>
      <div className='lg:flex lg:justify-between'>
        <div className='font-bold space-y-4 w-full lg:w-2/3 lg:content-center text-center lg:text-left'>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Hi,<br /> I'm <span className='text-main'>VISHESH</span></h2>
          <p className='text-3xl'><span className='text-main'>Software</span> Developer</p>
          <motion.p
            className="text-xl md:text-3xl font-semibold h-10 mb-6  bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
          </motion.p>
          <div className="flex justify-center lg:justify-start space-x-6 text-main text-2xl">
            <a href="https://github.com/Vishesh9310" target="_blank" rel="noreferrer" className='hover:text-white'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/vishesh-b8a2b72a3" target="_blank" rel="noreferrer" className='hover:text-sky-500'><FaLinkedin /></a>
            <a href="https://www.instagram.com/sayme_vishesh/" target="_blank" rel="noreferrer" className='hover:text-pink-500'><FaInstagram /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className='hover:text-blue-300'><FaTwitter /></a>
          </div>
          <div className='flex justify-center lg:justify-start gap-5 pt-4'>
            <a href='/contact' className='bg-none border-2 text-main  rounded-2xl px-3 py-1'>Contact Me</a>
            <button onClick={handleDownload} className='bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-2xl px-3 py-1'>Get Resume</button>
          </div>
        </div>
        <div className='lg:w-1/2 sm:w-full lg:content-center sm:py-10 lg:pt-30'>
          <img src={logo} alt="full stack developer" className="w-[300px] md:w-[500px] lg:w-[450px] xl:w-[500px] rounded-4xl object-cover sm:mx-auto" />
        </div>
      </div>

      <div className="w-auto h-fit p-0.5 space-y-5 m-5 sm:m-5 lg:m-20 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
        <div
          ref={sectionRef}
          id="about"
          className="about-me-body h-fit p-6 sm:p-10 space-y-5 rounded-2xl w-auto"
        >
          <h2 className="text-2xl font-bold mb-10 sm:mb-20">About Me:</h2>

          {/* Responsive Container */}
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <p className="text-base sm:text-lg leading-relaxed lg:w-2/3">
              Hi, I'm an aspiring <strong>Full-Stack Developer</strong> and a BCA student,
              focused on building <strong>responsive and user-friendly</strong> web applications.
              I enjoy solving problems and turning ideas into complete digital products. <br /><br />

              I have a strong foundation in <strong>Data Structures, Algorithms, C, and C++</strong>,
              which helps me write efficient and reliable code. I specialize in the
              <strong> React.js</strong> ecosystem for frontend development, styled with
              utility-first <strong>Tailwind CSS</strong>. My backend skills include
              server-side development with <strong>Node.js</strong> and working with
              <strong> MySQL, relational databases</strong> and <strong> MongoDB </strong>. <br /><br />

              My goal is to write clean, scalable, and performance-optimized code on both
              the client and server sides to ensure a seamless user experience. <br /><br />

              Let’s connect and explore how my full-stack skills can contribute to your next project!
            </p>


            {/* Right Code Block */}
            <div className="code-box p-4 sm:p-6 rounded-xl shadow-lg text-xs sm:text-sm font-mono w-full lg:w-1/3 border border-[#222] overflow-x-auto">
              <pre className="code-box whitespace-pre-wrap">
                {`const coder = {
  name: 'Vishesh',
  skills: ['React', 'TypeScript', 'Tailwind', 'Java',
  'Javascript', 'Node.js', 'Express.js', 'Spring Boot', 'MySQL', 'MongoDB'],
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
    </div>
  );
};

export default AboutSection;
