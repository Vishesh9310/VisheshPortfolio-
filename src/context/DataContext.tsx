import { createContext, type ReactNode, useContext } from "react";
import type { Experience, Education, Project, Certificate, Blog, Service, ColleageAchievement, ColleageFeedData } from "../types/dataTypes";
import { FaUserCheck } from 'react-icons/fa';
import { BiBarChartAlt, BiCodeAlt, BiPaint } from "react-icons/bi";

import project1 from '../assets/projects/blog-1.png'
import project2 from '../assets/projects/blog-2.png'
import project3 from '../assets/projects/blog-3.png'
import project4 from '../assets/projects/blog-4.png'
import project5 from '../assets/projects/blog-5.png'
import project6 from '../assets/projects/blog-6.png'
import project7 from '../assets/projects/blog-7.png'
import project8 from '../assets/projects/blog-8.png'
import project9 from '../assets/projects/blog-9.png'
import project10 from '../assets/projects/blog-10.png'

import LetsUpgradeCpp from '../assets/certificate/LetsUpgrade/LetsUpgradeC++.png'
import LetsUpgradeSQL from '../assets/certificate/LetsUpgrade/LetsUpgradeSQL.png'
import LetsUpgradePython from '../assets/certificate/LetsUpgrade/LetsUpgradePython.png'
import GreatLearningCSS from '../assets/certificate/GreatLearning/GreatLearningCSS.png'
import GreatLearningDS from '../assets/certificate/GreatLearning/GreatLearningDS.png'
import GreatLearningGraphics from '../assets/certificate/GreatLearning/GreatLearningGraphics.png'
import InfosysPython from '../assets/certificate/Infosys/InfosysPython.png'
import PostmanAPIProject from '../assets/certificate/Postman/PostmanAPIProject.png'
import PostmanApiStudent from '../assets/certificate/Postman/PostmanApiStudent.jpg'
import PostmanBadge from '../assets/certificate/Postman/PostmanBadge.png'
import CodingNinjaTricolor from '../assets/certificate/CodingNinja/CodingninjasTricolor.png'
import ForageGoldmanSachs from '../assets/certificate/Forage/GoldmanSachs.png'
import ForageJPMorganChaseCo from '../assets/certificate/Forage/JpmorganChase&Co.png'
import SimplilearnFrontend from '../assets/certificate/Simplilearn/SimplilearnFrontend.png'
import SimplilearnFullstack from '../assets/certificate/Simplilearn/IntroFullStack.png'
import PythonWorkshop from '../assets/certificate/workshop/Python.png'
import YBIFoundationAiInternship from '../assets/certificate/YBIFoundation/YBIInternship2week.png'
import YBIFoundationPythonInternship from '../assets/certificate/YBIFoundation/YBIPythonInternship1M.png'
import ElevateLabsInternship from '../assets/certificate/ElevateLabs/JavaInternshipElevateLabs.png'
import ElevateLabsOfferLetter from '../assets/certificate/ElevateLabs/JavaOfferLetterElevateLabs.png'
import HackerrankJava from '../assets/certificate/Hackerrank/HackerrankJava.png'
import HackerrankReact from '../assets/certificate/Hackerrank/HackerrankReact.png'
import IBMtechXchange from '../assets/certificate/IBM/IBMTechXchange.png'

