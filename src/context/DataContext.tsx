import { createContext, type ReactNode, useContext } from "react";
import type { Experience, Education, Project, Certificate, Blog, Service, ColleageAchievement } from "../types/dataTypes";
import { FaUserCheck } from 'react-icons/fa';
import { BiBarChartAlt, BiCodeAlt, BiPaint } from "react-icons/bi";

import project1 from '../assets/blogs/blog-1.png'
import project2 from '../assets/blogs/blog-2.png'
import project3 from '../assets/blogs/blog-3.png'
import project4 from '../assets/blogs/blog-4.png'
import project5 from '../assets/blogs/blog-5.png'
import project6 from '../assets/blogs/blog-6.png'
import project7 from '../assets/blogs/blog-7.png'
import project8 from '../assets/blogs/blog-8.png'
import project9 from '../assets/blogs/blog-9.png'
import project10 from '../assets/blogs/blog-10.png'

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
import certificate15 from '../assets/certificatte/Screenshot (511).png'
import certificate16 from '../assets/certificate/Screenshot (513).png'
import certificate17 from '../assets/certificate/postman api certificate/Postman - Postman API Fundamentals Student Expert - 2024-06-23.png'
import certificate18 from '../assets/certificate/postman.jpg'

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

//Static data
//Experience Section
const experience: Experience[] = [
  {
    role: "Java Developer Intern",
    company: "Elevate Labs",
    duration: "June 2025- July 2025",
    description:
      "Enhanced analytical and problem-solving abilities through backend development tasks. Gained hands-on experience in Java, JDBC, SQL and backend best practices.",
  },
  {
    role: "Software Engineer",
    company: "Accenture (Forage)",
    duration: "June 2025",
    description:
      "Gained exposure to architecture, security, agile methodology, testing, and software development practices.",
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
    duration: '2023 - Current',
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
    id: 1,
    img: project1,
    heading: 'NotesApp with ejs',
    desc: "This NotesApp project implements a note-taking system with a clean, dynamic UI rendered using EJS, backed by Express routes and MongoDB for persistence. Users can create, read, update, and delete notes through intuitive pages. The application’s structure includes configuration files, Mongoose models to define the Note schema, routing logic in Express, and public/static assets for styling and images. It’s intended as a learning tool for server-side rendering, database integration, and full-stack JavaScript development.",
    about: 'NotesApp is a server-rendered web application built with Node.js, Express.js, EJS templates, and MongoDB (via Mongoose) that lets users manage their notes. It demonstrates full-stack fundamentals in a simpler CRUD context, highlighting how to build templated web pages, connect to a database, and handle routing and server logic.',
    date: '2025-08-24',
    codebtn: 'https://github.com/Vishesh9310/NotesApp-ejs-node-express-mongoose-',
    previewbtn: 'https://github.com/Vishesh9310/NotesApp-ejs-node-express-mongoose-',
  },
  {
    id: 2,
    img: project2,
    heading: 'Emart',
    desc: 'This project implements a full-stack e-commerce web application with a focus on authentication, product management, and secure access control. Using Express.js for backend logic and MongoDB with Mongoose for data storage, it manages user accounts and product inventory seamlessly. Features include signup, login, and logout for users, while the admin has exclusive privileges to add, edit, and delete products. Session handling is managed via express-session, with flash messages for feedback and cookie parsing for secure state management. The frontend is rendered with EJS templates, styled with custom assets, and structured for reusability. This project lays the foundation for building advanced e-commerce platforms with features like carts, payments, and order management.',
    about: 'The E-Mart App is a simple yet functional e-commerce platform built with Node.js, Express.js, MongoDB, and EJS templates. It supports user authentication and role-based access control, where only the admin (owner) can create, update, and delete products, while regular users are restricted to viewing items. Designed with learning and scalability in mind, the project demonstrates core concepts of backend development, authentication, session handling, and database integration in a real-world scenario.',
    date: '2025-08-16',
    codebtn: 'https://github.com/Vishesh9310/Emart',
    previewbtn: 'https://github.com/Vishesh9310/Emart',
  },
  {
    id: 3,
    img: project3,
    heading: 'Skill-Sync-Pro',
    desc: 'A productivity-first React app that combines Skill Tracking, Task Management, Project Portfolio, and Career Growth Monitoring in one clean, user-friendly platform.',
    about: 'Skill Management & Career Growth Tracker',
    date: '2025-08-03',
    codebtn: 'https://github.com/Vishesh9310/Skill-Sync-Pro',
    previewbtn: 'https://github.com/Vishesh9310/Skill-Sync-Pro',
  },
  {
    id: 4,
    img: project4,
    heading: "RESTful BookStore Api Backend",
    desc: "This project provides a fully functional RESTful API for managing bookstore data. It defines Book and Author entities, exposes endpoints via @RestController, and uses Spring Data JPA with H2 Database for persistence. Core features include adding, updating, deleting, and retrieving books and authors, along with advanced capabilities such as filtering records, paginating large datasets, and sorting results. The API is tested using Postman, and documentation is provided through Swagger UI for easy exploration and integration. By combining clean architecture with powerful Spring Boot features, this project serves as a practical guide to building real-world RESTful services in Java.",
    about: "The RESTful Bookstore API is a backend application developed using Java and Spring Boot that manages books and authors in a structured and scalable way. It demonstrates how to build professional-grade REST APIs with features like CRUD operations, filtering, pagination, sorting, and API documentation. Designed as a learning and showcase project, it highlights best practices in modern backend development with Spring Boot.",
    date: '2025-07-15',
    codebtn: "https://github.com/Vishesh9310/RESTful-Bookstore-API-Java",
    previewbtn: "https://github.com/Vishesh9310/RESTful-Bookstore-API-Java",
  },
  {
    id: 5,
    img: project5,
    heading: 'Library Management System',
    desc: 'This project is built using core Java and OOP concepts like classes, objects, and methods. It includes a Book class to manage book properties, a User class for handling library members, and a central Library class that implements the main logic for adding books, registering users, issuing, and returning books. The system runs in the terminal with a menu-driven interface, allowing users to interact easily through options. By focusing on real-world scenarios, this project not only reinforces programming fundamentals but also builds problem-solving and system design skills using Java.',
    about: 'The Library Management System is a simple command-line based project developed in Java to demonstrate the practical use of Object-Oriented Programming (OOP). It allows management of books and users within a library, covering real-world operations such as issuing, returning, and tracking the availability of books. This project serves as a hands-on way to strengthen OOP fundamentals while simulating how library systems work in real life.',
    date: '2025-06-26',
    codebtn: 'https://github.com/Vishesh9310/Library-Management-System-Using-OOP-',
    previewbtn: 'https://github.com/Vishesh9310/Library-Management-System-Using-OOP-'
  },
  {
    id: 6,
    img: project6,
    heading: 'Skill Tracking App',
    desc: "SkillSync allows users to manage their personal skill growth journey by adding new skills with details like name, proficiency level, priority, and planned date. It features a centralized skill list for easy viewing and updating, along with dynamic filtering based on the current day of the week. The app highlights practical React implementations, including controlled forms, conditional rendering, list rendering, and client-side routing with React Router DOM. With a well-structured project architecture and a responsive design, SkillSync demonstrates how modern frontend tools can be combined to create a professional and user-friendly application. Future plans include backend integration, a calendar for reminders, graph-based progress visualization, and theme toggling for a richer user experience.",
    about: 'SkillSync is a React + TypeScript-based skill management application built to streamline how users track, organize, and improve their skills. With a clean and responsive UI powered by Tailwind CSS, it provides an interactive platform where users can add, update, and filter their skills effortlessly. The project emphasizes core React concepts such as state management, component communication, routing, and global state handling using Context API with useReducer. Designed with scalability and best practices in mind, SkillSync is both a practical learning project and a showcase of modern frontend development techniques. ',
    date: '2025-06-08',
    codebtn: 'https://github.com/Vishesh9310/Skill-Tracking-React-TypeScript',
    previewbtn: 'https://github.com/Vishesh9310/Skill-Tracking-React-TypeScript',
  },
  {
    id: 7,
    img: project7,
    heading: 'KeepNotes',
    desc: "hello",
    about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, mollitia.',
    date: '2025-04-19',
    codebtn: 'https://github.com/Vishesh9310/KeepNotes',
    previewbtn: 'https://github.com/Vishesh9310/KeepNotes',
  },
  {
    id: 8,
    img: project8,
    heading: 'Sarthi',
    desc: 'Hospital Frontend Project',
    about: 'A full-fledged hospital management frontend built using React, offering appointment scheduling, doctor management, and patient records UI.',
    date: '2025-04-04',
    codebtn: 'https://github.com/Vishesh9310/Sarthi2.0',
    previewbtn: 'https://github.com/Vishesh9310/Sarthi2.0',
  },
  {
    id: 9,
    img: project9,
    heading: 'E-Book website',
    desc: "This project focuses on building the UI and navigation flow of an educational web app using reusable React components and client-side routing with React Router DOM. The interface includes a home page, e-book/notes listings, and roadmap sections, all styled with Tailwind CSS to ensure responsiveness across devices. While it currently functions as a frontend-only project, it sets the foundation for future enhancements such as backend integration, search functionality, and user authentication. With its structured layout and student-centered purpose, the E-Book Web App demonstrates how modern frontend technologies can be combined to create meaningful, goal-oriented digital solutions.",
    about: "The E-Book Web App is a frontend project designed to make learning resources more accessible for students. Built with React.js, CSS3, and Tailwind CSS, it provides a clean and user-friendly interface where learners can explore free e-books, study notes, and career roadmaps. The primary goal of this project is to support students who may struggle to find relevant study material or afford costly resources, by offering an open and responsive digital platform.",
    date: '2024-11-24',
    codebtn: 'https://github.com/Vishesh9310/e-book-website',
    previewbtn: 'https://github.com/Vishesh9310/e-book-website',
  },
  {
    id: 10,
    img: project10,
    heading: 'Calculator',
    desc: "This project demonstrates the implementation of a fully functional calculator using vanilla JavaScript for logic, HTML5 for structure, and CSS3 for styling. The calculator supports decimal inputs, includes useful operations such as AC (All Clear) and DEL (Delete), and is enhanced with hover effects for a smooth user experience. It is styled using CSS Grid and Flexbox, ensuring responsiveness and neat alignment. Beyond being a working calculator, this project highlights key frontend skills such as DOM manipulation, event handling, and UI interaction design. It serves as a foundational project for practicing real-world UI development without external libraries.",
    about: 'The Basic Calculator Web App is a simple yet effective tool built using HTML, CSS, and JavaScript. It is designed to perform essential arithmetic operations like addition, subtraction, multiplication, division, and percentage calculations. With a clean interface and responsive layout, the calculator provides an easy-to-use experience across devices, making it both practical and beginner-friendly.',
    date: '2024-07-20',
    codebtn: 'https://github.com/Vishesh9310/CodeAlpha_Calculator',
    previewbtn: 'https://github.com/Vishesh9310/CodeAlpha_Calculator',
  },
];

