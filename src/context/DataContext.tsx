import { createContext, type ReactNode, useContext } from "react";
import { type Experience, type Education, type Project, type Certificate, type Blog, type Service } from "../types/dataTypes";

import { FaTools, FaUserAstronaut, FaUserCheck } from 'react-icons/fa';
import { FolderGit2, Mail } from 'lucide-react';
import img from '../assets/react.svg'
import certificate1 from '../assets/certificate/Screenshot (498).png'
import certificate2 from '../assets/certificate/Screenshot (499).png'
import certificate3 from '../assets/certificate/Screenshot (500).png'
import certificate4 from '../assets/certificate/Screenshot (501).png'
import certificate5 from '../assets/certificate/Screenshot (502).png'
import certificate6 from '../assets/certificate/Screenshot (503).png'
import certificate7 from '../assets/certificate/Screenshot (504).png'
import certificate8 from '../assets/certificate/Screenshot (505).png'
import certificate9 from '../assets/certificate/Screenshot (506).png'
import certificate10 from '../assets/certificate/Screenshot (507).png'
import certificate11 from '../assets/certificate/Screenshot (508).png'
import certificate12 from '../assets/certificate/Screenshot (509).png'
import certificate13 from '../assets/certificate/Screenshot (510).png'
import certificate14 from '../assets/certificate/Screenshot (511).png'
import certificate15 from '../assets/certificate/Screenshot (512).png'
import certificate16 from '../assets/certificate/Screenshot (513).png'
import certificate17 from '../assets/certificate/Postman - Postman API Fundamentals Student Expert - 2024-06-23.png'
import blog1 from '../assets/blogs/blog-1.png'
import blog2 from '../assets/blogs/blog-2.png'
import blog3 from '../assets/blogs/blog-3.png'
import blog4 from '../assets/blogs/blog-4.png'
import blog5 from '../assets/blogs/blog-5.png'
import blog6 from '../assets/blogs/blog-6.png'
import blog7 from '../assets/blogs/blog-7.png'
import blog8 from '../assets/blogs/blog-8.png'
import blog9 from '../assets/blogs/blog-9.png'
import blog10 from '../assets/blogs/blog-10.png'
import certificate18 from '../assets/certificate/postman.jpg'
import { BiBarChartAlt, BiCodeAlt, BiPaint } from "react-icons/bi";