import crshirt from '../assets/achievement/cr/ClassRepresentative.jpeg';
import hackathonimg1 from '../assets/achievement/hackathon/IMG20250916184234.jpg';
import techniaimg1 from '../assets/achievement/Technia2k25/IMG-20250916-WA0032.jpg';
import techniaimg3 from '../assets/achievement/Technia2k25/IMG20250417164324.jpg';
import techniaimg4 from '../assets/achievement/Technia2k25/IMG20250420082944.jpg';
import techniaimg5 from '../assets/achievement/Technia2k25/IMG20250813130501.jpg';
import techniaimg6 from '../assets/achievement/Technia2k25/techovation.jpg';
import techniaimg7 from '../assets/achievement/Technia2k25/techovationtrophy.jpg';
import tradefairimg1 from '../assets/achievement/tradefair/IMG20250927140521.jpg';
import tradefairimg2 from '../assets/achievement/tradefair/IMG20250927144001.jpg';
import tradefairimg3 from '../assets/achievement/tradefair/PDFGallery_20250927_184657_46.png';
import tradefairimg4 from '../assets/achievement/tradefair/Screenshot_2025-09-27-12-53-56-34_439a3fec0400f8974d35eed09a31f914.jpg';
import tv9img1 from '../assets/achievement/tv9/IMG20250328151127.jpg';
import tv9img2 from '../assets/achievement/tv9/IMG20250328165157.jpg';
import tv9img3 from '../assets/achievement/tv9/IMG20250328193511.jpg';
import volunteerimg1 from '../assets/achievement/volunteer/volunteer.jpeg';

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
  { id:1, name: "C++ BootCamp (Let's Upgrade)", img: LetsUpgradeCpp, desc: "", date: "18/06/2024 - 20/06/2024" },
  { id:2, name: "SQL BootCamp (Let's Upgrade)", img: LetsUpgradeSQL, desc: "", date: "11/06/2024 - 15/06/2024" },
  { id:3, name: "Python Workshop (Let's Upgrade)", img: LetsUpgradePython, desc: "Workshop on Data Visualization with Python of 3 Hours", date: "20/12/2025" },
  { id:4, name: "CSS Tutorial Certificate Of Completion (GreatLearning)", img: GreatLearningCSS, desc: "", date: "July-2024" },
  { id:5, name: "Data Structure in C Certificate Of Completion (GreatLearning)", img: GreatLearningDS, desc: "", date: "July-2024" },
  { id:6, name: "Visual Graphics in C Certificate Of Completion (GreatLearning)", img: GreatLearningGraphics, desc: "", date: "July-2024" },
  { id:7, name: "Python (Infosys)", img: InfosysPython, desc: "Course Completion Certificate of Basics Of Python", date: "17/07/2024" },
  { id:8, name: "AI Text Summarizer App Completion Certificate (Postman)", img: PostmanAPIProject, desc: "Successfully Completion Project 'AI Text Summarizer App' with Postman Student Programs", date: "25/06/2024" },
  { id:9, name: "API Fundamentals Student Expert (Postman)", img: PostmanApiStudent, desc: "", date: "23/06/2024" },
  { id:10, name: "Badge Of API Fundaments Student Expert Program", img: PostmanBadge, desc: "", date: "23/06/2024" },
  { id:11, name: "Certificate Of Achievement Tricolor CodeFest  (Coding Ninjas)", img: CodingNinjaTricolor, desc: "Certificate of Achievement 'Tricolor Code Fest' ", date: "4-Jan-2024 to 26-Jan-2024" },
  { id:12, name: "Software Engineering Job Simulation in Goldman Sachs (Forage)", img: ForageGoldmanSachs, desc: "", date: "27-June-2024" },
  { id:13, name: "Software Engineering Job Simulation in JPMorgan Chase & Co.", img: ForageJPMorganChaseCo, desc: "", date: "20-June-2024" },
  { id:14, name: "Front End Development: Introduction (Simplilearn)", img: SimplilearnFrontend, desc: "Certificate Of Completion Introducation to Frontend development, In this Program I learned All About Frontend like 'What is Frontend', 'How it is Works' etc.", date: "29-July-2024" },
  { id:15, name: "FullStack Development: Introduction (Simplilearn)", img: SimplilearnFullstack, desc: "", date: "26-July-2024" },
  { id:16, name: "Python Workshop (Lubix India Softtech Pvt Ltd)", img: PythonWorkshop, desc: "Certification Of Successfully Participated in Comprehensive Python Workshop Conducted By Lubix India Softech Pvt Ltd.", date: "29-Oct-23" },
  { id:17, name: "Ai and Data Skills Internship Cum Certificate (Ybi Foundation)", img: YBIFoundationAiInternship, desc: "Certification of Successfully Completed, Ai and Data Skills Internship Cum Certificate Program Duration: 2 weeks, Which is conducted by Ybi Foundation.", date: "23-June-2-24 '2 Weeks'" },
  { id:18, name: "Python Programming Internship (Ybi Foundation)", img: YBIFoundationPythonInternship, desc: "Certification in Python Programming Internship duration of 1 Month", date: "14-July-2024" },
  { id:19, name: "Java Developer Internship's Offer Letter (Elevate Labs)", img: ElevateLabsOfferLetter, desc: "", date: "23-June-2025" },
  { id:20, name: "Java Developer Internship Completion Certificate (Elevate Labs)", img: ElevateLabsInternship, desc: "", date: "23/06/2025 - 28-July-2025" },
  { id:21, name: "Certificate of Accomplishment in Java (Hackerrank)", img: HackerrankJava, desc: "", date: "30-June-2025" },
  { id:22, name: "Certificate of ACcomplishment in React (Hackerrank)", img: HackerrankReact, desc: "", date: "5-July-2025" },
  { id:23, name: "Certificate of Participation In IBM TechXchange Dev Day: AI & Automation Unpacked", img: IBMtechXchange, desc: "", date: "9-July-2025" },
  ];