//Certificate Section
const certificationData: Certificate[] = [
  { id:1, name: "hello", img: certificate1, desc: "hello vishesh", date: "20/12/2025" },
  { id:2, name: "hello", img: certificate2, desc: "hello vishesh", date: "20/12/2025" },
  { id:3, name: "hello", img: certificate3, desc: "hello vishesh", date: "20/12/2025" },
  { id:4, name: "hello", img: certificate4, desc: "hello vishesh", date: "20/12/2025" },
  { id:5, name: "hello", img: certificate5, desc: "hello vishesh", date: "20/12/2025" },
  { id:6, name: "hello", img: certificate6, desc: "hello vishesh", date: "20/12/2025" },
  { id:7, name: "hello", img: certificate7, desc: "hello vishesh", date: "20/12/2025" },
  { id:8, name: "hello", img: certificate8, desc: "hello vishesh", date: "20/12/2025" },
  { id:9, name: "hello", img: certificate9, desc: "hello vishesh", date: "20/12/2025" },
  { id:10, name: "hello", img: certificate10, desc: "hello vishesh", date: "20/12/2025" },
  { id:11, name: "hello", img: certificate11, desc: "hello vishesh", date: "20/12/2025" },
  { id:12, name: "hello", img: certificate12, desc: "hello vishesh", date: "20/12/2025" },
  { id:13, name: "hello", img: certificate13, desc: "hello vishesh", date: "20/12/2025" },
  { id:14, name: "hello", img: certificate14, desc: "hello vishesh", date: "20/12/2025" },
  { id:15, name: "hello", img: certificate15, desc: "hello vishesh", date: "20/12/2025" },
  { id:16, name: "hello", img: certificate16, desc: "hello vishesh", date: "20/12/2025" },
  { id:17, name: "hello", img: certificate17, desc: "hello vishesh", date: "20/12/2025" },
  { id:18, name: "hello", img: certificate18, desc: "hello vishesh", date: "20/12/2025" },
];