//Static data
//Experience Section
const experience: Experience[] = [
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

//Education Section
const education: Education[] = [
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

//Project Section
const projectData: Project[] = [
  {
    img,
    heading: 'Emart',
    desc: 'E-Commerce ',
    about: 'A complete e-commerce platform built with React. It includes product listing, shopping cart, and checkout functionality with a clean and modern UI.',
    date: 'Jan 2024',
    codebtn: 'https://github.com/Vishesh9310/Emart',
    previewbtn: 'https://github.com/Vishesh9310/Emart',
  },
  {
    img,
    heading: 'Skill-Sync-Pro',
    desc: 'Skill Management & Career Growth Tracker',
    about: 'A productivity-first React app that combines Skill Tracking, Task Management, Project Portfolio, and Career Growth Monitoring in one clean, user-friendly platform.',
    date: 'Feb 2024',
    codebtn: 'https://github.com/Vishesh9310/Skill-Sync-Pro',
    previewbtn: 'https://github.com/Vishesh9310/Skill-Sync-Pro',
  },
  {
    img,
    heading: 'Sarthi',
    desc: 'Hospital Frontend Project',
    about: 'A full-fledged hospital management frontend built using React, offering appointment scheduling, doctor management, and patient records UI.',
    date: 'Mar 2024',
    codebtn: 'https://github.com/Vishesh9310/Sarthi2.0',
    previewbtn: 'https://github.com/Vishesh9310/Sarthi2.0',
  },
  {
    img,
    heading: 'COOS-Library',
    desc: 'E-Book Website',
    about: 'An online e-book reading and management website with search, categorization, and responsive design for better user experience.',
    date: 'Apr 2024',
    codebtn: 'https://github.com/Vishesh9310/e-book-website',
    previewbtn: 'https://github.com/Vishesh9310/e-book-website',
  },
];

//Certificate Section
const certificationData: Certificate[] = [
  { img: certificate1, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate2, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate3, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate4, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate5, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate6, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate7, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate8, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate9, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate10, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate11, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate12, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate13, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate14, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate15, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate16, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate17, desc: "hello vishesh", date: "20/12/2025" },
  { img: certificate18, desc: "hello vishesh", date: "20/12/2025" },
];

//Blog Section
const blogs: Blog[] = [
  {
    id: 1,
    img: blog1,
    cat: "webdev",
    title: "Getting Started with React + TypeScript",
    content: `
# React + TypeScript Guide
React with TypeScript improves **developer experience** and reduces bugs.
- Strong typing
- Better autocompletion
- Easier refactoring
    `,
    tags: ["react", "typescript"],
  },
  {
    id: 2,
    img: blog2,
    cat: "webdev",
    title: "Mastering TailwindCSS",
    content: `
# TailwindCSS for Fast UI
TailwindCSS is a utility-first CSS framework that makes styling much faster.
\`\`\`tsx
<div className="bg-blue-500 text-white p-4">Hello Tailwind!</div>
\`\`\`
    `,
    tags: ["css", "tailwind"],
  },
  {
    id: 3,
    img: blog3,
    cat: "webdev",
    title: "Understanding useEffect in React",
    content: `
# useEffect Hook
The **useEffect** hook lets you synchronize components with external systems like APIs.
    `,
    tags: ["react", "hooks"],
  },
  {
    id: 4,
    img: blog4,
    cat: "Database",
    title: "Dynamically Securing Databases using Hashicorp Vault",
    content: "Nowadays, it's hard to profoundly talk about security in the IT industry, since it has to be considered on so many different levels: from securing code chunks, securing containers, up to securing complex infrastructures and defining strong authorization and authentication policies across the enterprise.",
    tags: ["react", "hooks", "database, "],
  },
  {
    id: 5,
    img: blog5,
    cat: "webdev",
    title: "Understanding useEffect in React",
    content: `
# useEffect Hook
The **useEffect** hook lets you synchronize components with external systems like APIs.
    `,
    tags: ["react", "hooks"],
  },
  {
    id: 6,
    img: blog6,
    cat: "webdev",
    title: "Understanding useEffect in React",
    content: `
# useEffect Hook
The **useEffect** hook lets you synchronize components with external systems like APIs.
    `,
    tags: ["react", "hooks"],
  },
  {
    id: 7,
    img: blog7,
    cat: "webdev",
    title: "Understanding useEffect in React",
    content: `
# useEffect Hook
The **useEffect** hook lets you synchronize components with external systems like APIs.
    `,
    tags: ["react", "hooks"],
  },
  {
    id: 8,
    img: blog8,
    cat: "webdev",
    title: "Understanding useEffect in React",
    content: `
# useEffect Hook
The **useEffect** hook lets you synchronize components with external systems like APIs.
    `,
    tags: ["react", "hooks"],
  },
  {
    id: 9,
    img: blog9,
    cat: "webdev",
    title: "Understanding useEffect in React",
    content: `
# useEffect Hook
The **useEffect** hook lets you synchronize components with external systems like APIs.
    `,
    tags: ["react", "hooks"],
  },
  {
    id: 10,
    img: blog10,
    cat: "webdev",
    title: "Understanding useEffect in React",
    content: `
# useEffect Hook
The **useEffect** hook lets you synchronize components with external systems like APIs.
    `,
    tags: ["react", "hooks"],
  },
];

//Service Section
const serviceData: Service[] = [
  {
    img: BiCodeAlt,
    heading: 'Web Development',
    about:
      'We craft scalable and high-performance web applications tailored to your needs. From simple websites to complex enterprise platforms, our solutions ensure speed, security, and future-ready architecture.',
  },
  {
    img: BiBarChartAlt,
    heading: 'Digital Strategy',
    about:
      'We help you align technology with business goals. From market research to growth-driven roadmaps, our digital strategies empower brands to thrive in a competitive landscape with data-backed decisions.',
  },
  {
    img: FaUserCheck,
    heading: 'User Experience',
    about:
      'Our UX process focuses on clarity, simplicity, and engagement. By understanding user behavior, we design interfaces that are not only beautiful but also intuitive and conversion-driven.',
  },
  {
    img: BiPaint,
    heading: 'Web Design',
    about:
      'A website is more than visuals—it’s your digital identity. We create futuristic, responsive, and immersive designs that leave a lasting impression while maintaining usability across all devices.',
  },
];

interface DataContextType {
  experience: Experience[];
  education: Education[];
  projectData: Project[];
  certificationData: Certificate[];
  blogs: Blog[];
  serviceData: Service[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  return (
    <DataContext.Provider value={{ experience, education, projectData, certificationData, blogs, serviceData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used inside DataProvider");
  return context;
};