//ColleageAchievement Section
const colleageAchievementData: ColleageAchievement[] = [
  { id: 1, name: "Class Representative", img: crshirt, desc: "", date: "" },
  { id: 2, name: "Hackathon", img: hackathonimg1, desc: "", date: "" },
  { id: 3, name: "Technia", img: techniaimg3, desc: "", date: "" },
  { id: 4, name: "Technia", img: techniaimg4, desc: "", date: "" },
  { id: 5, name: "Technia", img: techniaimg6, desc: "", date: "" },
  { id: 6, name: "Technia", img: techniaimg7, desc: "", date: "" },
  { id: 7, name: "Tradefair", img: tradefairimg4, desc: "", date: "" },
  { id: 8, name: "TV9", img: tv9img1, desc: "", date: "" },
  { id: 9, name: "Volunteer", img: volunteerimg1, desc: "", date: "" },
]

//FeedData Section
const feedData: ColleageFeedData[] = [
  { id: 1, name: "Class Representative", type:"image" ,media: crshirt, desc: "", date: "" },
  { id: 2, name: "Technia", type:"image" ,media: techniaimg1, desc: "", date: "" },
  { id: 3, name: "Technia", type:"image" ,media: techniaimg3, desc: "", date: "" },
  { id: 4, name: "Technia", type:"image" ,media: techniaimg5, desc: "", date: "" },
  { id: 5, name: "Technia", type:"image" ,media: techniaimg6, desc: "", date: "" },
  { id: 6, name: "Tradefair", type:"image" ,media: tradefairimg1, desc: "", date: "" },
  { id: 7, name: "Tradefair", type:"image" ,media: tradefairimg2, desc: "", date: "" },
  { id: 8, name: "Tradefair", type:"image" ,media: tradefairimg3, desc: "", date: "" },
  { id: 9, name: "Tradefair", type:"image" ,media: tradefairimg4, desc: "", date: "" },
  { id: 10, name: "TV9", type:"image" ,media: tv9img1, desc: "", date: "" },
  { id: 11, name: "TV9", type:"image" ,media: tv9img2, desc: "", date: "" },
  { id: 12, name: "TV9", type:"image" ,media: tv9img3, desc: "", date: "" },
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
  feedData: ColleageFeedData[];
  blogs: Blog[];
  serviceData: Service[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  return (
    <DataContext.Provider value={{ experience, education, projectData, certificationData, colleageAchievementData, feedData, blogs, serviceData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used inside DataProvider");
  return context;
};