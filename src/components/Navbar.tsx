import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaDashcube } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [showDiv, setShowDiv] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Apply theme whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll to section or navigate
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  return (
    <nav className="fixed top-0 left-0 w-full h-fit bg-[#1b1b1b11] backdrop-blur z-50">
      <div className="flex justify-between items-center h-14 px-[5%] shadow-md">
        <h1 className="orbitron font-bold italic text-2xl">Vishesh.</h1>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-8">
            {["about", "skills", "project"].map(section => (
              <li key={section}>
                <a href={`#${section}`} onClick={(e) => handleNavClick(e, section)} className="hover:text-violet-600">
                   {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <NavLink to="/contact" className="hover:text-violet-600">Contact</NavLink>
            </li>
            <li>
              <button onClick={toggleTheme}>
                {theme === "light" ? <FaMoon className="hover:text-violet-600" /> : <FaSun className="hover:text-violet-600" />}
              </button>
            </li>
          </ul>

          <FaDashcube
            className="md:hidden text-white text-xl cursor-pointer"
            onClick={() => setShowDiv(prev => !prev)}
          />
        </div>
      </div>

      {showDiv && (
        <div className="md:hidden text-xl px-[10%] space-y-3">
          {["about", "skills", "project"].map(section => (
            <a key={section} href={`#${section}`} onClick={(e) => handleNavClick(e, section)} className="block hover:text-violet-600">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <NavLink to="/contact" className="block hover:text-violet-600">Contact</NavLink>
          <button onClick={toggleTheme}>
            {theme === "light" ? <FaMoon className="hover:text-violet-600" /> : <FaSun className="hover:text-violet-600" />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


// import { useEffect, useState } from "react";
// import { FaSun, FaMoon, FaDashcube } from "react-icons/fa";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";

// const Navbar: React.FC = () => {
//   // const [theme, setTheme] = useState("light");
//   const [theme, setTheme] = useState(() => {
//     return localStorage.getItem("theme") || "light";
//   });

//   const [showDiv, setShowDiv] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleNavClick = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     sectionId: string
//   ) => {
//     e.preventDefault();
//     if (location.pathname === "/") {
//       const section = document.getElementById(sectionId);
//       if (section) section.scrollIntoView({ behavior: "smooth" });
//     } else {
//       navigate(`/#${sectionId}`);
//     }
//   };

//   // useEffect(() => {
//   //   document.documentElement.setAttribute("data-theme", theme);
//   //   localStorage.setItem("theme", theme);
//   // }, [theme]);

//   useEffect(() => {
//     // Apply theme from localStorage on mount
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme);
//     document.documentElement.setAttribute("data-theme", savedTheme);

//     // Listen for browser back/forward
//     const handlePopState = () => {
//       const currentTheme = localStorage.getItem("theme") || "light";
//       setTheme(currentTheme);
//       document.documentElement.setAttribute("data-theme", currentTheme);
//     };

//     window.addEventListener("popstate", handlePopState);

//     return () => {
//       window.removeEventListener("popstate", handlePopState);
//     };
//   }, []);

//   // const toggleTheme = () => {
//   //   setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   // };

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//   };


//   return (
//     <nav className="h-fit w-full bg-[#1b1b1b11] top-0 left-0 fixed z-50 backdrop-blur">
//       <div className=" shadow-md h-14 flex justify-between items-center px-[5%]">
//         <h1 className="font-bold italic text-2xl orbitron">Vishesh.</h1>
//         <div className="flex justify-between items-center px-6 ">
//           {/* Navlinks → hidden on small screens, visible from md and above */}
//           <ul className="hidden md:flex gap-8 w-full">
//             <li><a onClick={(e) => handleNavClick(e, "about")} href="#about" className="hover:text-violet-600 ">  About</a></li>
//             <li><a onClick={(e) => handleNavClick(e, "skills")} href="#skills" className="hover:text-violet-600 ">  Skills</a></li>
//             <li><a onClick={(e) => handleNavClick(e, "project")} href="#projects" className="hover:text-violet-600 ">  Projects</a></li>
//             <li><NavLink to="/contact" className="hover:text-violet-600 ">  Contact</NavLink></li>
//             <li><button onClick={toggleTheme}>  {theme === "light" ? (<FaMoon className="hover:text-violet-600" />) : (<FaSun className="hover:text-violet-600" />)}</button></li>
//           </ul>

//           <FaDashcube className="md:hidden text-white text-xl cursor-pointer" onClick={() => setShowDiv((prev) => !prev)} />
//         </div>
//       </div>
//       {showDiv && (
//         <div className="md:hidden text-xl cursor-pointer">
//           <ul className="px-[10%] space-y-3">
//             <li><a onClick={(e) => handleNavClick(e, "about")} href="#about" className="hover:text-violet-600">  About</a></li>
//             <li><a onClick={(e) => handleNavClick(e, "skills")} href="#skills" className="hover:text-violet-600">  Skills</a></li>
//             <li><a onClick={(e) => handleNavClick(e, "project")} href="#projects" className="hover:text-violet-600">  Projects</a></li>
//             <li><NavLink to="/contact" className="hover:text-violet-600 ">  Contact</NavLink></li>
//             <li><button onClick={toggleTheme}>  {theme === "light" ? (<FaMoon className="hover:text-violet-600" />) : (<FaSun className="hover:text-violet-600" />)}</button></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