//ColleageAchievement Section
const colleageAchievementData: ColleageAchievement[] = [
  { id:1, name: "hello", img: certificate1, desc: "hello vishesh", date: "20/12/2025" },
  { id:2, name: "hello", img: certificate2, desc: "hello vishesh", date: "20/12/2025" },
  { id:3, name: "hello", img: certificate3, desc: "hello vishesh", date: "20/12/2025" },
  { id:4, name: "hello", img: certificate4, desc: "hello vishesh", date: "20/12/2025" },
  { id:5, name: "hello", img: certificate5, desc: "hello vishesh", date: "20/12/2025" },
  { id:6, name: "hello", img: certificate6, desc: "hello vishesh", date: "20/12/2025" },
  { id:7, name: "hello", img: certificate7, desc: "hello vishesh", date: "20/12/2025" },
  { id:8, name: "hello", img: certificate8, desc: "hello vishesh", date: "20/12/2025" },
  { id:9, name: "hello", img: certificate9, desc: "hello vishesh", date: "20/12/2025" },
  { id:10, name: "vishesh", img: certificate10, desc: "hello ", date: "20/12/2025" },
]
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
  colleageAchievementData: ColleageAchievement[];
  blogs: Blog[];
  serviceData: Service[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  return (
    <DataContext.Provider value={{ experience, education, projectData, certificationData, colleageAchievementData, blogs, serviceData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used inside DataProvider");
  return context;
};